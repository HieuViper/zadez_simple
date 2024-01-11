"use client";
import React, { useEffect, useState } from 'react'
import { SwapLeftOutlined, UploadOutlined, DeleteOutlined } from "@ant-design/icons";
import {
    Button,
    Form,
    Image,
    Input,
    Select,
    Switch,
    Tabs,
    Tag,
    Tooltip,
    TreeSelect,
    Upload,
    message,
} from "antd";
import Link from "next/link";
import {
    useParams,
    usePathname,
    useRouter,
    useSearchParams,
} from "next/navigation";
import { useSWRData, useSWRUpload } from '@/library/api';
const CategoriesForm = ({ params }) => {

    const isAddMode = params.id == 0 ? true : false;
    const searchParams = useSearchParams();
    const router = useRouter();
    const [form] = Form.useForm();
    const [loadingSubmit, setLoadingSubmit] = useState(false)
    const [isChangeCode, setIsChangeCode] = useState(false)
    const [value, setValue] = useState();
    const [mainPicURL, setMainPicURL] = useState(null);
    const [previewMainPic, setPreviewMainPic] = useState(null);
    const { data, isLoading, error, createData, updateData } = useSWRData(
        `/api/categories`,
        isAddMode ? {} : { id: params.id }
    );

    const { data: categories } = useSWRData("/api/categories", {
        limit: 1000,
    });

    const { uploadFormData: uploadImage } = useSWRUpload(
        `/api/products/image`,
        isAddMode ? {} : { id: params.id }
    );
    const handleSubmit = async (value) => {
        setLoadingSubmit(true);
        const formMainImage = new FormData();
        formMainImage.append('file', previewMainPic);
        const mainImage = previewMainPic && await uploadImage(formMainImage);
        // console.log('mainImage :', mainImage);
        try {
            if (isAddMode) {
                const category = { ...value, image: mainImage?.url || "" }
                // console.log('value add', category);
                createData(category).then((res) => {
                    if (res.status === 200) {
                        setLoadingSubmit(false);
                        router.push(`/admin/categories`);
                    }
                })
            } else {
                const category = {
                    ...value,
                    category_code: value.category_code || data?.category_code,
                    parent: value.parent || null,
                    image: mainImage?.url || data?.image || ""
                }
                // console.log('category edit', category);
                updateData(params.id, category).then((res) => {
                    if (res.status === 200) {
                        setLoadingSubmit(false);
                        router.push(`/admin/categories`);
                    }
                })
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
    // CHANGE NAME TO CODE
    const changeCode = (e) => {
        if (e.length <= 0) {
            setIsChangeCode(false)
        } else {
            setIsChangeCode(true)
        }
    }
    function generateCateCode(e) {
        let cateCode = e.trim().normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd')
            .replace(/Đ/g, 'D')
            .replace(/\s/g, "-")
            .toLowerCase()
        if (!isChangeCode) {
            form.setFieldValue('category_code', cateCode);
        }
    }
    // CREATE TREE DATA
    function buildTreeData(data, parent = null) {
        return data
            .filter((item) => item.parent === parent)
            .map((item) => ({
                title: item.name,
                value: item.id,
                children: buildTreeData(data, item.id),
            }));
    }
    const filterCategories = categories && categories?.data.filter((item) => item.id !== data?.id)
    const treeData = categories && buildTreeData(filterCategories, null);

    const onChange = (newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        if (data) {
            form.setFieldsValue(data);
            setMainPicURL(data?.image)
        }
    }, [data]);

    if (error) return <div>failed to load</div>;
    // if (isLoading) return <div>loading...123</div>;
    return (
        <div>
            <div className="flex justify-between mb-4">
                <Button type="dashed" icon={<SwapLeftOutlined />}>
                    <Link href={`/admin/categories`}>Back to Categories</Link>
                </Button>
                {isAddMode ? (

                    <Button form="myForm" type="primary" htmlType="submit"
                        loading={loadingSubmit}
                    >
                        Add New Category
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
                    span: 18
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
                    <Input onChange={(e) => generateCateCode(e.target.value)} placeholder="Input name" />
                </Form.Item>
                {isAddMode ? <Form.Item
                    label={<span className="font-medium">Code</span>}
                    name="category_code"
                    rules={[
                        {
                            required: true,
                            message: "Please input code!",
                        },
                    ]}
                >
                    <Input onChange={(e) => changeCode(e.target.value)} placeholder="Input category code" />
                </Form.Item>
                    : data?.type == "products" ? <Form.Item
                        label={<span className="font-medium">Code</span>}
                        name="category_code"
                        rules={[
                            {
                                required: true,
                                message: "Please input code!",
                            },
                        ]}
                    >
                        <Input onChange={(e) => changeCode(e.target.value)} placeholder="Input category code" />
                    </Form.Item> : <></>}
                <Form.Item
                    label={<span className="font-medium ">Parent</span>}
                    name={`parent`}
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
                            overflow: 'auto',
                        }}
                        placeholder="Select parent"
                    />
                </Form.Item>
                <Form.Item
                    label={<span className="font-medium ">Type</span>}
                    name={`type`}
                // rules={[
                //     {
                //         required: true,
                //         message: "Please input type!",
                //     },
                // ]}
                >
                    <Input placeholder="Input type" />
                </Form.Item>
                <Form.Item
                    label={<span className="font-medium ">Order</span>}
                    name={`order`}
                >
                    <Input placeholder="Input order" />
                </Form.Item>
                <Form.Item
                    label={<span className="font-medium ">Description</span>}
                    name={`description`}
                >
                    <Input.TextArea rows={4} placeholder="Input description" />
                </Form.Item>
                <div id="main-image" className="flex flex-col justify-center items-center " >
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


                    <div className='py-1 font-medium'> Main Image</div>
                    <div className='flex' >
                        <Form.Item
                            name="image"
                            getValueFromEvent={mainImageFile}
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

                                        const isLt5M =
                                            file.size / 1024 / 1024 <=
                                            2;
                                        // check the file size
                                        if (!isLt5M) {
                                            message.error(
                                                `Image must smaller than 2MB!`
                                            );
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
                        {previewMainPic &&
                            <Button icon={<DeleteOutlined />} danger type="text" className='ml-2'
                                onClick={() => setPreviewMainPic(null)}
                            ></Button>
                        }
                    </div>
                </div>
            </Form>

        </div>
    )
}

export default CategoriesForm