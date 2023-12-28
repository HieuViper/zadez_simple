import React from 'react'
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button } from 'antd';
const ProductCard = ({ data }) => {
    return (
        <div className='shadow-xl p-4 w-72'>
            <img src={data.main_image} />
            <hr class="my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
            <h1 className='text-base font-light leading-6 text-start pb-2'>{data.name}Apple 2022 MacBook Air Laptop with M2 chip</h1>
            <div className='text-lg font-light leading-normal pb-2 text-start'>Giá: {data.price} VNĐ</div>
            <Button icon={<ShoppingCartOutlined />} type="primary" ghost>Thêm vào giỏ hàng</Button>
        </div>
    )
}

export default ProductCard