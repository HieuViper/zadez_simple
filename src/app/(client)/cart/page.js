"use client";
import { DeleteTwoTone } from "@ant-design/icons";
import { Button, Divider, InputNumber } from "antd";
import Image from "next/image";

const CartPage = () => {
  return (
    <div>
      <ol className="flex items-center justify-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white  rounded-lg  sm:text-base  sm:p-4 sm:space-x-4 mb-4 mt-0">
        <li className="flex items-center text-primary">
          <span className="flex items-center justify-center w-5 h-5 me-2 text-xs bg-primary text-white rounded-full shrink-0 ">
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
        <li className="flex items-center">
          <span className="flex items-center justify-center w-5 h-5 me-2 text-xs bg-gray-400 text-white rounded-full shrink-0 ">
            2
          </span>
          Checkout
        </li>
      </ol>

      <div className="grid lg:grid-cols-12 grid-cols-1 gap-24">
        <div className="lg:col-span-8 gap-8 flex flex-col">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="lg:col-span-4 h-fit p-4 border border-slate-100 border-solid rounded-xl shadow-sm flex flex-col gap-5 ">
          <div className="text-xl font-[500]">Payment Details</div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>520.000</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Discount</span>
              <span>-20.000</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Shipment cost</span>
              <span>30.000</span>
            </div>
            <Divider style={{ marginTop: 0, marginBottom: 0 }} />
            <div className="flex justify-between font-[500] text-xl">
              <span>Grand Total</span>
              <span>530.000</span>
            </div>
          </div>
          <Button type="primary">Proceed to checkout </Button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

const Card = () => {
  return (
    <div className="grid grid-cols-12 p-3 border border-solid border-slate-50 shadow rounded-xl">
      <div className="col-span-4 flex justify-center items-center">
        <Image src="/no-image.jpg" width={100} height={100} alt="" />
      </div>
      <div className="col-span-8 flex flex-col gap-3">
        <div className="font-[500] uppercase text-xl">
          MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch
        </div>

        <div className="flex flex-col text-xs">
          <div className="flex gap-2 items-center">
            <div className="w-4 h-4 rounded-full bg-black"></div>
            Black
          </div>
          <div className="flex gap-2">Free Shipping</div>
          <div className="flex gap-2">In Stock</div>
        </div>

        <div className="flex justify-between">
          <div className="flex gap-3 items-center">
            <div className="line-through text-sm text-gray-300">1,230,000₫</div>
            <div className="text-lg font-[500]">1,000,000₫</div>
          </div>
          <div className="flex gap-2">
            <DeleteTwoTone twoToneColor={"red"} />
            <InputNumber defaultValue={3} onChange={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
};
