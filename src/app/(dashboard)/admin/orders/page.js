"use client";
import { useSWRData } from "@/library/api";
import { Button, Divider, Popconfirm, Space, Table } from "antd";
import Search from "antd/es/input/Search";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
const optTimeFormat = {
  weekday: "long",
  month: "long",
  year: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  hourCycle: "h23",
};

const OrderList = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState("");
  const page = Number(searchParams.get("page") || 1);
  const limit = Number(searchParams.get("limit") || 10);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const hasSelected = selectedRowKeys.length > 0;

  const columns = [
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Input Date",
      dataIndex: "input_date",
      key: "input_date",
      render: (item) => (
        <span>
          {new Intl.DateTimeFormat("en-us", optTimeFormat).format(
            new Date(item)
          )}
        </span>
      ),
    },
    {
      title: "Output date",
      dataIndex: "output_date",
      key: "output_date",
      render: (item) => (
        <span>
          {new Intl.DateTimeFormat("en-us", optTimeFormat).format(
            new Date(item)
          )}
        </span>
      ),
    },
    {
      title: "Customer",
      dataIndex: ["customers", "name"],
      key: "customer_name",
    },
    {
      title: "Phone",
      dataIndex: ["customers", "phone"],
      key: "customer_phone",
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Link
            href={`/admin/orders/${record.id}?previousPage=${page}&previousLimit=${limit}`}
            prefetch={false}
          >
            Edit
          </Link>
          <Popconfirm
            title="Delete the order"
            description="Are you sure to delete this order?"
            onConfirm={() => {
              deleteData(record.id);
            }}
            onCancel={() => {}}
            okText="Yes"
            cancelText="No"
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const { data, error, isLoading, deleteData, bulkDeleteData } = useSWRData(
    "/api/orders",
    {
      page,
      limit,
      keyword: search,
    }
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...123</div>;

  return (
    <div>
      <div className="flex justify-between">
        <Button
          type="primary"
          onClick={() =>
            router.push(
              `/admin/orders/0?previousPage=${page}&previousLimit=${limit}`
            )
          }
        >
          Add New
        </Button>
        <Search
          placeholder="Search..."
          onSearch={(e) => {
            setSearch(e);
          }}
          enterButton
          style={{ width: 300 }}
        />
      </div>
      <Divider />

      <div className="mb-4">
        <Popconfirm
          title="Delete items"
          description="Are you sure to delete these items?"
          onConfirm={() => {
            bulkDeleteData(selectedRowKeys).then((res) => {
              res.status === 200 && setSelectedRowKeys([]);
            });
          }}
          onCancel={() => {}}
          okText="Yes"
          cancelText="No"
        >
          <Button type="primary" disabled={!hasSelected} loading={isLoading}>
            Bulk Delete
          </Button>
          <span
            style={{
              marginLeft: 8,
            }}
          >
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
          </span>
        </Popconfirm>
      </div>

      <Table
        columns={columns}
        dataSource={data?.data}
        loading={isLoading}
        bordered
        rowSelection={{
          selectedRowKeys,
          onChange: (newSelectedRowKeys) => {
            setSelectedRowKeys(newSelectedRowKeys);
          },
        }}
        pagination={{
          pageSize: data.pagging.limit,
          current: data.pagging.currentPage,
          total: data.pagging.total,
          showSizeChanger: true,
          showQuickJumper: true,
        }}
        onChange={(e) => {
          router.replace(
            `/admin/orders?page=${e.current}&limit=${e.pageSize}&keyword=${search}`
          );
        }}
        rowKey="id"
      />
    </div>
  );
};

export default OrderList;
