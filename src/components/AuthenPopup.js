"use client";

import store from "@/library/zustand/store";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Modal, Tabs, Typography } from "antd";

const LoginForm = () => {
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    console.log("🚀 ~ file: AuthenPopup.js:10 ~ onFinish ~ values:", values);
  };
  return (
    <Form
      form={form}
      name="login"
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
            message: "Please input your Email!",
          },
        ]}
      >
        <Input
          prefix={<MailOutlined className="site-form-item-icon" />}
          placeholder="Email"
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
        <Button type="primary" htmlType="submit" className="w-full">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

const RegisterForm = () => {
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    console.log("🚀 ~ file: AuthenPopup.js:10 ~ onFinish ~ values:", values);
  };
  return (
    <Form
      form={form}
      name="register"
      className=""
      initialValues={{
        agree: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="name"
        rules={[
          {
            required: "true",
            message: "Please input your full name!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Full Name"
        />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[
          {
            required: "true",
            message: "Please input your Email!",
          },
        ]}
      >
        <Input
          prefix={<MailOutlined className="site-form-item-icon" />}
          placeholder="Email"
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

      <Form.Item name="agree" valuePropName="checked">
        <Checkbox>
          I agree to all <Typography.Link>Terms and Conditions</Typography.Link>
        </Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="w-full">
          Create Account
        </Button>
      </Form.Item>
    </Form>
  );
};
const items = [
  {
    key: "1",
    label: "Log In",
    children: <LoginForm />,
  },
  {
    key: "2",
    label: "Create Account",
    children: <RegisterForm />,
  },
];
const AuthenPopup = () => {
  const { modalLoginState, toggleModal } = store();
  return (
    <Modal
      open={modalLoginState.isOpen}
      onOk={() => {}}
      onCancel={() => {
        toggleModal(false);
      }}
      footer={null}
    >
      <Tabs
        defaultActiveKey="1"
        items={items}
        size="large"
        onChange={() => {}}
      />
    </Modal>
  );
};

export default AuthenPopup;
