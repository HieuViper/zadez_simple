"use client";
import SlideCard from "@/components/SlideCard";
import SlideShow from "@/components/SlideShow";
import { useSWRData } from "@/library/api";
import { moneyToString } from "@/library/util";
import store from "@/library/zustand/store";
import { Button, Spin, Tag } from "antd";
import {DownloadOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

const Product = ({ params }) => {
  const { slug } = params;
  const id = slug.split("-")[slug.split("-").length - 1];
  const { addToCart } = store();
  const router = useRouter();
  const {
    data: productByCode,
    isLoading,
    error,
    mutate,
  } = useSWRData(`/api/products?product_code=${slug}`);
  const product = productByCode?.data[0]
  const {
    data: similarProducts,
  } = useSWRData(`/api/products?categoryId=${product?.categoryId}`);
  if (error) return <div className=" h-screen flex flex-col items-center justify-center">Lỗi tải trang</div>;
  if (isLoading) return <div className=" h-screen flex flex-col items-center justify-center">
    <Spin size="large" />
  </div>;

  const similarProductsFilter = similarProducts?.data.filter(item => item.id !== product?.id);
  return (
    <div className=" py-4 m-auto md:max-w-3xl lg:max-w-7xl">
      <div className="grid grid-cols-5 gap-5">
        <div className="col-span-5 md:col-span-3 mx-10 no-bg-thumbs">
          <SlideShow listImage={product?.list_image}/>
        </div>
        <div className="col-span-5 md:col-span-2">
          <h1 className="text-3xl font-bold pb-2 text-center md:text-start">
            {product?.name}
          </h1>
          <div className="pb-4">{product?.short}</div>
          <div className="pb-2">
            {product?.stock == "in" ? (
              <Tag color="green">Còn hàng</Tag>
            ) : (
              <Tag color="red">Hết hàng</Tag>
            )}
          </div>
          <div className="text-2xl font-medium pb-2">
            {" "}
            {/* GIÁ: {product?.price} VND */}
            {product?.discount_price > 0 ? (
              <div className="flex">
                Giá:  <span className=" text-red-500 font-semibold text-base md:text-xl lg:text-2xl mx-2">{moneyToString(product?.discount_price)} ₫</span>
                <div className="flex">
                  <span className="text-base line-through mx-2">{moneyToString(product?.price)} ₫</span>{" "}
                  <Tag color="red" >
                    <div className="border border-red-500 pt-1">
                      -
                      {Math.floor(
                        ((product?.price - product?.discount_price) / product?.price) * 100
                      )}
                      %
                    </div>
                  </Tag>
                </div>
              </div>
            ) : (
              <div>
                Giá:
                <span className="text-red-500 font-semibold text-base md:text-xl lg:text-2xl mx-2">{moneyToString(product?.price)} ₫</span>
              </div>
            )}
          </div>
          {product?.stock == "in" ? (
            <>
              <div className="pb-2">
                {" "}
                <Button
                  type="primary"
                  block
                  onClick={() => {
                    addToCart(product);
                    router.push("/gio-hang");
                  }}
                >
                  Mua ngay
                </Button>
              </div>
              <div className="pb-2">
                {" "}
                <Button
                  block
                  onClick={() => {
                    console.log(product);
                    addToCart(product);
                  }}
                >
                  Thêm vào giỏ hàng
                </Button>
              </div>
            </>
          ) : (
            <div>
              <Button type="primary" block>
                Liên Hệ
              </Button>
            </div>
          )}
          <div>
          </div>
        </div>
      </div>
      <section
        id="params"
        className="bg-[#e5e7eb] rounded-lg px-2 py-2 md:py-4 lg:py-6 mt-2 "
      >
        <div className="flex flex-col justify-center items-center md:px-10">
          <h4 className="text-red-500 text-4xl font-bold my-2 text-center">
            {product?.title_parameter}
          </h4>
          <div className="relative flex py-4 items-center w-full">
            <div className="flex-grow border-t border-solid border-red-500 "></div>
            <span className="flex-shrink mx-4 text-2xl font-semibold">
            {product?.name}
            </span>
            <div className="flex-grow border-t border-solid border-red-500  "></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          {product?.parameter.map((item,i) => (
            <div className="col-span-1 " key={i}>
              <p className="text-red-500 text-xl font-bold my-2">{item?.name}</p>
              <p className="font-semibold">{item?.param}</p>
            </div>
          ))}

        </div>
      </section>
     { product?.driver && <div className="flex justify-center items-center mt-8">
        <Button type="primary" shape="round" icon={<DownloadOutlined />} size="large" 
        href={product.driver} target="_blank">
            TẢI DRIVER
          </Button></div>}
      <div className="editor mt-8">
        <div dangerouslySetInnerHTML={{ __html: product?.description }} />
      </div>
      {/* SIMILAR PRODUCT */}
      {similarProductsFilter?.length > 0 && <div className="pt-10 px-2 md:10">
        <h2 className="text-xl font-bold">Sản phẩm tượng tự</h2>
        <SlideCard data={similarProductsFilter} />
      </div>}
    </div>
  );
};

export default Product;
