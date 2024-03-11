"use client";
const Editor = dynamic(() => import("@/components/Editor"), { ssr: false });
import UploadImage from "@/components/UploadImage";
import { useSWRData, useSWRUpload } from "@/library/api";
import { DeleteOutlined, SaveOutlined } from "@ant-design/icons";
import { Button, Form, Input, InputNumber, Row, Select } from "antd";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const ConstsForm = ({ params }) => {
  const isAddMode = params.id == 0 ? true : false;
  const searchParams = useSearchParams();
  const router = useRouter();
  const [form] = Form.useForm();

  const { data, error, isLoading, createData, updateData } = useSWRData(
    `/api/consts`,
    isAddMode ? {} : { id: params.id }
  );
  const { uploadFormData } = useSWRUpload(`/api/image`);

  //image upload
  const [constsPicURL, setConstsPicURL] = useState(null);
  const [previewConstsPic, setPreviewConstsPic] = useState(null);
  const getFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };
  const uploadImage = async () => {
    if (!previewConstsPic) return null;
    const formData = new FormData();
    formData.append("file", previewConstsPic);
    return uploadFormData(formData);
  };

  const onFinish = async (values) => {
    const mainImage = await uploadImage();
    // console.log("🚀 ~ file: page.js:42 ~ onFinish ~ mainImage:", mainImage);
    mainImage ? (values.mainImageURL = mainImage.url) : null;
    console.log(values);
    if (isAddMode) {
      createData(values).then((res) => {
        if (res.status === 200) {
          router.push(
            `/admin/consts?page=${searchParams.get(
              "previousPage"
            )}&limit=${searchParams.get("previousLimit")}`
          );
        }
      });
    } else {
      updateData(params.id, values).then((res) => {
        if (res.status == 200) {
          router.push(
            `/admin/consts?page=${searchParams.get(
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
      setConstsPicURL(data.mainImageURL);
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
        {/* const image */}
        <Form.Item
          name="mainImageURL"
          label="Image"
          // valuePropName="fileList"
          getValueFromEvent={getFile}
        >
          <UploadImage
            picURL={constsPicURL}
            setPreviewPic={setPreviewConstsPic}
          />
        </Form.Item>

        <div className="ml-[16%] mb-5">
          {previewConstsPic && (
            <div className="flex gap-2">
              <Image
                src={`${URL.createObjectURL(previewConstsPic)}`}
                width={160}
                height={160}
                className="rounded-lg shadow"
                alt={`${constsPicURL}`}
              />
              <Button
                icon={<DeleteOutlined />}
                shape="circle"
                size="small"
                onClick={() => setPreviewConstsPic(null)}
              />
            </div>
          )}
          {constsPicURL && !previewConstsPic && (
            <Image
              src={`${constsPicURL}`}
              width={160}
              height={160}
              className="rounded-lg shadow"
              alt={`${constsPicURL}`}
            />
          )}
        </div>

        <Form.Item
          label="Value"
          name="value"
          rules={[
            {
              required: true,
              message: "Please input value!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Order" name="order">
          <InputNumber />
        </Form.Item>

        <Form.Item
          name="isActive"
          label="Active"
          wrapperCol={{ sm: 10 }}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please select Active Status!",
            },
          ]}
        >
          <Select placeholder="Please select Active Status">
            <Select.Option value={true}>Yes</Select.Option>
            <Select.Option value={false}>No</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item name="title" label="Title" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="short" label="Short" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Editor />
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

export default ConstsForm;
