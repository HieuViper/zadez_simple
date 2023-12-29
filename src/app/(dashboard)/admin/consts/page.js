"use client";
import { useSWRData } from "@/library/api";
import { Button, Popconfirm, Space, Table, Tag } from "antd";
import Search from "antd/es/input/Search";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const ConstsList = () => {
  const router = useRouter();
  const columns = [
    {
      title: "Value",
      dataIndex: "value",
      key: "value",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Image",
      dataIndex: "mainImageURL",
      key: "mainImageURL",
      render: (item, record) => {
        console.log("🚀 ~ file: page.js:34 ~ ConstsList ~ record:", record);
        return (
          <Image
            height={50}
            width={60}
            src={item ? item : "/no-image.jpg"}
            alt={record?.value}
            priority={true}
          />
        );
      },
    },
    {
      title: "Order",
      dataIndex: "order",
      key: "order",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Active",
      dataIndex: "isActive",
      key: "isActive",
      render: (active) => {
        return active ? (
          <Tag color="green">Active</Tag>
        ) : (
          <Tag color="red">Inactive</Tag>
        );
      },
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Link
            href={`/admin/consts/${record.id}?previousPage=${page}&previousLimit=${limit}`}
            prefetch={false}
          >
            Edit
          </Link>
          <Popconfirm
            title="Delete the consts"
            description="Are you sure to delete this consts?"
            onConfirm={async () => {
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
  const searchParams = useSearchParams();
  const [search, setSearch] = useState("");
  const page = Number(searchParams.get("page") || 1);
  const limit = Number(searchParams.get("limit") || 10);

  const { data, error, isLoading, deleteData } = useSWRData("/api/consts", {
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
              `/admin/consts/0?previousPage=${page}&previousLimit=${limit}`
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
            `/admin/consts?page=${e.current}&limit=${e.pageSize}&keyword=${search}`
          );
        }}
        rowKey="id"
      />
    </div>
  );
};

export default ConstsList;
