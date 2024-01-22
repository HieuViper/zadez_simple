"use client";
import React, { useEffect, useState } from "react";
import SlideBanner from "@/components/SlideBanner";
import Link from "next/link";
import Image from "next/image";
import { useSWRData } from "@/library/api";
import { useRouter } from "next/navigation";
const Categories = () => {
    const router = useRouter();
    const products = [
        {
            product_code: "999",
            main_image: "/images/categories/audio.webp",
            price: 9,
            discount_price: 1,
            status: "in",
            name: "aGaming",

        },
        {
            product_code: "999",
            main_image: "/images/categories/audio.webp",
            price: 99,
            discount_price: 1,
            status: "in",
            name: "bGaming",

        },
        {
            product_code: "999",
            main_image: "/images/categories/audio.webp",
            price: 999,
            discount_price: 1,
            status: "in",
            name: "cGaming",

        },
        {
            product_code: "999",
            main_image: "/images/categories/audio.webp",
            price: 9999,
            discount_price: 1,
            status: "in",
            name: "dGaming",

        },
        {
            product_code: "999",
            main_image: "/images/categories/audio.webp",
            price: 999999,
            discount_price: 1,
            status: "in",
            name: "eGaming",

        },
    ];
    const {
        data: product,
        isLoading,
        error,
        mutate,
    } = useSWRData(`/api/products`, { limit: 6, status: "new" });
    // console.log('product :', product?.data);
    const banners = [
        { name: "Zadez", image: "/images/banner1.webp" },
        { name: "Zadez", image: "/images/banner2.webp" },
        { name: "Zadez", image: "/images/banner3.webp" },
    ];
    return (
        <div className="my-10 text-center">
            <div id="banner" className="w-4/5 m-auto">
                <SlideBanner data={banners} width={700} height={400} />
            </div>
            <h2 className="text-4xl pt-4 font-bold ">Danh mục sản phẩm</h2>
            {/* LIST CATEGORY */}
            <section className="">
        {/* <h2 className="text-3xl text-primary font-bold text-center mt-6 mb-2">Danh mục sản phẩm</h2> */}
        <div className="grid grid-cols-3 my-4">
          <div
            className="col-span-3 md:col-span-1 flex flex-col justify-center items-center bg-[#e5e7eb] rounded-2xl m-1 md:m-2 lg:m-4 cursor-pointer  text-center"
          >
            <Link style={{ textDecoration: 'none' }} href='/danh-muc-san-pham/0?type=headset'
              className=" hover:transform hover:scale-105 transition-transform duration-300 ease-in-out text-black hover:text-primary hover:font-semibold">
              <Image
                // sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                width={200}
                height={200}
                src="/images/categories/headset.webp"
                alt="Tai nghe"
                className="w-32 h-32 md:w-full md:h-full"
              />
              <div className="mb-4">Tai nghe</div>
            </Link>
          </div>
          <div className="col-span-3 md:col-span-1 grid grid-cols-2">
            <div
              className=" col-span-1 flex flex-col justify-center items-center bg-[#e5e7eb] rounded-2xl m-1 md:m-2 lg:m-4 cursor-pointer hover:text-primary text-center"
            >
              <Link style={{ textDecoration: 'none' }} href='/danh-muc-san-pham/0?type=mouse'
                className="hover:transform hover:scale-105 transition-transform duration-300 ease-in-out text-black hover:text-primary hover:font-semibold">
                <Image
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  width={200}
                  height={200}
                  src="/images/categories/mouse.webp"
                  alt="Chuột"
                />
                <div className="mb-4">Chuột</div>
              </Link>
            </div>
            <div
              className="col-span-1 flex flex-col justify-center items-center bg-[#e5e7eb] rounded-2xl m-1 md:m-2 lg:m-4 cursor-pointer hover:text-primary text-center"
            >
              <Link style={{ textDecoration: 'none' }} href='/danh-muc-san-pham/0?type=keyboard'
                className="hover:transform hover:scale-105 transition-transform duration-300 ease-in-out text-black hover:text-primary hover:font-semibold">
                <Image
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  width={200}
                  height={200}
                  src="/images/categories/keyboard.webp"
                  alt="Bàn phím"
                />
                <div className="mb-4">Bàn phím</div>
              </Link>
            </div>
            <div
              className=" col-span-1 flex flex-col justify-center items-center bg-[#e5e7eb] rounded-2xl m-1 md:m-2 lg:m-4 cursor-pointer hover:text-primary text-center"
            >
              <Link style={{ textDecoration: 'none' }} href='/danh-muc-san-pham/0?type=bag'
                className="hover:transform hover:scale-105 transition-transform duration-300 ease-in-out text-black hover:text-primary hover:font-semibold">
                <Image
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  width={200}
                  height={200}
                  src="/images/categories/bag.webp"
                  alt="Túi chống sốc"
                />
                <div className="mb-4">Túi chống sốc</div>
              </Link>
            </div>
            <div
              className="col-span-1 flex flex-col justify-center items-center bg-[#e5e7eb] rounded-2xl m-1 md:m-2 lg:m-4 cursor-pointer hover:text-primary hover:transform text-center"
            >
              <Link style={{ textDecoration: 'none' }} href='/danh-muc-san-pham/0?type=accessories'
                className="hover:transform hover:scale-105 transition-transform duration-300 ease-in-out text-black hover:text-primary hover:font-semibold">
                <Image
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  width={200}
                  height={200}
                  src="/images/categories/accessories.webp"
                  alt="Phụ kiện"
                />
                <div className="mb-4">Phụ kiện</div>
              </Link>
            </div>
          </div>
          <div
            className="col-span-3 md:col-span-1 flex flex-col justify-center items-center bg-[#e5e7eb] rounded-2xl m-1 md:m-2 lg:m-4 cursor-pointer hover:text-primary hover:transform text-center"
          >
            <Link style={{ textDecoration: 'none' }} href='/danh-muc-san-pham/0?type=speaker'
              className="hover:transform hover:scale-105 transition-transform duration-300 ease-in-out text-black hover:text-primary hover:font-semibold">
              <Image
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                width={200}
                height={200}
                src="/images/categories/audio.webp"
                alt="Loa"
              />
              <div className="mb-4">Loa</div>
            </Link>
          </div>
        </div>
        </section>
            {/* NEW PRODUCT */}
            {/* <h2 className="text-4xl pt-4 font-bold">Sản phẩm mới</h2>
            <div className="grid grid-cols-12 gap-4">
                {products &&
                    products.map((item, i) => (
                        <div
                            key={i}
                            className="col-span-12 md:col-span-6 lg:col-span-4 rounded-2xl"
                        >
                            <Image
                                sizes="100vw"
                                style={{
                                    width: "100%",
                                    height: "auto",
                                }}
                                width={300}
                                height={300}
                                src={item.main_image}
                                alt={item.name}
                            />
                        </div>
                    ))}
            </div> */}
        </div>
    );
};

export default Categories;
