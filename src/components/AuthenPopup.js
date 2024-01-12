"use client";
import store from "@/library/zustand/store";
import {
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
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
        } else if (rs.roles.some((item) => item.code !== "customer")) {
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

          <a className="#" href="/quen-mat-khau">
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
  const [loading, setLoading] = useState(false);
  const onFinish = async (values) => {
    setLoading(true);
    values.rolesId = [4]; //customerId
    console.log("🚀 ~ file: AuthenPopup.js:10 ~ onFinish ~ values:", values);
    await fetch(
      `/api/users/check-exist?email=${values.email}&phone=${values.phoneNumber}`
    )
      .then((res) => {
        res.json().then(async (rs) => {
          console.log(rs);
          if (rs.status === 200) {
            await fetch(`/api/users`, {
              method: "POST",
              body: JSON.stringify(values),
            });
            await fetch(`/api/customers`, {
              method: "POST",
              body: JSON.stringify({
                email: values.email,
                phone: values.phoneNumber,
                name: values.fullName,
              }),
            });
            message.success("Đăng ký thành công");
            form.resetFields();
            setLoading(false);
          } else if (rs?.code === "phone") {
            form.setFields([
              {
                name: "phoneNumber",
                errors: ["Số điện thoại này đã được đăng ký"],
              },
            ]);
          } else {
            form.setFields([
              {
                name: "email",
                errors: ["Email này đã dược đăng ký"],
              },
            ]);
          }
        });
      })
      .catch((error) => {
        message.error(error.message);
      });
    setLoading(false);
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
        name="fullName"
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
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
        ]}
      >
        <Input prefix={<MailOutlined />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="phoneNumber"
        rules={[
          {
            required: "true",
            message: "Vui lòng nhập Số điện thoại!",
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
        <Input prefix={<PhoneOutlined />} placeholder="Số điện thoại" />
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
        <Button
          type="primary"
          htmlType="submit"
          loading={loading}
          className="w-full"
        >
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
