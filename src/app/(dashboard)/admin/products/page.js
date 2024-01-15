"use client";
import { useSWRData } from "@/library/api";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Divider, Popconfirm, Table, Tag } from "antd";
import Search from "antd/es/input/Search";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const ProductList = () => {
  const [loadingChangePage, setLoadingChangePage] = useState(false);
  const [loadingBulkDelete, setLoadingBulkDelete] = useState(false);
  const [search, setSearch] = useState("");
  const defaultPagination = {
    current: 1,
    disable: false,
    pageSize: 10,
    total: 0,
  };
  const [pagination, setPagination] = useState(defaultPagination);
  const router = useRouter();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page") || 1);
  const limit = Number(searchParams.get("limit") || 10);

  const { data, isLoading, error, deleteData, bulkDeleteData } = useSWRData(
    "/api/products",
    {
      page,
      limit,
      keyword: search,
    }
  );
  const { data: categories } = useSWRData("/api/categories", {
    limit: 1000,
  });

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...123</div>;

  const handleChangePage = async (values) => {
    setPagination(values);
    // callProduct()
    // router.refresh()
  };
  const handleSearch = async (e) => {
    setPagination(defaultPagination);
    setSearch(e);
    callProduct();
    router.refresh();
  };
  //  BULK DELETE
  const confirmBulkDelete = async () => {
    setLoadingBulkDelete(true);
    const ids = selectedRowKeys
      .map((item) => `${item},`)
      .join("")
      .slice(0, -1);
    bulkDeleteData(ids);

    // message.success("Tasks deleted");
    setLoadingBulkDelete(false);
  };
  const onSelectChange = (SelectedRowKeys) => {
    setSelectedRowKeys(SelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  let hasSelected = selectedRowKeys.length > 0;

  const columns = [
    {
      title: "Name",
      width: 150,
      dataIndex: "name",
      key: "name",
      fixed: "left",
      render: (_, record) => (
        <div className="text-base font-medium pb-2">{record.name}</div>
      ),
    },
    {
      title: "Image",
      width: 100,
      dataIndex: "main_image",
      key: "main_image",
      render: (image) => (
        <div>
          <img className="w-20" src={image} alt="main_image" />
        </div>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      width: 50,
    },
    {
      title: "Discount Price",
      dataIndex: "discount_price",
      key: "discount_price",
      width: 50,
    },
    {
      title: "Category",
      dataIndex: "categoryId",
      key: "categoryId",
      width: 50,
      render: (categoryId) => {
        const nameCategory = categories?.data.find(
          (data) => data.id == categoryId
        );
        return <div>{nameCategory?.name}</div>;
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 50,
    },
    {
      title: "Active",
      dataIndex: "active",
      key: "active",
      width: 50,
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
      width: 50,
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      width: 50,
    },
    {
      title: "Color",
      dataIndex: "color",
      key: "color",
      width: 50,
      render: (color) => {
        return <Tag color={color}> {color}</Tag>;
      },
    },
    {
      title: "Action",
      key: "action",
      fixed: "right",
      width: 50,
      render: (_, record) => (
        <div className="flex gap-2">
          <Link
            href={`/admin/products/${record.id}?previousPage=${page}&previousLimit=${limit}`}
          >
            <Button size="small" type="primary" ghost icon={<EditOutlined />}>
              Edit
            </Button>
          </Link>
          <Popconfirm
            title="Delete the task"
            description={`Are you sure to delete ${record.name}?`}
            onConfirm={() => deleteData(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button size="small" danger icon={<DeleteOutlined />}>
              Delete
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div>
      <h1 className="font-semibold text-xl pr-4">Products</h1>
      <Divider />
      <div className="flex justify-between mb-4 gap-x-4">
        <Link
          href={`/admin/products/0?previousPage=${page}&previousLimit=${limit}`}
        >
          <Button>Add Product</Button>
        </Link>
        <div className="flex">
          <div className="flex pb-2 pr-4">
            <div className="mx-2 flex items-center">
              {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
            </div>
            <Popconfirm
              title="Delete the task"
              description="Are you sure to bulk delete this task?"
              onConfirm={confirmBulkDelete}
              okText="Yes"
              cancelText="No"
              placement="left"
            >
              <Button
                type="primary"
                danger
                disabled={!hasSelected}
                loading={loadingBulkDelete}
              >
                Bulk Delete
              </Button>
            </Popconfirm>
          </div>
          <Search
            placeholder="input search text"
            // value={search}
            // disabled={loadingStatus}
            // onChange={(e) => onSearchChange(e)}
            onSearch={(e) => setSearch(e)}
            enterButton
            style={{
              width: 250,
            }}
          />
        </div>
      </div>
      <Table
        style={{ marginTop: 10 }}
        rowSelection={rowSelection}
        columns={columns}
        rowKey="id"
        onChange={(e) => {
          router.replace(
            `/admin/products?page=${e.current}&limit=${e.pageSize}&keyword=${search}`
          );
        }}
        pagination={{
          pageSize: data.pagging.limit,
          current: data.pagging.currentPage,
          total: data.pagging.total,
          showSizeChanger: true,
          showQuickJumper: true,
        }}
        bordered={true}
        dataSource={data?.data}
        loading={isLoading}
        // pagination={{ ...pagination, disabled: loadingChangePage }}
        // scroll={{
        //     x: 1300,
        //     y: 500,
        // }}
      />
    </div>
  );
};

export default ProductList;
