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
            product_languages: [
                {
                    id: 1,
                    name: "Macbook Bro`",
                    short:
                        "Tai nghe không dây cao cấp với công nghệ ENC - Environmental Noise Cancellation hiện đại, trọng lượng siêu nhẹ 176 gram mang đến cảm giác đeo thoải mái trong thời gian dài. Kết nối Bluetooth 5.2 và chế độ EQ Bass cho chất lượng âm thanh tuyệt hảo. Hãy trải nghiệm ngay !",
                    description: "description",
                    productId: 128,
                    languageCode: "vi",
                },
            ],
        },
        {
            product_code: "999",
            main_image: "/images/categories/audio.webp",
            price: 99,
            discount_price: 1,
            status: "in",
            name: "bGaming",
            product_languages: [
                {
                    id: 1,
                    name: "Macbook Bro`",
                    short:
                        "Tai nghe không dây cao cấp với công nghệ ENC - Environmental Noise Cancellation hiện đại, trọng lượng siêu nhẹ 176 gram mang đến cảm giác đeo thoải mái trong thời gian dài. Kết nối Bluetooth 5.2 và chế độ EQ Bass cho chất lượng âm thanh tuyệt hảo. Hãy trải nghiệm ngay !",
                    description: "description",
                    productId: 128,
                    languageCode: "vi",
                },
            ],
        },
        {
            product_code: "999",
            main_image: "/images/categories/audio.webp",
            price: 999,
            discount_price: 1,
            status: "in",
            name: "cGaming",
            product_languages: [
                {
                    id: 1,
                    name: "Macbook Bro`",
                    short:
                        "Tai nghe không dây cao cấp với công nghệ ENC - Environmental Noise Cancellation hiện đại, trọng lượng siêu nhẹ 176 gram mang đến cảm giác đeo thoải mái trong thời gian dài. Kết nối Bluetooth 5.2 và chế độ EQ Bass cho chất lượng âm thanh tuyệt hảo. Hãy trải nghiệm ngay !",
                    description: "description",
                    productId: 128,
                    languageCode: "vi",
                },
            ],
        },
        {
            product_code: "999",
            main_image: "/images/categories/audio.webp",
            price: 9999,
            discount_price: 1,
            status: "in",
            name: "dGaming",
            product_languages: [
                {
                    id: 1,
                    name: "Macbook Bro`",
                    short:
                        "Tai nghe không dây cao cấp với công nghệ ENC - Environmental Noise Cancellation hiện đại, trọng lượng siêu nhẹ 176 gram mang đến cảm giác đeo thoải mái trong thời gian dài. Kết nối Bluetooth 5.2 và chế độ EQ Bass cho chất lượng âm thanh tuyệt hảo. Hãy trải nghiệm ngay !",
                    description: "description",
                    productId: 128,
                    languageCode: "vi",
                },
            ],
        },
        {
            product_code: "999",
            main_image: "/images/categories/audio.webp",
            price: 999999,
            discount_price: 1,
            status: "in",
            name: "eGaming",
            product_languages: [
                {
                    id: 1,
                    name: "Macbook Bro`",
                    short:
                        "Tai nghe không dây cao cấp với công nghệ ENC - Environmental Noise Cancellation hiện đại, trọng lượng siêu nhẹ 176 gram mang đến cảm giác đeo thoải mái trong thời gian dài. Kết nối Bluetooth 5.2 và chế độ EQ Bass cho chất lượng âm thanh tuyệt hảo. Hãy trải nghiệm ngay !",
                    description: "description",
                    productId: 128,
                    languageCode: "vi",
                },
            ],
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
        { name: "Zadez", image: "/images/history.png" },
        { name: "Zadez", image: "/images/history.png" },
        { name: "Zadez", image: "/images/history.png" },
    ];
    return (
        <div className="my-10 text-center">
            <div id="banner" className="w-4/5 m-auto">
                <SlideBanner data={banners} width={700} height={400} />
            </div>
            <h2 className="text-4xl pt-4 font-bold ">Danh mục sản phẩm</h2>
            {/* LIST CATEGORY */}
            <div className="grid grid-cols-3 my-8">
                <div
                    className="col-span-3 md:col-span-1 flex flex-col justify-center items-center bg-stone-200 rounded-2xl m-4 cursor-pointer hover:text-red-500 hover:transform hover:scale-105 transition-transform duration-300 ease-in-out"
                    onClick={() => {
                        router.push(`/categories/0?type=audio`);
                    }}
                >
                    <Image
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                        }}
                        width={200}
                        height={200}
                        src="/images/categories/headset.webp"
                        alt="Tai nghe"
                    />
                    <div>Tai nghe</div>
                </div>
                <div className="col-span-3 md:col-span-1 grid grid-cols-2">
                    <div
                        className=" col-span-2 md:col-span-1 flex flex-col justify-center items-center bg-stone-200 rounded-2xl m-4 cursor-pointer hover:text-red-500 hover:transform hover:scale-105 transition-transform duration-300 ease-in-out"
                        onClick={() => {
                            router.push(`/categories/0?type=mouse`);
                        }}
                    >
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
                    </div>
                    <div
                        className="col-span-2 md:col-span-1 flex flex-col justify-center items-center bg-stone-200 rounded-2xl m-4 cursor-pointer hover:text-red-500 hover:transform hover:scale-105 transition-transform duration-300 ease-in-out"
                        onClick={() => {
                            router.push(`/categories/0?type=mouse`);
                        }}
                    >
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
                    </div>
                    <div
                        className=" col-span-2 md:col-span-1 flex flex-col justify-center items-center bg-stone-200 rounded-2xl m-4 cursor-pointer hover:text-red-500 hover:transform hover:scale-105 transition-transform duration-300 ease-in-out"
                        onClick={() => {
                            router.push(`/categories/0?type=keyboard`);
                        }}
                    >
                        <Image
                            sizes="100vw"
                            style={{
                                width: "100%",
                                height: "auto",
                            }}
                            width={200}
                            height={200}
                            src="/images/categories/smartwatch.webp"
                            alt="Đồng hồ thông minh"
                            onClick={() => {
                                router.push(`/categories/0?type=smartwatch`);
                            }}
                        />
                        <div className="mb-4">Đồng hồ thông minh</div>
                    </div>
                    <div
                        className="col-span-2 md:col-span-1 flex flex-col justify-center items-center bg-stone-200 rounded-2xl m-4 cursor-pointer hover:text-red-500 hover:transform hover:scale-105 transition-transform duration-300 ease-in-out"
                        onClick={() => {
                            router.push(`/categories/0?type=accessories`);
                        }}
                    >
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
                    </div>
                </div>
                <div
                    className="col-span-3 md:col-span-1 flex flex-col justify-center items-center bg-stone-200 rounded-2xl m-4 cursor-pointer hover:text-red-500 hover:transform hover:scale-105 transition-transform duration-300 ease-in-out"
                    onClick={() => {
                        router.push(`/categories/0?type=audio`);
                    }}
                >
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
                    <div>Loa</div>
                </div>
            </div>
            {/* NEW PRODUCT */}
            <h2 className="text-4xl pt-4 font-bold">Sản phẩm mới</h2>
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
            </div>
        </div>
    );
};

export default Categories;
