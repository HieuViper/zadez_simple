"use client";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Divider, Form, Input } from "antd";
import Image from "next/image";

const CheckoutPage = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("🚀 ~ file: page.js:8 ~ onFinish ~ values:", values);
  };
  return (
    <Form layout="vertical" onFinish={onFinish}>
      <ol className="flex items-center justify-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white  rounded-lg  sm:text-base  sm:p-4 sm:space-x-4 mb-4 mt-0">
        <li className="flex items-center ">
          <span className="flex items-center justify-center w-5 h-5 me-2 text-xs bg-gray-400 text-white rounded-full shrink-0 ">
            1
          </span>
          Cart
          <svg
            className="w-3 h-3 ms-2 sm:ms-4 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 12 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m7 9 4-4-4-4M1 9l4-4-4-4"
            />
          </svg>
        </li>
        <li className="flex items-center text-primary">
          <span className="flex items-center justify-center w-5 h-5 me-2 text-xs bg-primary text-white rounded-full shrink-0 ">
            2
          </span>
          Checkout
        </li>
      </ol>

      <div className="grid lg:grid-cols-12 grid-cols-1 gap-24">
        <div className="lg:col-span-8 flex flex-col h-fit border border-slate-100 border-solid shadow-sm rounded-xl p-4">
          <Form.Item label="Tên người nhận">
            <Input placeholder="Nhập tên người nhận" />
          </Form.Item>
          <Form.Item label="Địa chỉ">
            <Input placeholder="Nhập địa chỉ người nhận" />
          </Form.Item>
          <Form.Item label="Số điện thoại">
            <Input placeholder="Nhập số điện thoại người nhận" />
          </Form.Item>
          <Form.Item label="E-mail">
            <Input placeholder="Nhập email người nhận" />
          </Form.Item>
          <div className="flex justify-start">
            <Button icon={<ArrowLeftOutlined />} type="dashed">
              Quay lại giỏ hàng
            </Button>
          </div>
        </div>
        <div className="lg:col-span-4 h-fit p-4 border border-slate-100 border-solid rounded-xl shadow-sm flex flex-col gap-8 ">
          <div className="text-xl font-[500]">Đơn hàng của bạn</div>
          <div className="flex flex-col gap-8">
            {/* Card section */}
            <div className="flex flex-col gap-2">
              <Card />
              <Card />
              <Card />
            </div>
            <div className="flex items-center gap-3">
              <Input placeholder="Discount code" />
              <Button>Apply</Button>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-sm">
                <span>Tổng giá sản phẩm</span>
                <span>520.000</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Giảm giá</span>
                <span>-20.000</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Phí giao hàng</span>
                <span>30.000</span>
              </div>
              <Divider style={{ marginTop: 0, marginBottom: 0 }} />
              <div className="flex justify-between font-[500] text-xl">
                <span>Tổng Hoá Đơn</span>
                <span>530.000</span>
              </div>
            </div>
          </div>
          <Button htmlType="submit" type="primary">
            Comfirm & Complete Order
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default CheckoutPage;

const Card = () => {
  return (
    <>
      <div className="flex text-sm items-center">
        <Image src="/no-image.jpg" width={100} height={100} alt="" />
        <div className="flex flex-col gap-2 text-xs">
          <span>MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch</span>
          <span>Black</span>
          <span>x2</span>
          <span className="text-right">10.000.000</span>
        </div>
      </div>
      <Divider style={{ marginTop: 1, marginBottom: 1 }} />
    </>
  );
};
