"use client"
import React, { useEffect, useState } from 'react'
import SlideBanner from '@/components/SlideBanner';
import Link from 'next/link';
import Image from 'next/image';
import { useSWRData } from '@/library/api';
import { useRouter } from 'next/navigation';
const Categories = () => {
    const router = useRouter()
    const products = [{
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
                short: "Tai nghe không dây cao cấp với công nghệ ENC - Environmental Noise Cancellation hiện đại, trọng lượng siêu nhẹ 176 gram mang đến cảm giác đeo thoải mái trong thời gian dài. Kết nối Bluetooth 5.2 và chế độ EQ Bass cho chất lượng âm thanh tuyệt hảo. Hãy trải nghiệm ngay !",
                description: "description",
                productId: 128,
                languageCode: "vi",
            },
        ]
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
                short: "Tai nghe không dây cao cấp với công nghệ ENC - Environmental Noise Cancellation hiện đại, trọng lượng siêu nhẹ 176 gram mang đến cảm giác đeo thoải mái trong thời gian dài. Kết nối Bluetooth 5.2 và chế độ EQ Bass cho chất lượng âm thanh tuyệt hảo. Hãy trải nghiệm ngay !",
                description: "description",
                productId: 128,
                languageCode: "vi",
            },
        ]
    }, {
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
                short: "Tai nghe không dây cao cấp với công nghệ ENC - Environmental Noise Cancellation hiện đại, trọng lượng siêu nhẹ 176 gram mang đến cảm giác đeo thoải mái trong thời gian dài. Kết nối Bluetooth 5.2 và chế độ EQ Bass cho chất lượng âm thanh tuyệt hảo. Hãy trải nghiệm ngay !",
                description: "description",
                productId: 128,
                languageCode: "vi",
            },
        ]
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
                short: "Tai nghe không dây cao cấp với công nghệ ENC - Environmental Noise Cancellation hiện đại, trọng lượng siêu nhẹ 176 gram mang đến cảm giác đeo thoải mái trong thời gian dài. Kết nối Bluetooth 5.2 và chế độ EQ Bass cho chất lượng âm thanh tuyệt hảo. Hãy trải nghiệm ngay !",
                description: "description",
                productId: 128,
                languageCode: "vi",
            },
        ]
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
                short: "Tai nghe không dây cao cấp với công nghệ ENC - Environmental Noise Cancellation hiện đại, trọng lượng siêu nhẹ 176 gram mang đến cảm giác đeo thoải mái trong thời gian dài. Kết nối Bluetooth 5.2 và chế độ EQ Bass cho chất lượng âm thanh tuyệt hảo. Hãy trải nghiệm ngay !",
                description: "description",
                productId: 128,
                languageCode: "vi",
            },
        ]
    }]
    const { data: product, isLoading, error, mutate } = useSWRData(
        `/api/products`, { limit: 6, status: 'new' }
    );
    // console.log('product :', product?.data);

    return (
        <div className='mx-28 my-10 h-[96] text-center'>
            <div id="banner" >
                <SlideBanner />
            </div>
            <h2 className='text-4xl pt-4 font-bold '>Danh mục sản phẩm</h2>
            <div className='grid grid-cols-3 my-8'>
                <div className='col-span-3 md:col-span-1 flex flex-col justify-center items-center bg-stone-200 rounded-2xl m-4 cursor-pointer hover:text-red-500'
                    onClick={() => {
                        router.push(
                            `/categories/0?type=audio`
                        );
                    }}>
                    <Image width={200} height={200} src="/images/categories/headset.webp" alt="" />
                    <div>Tai nghe</div>
                </div>
                <div className='col-span-3 md:col-span-1 grid grid-cols-2'>
                    <div className=' col-span-2 md:col-span-1 flex flex-col justify-center items-center bg-stone-200 rounded-2xl m-4 cursor-pointer hover:text-red-500'
                        onClick={() => {
                            router.push(
                                `/categories/0?type=mouse`
                            );
                        }}>
                        <Image width={200} height={200} src="/images/categories/mouse.webp" alt="" />
                        <div className='mb-4'>Chuột</div>
                    </div>
                    <div className='col-span-2 md:col-span-1 flex flex-col justify-center items-center bg-stone-200 rounded-2xl m-4 cursor-pointer hover:text-red-500'
                        onClick={() => {
                            router.push(
                                `/categories/0?type=mouse`
                            );
                        }}>
                        <Image width={200} height={200} src="/images/categories/keyboard.webp" alt="" />
                        <div className='mb-4'>Bàn phím</div>
                    </div>
                    <div className=' col-span-2 md:col-span-1 flex flex-col justify-center items-center bg-stone-200 rounded-2xl m-4 cursor-pointer hover:text-red-500'
                        onClick={() => {
                            router.push(
                                `/categories/0?type=keyboard`
                            );
                        }}>
                        <Image width={200} height={200} src="/images/categories/smartwatch.webp" alt=""
                            onClick={() => {
                                router.push(
                                    `/categories/0?type=smartwatch`
                                );
                            }} />
                        <div className='mb-4'>Đồng hồ thông minh</div>
                    </div>
                    <div className='col-span-2 md:col-span-1 flex flex-col justify-center items-center bg-stone-200 rounded-2xl m-4 cursor-pointer hover:text-red-500'
                        onClick={() => {
                            router.push(
                                `/categories/0?type=accessories`
                            );
                        }}>
                        <Image width={200} height={200} src="/images/categories/accessories.webp" alt="" />
                        <div className='mb-4'>Phụ kiện</div>
                    </div>
                </div>
                <div className='col-span-3 md:col-span-1 flex flex-col justify-center items-center bg-stone-200 rounded-2xl m-4 cursor-pointer hover:text-red-500'
                    onClick={() => {
                        router.push(
                            `/categories/0?type=audio`
                        );
                    }}>
                    <Image width={200} height={200} src="/images/categories/audio.webp" alt="" />
                    <div>Loa</div>
                </div>

            </div>
            {/* NEW PRODUCT */}
            <h2 className='text-4xl pt-4 font-bold'>Sản phẩm mới</h2>
            <div className='grid grid-cols-12 gap-4'>
                {products && products.map((item, i) => (
                    <div className='col-span-12 md:col-span-6 lg:col-span-4 rounded-2xl' >
                        <Image sizes="(max-width: 768px) 100vw, 33vw" width={500} height={500} src={item.main_image} alt={item.name} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Categories