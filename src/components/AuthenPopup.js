"use client";
import store from "@/library/zustand/store";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Modal,
  Tabs,
  Typography,
  message,
} from "antd";
import { useState } from "react";

const LoginForm = () => {
  const [form] = Form.useForm();
  const { toggleModal, saveUser } = store();
  const [loading, setLoading] = useState(false);
  const onFinish = async (values) => {
    console.log("🚀 ~ file: AuthenPopup.js:10 ~ onFinish ~ values:", values);
    await fetch(`/api/users/login`, {
      method: "POST",
      body: JSON.stringify(values),
    }).then((res) => {
      res.json().then((rs) => {
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
        } else if (rs.roles.every((item) => item.code !== "customer")) {
          form.setFields([
            {
              name: "email",
              errors: [
                "Bạn là admin, vui lòng không dùng tài khoản này để đăng nhập",
              ],
            },
          ]);
        } else {
          saveUser(rs);
          message.success("Login success");
          toggleModal(false);
        }
        setLoading(false);
      });
    });
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
            message: "Vui lòng nhập Email!",
          },
        ]}
      >
        <Input
          prefix={<MailOutlined />}
          placeholder="E-mail / Tên người dùng / Số điện thoại"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: "true",
            message: "Vui lòng nhập mật khẩu!",
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined />}
          placeholder="Mật Khẩu"
          autoComplete="true"
        />
      </Form.Item>
      <Form.Item>
        <div className="flex justify-between">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Nhớ lần sau</Checkbox>
          </Form.Item>

          <a className="#" href={null}>
            Quên mật khẩu?
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

const RegisterForm = () => {
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    console.log("🚀 ~ file: AuthenPopup.js:10 ~ onFinish ~ values:", values);
  };

  const validateCheckbox = (rule, value) => {
    if (!value) {
      return Promise.reject("Vui lòng đồng ý Điều khoản và Dịch vụ");
    }

    return Promise.resolve();
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
            message: "Vui lòng nhập họ và tên!",
          },
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder="Họ Tên" />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[
          {
            required: "true",
            message: "Vui lòng nhập Email!",
          },
        ]}
      >
        <Input prefix={<MailOutlined />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: "true",
            message: "Vui lòng nhập mật khẩu",
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined />}
          placeholder="Mật Khẩu"
          autoComplete="true"
        />
      </Form.Item>

      <Form.Item
        name="agree"
        valuePropName="checked"
        rules={[{ validator: validateCheckbox }]}
      >
        <Checkbox>
          Tôi đồng ý với <Typography.Link>Điều khoản dịch vụ</Typography.Link>
        </Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="w-full">
          Đăng ký ngay
        </Button>
      </Form.Item>
    </Form>
  );
};
const items = [
  {
    key: "1",
    label: "Đăng nhập",
    children: <LoginForm />,
  },
  {
    key: "2",
    label: "Tạo tài khoản",
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
