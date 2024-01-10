"use client";
import { SendOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import axios from "axios";
import { useState } from "react";

const ForgotPassPage = () => {
  const [resetPassStep, setResetPassStep] = useState(false);
  const [otpStep, setOtpStep] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    setLoading(true);
    if (otpStep) {
      axios
        .get(`/api/forgot-password/check-otp/${userData.id}?otp=${values.otp}`)
        .then((res) => {
          console.log(res);
          if (res.data.status === 200) {
            setOtpStep(false);
            setResetPassStep(true);
            message.success("Nhập đúng mã OTP, mời nhập mật khẩu mới");
          } else {
            message.error("Nhập sai mã OTP, vui lòng nhập lại");
          }
        });
    } else if (resetPassStep) {
      axios
        .post(`/api/forgot-password/change-password/${userData.id}`, values)
        .then((res) => {
          if (res.data.status === 200) {
            message.success("Thay đổi mật khẩu thành công");
            setResetPassStep(false);
            setUserData(null);
          }
        });
    } else {
      axios.get(`/api/forgot-password?key=${values.email}`).then((res) => {
        if (res.data.status === 200) {
          setOtpStep(true);
          setUserData(res.data.result);
        } else {
          message.error(res.data.message);
        }
        setLoading(false);
      });
    }
    setLoading(false);
  };
  const onFinishFailed = () => {};

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <div className="text-xl font-medium">Quên Mật Khẩu</div>
      <Form
        form={form}
        name="basic"
        labelCol={{
          span: 4,
        }}
        style={{ width: 650 }}
        initialValues={{}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        {otpStep ? (
          <div>
            <div className="mb-4">
              Chúng tôi vừa gửi mã OTP qua e-mail: <b>{userData?.email}</b>. Vui
              lòng kiểm tra và điền vào ô dưới đây:
            </div>

            <Form.Item
              name="otp"
              rules={[{ required: true, message: "Vui lòng điền mã OTP" }]}
            >
              <Input placeholder="Mã OTP gồm 6 chữ số" />
            </Form.Item>
          </div>
        ) : resetPassStep ? (
          <>
            <Form.Item
              label="Mật khẩu mới"
              name="password"
              rules={[
                { required: true, message: "Vui lòng nhập mật khẩu mới!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label="Xác nhận lại"
              name="confirmPassword"
              dependencies={["password"]}
              hasFeedback
              rules={[
                { required: true, message: "Vui lòng nhập lại đúng mật khẩu!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("Mật khẩu không khớp nhau!")
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
          </>
        ) : (
          <>
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Vui lòng điền đầy đủ" }]}
            >
              <Input placeholder="Nhập Email hoặc Username hoặc Số điện thoại" />
            </Form.Item>
          </>
        )}
        <Form.Item className="flex justify-center">
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            icon={<SendOutlined />}
          >
            Gửi
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ForgotPassPage;
