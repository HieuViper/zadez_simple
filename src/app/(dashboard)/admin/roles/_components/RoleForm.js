import { useSWRData } from "@/library/api";
import { Button, Form, Input } from "antd";
import { useEffect } from "react";

const RoleForm = ({ data, setData, mutate }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
    if (data) {
      updateData(data.id, values).then((res) => {
        if (res.status === 200) {
          setData(null);
          form.resetFields();
          mutate();
        }
      });
    } else {
      createData(values).then((res) => {
        if (res.status === 200) {
          form.resetFields();
          mutate();
        }
      });
    }
  };
  const onFailed = () => {};

  const { isLoading, createData, updateData } = useSWRData(`/api/roles`);

  useEffect(() => {
    if (data) {
      form.setFieldsValue(data);
    }
  }, [data]);
  return (
    <Form
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFailed}
      autoComplete="off"
      form={form}
      initialValues={{}}
      layout={"vertical"}
    >
      <Form.Item
        label={<span className="font-medium ">Code:</span>}
        rules={[
          {
            required: true,
            message: "Please input code!",
          },
        ]}
        name="code"
      >
        <Input placeholder="Input Role Code" />
      </Form.Item>
      <Form.Item
        label={<span className="font-medium">Role Name:</span>}
        rules={[
          {
            required: true,
            message: "Please input name role!",
          },
        ]}
        name="name"
      >
        <Input placeholder="Input Role Name" />
      </Form.Item>
      <Form.Item
        label={<span className="font-medium">Description:</span>}
        name="description"
      >
        <Input placeholder="Desctiption about the role" />
      </Form.Item>

      {data ? (
        <div className="flex items-center gap-3">
          <Button
            type="primary"
            htmlType="submit"
            // disabled={loading}
            // loading={loading}
          >
            Update
          </Button>
          <Button
            type="default"
            onClick={() => {
              setData(null);
              form.resetFields();
            }}
            loading={isLoading}
          >
            Cancel
          </Button>
        </div>
      ) : (
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Add New Role
        </Button>
      )}
    </Form>
  );
};

export default RoleForm;
