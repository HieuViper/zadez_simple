"use client";
import ProductCard from "@/components/ProductCard";
import { AutoCompleteSearch } from "@/components/SearchProducts";
import { useSWRData } from "@/library/api";
import { Checkbox, Pagination, Select, Spin, Switch } from "antd";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
const Search = ({  }) => {

  const router = useRouter();
  const searchParams = useSearchParams();
  const key =  searchParams.has("key") ? searchParams.get("key") : "";
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
      name: "Tai nghe",
      image: "/images/icon/headset.webp",
      type: "headset",
    },
    {
      name: "Đế treo tai nghe",
      image: "/images/icon/headstand.webp",
      type: "headstand",
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
    {
      name: "Loa",
      image: "/images/icon/speaker.webp",
      type: "speaker",
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
    `/api/products?limit=1000&keyword=${key}&${productType ? `type=${productType}` : ""}`
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

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(24);
  const onPageChange = (page) => {
    setCurrentPage(page);
  };
  const indexOfLastProduct = currentPage * pageSize;
  const indexOfFirstProduct = indexOfLastProduct - pageSize;
  const currentProducts= sortedProducts?.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="my-10 w-full m-auto max-w-xs md:max-w-3xl lg:max-w-7xl">
      <div className="mb-4"><AutoCompleteSearch keyword={key}/></div>
      <div className="text-2xl text-center">Tìm thấy <strong>{products?.data?.length}</strong> kết quả với từ khóa <strong>&#34;{key?.replace(/-/g, ' ')}&#34;</strong></div>
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-6 py-10">
        {/* FILTER */}
     
        {/* PRODUCT CARDS */}
        <div className="col-span-4">
          <div className="flex gap-4 justify-center pb-4 items-center">
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 ">
            <div className="text-xl font-medium mr-4">Tình trạng:</div>
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
          <div className="flex gap-2">
            <div>Giảm giá</div>
            <Switch checked={isSale} onChange={handleIsSale} />
          </div>
          <div className="flex items-center">
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
          </div >
          <div className="flex items-center">
            <div className="mr-2">Phân loại:</div>
            <Select
              defaultValue=""
              style={{ width: 160 }}
              // value={sortBy}
              onChange={(value)=>setProductType(value)}
            >
               <Option value="">Mặc định</Option>
              {menuCategory?.map((item,i)=>(
                 <Option key={i} value={item.type}>{item?.name}</Option>
              ))}
             </Select>
          </div >
          </div>
          </div>
          {currentProducts ? (
            <div>
            <div className="border grid grid-cols-12  gap-2 md:gap-4 lg:gap-8">
              {currentProducts?.map((item, i) => (
                <div
                  key={i}
                  className="col-span-12 md:col-span-4 lg:col-span-3"
                >
                  <ProductCard data={item} key={i} />
                </div>
              ))}
            </div>
            <div className="flex justify-end mt-6">
            <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={sortedProducts?.length}
        onChange={onPageChange}
      />
        </div>
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

export default Search;
