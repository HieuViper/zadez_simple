"use client";
const Editor = dynamic(() => import("@/components/Editor"), { ssr: false });
import UploadImage from "@/components/UploadImage";
import { useSWRData, useSWRUpload } from "@/library/api";
import { DeleteOutlined, SaveOutlined } from "@ant-design/icons";
import { Button, Form, Input, Row, Select, Tag } from "antd";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const ArticlesForm = ({ params }) => {
  const isAddMode = params.id == 0 ? true : false;
  console.log("🚀 ~ ArticlesForm ~ isAddMode:", isAddMode);
  const searchParams = useSearchParams();
  const router = useRouter();
  const [form] = Form.useForm();

  const { data, error, isLoading, createData, updateData } = useSWRData(
    `/api/articles`,
    isAddMode ? {} : { id: params.id }
  );
  console.log(">>>data", data);
  const { uploadFormData } = useSWRUpload(`/api/image`);

  //image upload
  const [articlesPicURL, setArticlesPicURL] = useState(null);
  const [previewArticlesPic, setPreviewArticlesPic] = useState(null);
  const getFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };
  const uploadImage = async () => {
    if (!previewArticlesPic) return null;
    const formData = new FormData();
    formData.append("file", previewArticlesPic);
    return uploadFormData(formData);
  };

  //keywords
  const [keyword, setKeyword] = useState("");
  const [keywords, setKeywords] = useState([]);
  console.log("🚀 ~ ArticlesForm ~ keywords:", keywords);

  const handleAddKeyword = () => {
    if (keyword.trim() !== "") {
      setKeywords([...keywords, keyword.trim()]);
      setKeyword("");
    }
  };

  const handleKeywordInputChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleRemoveKeyword = (removedKeyword) => {
    setKeywords(keywords.filter((keyword) => keyword !== removedKeyword));
  };

  const onFinish = async (values) => {
    console.log("🚀 ~ onFinish ~ values:", values);
    values.keywords = keywords;
    const mainImage = await uploadImage();
    // console.log("🚀 ~ file: page.js:42 ~ onFinish ~ mainImage:", mainImage);
    mainImage ? (values.mainImageURL = mainImage.url) : null;
    console.log(values);
    if (isAddMode) {
      createData(values).then((res) => {
        if (res.status === 200) {
          router.push(
            `/admin/articles?page=${searchParams.get(
              "previousPage"
            )}&limit=${searchParams.get("previousLimit")}`
          );
        }
      });
    } else {
      updateData(params.id, values).then((res) => {
        if (res.status == 200) {
          router.push(
            `/admin/articles?page=${searchParams.get(
              "previousPage"
            )}&limit=${searchParams.get("previousLimit")}`
          );
        }
      });
    }
  };
  const onFinishFailed = () => {};

  useEffect(() => {
    if (!isAddMode && data) {
      form.setFieldsValue(data);
      setArticlesPicURL(data.mainImageURL);
      setKeywords(data.keywords);
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
            picURL={articlesPicURL}
            setPreviewPic={setPreviewArticlesPic}
          />
        </Form.Item>

        <div className="ml-[16%] mb-5">
          {previewArticlesPic && (
            <div className="flex gap-2">
              <Image
                src={`${URL.createObjectURL(previewArticlesPic)}`}
                width={160}
                height={160}
                className="rounded-lg shadow"
                alt={`${articlesPicURL}`}
              />
              <Button
                icon={<DeleteOutlined />}
                shape="circle"
                size="small"
                onClick={() => setPreviewArticlesPic(null)}
              />
            </div>
          )}
          {articlesPicURL && !previewArticlesPic && (
            <Image
              src={`${articlesPicURL}`}
              width={160}
              height={160}
              className="rounded-lg shadow"
              alt={`${articlesPicURL}`}
            />
          )}
        </div>

        <Form.Item
          label="Value"
          name="value"
          // rules={[
          //   {
          //     required: true,
          //     message: "Please input value!",
          //   },
          // ]}
        >
          <Input />
        </Form.Item>

        {/* <Form.Item label="Order" name="order">
          <InputNumber />
        </Form.Item> */}

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
        <Form.Item name="short" label="Short">
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Editor />
        </Form.Item>

        <Form.Item
          name="keywords"
          label="Keywords"
          rules={[
            {
              required: (_, value) =>
                keywords.length > 0
                  ? Promise.resolve()
                  : Promise.reject("Please add keywords"),
            },
          ]}
        >
          <div>
            <Input
              value={keyword}
              onChange={handleKeywordInputChange}
              placeholder="Enter keyword"
              style={{ width: 200, marginRight: 8 }}
            />
            <Button onClick={handleAddKeyword} type="primary">
              Add Keyword
            </Button>
            <div style={{ marginTop: 8 }}>
              {keywords.map((kw, index) => (
                <Tag
                  key={index}
                  closable
                  onClose={() => handleRemoveKeyword(kw)}
                >
                  {kw}
                </Tag>
              ))}
            </div>
          </div>
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

export default ArticlesForm;
