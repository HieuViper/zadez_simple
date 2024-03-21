"use client";
import { useSWRData } from "@/library/api";
import store from "@/library/zustand/store";
import { Button, Popconfirm, Table, Tag, message } from "antd";
import axios from "axios";

const OrderHistory = () => {
  const { userState } = store();
  const { data: customerData, isLoading: loadingCustomerData } = useSWRData(
    `/api/customers`,
    {
      keyword: userState?.phoneNumber,
    }
  );
  console.log("🚀 ~ OrderHistory ~ customerData:", customerData);
  const { data, mutate, isLoading } = useSWRData(
    loadingCustomerData
      ? ""
      : `/api/orders/get-by-customers/${customerData.data[0].id}`
  );
  console.log("🚀 ~ OrderHistory ~ data:", data);

  const columns = [
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Ngày mua",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (item) => <span>{new Date(item).toLocaleString("en-us")}</span>,
    },
    {
      title: "Tổng đơn hàng",
      dataIndex: "order_detail",
      key: "order_detail",
      render: (item) => (
        <span>
          {item
            .reduce(function (acc, obj) {
              return acc + obj.price;
            }, 0)
            .toLocaleString()}
        </span>
      ),
    },
    {
      title: "Trạng thái",
      key: "status",
      dataIndex: "status",
      render: (item) =>
        item === "pending" ? (
          <Tag color="processing">Pending</Tag>
        ) : item === "confirmed" ? (
          <Tag color="gold">Confirmed</Tag>
        ) : item === "delivered" ? (
          <Tag color="green">Delivering</Tag>
        ) : item === "done" ? (
          <Tag color="success">Done</Tag>
        ) : (
          <Tag color="error">Reject</Tag>
        ),
    },
    ,
    {
      title: "Thao tác",
      key: "action",
      render: (_, record) =>
        record.status == "pending" ? (
          <Popconfirm
            title="Huỷ đơn"
            description="Có chắc chắn muốn huỷ đơn hàng này?"
            onConfirm={() => {}}
            onCancel={() => {}}
            okText="Có"
            cancelText="Không"
          >
            <Button danger>Huỷ đơn</Button>
          </Popconfirm>
        ) : record.status == "confirmed" ? (
          <a>Đang chờ giao cho đơn vị vận chuyển</a>
        ) : record.status == "delivered" ? (
          <Button
            type="primary"
            onClick={() => handleDeliverySuccess(record.id)}
          >
            Đã nhận được đơn hàng
          </Button>
        ) : (
          <a>
            Đánh giá <i>(incoming...)</i>
          </a>
        ),
    },
  ];

  const expandedRowRender = (data) => {
    const columns = [
      {
        title: "",
        dataIndex: ["products", "main_image"],
        key: "image",
        render: (item) => (
          <img src={item} className="h-10 rounded-lg" alt="item" />
        ),
      },
      {
        title: "Tên sản phẩm",
        dataIndex: ["products", "name"],
        key: "product name",
      },
      {
        title: "Giá",
        dataIndex: "price",
        key: "price",
      },
      {
        title: "Số lượng",
        dataIndex: "amount",
        key: "amount",
        render: (item) => <span>{item.toLocaleString()}</span>,
      },
      {
        title: "Tổng",
        dataIndex: "",
        key: "sum",
        render: (_, item) => (
          <span>{(item.price * item.amount).toLocaleString()}</span>
        ),
      },
    ];

    return (
      <Table
        columns={columns}
        dataSource={data.order_detail}
        pagination={false}
        rowKey={"id"}
      />
    );
  };

  const handleDeliverySuccess = (id) => {
    axios
      .put(`/api/orders/change-status/${id}`, {
        status: "done",
      })
      .then((rs) => {
        console.log(rs);
        if (rs.status == 200) {
          message.success("Xác nhận đã nhận đơn hàng");
          mutate();
        }
      });
  };

  return data?.length > 0 ? (
    <div className="">
      <Table
        columns={columns}
        dataSource={data}
        expandable={{
          expandedRowRender: (record) => expandedRowRender(record),
          // rowExpandable: (record) => true,
        }}
        rowKey="id"
      />
    </div>
  ) : (
    <div className="h-screen flex justify-center items-center text-xl font-semibold">
      Chưa có lịch sử đặt hàng
    </div>
  );
};

export default OrderHistory;
