import React, { useEffect, useState } from "react";
import { AutoComplete, Button, Form, Modal, Tag } from "antd";
import { SearchOutlined, RiseOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useDebounce from "@/library/useDebounce";
import useSWR from "swr";

const ModalSearch = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const [isOpenOptions, setIsOpenOptions] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const debouncedInputValue = useDebounce(inputValue, 200);
  const fetcher = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json();
  };
  const { data: options, error } = useSWR(
    debouncedInputValue
      ? `/api/products?limit=1000&keyword=${debouncedInputValue}`
      : null,
    fetcher
  );
  const onFinish = (values) => {
    if (values.searchForm.length > 0) {
      router.push(`/tim-kiem?key=${values.searchForm.replace(/\s+/g, "-")}`);
      setIsModalOpen(false);
    }
  };
  const handleSelect = (value) => {
    if (value && value.length > 0 && isOpenOptions == false) {
      router.push(`/tim-kiem?key=${value.replace(/\s+/g, "-")}`);
      setIsModalOpen(false);
    }
  };
  const handleOnDropdownVisibleChange = (value) => {
    setIsOpenOptions(value);
  };

  const handleChange = (value) => {
    setInputValue(value);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.length > 0) {
      form.submit();
      setIsModalOpen(false);
    }
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const suggestSearch = [
    { name: "Chuột gaming" },
    { name: "Chuột không dây" },
    { name: "Bàn phím gaming" },
    { name: "Bàn phím văn phòng" },
    { name: "Đế treo tai nghe" },
    { name: "Chuột" },
    { name: "Bàn Phím" },
    { name: "Tai nghe" },
    { name: "Phụ kiện" },
    { name: "Túi chống sốc" },
  ];
  return (
    <>
      <Modal
        title="Tìm kiếm"
        open={isModalOpen}
        onCancel={handleCancel}
        footer=""
      >
        <div className="flex justify-center items-center">
          <Form
            name="form_search"
            onFinish={onFinish}
            form={form}
            className="flex"
          >
            <Form.Item name="searchForm">
              <AutoComplete
                style={{ width: 220 }}
                onSelect={handleSelect}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                onDropdownVisibleChange={handleOnDropdownVisibleChange}
                backfill={true}
                placeholder="Bạn muốn tìm gì..."
                value={inputValue}
                allowClear={true}
                ref={(input) => input && input.focus()}
              >
                {options?.data?.map((option, i) => (
                  <AutoComplete.Option key={i} value={option.name}>
                    <div
                      className="flex gap-4"
                      onClick={() => {
                        setIsModalOpen(false),
                          router.push(`/san-pham/${option.product_code}`);
                      }}
                    >
                      <Image
                        src={option?.main_image}
                        width={30}
                        height={30}
                        alt={option?.name}
                      />
                      {option.name}
                    </div>
                  </AutoComplete.Option>
                ))}
              </AutoComplete>
            </Form.Item>
            <Form.Item>
              <Button
                htmlType="submit"
                type="default"
                icon={<SearchOutlined />}
              />
            </Form.Item>
          </Form>
        </div>
        <div className="font-semibold mt-4 mb-2">
          Xu hướng tìm kiếm <RiseOutlined />
        </div>
        <div className="flex flex-wrap gap-y-2">
          {suggestSearch?.map((item, i) => (
            <Tag
              key={i}
              onClick={() => {
                router.push(`/tim-kiem?key=${item?.name.replace(/\s+/g, "-")}`),
                  handleCancel();
              }}
              className="cursor-pointer"
            >
              {item.name}
            </Tag>
          ))}
        </div>
      </Modal>
      <SearchOutlined
        style={{ fontSize: "24px" }}
        onClick={() => {
          setIsModalOpen(true), form.setFieldsValue({ searchForm: "" });
        }}
      />
    </>
  );
};
export default ModalSearch;

export const AutoCompleteSearch = ({keyword}) => {
  const router = useRouter();
  const [form] = Form.useForm();
  const [inputValue, setInputValue] = useState("");
  const debouncedInputValue = useDebounce(inputValue, 200);
  const fetcher = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json();
  };
  const { data: options, error } = useSWR(
    debouncedInputValue
      ? `/api/products?limit=1000&keyword=${debouncedInputValue}`
      : null,
    fetcher
  );
  //form handle
  const onFinish = (values) => {
    if (values.searchForm.length > 0) {
    router.push(`/tim-kiem?key=${values.searchForm.replace(/\s+/g, "-")}`);
    // setInputValue("")
  }
  };

  const handleSelect = (value, option) => {
    if (value && value.length > 0 && isOpenOptions == false) {
      router.push(`/tim-kiem?key=${value.replace(/\s+/g, "-")}`);
    }
    // router.push(`/san-pham?key=${value}`);
    // setInputValue("")
  };
  const handleChange = (value) => {
    setInputValue(value);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      form.submit();
      // setInputValue("")
    }
  };
  const [isOpenOptions, setIsOpenOptions] = useState(false);
  const handleOnDropdownVisibleChange = (value) => {
    setIsOpenOptions(value);
  };
  useEffect(() => {
    form.setFieldsValue({ searchForm: keyword?.replace(/-/g, ' ') })
},[keyword]);
  return (
    <>
      <div className="flex justify-center items-center">
        <Form
          name="form_search"
          onFinish={onFinish}
          form={form}
          className="flex"
        >
          <Form.Item name="searchForm">
            <AutoComplete
              style={{ width: 220 }}
              onSelect={handleSelect}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              onDropdownVisibleChange={handleOnDropdownVisibleChange}
              backfill={true}
              placeholder="Bạn muốn tìm gì..."
              value={inputValue}
              allowClear={true}
            >
              {options?.data?.map((option, i) => (
                <AutoComplete.Option key={i} value={option.name}>
                  {/* <Link
                    style={{ textDecoration: "none", color: "black" }}
                    href={`/san-pham/${option.product_code}`}
                    className=""
                  > */}
                    <div className="flex gap-4"
                    onClick={() => {
                        router.push(`/san-pham/${option.product_code}`);
                    }}>
                      <Image
                        src={option?.main_image}
                        width={30}
                        height={30}
                        alt={option?.name}
                      />
                      {option.name}
                    </div>
                  {/* </Link> */}
                </AutoComplete.Option>
              ))}
            </AutoComplete>
          </Form.Item>
          <Form.Item>
            <Button
              htmlType="submit"
              type="default"
              icon={<SearchOutlined />}
            />
          </Form.Item>
        </Form>
      </div>
    </>
  );
};
