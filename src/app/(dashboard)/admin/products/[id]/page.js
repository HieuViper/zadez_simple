"use client";
import { useSWRData, useSWRUpload } from "@/library/api";
import {
  DeleteOutlined,
  SwapLeftOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import {
  Button,
  Form,
  Image,
  Input,
  Select,
  TreeSelect,
  Upload,
  message,
} from "antd";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Editor = dynamic(() => import("@/components/Editor"), { ssr: false });
const ProductForm = ({ params }) => {
  const isAddMode = params.id == 0 ? true : false;
  const searchParams = useSearchParams();
  const router = useRouter();
  const [form] = Form.useForm();

  const { data, isLoading, error, createData, updateData } = useSWRData(
    `/api/products`,
    isAddMode ? {} : { id: params.id }
  );
  const { uploadFormData: uploadImage } = useSWRUpload(
    `/api/products/image`,
    isAddMode ? {} : { id: params.id }
  );
  const { uploadFormData: uploadMultipleImage } = useSWRUpload(
    `/api/products/images`,
    isAddMode ? {} : { id: params.id }
  );
  const { data: categories } = useSWRData("/api/categories", {
    limit: 1000,
  });

  const { Option } = Select;
  const { id } = useParams();
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [mainPicURL, setMainPicURL] = useState(null);
  const [previewMainPic, setPreviewMainPic] = useState(null);
  const [subPicURL, setSubPicURL] = useState(null);
  const [previewSubPic, setPreviewSubPic] = useState(null);
  const [images, setImages] = useState([]);
  const [listImage, setListImage] = useState([]);
  const [initFileList, setInitFileList] = useState([]);
  const [fileList, setFileList] = useState(initFileList);
  const [value, setValue] = useState();

  const handleSubmit = async (value) => {
    // setLoadingSubmit(true);
    console.log("valueForm :", value);
    const formMainImage = new FormData();
    formMainImage.append("file", previewMainPic);
    const formSubImage = new FormData();
    formSubImage.append("file", previewSubPic);
    const mainImage = previewMainPic && (await uploadImage(formMainImage));
    const subImage = previewSubPic && (await uploadImage(formSubImage));
    const listImage = await uploadListImage();
    try {
      if (isAddMode) {
        const product = {
          name: value.name,
          product_code: value.product_code,
          price: value.price,
          discount_price: value.discount_price,
          categoryId: value.categoryId,
          driver: value.driver,
          product_position: value.product_position,
          active: value.active,
          status: value.status,
          color: value.color,
          main_image: mainImage.url || "",
          sub_image: subImage.url || "",
          list_image: listImage || {},
          modified_by: null,
          product_author: "",
          manufacturerId: null,
          short: value.short,
          description: value.description,
        };
        console.log("product add:", product);
        createData(product).then((res) => {
          console.log("res add:", res);
          if (res.status == 200) {
            setLoadingSubmit(false);
            router.push(
              `/admin/products?page=${searchParams.get(
                "previousPage"
              )}&limit=${searchParams.get("previousLimit")}`
            );
          }
        });
      } else {
        const product = {
          id: id,
          name: value.name,
          product_code: value.product_code,
          price: value.price,
          discount_price: value.discount_price,
          categoryId: value.categoryId,
          driver: value.driver,
          product_position: value.product_position,
          active: value.active,
          status: value.status,
          color: value.color,
          main_image: mainImage?.url || data.main_image || "",
          sub_image: subImage?.url || data.sub_image || "",
          list_image: listImage || {},
          modified_by: null,
          product_author: "",
          manufacturerId: null,
          short: value.short,
          description: value.description,
        };
        console.log("product edit :", product);
        updateData(params.id, product).then((res) => {
          console.log("res edit:", res);
          if (res.status == 200) {
            setLoadingSubmit(false);
            router.push(
              `/admin/products?page=${searchParams.get(
                "previousPage"
              )}&limit=${searchParams.get("previousLimit")}`
            );
          }
        });
      }
    } catch (error) {
      message.error(error);
    }
  };
  const handleSubmitFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  // IMAGE
  const mainImageFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.file;
  };
  const subImageFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.file;
  };

  // LIST IMAGE
  const onChangeListImage = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
  const listImageFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  // UPLOAD IMAGE TO SERVER
  const uploadListImage = async () => {
    const newFiles =
      fileList &&
      fileList.filter(
        (file) =>
          !initFileList?.some((initialFile) => initialFile?.name === file?.name)
      );
    const initFiles =
      fileList &&
      fileList.filter((file) =>
        initFileList?.some((initialFile) => initialFile?.name === file?.name)
      );
    if (newFiles && newFiles.length > 0) {
      const formData = new FormData();
      for (let i = 0; i < newFiles.length; i += 1) {
        formData.append("files", newFiles[i].originFileObj);
        fileList;
      }
      const response = await uploadMultipleImage(formData);
      const newListImage = initFiles?.concat(response?.images);
      return newListImage;
    } else {
      return initFiles;
    }
  };

  // COLOR
  const optionsColor = [
    { value: "red", label: "Red" },
    { value: "blue", label: "Blue" },
    { value: "green", label: "Green" },
    { value: "yellow", label: "Yellow" },
    { value: "black", label: "Black" },
    { value: "white", label: "White" },
    { value: "grey", label: "Grey" },
  ];
  // TREE DATA
  function buildTreeData(data, parent = null) {
    return data
      .filter((item) => item.parent === parent)
      .map((item) => ({
        title: item.name,
        value: item.id,
        children: buildTreeData(data, item.id),
      }));
  }
  const treeData = categories && buildTreeData(categories.data, null);
  const onChange = (newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    if (data) {
      form.setFieldsValue(data);
      setMainPicURL(data.main_image);
      setSubPicURL(data.sub_image);
      setFileList(data.list_image);
      setInitFileList(data.list_image);
    }
  }, [data]);

  if (error) return <div>failed to load</div>;
  // if (isLoading) return <div>loading...123</div>;

  return (
    <div>
      <div className="flex justify-between mb-4">
        <Button type="dashed" icon={<SwapLeftOutlined />}>
          <Link href={`/admin/products`}>Back to Products</Link>
        </Button>
        {isAddMode ? (
          <Button
            form="myForm"
            type="primary"
            htmlType="submit"
            loading={loadingSubmit}
          >
            Add New Product
          </Button>
        ) : (
          <Button
            form="myForm"
            type="primary"
            htmlType="submit"
            disabled={loadingSubmit}
            loading={loadingSubmit}
          >
            Update
          </Button>
        )}
      </div>
      <Form
        id="myForm"
        name="basic"
        labelCol={{
          offset: 1,
          span: 3,
        }}
        wrapperCol={{
          // offset: 2,
          span: 18,
        }}
        // style={
        //     {
        //         maxWidth: 2000,
        //         width: '100%',
        //     }
        // }
        initialValues={{
          remember: true,
        }}
        onFinish={handleSubmit}
        onFinishFailed={handleSubmitFailed}
        autoComplete="off"
        form={form}
      >
        <div className="grid grid-cols-2">
          <div id="col-1" className="">
            <Form.Item
              label={<span className="font-medium ">Name</span>}
              name={`name`}
              rules={[
                {
                  required: true,
                  message: "Please input name!",
                },
              ]}
            >
              <Input placeholder="Input name" />
            </Form.Item>
            <Form.Item
              label={<span className="font-medium">Code</span>}
              name="product_code"
              rules={[
                {
                  required: true,
                  message: "Please input code!",
                },
              ]}
            >
              <Input placeholder="Input Product Code" />
            </Form.Item>
            <Form.Item
              label={<span className="font-medium">Price</span>}
              name="price"
            >
              <Input placeholder="Input price" />
            </Form.Item>
            <Form.Item
              label={<span className="font-medium">Discount </span>}
              name="discount_price"
            >
              <Input placeholder="Input Discount Price" />
            </Form.Item>
            <Form.Item
              label={<span className="font-medium">Categories </span>}
              name="categoryId"
            >
              <TreeSelect
                showSearch
                allowClear
                treeDefaultExpandAll
                treeData={treeData}
                value={value}
                onChange={onChange}
                dropdownStyle={{
                  maxHeight: 400,
                  overflow: "auto",
                }}
                placeholder="Select parent"
              />
            </Form.Item>
            <Form.Item
              label={<span className="font-medium">Driver</span>}
              name="driver"
            >
              <Input placeholder="Input Driver" />
            </Form.Item>
          </div>
          <div id="col-2" className="">
            <Form.Item
              label={<span className="font-medium"> Position </span>}
              name="product_position"
            >
              <Input placeholder="Input Position" />
            </Form.Item>
            <Form.Item
              label={<span className="font-medium">Active</span>}
              name="active"
            >
              <Select placeholder="Select active">
                <Option value={true}>Yes</Option>
                <Option value={false}>No</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label={<span className="font-medium">Status</span>}
              name="status"
            >
              <Select placeholder="Select status">
                <Option value={"in"}>In Stock</Option>
                <Option value={"out"}>Out Stock</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label={<span className="font-medium">Color </span>}
              name="color"
            >
              <Select
                style={{
                  width: "100%",
                }}
                options={optionsColor}
                placeholder="Select Color"
              />
            </Form.Item>
          </div>
        </div>
        {/* IMAGE */}
        <div id="image" className="flex justify-center gap-40">
          <div
            id="main-image"
            className="flex flex-col justify-center items-center "
          >
            <div>
              {previewMainPic && (
                <Image
                  src={`${URL.createObjectURL(previewMainPic)}`}
                  width={180}
                  className="rounded-lg shadow"
                  alt={`${mainPicURL}`}
                />
              )}
              {mainPicURL && !previewMainPic && (
                <Image
                  src={`${mainPicURL}`}
                  width={180}
                  className="rounded-lg shadow"
                  alt={`${mainPicURL}`}
                />
              )}
            </div>

            <div className="py-1 font-medium"> Main Image</div>
            <div className="flex">
              <Form.Item
                name="main_image"
                getValueFromEvent={mainImageFile}
                rules={[
                  {
                    required: true,
                    message: "Please input main image!",
                  },
                ]}
              >
                <Upload
                  name="fileMain"
                  maxCount={1}
                  customRequest={(info) => {
                    setPreviewMainPic(info.file);
                  }}
                  showUploadList={false}
                  beforeUpload={(file) => {
                    return new Promise((resolve, reject) => {
                      // check the file type
                      const isImg =
                        file.type === "image/jpeg" ||
                        file.type === "image/jpg" ||
                        file.type === "image/png" ||
                        file.type === "image/gif";
                      if (!isImg) {
                        message.error("You can only upload images");
                        reject(false);
                      }

                      const isLt5M = file.size / 1024 / 1024 <= 2;
                      // check the file size
                      if (!isLt5M) {
                        message.error(`Image must smaller than 2MB!`);
                        reject(false);
                      } else {
                        resolve(true);
                      }
                    });
                  }}
                  headers={{ authorization: "authorization-text" }}
                >
                  <Button icon={<UploadOutlined />} className="mb-1">
                    {!mainPicURL ? "Upload" : "Change Picture"}
                  </Button>
                </Upload>
              </Form.Item>
              {previewMainPic && (
                <Button
                  icon={<DeleteOutlined />}
                  danger
                  type="text"
                  className="ml-2"
                  onClick={() => setPreviewMainPic(null)}
                ></Button>
              )}
            </div>
          </div>
          <div
            id="sub-image"
            className="flex flex-col justify-center items-center"
          >
            <div>
              {previewSubPic && (
                <Image
                  src={`${URL.createObjectURL(previewSubPic)}`}
                  width={180}
                  className="rounded-lg shadow"
                  alt={`${subPicURL}`}
                />
              )}
              {subPicURL && !previewSubPic && (
                <Image
                  src={`${subPicURL}`}
                  width={180}
                  className="rounded-lg shadow"
                  alt={`${subPicURL}`}
                />
              )}
            </div>
            <div className="py-1 font-medium"> Sub Image</div>
            <div className="flex ">
              <Form.Item
                name="sub_image"
                getValueFromEvent={subImageFile}
                rules={[
                  {
                    required: true,
                    message: "Please input sub image!",
                  },
                ]}
              >
                <Upload
                  name="fileSub"
                  maxCount={1}
                  customRequest={(info) => {
                    setPreviewSubPic(info.file);
                  }}
                  showUploadList={false}
                  beforeUpload={(file) => {
                    return new Promise((resolve, reject) => {
                      // check the file type
                      const isImg =
                        file.type === "image/jpeg" ||
                        file.type === "image/jpg" ||
                        file.type === "image/png" ||
                        file.type === "image/gif";
                      if (!isImg) {
                        message.error("You can only upload images");
                        reject(false);
                      }

                      const isLt5M = file.size / 1024 / 1024 <= 2;
                      // check the file size
                      if (!isLt5M) {
                        message.error(`Image must smaller than 2MB!`);
                        reject(false);
                      } else {
                        resolve(true);
                      }
                    });
                  }}
                  headers={{ authorization: "authorization-text" }}
                >
                  <Button icon={<UploadOutlined />} className="mb-1">
                    {!subPicURL ? "Upload" : "Change Picture"}
                  </Button>
                </Upload>
              </Form.Item>
              {previewSubPic && (
                <Button
                  icon={<DeleteOutlined />}
                  danger
                  type="text"
                  className="ml-2"
                  onClick={() => setPreviewSubPic(null)}
                ></Button>
              )}
            </div>
          </div>
        </div>
        {/* LIST IMAGE */}
        <div className="mx-20">
          <Form.Item
            name="list_image"
            label={<span className="font-medium">List Image</span>}
            valuePropName="fileList"
            getValueFromEvent={listImageFile}
            rules={[
              {
                required: true,
                message: "Please input list images!",
              },
            ]}
          >
            <Upload
              action=""
              listType="picture-card"
              fileList={fileList}
              multiple={true}
              onChange={onChangeListImage}
              // onPreview={onPreview}
            >
              + Upload
            </Upload>
          </Form.Item>
        </div>
        <Form.Item
          label={<span className="font-medium">Short</span>}
          name={`short`}
        >
          <Input.TextArea rows={4} placeholder="Input short" />
        </Form.Item>
        <Form.Item
          label={<span className="font-medium">Description</span>}
          name={`description`}
        >
          <Editor />
        </Form.Item>
      </Form>
    </div>
  );
};

export default ProductForm;
