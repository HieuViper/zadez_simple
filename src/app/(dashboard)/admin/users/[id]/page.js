"use client";
import { useSWRData } from "@/library/api";
import { SaveOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Row, Select } from "antd";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const UserForm = ({ params }) => {
  const isAddMode = params.id == 0 ? true : false;
  const searchParams = useSearchParams();
  const router = useRouter();
  const [form] = Form.useForm();
  const [rolesOptions, setRolesOptions] = useState([]);

  const { data, error, isLoading, createData, updateData } = useSWRData(
    `/api/users`,
    isAddMode ? {} : { id: params.id }
  );

  const { data: rolesData } = useSWRData("/api/roles");

  const onFinish = async (values) => {
    console.log(values);
    if (isAddMode) {
      createData(values).then((res) => {
        if (res.status === 200) {
          router.push(
            `/admin/users?page=${searchParams.get(
              "previousPage"
            )}&limit=${searchParams.get("previousLimit")}`
          );
        }
      });
    } else {
      updateData(params.id, values).then((res) => {
        if (res.status == 200) {
          router.push(
            `/admin/users?page=${searchParams.get(
              "previousPage"
            )}&limit=${searchParams.get("previousLimit")}`
          );
        }
      });
    }
  };
  const onFinishFailed = () => {};

  useEffect(() => {
    if (data) {
      form.setFieldsValue(data);
    }
    if (rolesData) {
      setRolesOptions(
        rolesData.data.map((role) => ({ label: role.name, value: role.id }))
      );
    }
  }, [data, rolesData]);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...123</div>;

  return (
    <Row type="flex" justify="center" align="middle">
      <Form
        form={form}
        name="basic"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 18,
        }}
        style={{
          width: "75%",
        }}
        initialValues={
          !isAddMode && {
            rolesId: data?.roles.map((item) => item.id),
          }
        }
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="fullName"
          rules={[
            {
              required: true,
              message: "Please input user's name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Phone"
          name="phoneNumber"
          rules={[
            {
              required: true,
              message: "Please input user's phone!",
            },
            () => ({
              validator(_, value) {
                const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;

                if (!value) {
                  return Promise.reject();
                }
                if (isNaN(value)) {
                  return Promise.reject("Phone number has to be a number.");
                }
                if (value.length < 10) {
                  return Promise.reject(
                    "Phone number can't be less than 10 digits"
                  );
                }
                if (value.length > 10) {
                  return Promise.reject(
                    "Phone number can't be more than 10 digits"
                  );
                }
                if (!value.match(regexPhoneNumber)) {
                  return Promise.reject("Not valid Viet Nam phone number");
                }
                return Promise.resolve();
              },
            }),
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="E-mail"
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "The input is not valid E-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="User Name" name="userName">
          <Input />
        </Form.Item>

        <Form.Item label="Status" name="status">
          <Select
            options={[
              {
                value: "Pending",
                label: "Pending",
              },
              {
                value: "Deleted",
                label: "Deleted",
              },
              {
                value: "Active",
                label: "Active",
              },
              {
                value: "Deactivated",
                label: "Deactivated",
              },
            ]}
          />
        </Form.Item>

        <Form.Item label="Roles" name="rolesId">
          <Checkbox.Group options={rolesOptions} />
        </Form.Item>

        {isAddMode && (
          <Form.Item label="Password" name={"password"}>
            <Input.Password />
          </Form.Item>
        )}

        <Form.Item className="flex justify-center">
          <Button
            type="primary"
            htmlType="submit"
            icon={<SaveOutlined />}
            // loading={
            //   editProductMutation.isPending ||
            //   uploadSerialImageMutation.isPending
            // }
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Row>
  );
};

export default UserForm;
