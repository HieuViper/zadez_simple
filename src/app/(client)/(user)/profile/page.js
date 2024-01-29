"use client";

import SelectLocations from "@/components/SelectLocations";
import { useSWRData } from "@/library/api";
import store from "@/library/zustand/store";
import { SaveOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ProfileUser = () => {
  const { userState } = store();
  const [form] = Form.useForm();
  const router = useRouter();

  const {
    data: dataCustomer,
    error,
    mutate,
    isLoading,
    updateData,
  } = useSWRData(`/api/customers`, { keyword: userState.phoneNumber });
  console.log("🚀 ~ ProfileUser ~ dataCustomer:", dataCustomer);
  const [loading, setLoading] = useState(false);

  //locations
  const [cityId, setCityId] = useState("");
  const [districtId, setDistrictId] = useState("");
  const [wardId, setWardId] = useState("");
  const { data: dataLocation } = useSWRData("/api/location", {
    cityId,
    districtId,
  });

  const onFinishFailed = () => {
    message.error("Có lỗi xảy ra");
  };

  const onFinish = (values) => {
    console.log(values);
    setLoading(true);
    updateData(dataCustomer.data[0].id, values).then((res) => {
      if (res.status == 200) {
        setLoading(false);
        // mutate();
      } else {
        message.error("Có lỗi xảy ra");
        setLoading(false);
      }
    });
  };

  useEffect(() => {
    if (dataCustomer) {
      form.setFieldsValue(dataCustomer.data[0]);
      setCityId(dataCustomer.data[0]?.cityId);
      setDistrictId(dataCustomer.data[0]?.districtId);
    }
    if (!userState.token) {
      router.push("/");
      message.warning("Vui lòng đăng nhập");
    }
  }, [dataCustomer, userState]);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...123</div>;
  return (
    <Form
      form={form}
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
        label="Họ Tên"
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
        label="Số điện thoại"
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
                return Promise.reject("Vui lòng nhập định dạng là số.");
              }
              if (value.length < 10) {
                return Promise.reject("Vui lòng nhập đủ 10 chữ số");
              }
              if (value.length > 10) {
                return Promise.reject("Vui lòng nhập đủ 10 chữ số");
              }
              if (!value.match(regexPhoneNumber)) {
                return Promise.reject(
                  "Vui lòng nhập đúng định dạng số điện thoại Việt Nam"
                );
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

      <SelectLocations
        {...{
          cityId,
          setCityId,
          districtId,
          setDistrictId,
          wardId,
          setWardId,
          dataLocation,
          form,
        }}
      />

      <Form.Item
        label="Địa chỉ"
        name="address"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập địa chỉ nhà!",
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
          loading={loading}
        >
          Lưu
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ProfileUser;
