"use client"
import { Button, Checkbox, Select, Switch } from 'antd'
import React, { useEffect, useState } from 'react'
import { ShoppingCartOutlined } from "@ant-design/icons";
import ProductCard from '@/components/ProductCard';
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

    const [isInStock, setIsInStock] = useState(false);
    const [isOutOfStock, setIsOutOfStock] = useState(false);

    const handleInStock = () => {
        setIsInStock(!isInStock);
    };
    const handleOutOfStock = () => {
        setIsOutOfStock(!isOutOfStock);
    };

    const filteredProducts = products.filter((product) => {
        if (isInStock && !isOutOfStock) {
            return product.status === "in";
        } else if (isOutOfStock && !isInStock) {
            return product.status === "out";
        } else {
            return "all";
        }
    });

    const [sortBy, setSortBy] = useState("");
    const [sortedProducts, setSortedProducts] = useState(filteredProducts);

    useEffect(() => {
        setSortedProducts(filteredProducts);
    }, [isInStock, isOutOfStock]);

    const handleSortChange = (value) => {
        // console.log('event :', event);
        // const value = event;
        setSortBy(value);

        let sortedProducts = [...filteredProducts];

        switch (value) {
            case "best-selling":
                sortedProducts.sort((a, b) => b.order - a.order);
                break;
            case "a-z":
                sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case "z-a":
                sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case "lowest-price":
                sortedProducts.sort((a, b) => a.price - b.price);
                break;
            case "highest-price":
                sortedProducts.sort((a, b) => b.price - a.price);
                break;
            case "new-to-old":
                sortedProducts.sort(
                    (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
                );
                break;
            case "old-to-new":
                sortedProducts.sort(
                    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                );
                break;
            default:
                break;
        }

        setSortedProducts(sortedProducts);
    };
    return (
        <div className='mx-28 my-28'>
            <div className='mx-44 flex justify-between text-center'>
                {cate.map((item) => (
                    <div className='w-32'>
                        <img src={item.image} alt={item.name} />
                        <div>{item.name}</div>
                    </div>
                ))}

            </div>
            <div className='grid grid-cols-4 gap-6 py-20'>
                <div className='col-span-1 border'>
                    <div className='flex flex-col gap-4 p-4 '>
                        <h5 className='text-xl font-medium'>Tình trạng:</h5>
                        <Checkbox value='in' checked={isInStock}
                            onChange={handleInStock}><div className='text-base'>Còn hàng</div></Checkbox>
                        <Checkbox value='out'
                            checked={isOutOfStock}
                            onChange={handleOutOfStock}><div className='text-base'>Hết hàng</div></Checkbox>
                    </div>
                    <div className='flex justify-between border p-4'>
                        <div>Giảm giá</div>
                        <Switch />
                    </div>
                </div>
                <div className='col-span-3'>
                    <div className='flex justify-end pb-4'>
                        <div className='mr-2'>Sắp xếp theo:</div>
                        <Select defaultValue="a" style={{ width: 160 }} value={sortBy}
                            onChange={handleSortChange}>
                            <Option value="a-z">Từ A-Z</Option>
                            <Option value="z-a">Từ Z-A</Option>
                            <Option value="lowest-price">Giá thấp nhất</Option>
                            <Option value="highest-price">Giá cao nhất</Option>
                        </Select>
                    </div>
                    <div className='border grid grid-cols-3'>
                        {sortedProducts && sortedProducts?.map((item, i) => (
                            <div className='col-span-1'>
                                <ProductCard data={item} key={i} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories