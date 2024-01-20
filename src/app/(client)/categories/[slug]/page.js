"use client";
import ProductCard from "@/components/ProductCard";
import { useSWRData } from "@/library/api";
import { Checkbox, Select, Spin, Switch } from "antd";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
const Category = ({ params }) => {
  const { slug } = params;
  const id = slug.split("-")[slug.split("-").length - 1];
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams.has("type") ? searchParams.get("type") : "";

  const { Option } = Select;
  const menuCategory = [
    {
      name: "Chuột",
      image: "/images/icon/mouse.webp",
      type: "mouse",
    },
    {
      name: "Bàn phím",
      image: "/images/icon/keyboard.webp",
      type: "keyboard",
    },
    {
      name: "Loa",
      image: "/images/icon/speaker.webp",
      type: "speaker",
    },
    {
      name: "Tai nghe",
      image: "/images/icon/headset.webp",
      type: "headset",
    },
    {
      name: "Túi chống sốc",
      image: "/images/icon/bag.webp",
      type: "bag",
    },
    {
      name: "Lót chuột",
      image: "/images/icon/pad.webp",
      type: "pad",
    },
    {
      name: "Phụ kiện",
      image: "/images/icon/accessories.webp",
      type: "accessories",
    },

  ];

  // CALL API
  const [productType, setProductType] = useState(type);
  // const { data: products, isLoading, error, mutate } = useSWRData(
  //     `/api/products`, { limit: 100, type: productType, categoryId: id, }
  // );
  const {
    data: products,
    isLoading,
    error,
    mutate,
  } = useSWRData(
    `/api/products?limit=100&${productType ? `type=${productType}` : `categoryId=${id}`
    }`
  );

  // FILTER

  const [isInStock, setIsInStock] = useState(false);
  const [isOutOfStock, setIsOutOfStock] = useState(false);
  const [isSale, setIsSale] = useState(false);

  const handleInStock = () => {
    setIsInStock(!isInStock);
    setIsOutOfStock(false);
  };
  const handleOutOfStock = () => {
    setIsOutOfStock(!isOutOfStock);
    setIsInStock(false);
  };
  const handleIsSale = (checked) => {
    setIsSale(checked);
  };

  const filteredProducts =
    products &&
    products.data.filter((product) => {
      if (isInStock && !isOutOfStock && isSale) {
        return product.stock === "in" && product.discount_price > 0;
      } else if (isInStock && !isOutOfStock && !isSale) {
        return product.stock === "in";
      } else if (isOutOfStock && !isInStock && isSale) {
        return product.stock === "out" && product.discount_price > 0;
      } else if (!isInStock && isOutOfStock && !isSale) {
        return product.stock === "out";
      } else if (!isInStock && !isOutOfStock && isSale) {
        return product.discount_price > 0;
      } else if (!isInStock && !isOutOfStock && !isSale) {
        return true;
      }
      return false;
    });

  const [sortBy, setSortBy] = useState("");
  const [sortedProducts, setSortedProducts] = useState(filteredProducts);

  useEffect(() => {
    setSortedProducts(filteredProducts);
  }, [isInStock, isOutOfStock, isSale, products]);

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
    <div className="my-10 w-full m-auto max-w-xs md:max-w-3xl lg:max-w-7xl">
      {/* <div className="mx-2 lg:mx-20 grid grid-cols-4 md:grid-cols-5 gap-2 ">
        {menuCategory.map((item, i) => (
          <div
            key={i}
            className="hover:text-red-500 cursor-pointer  col-span-2 md:col-span-1 flex flex-col justify-center items-center hover:transform hover:scale-105 transition-transform duration-300 ease-in-out"
            onClick={() => {
              setProductType(item.type);
              // mutate()
            }}
          >
            <Image
              src={item.image}
              alt={item.name}
              width={128}
              height={128}
              className=""
            />
            <div>{item.name}</div>
          </div>
        ))}
      </div> */}

      <div className="flex justify-center items-center gap-8 p-2">
        {menuCategory.map((item, i) => (<div key={i} className="p-2 flex flex-col justify-center items-center hover:transform hover:scale-105 transition-transform duration-300 ease-in-out hover:text-red-500 cursor-pointer"
          onClick={() => {
            setProductType(item.type);
          }}>
          <div className="mb-4 ">
            <Image
              src={item.image}
              alt={item.name}
              width={48}
              height={48}
              className=""
            />
          </div>
          <div className="flex flex-wrap w-[63px]text-xl font-light leading-7">
            {item.name}
          </div>
        </div>))}
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-6 py-10">
        {/* FILTER */}
        <div className="col-span-1 border hidden md:block">
          <div className="flex flex-col gap-4 p-4 ">
            <h5 className="text-xl font-medium">Tình trạng:</h5>
            <Checkbox value="in" checked={isInStock} onChange={handleInStock}>
              <div className="text-base">Còn hàng</div>
            </Checkbox>
            <Checkbox
              value="out"
              checked={isOutOfStock}
              onChange={handleOutOfStock}
            >
              <div className="text-base">Hết hàng</div>
            </Checkbox>
          </div>
          <div className="flex justify-between border p-4">
            <div>Giảm giá</div>
            <Switch checked={isSale} onChange={handleIsSale} />
          </div>
        </div>
        {/* PRODUCT CARDS */}
        <div className="col-span-3">
          <div className="flex justify-end pb-4 items-center">
            <div className="mr-2">Sắp xếp theo:</div>
            <Select
              defaultValue=""
              style={{ width: 160 }}
              value={sortBy}
              onChange={handleSortChange}
            >
              <Option value="">Mặc định</Option>
              <Option value="a-z">Từ A-Z</Option>
              <Option value="z-a">Từ Z-A</Option>
              <Option value="lowest-price">Giá thấp nhất</Option>
              <Option value="highest-price">Giá cao nhất</Option>
            </Select>
          </div>
          <div className="block md:hidden">
            <div className="flex flex-col gap-2 p-2 ">
              <div className="text-lg font-medium">Tình trạng:</div>
              <div className="flex">
                <Checkbox
                  value="in"
                  checked={isInStock}
                  onChange={handleInStock}
                >
                  <div className="text-base">Còn hàng</div>
                </Checkbox>
                <Checkbox
                  value="out"
                  checked={isOutOfStock}
                  onChange={handleOutOfStock}
                >
                  <div className="text-base">Hết hàng</div>
                </Checkbox>
              </div>
            </div>
            <div className="flex  border p-4">
              <div className="pr-4">Giảm giá:</div>
              <Switch checked={isSale} onChange={handleIsSale} />
            </div>
          </div>
          {sortedProducts ? (
            <div className="border grid grid-cols-12  gap-2 md:gap-4 lg:gap-8">
              {sortedProducts?.map((item, i) => (
                <div
                  key={i}
                  className="col-span-12 md:col-span-6 lg:col-span-4"
                >
                  <ProductCard data={item} key={i} />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex justify-center">
              <Spin />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;
