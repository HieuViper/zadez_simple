"use client";
import { useSWRData } from "@/library/api";
import {
  Button,
  Col,
  Divider,
  Popconfirm,
  Row,
  Space,
  Table,
  Typography,
} from "antd";
import Search from "antd/es/input/Search";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import RoleForm from "./_components/RoleForm";

const RoleList = () => {
  const router = useRouter();
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <span className="font-semibold">{text}</span>,
    },
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Typography.Link onClick={() => setEditedRow(record)}>
            Edit
          </Typography.Link>
          <Popconfirm
            title="Delete the role"
            description="Are you sure to delete this role?"
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

  const [editedRow, setEditedRow] = useState(null);

  const { data, error, isLoading,mutate, deleteData, bulkDeleteData } = useSWRData(
    "/api/roles",
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
      <div className="flex justify-end">
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
      <Row type="flex" justify="space-between">
        <Col xs={24} md={10} lg={8}>
          <RoleForm data={editedRow} setData={setEditedRow} mutate={mutate} />
        </Col>
        <Col xs={24} md={14} lg={15} className="pb-4">
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
            bordered
            onChange={(e) => {
              router.replace(
                `/admin/roles?page=${e.current}&limit=${e.pageSize}&keyword=${search}`
              );
            }}
            rowKey="id"
            scroll={{
              x: 700,
            }}
          />
        </Col>
      </Row>
      {/* Modal */}
      {/* <Modal
        title="Edit Role"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
        ]}
      >
        <RoleForm />
      </Modal> */}
    </div>
  );
};

export default RoleList;
