"use client";
import { moneyToString } from "@/library/util";
import store from "@/library/zustand/store";
import { PhoneOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Tag } from "antd";
import Image from "next/image";
const ProductCard = ({ data }) => {
  const { addToCart, cartState } = store();
  return (
    <div className="shadow-lg p-4 py-10 w-72 relative">
      {data.discount_price > 0 && (
        <div className="absolute top-1 left-1 px-4 py-2">
          <Tag color="orange">Giảm giá</Tag>
        </div>
      )}
      <div className="flex justify-center items-center ">
        {/* <img src={data.main_image} width="217" className='object-cover' /> */}
        <Image
          src={data.main_image}
          width={217}
          height={217}
          className="rounded-lg"
          alt={data.name}
        />
        a
      </div>
      <hr className="my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
      <h1 className="text-base font-light leading-6 text-start pb-2">
        {data.name}
      </h1>
      <div className="text-lg font-light leading-normal pb-2 text-start">
        Giá:{" "}
        {data.discount_price > 0 ? (
          <>
            <span className=" line-through">{moneyToString(data.price)}Đ</span>{" "}
            <span>{moneyToString(data.discount_price)}Đ</span>
          </>
        ) : (
          <span>{moneyToString(data.price)}Đ</span>
        )}{" "}
      </div>
      {data.stock == "in" ? (
        <Button
          icon={<ShoppingCartOutlined />}
          type="primary"
          ghost
          onClick={() => addToCart(data)}
        >
          Thêm vào giỏ hàng
        </Button>
      ) : (
        <Button icon={<PhoneOutlined />} type="primary" ghost>
          Liên hệ
        </Button>
      )}
    </div>
  );
};

export default ProductCard;
