"use client";
import SlideCard from "@/components/SlideCard";
import { useSWRData } from "@/library/api";

const NewProducts = () => {
  const { data: newProducts } = useSWRData("/api/products?status=new");
  return newProducts ? (
    <div
      id="new-products"
      className=" bg-[#e5e7eb] rounded-md p-4 mb-4 text-center"
    >
      <h3 className="text-xl md:text-2xl font-bold text-primary">Sản Phẩm Mới</h3>
      <div className="">
        <SlideCard data={newProducts.data} />
      </div>
    </div>
  ) : (
    <></>
  );
};

export default NewProducts;
