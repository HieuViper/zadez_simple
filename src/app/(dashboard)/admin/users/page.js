"use client";
import { useSWRData } from "@/library/api";
import { Button, Divider, Popconfirm, Radio, Space, Table, Tag } from "antd";
import Search from "antd/es/input/Search";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const UserList = () => {
  const router = useRouter();
  const columns = [
    {
      title: "Name",
      dataIndex: "fullName",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "E-mail",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "roles",
      key: "roles",
      render: (roles) => {
        return roles.map((role) => {
          return (
            <Tag color="blue" key={role.id}>
              {role.name}
            </Tag>
          );
        });
      },
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
            href={`/admin/users/${record.id}?previousPage=${page}&previousLimit=${limit}`}
            prefetch={false}
          >
            Edit
          </Link>
          <Popconfirm
            title="Delete the user"
            description="Are you sure to delete this user?"
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
  const searchParams = useSearchParams();
  const [search, setSearch] = useState("");
  const page = Number(searchParams.get("page") || 1);
  const limit = Number(searchParams.get("limit") || 10);
  const role = searchParams.get("role") || "";

  const { data, error, isLoading, deleteData } = useSWRData("/api/users", {
    page,
    limit,
    keyword: search,
    role,
  });
  console.log("🚀 ~ UserList ~ data:", data);

  //func

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...123</div>;

  return (
    <div>
      <div className="flex justify-between">
        <Button
          type="primary"
          onClick={() =>
            router.push(
              `/admin/users/0?previousPage=${page}&previousLimit=${limit}`
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

      <Radio.Group
        buttonStyle="solid"
        onChange={(e) => {
          router.replace(`/admin/users?page=1&limit=10&role=${e.target.value}`);
        }}
        defaultValue={role}
        style={{ marginBottom: 16 }}
      >
        <Radio.Button value={"admin"}>Admin</Radio.Button>
        <Radio.Button value={"system"}>System Admin</Radio.Button>
        <Radio.Button value={"sa"}>SaleAdmin</Radio.Button>
        <Radio.Button value={"customer"}>Customer</Radio.Button>
      </Radio.Group>

      <Table
        columns={columns}
        dataSource={data?.data}
        loading={isLoading}
        pagination={{
          pageSize: data.pagging.limit,
          current: data.pagging.currentPage,
          total: data.pagging.total,
          showSizeChanger: true,
          showQuickJumper: true,
        }}
        bordered
        onChange={(e) => {
          router.replace(
            `/admin/users?page=${e.current}&limit=${e.pageSize}&keyword=${search}&role=${role}`
          );
        }}
        rowKey="id"
      />
    </div>
  );
};

export default UserList;
