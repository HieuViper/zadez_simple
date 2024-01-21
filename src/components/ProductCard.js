"use client";
import { moneyToString } from "@/library/util";
import store from "@/library/zustand/store";
import { PhoneOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Tag } from "antd";
import Image from "next/image";
import Link from "next/link";
const ProductCard = ({ data }) => {
  const { addToCart } = store();
  return (
    <div className=" h-[347px] shadow-lg rounded-xl relative bg-white text-start">
      {data.discount_price > 0 && (
        <div className="absolute w-[49px] h-[32px] top-4 left-0 bg-[#FDDBC9] text-[#F45E0C] leading-[24px] text-base rounded-r-lg z-20">
          <div className=" py-1 px-[6px]">
            -
            {Math.floor(
              ((data.price - data.discount_price) / data.price) * 100
            )}
            %
          </div>
        </div>
      )}
      <div className="p-4">
        <div className=" h-[190px] transition duration-200 hover:-translate-y-2 ">
          <Link href={`/san-pham/${data?.product_code}-${data.id}`}>
            <Image
              style={{
                width:'100%',
                objectFit: 'contain'
              }}
              src={data.main_image}
              width={256}
              height={190}
              className="rounded-lg"
              alt={data.name}
              loading="lazy"
            />
          </Link>
        </div>
        <hr className="my-4 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
        <Link style={{ textDecoration: "none", color: "#0C0C0C" }} href={`/san-pham/${data?.product_code}-${data.id}`}>
          <div className="mb-4 text-[#0C0C0C] text-start break-words">
            {data.name}
          </div>
        </Link>
        <div className="grid grid-cols-2">
          <div className="col-span-1">
            {data.discount_price > 0 ? (<div>
              <div className="text-sm font-normal text-[#717171] line-through">
                {moneyToString(data.price)} ₫
              </div>
              <div className="text-lg font-light text-[#0C0C0C] ">
                {moneyToString(data.discount_price)} ₫
              </div>
            </div>) : <div className="text-lg font-light text-[#0C0C0C] mt-5 ">
              {moneyToString(data.price)} ₫
            </div>}
          </div>
          <div className="col-span-1 flex justify-end items-end">
            {data.stock == "in" ? (<ShoppingCartOutlined onClick={() => addToCart(data)} size={24} style={{ color: "#063A88" }} />)
              : <Link href='/contact'><PhoneOutlined /></Link>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
