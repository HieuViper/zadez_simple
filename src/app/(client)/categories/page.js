"use client"
import { Button, Checkbox, Select, Switch, Menu } from 'antd'
import React, { useEffect, useState } from 'react'
import { ShoppingCartOutlined } from "@ant-design/icons";
import ProductCard from '@/components/ProductCard';
import SlideBanner from '@/components/SlideBanner';
import Link from 'next/link';
const Categories = () => {
    const { Option } = Select
    const cate = [{
        name: "Chuot",
        image: "https://zadez.vn/wp-content/uploads/2022/12/1-2.webp"
    },
    {
        name: "Ban phim",
        image: "https://zadez.vn/wp-content/uploads/2022/12/1-2.webp"
    }, {
        name: "Tai Nghe",
        image: "https://zadez.vn/wp-content/uploads/2022/12/1-2.webp"
    }, {
        name: "Phu kien",
        image: "https://zadez.vn/wp-content/uploads/2022/12/1-2.webp"
    }]
    const products = [{
        product_code: "999",
        main_image: "https://zadez.us/cdn/shop/products/G-151M_500x.png?v=1638523572",
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
        main_image: "https://zadez.us/cdn/shop/products/G-151M_500x.png?v=1638523572",
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
        main_image: "https://zadez.us/cdn/shop/products/G-151M_500x.png?v=1638523572",
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
        main_image: "https://zadez.us/cdn/shop/products/G-151M_500x.png?v=1638523572",
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
        main_image: "https://zadez.us/cdn/shop/products/G-151M_500x.png?v=1638523572",
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


    const menuData = [
        {
            id: 1,
            label: 'Home',
            link: '/'
        },
        {
            id: 2,
            label: 'Products',
            children: [
                {
                    id: 3,
                    label: 'Product 1',
                    link: '/product1'
                },
                {
                    id: 4,
                    label: 'Product 2',
                    children: [
                        {
                            id: 5,
                            label: 'Sub Product A',
                            link: '/sub-product-a'
                        },
                        {
                            id: 6,
                            label: 'Sub Product B',
                            link: '/sub-product-b'
                        }
                    ]
                }
            ]
        },
        {
            id: 7,
            label: 'About',
            link: '/about'
        }
    ];

    const catTest = [
        {
            "id": 1,
            "name": "test",
            "category_code": "test",
            "image": "",
            "parent": null,
            "type": "categories",
            "order": 1,
            "description": "1",
        },
        {
            "id": 2,
            "name": "test2",
            "category_code": "test2",
            "image": "",
            "parent": 1,
            "type": "categories",
            "order": 2,
            "description": "2",
        },
        {
            "id": 3,
            "name": "test3",
            "category_code": "test3",
            "image": "",
            "parent": 2,
            "type": "products",
            "order": 3,
            "description": "3",
        },
        {
            "id": 4,
            "name": "test4",
            "category_code": "test4",
            "image": "",
            "parent": null,
            "type": "categories",
            "order": 4,
            "description": "4",
        },
        {
            "id": 5,
            "name": "test5",
            "category_code": "test5",
            "image": "",
            "parent": 4,
            "type": "categories",
            "order": 5,
            "description": "5",
        },

    ]



    return (
        <div className='mx-28 my-28 h-[96]'>
            <div id="banner" className=''>
                <SlideBanner />
            </div>
            <div className='grid grid-cols-3 justify-center items-center'>
                <div className='col-span-3 md:col-span-1 '>
                    <img src="https://zadez.vn/wp-content/uploads/2022/11/ZADEZ-ZHS701G-BLACK-MEDIA-2048-6.webp" alt="" className='w-20' />
                    <div>Chuột</div>
                </div>
                <div className='col-span-3 md:col-span-1 grid grid-cols-2'>
                    <div className=' col-span-2 md:col-span-1 w-10 '>
                        <img src="https://zadez.vn/wp-content/uploads/2022/11/ZADEZ-ZHS701G-BLACK-MEDIA-2048-6.webp" alt="" className='w-20' />
                        <div>Chuột</div>
                    </div>
                    <div className='col-span-2 md:col-span-1 w-5'>
                        <img src="https://zadez.vn/wp-content/uploads/2022/11/ZADEZ-ZHS701G-BLACK-MEDIA-2048-6.webp" alt="" className='w-20' />
                        <div>Chuột</div>
                    </div>
                    <div className=' col-span-2 md:col-span-1 w-5'>
                        <img src="https://zadez.vn/wp-content/uploads/2022/11/ZADEZ-ZHS701G-BLACK-MEDIA-2048-6.webp" alt="" className='w-20' />
                        <div>Chuột</div>
                    </div>
                    <div className='col-span-2 md:col-span-1 w-5'>
                        <img src="https://zadez.vn/wp-content/uploads/2022/11/ZADEZ-ZHS701G-BLACK-MEDIA-2048-6.webp" alt="" className='w-20' />
                        <div>Chuột</div>
                    </div>
                </div>
                <div className='col-span-3 md:col-span-1 w-5'>
                    <img src="https://zadez.vn/wp-content/uploads/2022/11/ZADEZ-ZHS701G-BLACK-MEDIA-2048-6.webp" alt="" className='w-20' />
                    <div>Chuột</div>
                </div>

            </div>
        </div>
    )
}

export default Categories