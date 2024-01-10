"use client";
import store from "@/library/zustand/store";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, message } from "antd";
import { useState } from "react";
const LoginForm = (props) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const { saveUser } = store();
  const onFinish = async (values) => {
    console.log("🚀 ~ file: LoginForm.js:10 ~ onFinish ~ values:", values);
    setLoading(true);
    await fetch(`/api/users/login`, {
      method: "POST",
      body: JSON.stringify(values),
    }).then((res) => {
      res.json().then((rs) => {
        console.log("🚀 ~ awaitres.json ~ rs:", rs);
        if (rs.status === 404) {
          form.setFields([
            {
              name: "email",
              errors: [rs.message],
            },
          ]);
        } else if (rs.status === 400) {
          form.setFields([
            {
              name: "password",
              errors: [rs.message],
            },
          ]);
        } else {
          saveUser(rs);
          message.success("Login success");
          window.location.href = "/admin";
        }
        setLoading(false);
      });
    });
  };

  return (
    <Form
      name="login"
      form={form}
      className=""
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: "true",
            message: "Please input your Username/Email/Phone!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username / Email / Phone"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: "true",
            message: "Please input your Password!",
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder="Password"
          autoComplete="true"
        />
      </Form.Item>
      <Form.Item>
        <div className="flex justify-between">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="#" href={null}>
            Forgot password
          </a>
        </div>
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          loading={loading}
          className="w-full"
        >
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
