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
    // <div className="flex flex-col shadow-lg p-2 min-h-[420px] bg-white rounded-xl relative ">
    //   <div className="flex-1">
    //     {data.discount_price > 0 && (
    //       <div className="absolute top-0 left-0 px-4 py-2 z-20">
    //         <Tag color="orange">Giảm giá</Tag>
    //       </div>
    //     )}
    //     <div className="flex justify-center h-[225px] items-center py-2 transition duration-200 hover:-translate-y-2 pt-4">
    //       <Link href={`/san-pham/${data.product_code && data.product_code}-${data.id}`}>
    //         <Image
    //           // sizes="100vw"
    //           // style={{
    //           //   width: "100%",
    //           //   height: "auto",
    //           //   objectFit: 'cover'
    //           // }}
    //           src={data.main_image}
    //           width={217}
    //           height={217}
    //           className="rounded-lg"
    //           alt={data.name}
    //         />
    //       </Link>
    //     </div>
    //     <hr className="my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
    //     <div className="flex flex-col justify-center items-center font-medium leading-normal pb-2 text-start">
    //       <Link style={{ textDecoration: "none", color: "black" }} href={`/san-pham/${data.product_code && data.product_code}-${data.id}`}>
    //         <div className="text-xl font-semibold leading-6 text-center my-1">
    //           {data.name}
    //         </div>
    //       </Link>
    //       {data.discount_price > 0 ? (
    //         <div className="">
    //           Giá: <span className="text-base line-through mx-2">{moneyToString(data.price)} ₫</span>{" "}
    //           <div className="flex">
    //             <span className=" text-red-800 font-semibold text-base md:text-lg lg:text-xl mx-2">{moneyToString(data.discount_price)} ₫</span>
    //             <Tag color="red" >
    //               <div className="border border-red-500 pt-[2px]">
    //                 -
    //                 {Math.floor(
    //                   ((data.price - data.discount_price) / data.price) * 100
    //                 )}
    //                 %
    //               </div>
    //             </Tag>
    //           </div>
    //         </div>
    //       ) : (
    //         <div>
    //           Giá:
    //           <span className="text-red-800 font-semibold text-base md:text-lg lg:text-xl mx-2">{moneyToString(data.price)} ₫</span>
    //         </div>
    //       )}{" "}
    //     </div>
    //   </div>
    //   <div className="flex justify-center items-center my-2 ">
    //     {data.stock == "in" ? (
    //       <Button
    //         style={{ backgroundColor: '#a8071a' }}
    //         icon={<ShoppingCartOutlined />}
    //         type="primary"
    //         size="large"
    //         onClick={() => addToCart(data)}
    //       >
    //         Thêm vào giỏ hàng
    //       </Button>
    //     ) : (
    //       <Link href='/contact'>
    //         <Button style={{ color: '#a8071a' }} icon={<PhoneOutlined />} type="primary" ghost size="large">
    //           Liên hệ
    //         </Button>
    //       </Link>
    //     )}
    //   </div>
    // </div>
    <div className="w-[288px] h-[347px] shadow-md rounded-md relative">
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
        <div className="w-[256px] h-[190px] transition duration-200 hover:-translate-y-2 ">
          <Link href={`/san-pham/${data?.product_code}-${data.id}`}>
            <Image
              style={{
                objectFit: 'contain'
              }}
              src={data.main_image}
              width={256}
              height={190}
              className="rounded-lg"
              alt={data.name}
            />
          </Link>
        </div>
        <hr className="my-4 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
        <Link style={{ textDecoration: "none", color: "#0C0C0C" }} href={`/san-pham/${data?.product_code}-${data.id}`}>
          <div className="mb-4 text-[#0C0C0C] text-start">
            {data.name}
          </div>
        </Link>
        <div className="grid grid-cols-2 w-[256px]">
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
