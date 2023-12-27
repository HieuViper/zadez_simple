"use client";

import { fetcher } from "@/library/util";
import { SaveOutlined } from "@ant-design/icons";
import { Button, Form, Input, Row, message } from "antd";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import useSWR from "swr";

const CustomerForm = ({ params }) => {
  const isAddMode = params.id == 0 ? true : false;
  const searchParams = useSearchParams();
  console.log(
    "🚀 ~ file: page.js:13 ~ CustomerForm ~ searchParams:",
    searchParams.get("previousPage")
  );
  const router = useRouter();
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    console.log(values);
    if (isAddMode) {
      await fetch(`/api/customers`, {
        method: "POST",
        body: JSON.stringify(values),
      }).then((rs) => {
        if (rs.ok) {
          message.success("Add Success");
          router.push(
            `/admin/customers?page=${searchParams.get(
              "previousPage"
            )}&limit=${searchParams.get("previousLimit")}`
          );
        }
      });
    } else {
      await fetch(`/api/customers/${params.id}`, {
        method: "PUT",
        body: JSON.stringify(values),
      }).then((rs) => {
        if (rs.ok) {
          message.success("Update Success");
          router.push(
            `/admin/customers?page=${searchParams.get(
              "previousPage"
            )}&limit=${searchParams.get("previousLimit")}`
          );
        }
      });
    }
  };
  const onFinishFailed = () => {};

  const { data, error, isLoading } = useSWR(
    !isAddMode ? `/api/customers/${params.id}` : null,
    fetcher
  );
  console.log("🚀 ~ file: page.js:56 ~ CustomerList ~ data:", data);

  useEffect(() => {
    if (data) {
      form.setFieldsValue(data);
    }
  }, [data]);

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
        initialValues={{}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input customer's name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Phone"
          name="phone"
          rules={[
            {
              required: true,
              message: "Please input customer's phone!",
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
          label="Address"
          name="address"
          rules={[
            {
              required: true,
              message: "Please input customer's address!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
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
        <Form.Item
          label="District"
          name="districtId"
          rules={[
            {
              required: true,
              message: "Please input customer's district!",
            },
          ]}
        >
          <Input />
        </Form.Item>

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

export default CustomerForm;
