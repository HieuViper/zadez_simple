"use client";
import { useSWRData } from "@/library/api";
import { Button, Popconfirm, Space, Table } from "antd";
import Search from "antd/es/input/Search";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const CustomerList = () => {
  const router = useRouter();
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "DistrictId",
      dataIndex: "districtId",
      key: "districtId",
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Link
            href={`/admin/customers/${record.id}?previousPage=${page}&previousLimit=${limit}`}
            prefetch={false}
          >
            Edit
          </Link>
          <Popconfirm
            title="Delete the customer"
            description="Are you sure to delete this customer?"
            onConfirm={async () => {
              deleteData(record.id);
            }}
            onCancel={() => { }}
            okText="Yes"
            cancelText="No"
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  const searchParams = useSearchParams();
  const [search, setSearch] = useState("");
  const page = Number(searchParams.get("page") || 1);
  const limit = Number(searchParams.get("limit") || 10);

  const { data, error, isLoading, deleteData } = useSWRData("/api/customers", {
    page,
    limit,
    keyword: search,
  });

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...123</div>;

  return (
    <div>
      <div className="flex justify-between">
        <Button
          type="primary"
          onClick={() =>
            router.push(
              `/admin/customers/0?previousPage=${page}&previousLimit=${limit}`
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
      <hr className="border-white my-4" />

      <Table
        columns={columns}
        dataSource={data.data}
        loading={isLoading}
        pagination={{
          pageSize: data.pagging.limit,
          current: data.pagging.currentPage,
          total: data.pagging.total,
          showSizeChanger: true,
          showQuickJumper: true,
        }}
        onChange={(e) => {
          router.replace(
            `/admin/customers?page=${e.current}&limit=${e.pageSize}&keyword=${search}`
          );
        }}
        rowKey="id"
      />
    </div>
  );
};

export default CustomerList;
