"use client";
import SlideCard from "@/components/SlideCard";
import SlideShow from "@/components/SlideShow";
import { useSWRData } from "@/library/api";
import { moneyToString } from "@/library/util";
import store from "@/library/zustand/store";
import { Button, Spin, Tag } from "antd";
import { useRouter } from "next/navigation";

const Product = ({ params }) => {
  const { slug } = params;
  const id = slug.split("-")[slug.split("-").length - 1];
  const { addToCart } = store();
  const router = useRouter();
  const {
    data: product,
    isLoading,
    error,
    mutate,
  } = useSWRData(`/api/products`, { id });
  const {
    data: similarProducts,
  } = useSWRData(`/api/products?categoryId=${product?.categoryId}`);
  if (error) return <div className=" h-screen flex flex-col items-center justify-center">Lỗi tải trang</div>;
  if (isLoading) return <div className=" h-screen flex flex-col items-center justify-center">
    <Spin size="large" />
  </div>;
  return (
    <div className=" py-4 ">
      <div className="grid grid-cols-5 gap-5">
        <div className="col-span-5 md:col-span-3 mx-10">
          <SlideShow listImage={product?.list_image} />
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
          {/* <div className='flex py-2 gap-3'>
                        <div>Chọn màu:</div>
                        <div className='w-8 h-8 p-[1px] flex justify-center items-center rounded-full cursor-pointer border hover:border-blue-500 duration-200'>
                            <div className=' w-6 h-6 bg-blue-500 rounded-full'></div>
                        </div>
                        <div className='w-8 h-8 p-[1px] flex justify-center items-center rounded-full cursor-pointer border hover:border-red-500 duration-200'>
                            <div className=' w-6 h-6 bg-red-500 rounded-full'></div>
                        </div>
                        <div className='w-8 h-8 p-[1px] flex justify-center items-center rounded-full cursor-pointer border hover:border-green-500 duration-200'>
                            <div className=' w-6 h-6 bg-green-500 rounded-full'></div>
                        </div>
                    </div> */}
          {/* <div className='flex pb-2'>
                        <div className=''>
                            <Input 
                                maxLength={3}
                            style={{ width: '40%' }}
                                addonBefore={<MinusOutlined />}
                                addonAfter={<PlusOutlined />}
                                defaultValue={qty} />
                            </div>

                    </div> */}
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
            {/* <table class="table-auto">
                            <thead>
                                <tr>
                                    <th>Song</th>
                                    <th>Artist</th>
                                    <th>Year</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                                    <td>Malcolm Lockyer</td>
                                    <td>1961</td>
                                </tr>
                                <tr>
                                    <td>Witchy Woman</td>
                                    <td>The Eagles</td>
                                    <td>1972</td>
                                </tr>
                                <tr>
                                    <td>Shining Star</td>
                                    <td>Earth, Wind, and Fire</td>
                                    <td>1975</td>
                                </tr>
                                <tr>
                                    <td>Shining Star</td>
                                    <td>Earth, Wind, and Fire</td>
                                    <td>1975</td>
                                </tr>
                                <tr>
                                    <td>Shining Star</td>
                                    <td>Earth, Wind, and Fire</td>
                                    <td>1975</td>
                                </tr>
                                <tr>
                                    <td>Shining Star</td>
                                    <td>Earth, Wind, and Fire</td>
                                    <td>1975</td>
                                </tr>
                                <tr>
                                    <td>Shining Star</td>
                                    <td>Earth, Wind, and Fire</td>
                                    <td>1975</td>
                                </tr>
                                <tr>
                                    <td>Shining Star</td>
                                    <td>Earth, Wind, and Fire</td>
                                    <td>1975</td>
                                </tr>
                                <tr>
                                    <td>Shining Star</td>
                                    <td>Earth, Wind, and Fire</td>
                                    <td>1975</td>
                                </tr>

                            </tbody>
                        </table> */}
          </div>
        </div>
      </div>
      <div className="editor">
        <div dangerouslySetInnerHTML={{ __html: product?.description }} />
      </div>
      {/* SIMILAR PRODUCT */}
      <div className="pt-10 px-2 md:10">
        <h2 className="text-lg font-normal">Sản phẩm tượng tự</h2>
        <SlideCard data={similarProducts?.data} />
      </div>
    </div>
  );
};

export default Product;
