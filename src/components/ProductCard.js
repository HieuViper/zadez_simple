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
    // <div className="shadow-lg  p-4 py-10 md:w-52 lg:w-44 xl:w-64 2xl:w-80 bg-white rounded-xl relative ">
    <div className="shadow-lg p-2 min-h-[420px] bg-white rounded-xl relative ">
      {data.discount_price > 0 && (
        <div className="absolute top-0 left-0 px-4 py-2 z-20">
          <Tag color="orange">Giảm giá</Tag>
        </div>
      )}
      <div className="flex justify-center h-[225px] items-center py-2 transition duration-200 hover:-translate-y-2">
        <Link href={`/products/${data.id}`}>
          <Image
            // sizes="100vw"
            // style={{
            //   width: "100%",
            //   height: "auto",
            //   objectFit: 'cover'
            // }}
            src={data.main_image}
            width={217}
            height={217}
            className="rounded-lg"
            alt={data.name}
          />
        </Link>
      </div>
      <hr className="my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
      <h1 className="text-xl font-semibold leading-6 text-center pb-2">
        {data.name}
      </h1>
      <div className="flex flex-col justify-center items-center font-medium leading-normal pb-2 text-start">
        {data.discount_price > 0 ? (
          <div className="">
            Giá: <span className="text-base line-through mx-2">{moneyToString(data.price)} ₫</span>{" "}
            <div className="flex">
              <span className=" text-red-500 font-semibold text-base md:text-lg lg:text-xl mx-2">{moneyToString(data.discount_price)} ₫</span>
              <Tag color="red" >
                <div className="border border-red-500 pt-[2px]">
                  -
                  {Math.floor(
                    ((data.price - data.discount_price) / data.price) * 100
                  )}
                  %
                </div>
              </Tag>
            </div>
          </div>
        ) : (
          <div>
            Giá:
            <span className="text-red-500 font-semibold text-sx md:text-sm lg:text-base mx-2">{moneyToString(data.price)} ₫</span>
          </div>
        )}{" "}
      </div>
      <div className="flex justify-center items-center mt-2">
        {data.stock == "in" ? (
          <Button
            icon={<ShoppingCartOutlined />}
            type="primary"
            size="large"
            onClick={() => addToCart(data)}
          >
            Thêm vào giỏ hàng
          </Button>
        ) : (
          <Link href='/contact'>
            <Button icon={<PhoneOutlined />} type="primary" ghost size="large">
              Liên hệ
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
