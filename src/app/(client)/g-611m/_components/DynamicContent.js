"use client";
import SlideReview from "@/components/SlideReview";
import SlideShow from "@/components/SlideShow";
import { useSWRData } from "@/library/api";
import store from "@/library/zustand/store";
import { RightOutlined } from "@ant-design/icons";
import { Button, Modal, Tabs } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Content = () => {
    const { addToCart } = store();
    const router = useRouter();
   
    const product = {
      list_image: [
        {
          url: "/images/landing-page/g-611m/0.webp",
          name: "G-611M-0.webp",
        },
        {
          url: "/images/landing-page/g-611m/1.webp",
          name: "G-611M-1.webp",
        },
        {
          url: "/images/landing-page/g-611m/2.webp",
          name: "G-611M-2.webp",
        },
        {
          url: "/images/landing-page/g-611m/3.webp",
          name: "G-611M-3.webp",
        },
        {
          url: "/images/landing-page/g-611m/4.webp",
          name: "G-611M-4.webp",
        },
        {
          url: "/images/landing-page/g-611m/5.webp",
          name: "G-611M-5.webp",
        },
        {
          url: "/images/landing-page/g-611m/6.webp",
          name: "G-611M-6.webp",
        },
        {
          url: "/images/landing-page/g-611m/7.webp",
          name: "G-611M-8.webp",
        },
        {
          url: "/images/landing-page/g-611m/8.webp",
          name: "G-611M-8.webp",
        },
      ],
    };
  
    const { data: G611M } = useSWRData(
      `/api/products?product_code=zadez-g-611m`
    );

    const addCart = () => {
      G611M && addToCart(G611M.data[0]);
      router.push("/gio-hang");
    }
  
    return (
      <div className="m-auto md:max-w-3xl lg:max-w-7xl">
        <section id="section1" className="grid grid-cols-2 gap-4 pb-64">
          <div
            className="col-span-2 md:col-span-1 p-2 lg:p-10 xl:p-20"
            data-aos="fade-down"
            data-aos-duration="500"
          >
            <p className="text-sm mb-2 md:text-xl font-bold">ZADEZ NEW PRODUCT</p>
            <p className="text-xl md:text-3xl lg:text-4xl font-bold my-1">
              GAMING MOUSE ZADEZ
            </p>
            <h1 className="text-2xl md:text-5xl font-bold m-0">G-611M</h1>
            <p>
              Sự kết hợp tinh tế giữa thiết kế hiện đại và tính năng đa dạng đã giúp chuột Gaming Zadez G-611M trở thành một lựa chọn tuyệt vời cho game thủ. Ngoài ra, thiết kế công thái học mang đến trải nghiệm vận hành tốt nhất, phù hợp với các kiểu cầm Palm Grip và Claw Grip. Hãy trải nghiệm ngay!
            </p>
            <button className="bg-gradient-to-l from-[#fedc45] to-[#fb7099] w-40 flex justify-center items-center p-2">
              <span className="text-xl font-semibold ">850.000 VNĐ</span>
            </button>
          </div>
          <div
            className="col-span-2 md:col-span-1 flex justify-center items-center rotate-12"
            data-aos="zoom-in"
            data-aos-duration="500"
          >
            <Image
              width={600}
              height={400}
              src="/images/landing-page/g-611m/1.webp"
              alt="G-611M"
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              priority={true}
            />
          </div>
        </section>
  
        {/*  */}
        <section
          id="section2"
          className="relative"
          data-aos="zoom-in"
          data-aos-duration="500"
        >
          <div className="absolute grid grid-cols-2 gap-4  shadow-2xl -top-36 xl:-top-44 left-[4%] md:left-[7%] -mt-10 w-10/12 h-80 xl:h-96 bg-gray-200 p-4">
            <div
              className="col-span-2 md:col-span-1 "
              style={{ height: "inherit" }}
            >
              <div className="relative w-full h-full ">
                <Image
                  src="/images/landing-page/g-611m/bg-4.webp"
                  alt="G-611M"
                  fill
                  sizes="100%"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
            <div className="col-span-2 md:col-span-1 md:p-6 lg:p-10 xl:p-16 hidden md:block">
              <h2 className="mt-2 text-5xl md:text-3xl lg:text-4xl xl:text-5xl font-bold uppercase bg-gradient-to-l from-[#fedc45] to-[#fb7099] bg-clip-text text-transparent ">
              DRIVER CONTROL <br/>GAME & OFFICE
              </h2>
              <p>
              Bạn có thể tùy chính các nút chức năng trong công việc hàng ngày (copy, paste, next/back, di chuyển nhanh về desktop...) và chuyển sang chế độ chơi game cực kỳ nhanh chóng (thiết lập các nút bắn liên tục, ngắm bắn, macro...) 
              </p>
              {/* <div className='bg-yellow-300 w-40 flex justify-center items-center p-2'>
                              <span className='text-xl font-semibold'>Xem thêm</span>
                          </div> */}
            </div>
          </div>
        </section>
  
        {/*  */}
        <section
          id="section3"
          className="grid grid-cols-2 gap-8 pt-64 pb-8 md:pb-16 lg:pb-32 bg-[url('/images/landing-page/g-611m/bg-1.webp')] bg-center lg:-ml-16 lg:-mr-16 xl:-ml-24 xl:-mr-24"
        >
          <div
            className="col-span-2 md:col-span-1 flex justify-center items-center"
            data-aos="zoom-in-right"
            data-aos-duration="500"
          >
            <Image
              width={200}
              height={200}
              src="/images/landing-page/g-611m/0.webp"
              alt="G-611M"
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          <div
            className="col-span-2 md:col-span-1 text-right px-2 md:px-4 lg:px-10 xl:pl-40"
            data-aos="zoom-in-left"
            data-aos-duration="900"
          >
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold uppercase bg-gradient-to-l from-[#fedc45] to-[#fb7099] bg-clip-text text-transparent ">
            Tùy chỉnh DPI 4 mức độ
            </h2>
            <p className="text-white">
            Đèn LED trên nút cuộn (con lăn) sẽ thay đổi màu sắc khi điều chỉnh DPU ở nút 6, mặc định màu sắc sẽ tương ứng với mức DPI như sau: Xanh lá: 1200 DPI, Cam: 2400 DPI, Đỏ: 4800 DPI, Xanh nhạt: 7200DPI
            </p>
            <div className="flex justify-end ">
              <button
                className="bg-gradient-to-r from-[#fedc45] to-[#fb7099] w-40 p-2 lg:p-4 flex justify-center items-center cursor-pointer hover:scale-110 duration-200"
                onClick={addCart}
              >
                <span className="text-xl font-semibold ">
                  Mua ngay
                  <RightOutlined />
                </span>
              </button>
            </div>
          </div>
        </section>
        {/*  */}
        <section
          id="section4"
          className="col-span-2 md:col-span-1 grid grid-cols-2 py-2 lg:p-20 gap-2"
        >
          <Image
            className="col-span-2 md:col-span-1 shadow-2xl"
            width={300}
            height={300}
            src="/images/landing-page/g-611m/9.webp"
            alt="G-611M"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            data-aos="fade-up-right"
            data-aos-duration="500"
          />
          <Image
            className="col-span-2 md:col-span-1 shadow-2xl"
            width={300}
            height={300}
            src="/images/landing-page/g-611m/10.webp"
            alt="G-611M"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            data-aos="fade-up-left"
            data-aos-duration="500"
          />
        </section>
        {/*  */}
        <section
          id="section5"
          className="bg-[url('/images/landing-page/g-611m/bg-2.webp')] bg-cover  py-4 md:py-10 lg:py-20 lg:-ml-16 lg:-mr-16 xl:-ml-24 xl:-mr-24"
        >
          <div className="w-full lg:w-4/6 m-auto">
          <div className=" bg-white px-4 md:px-20 pb-4 rounded-lg m-auto">
                      <SlideShow listImage={product?.list_image} />
          </div>
          </div>
          <div className="flex flex-col justify-center items-center p-2">
            <h3 className="text-xl md:text-3xl my-4">MOUSE GAMING G-611M</h3>
            <p>
            Sản phẩm này sẽ đáp ứng hoàn hảo nhu cầu và kỳ vọng của người dùng trong quá trình chơi game
            </p>
            <button
              className="bg-black w-40 flex justify-center items-center p-2 cursor-pointer hover:scale-110 duration-200"
              onClick={addCart}
            >
              <span className="text-xl font-semibold text-white">Mua ngay</span>
            </button>
          </div>
        </section>
        {/*  */}
        <section id="section6" className="py-2 lg:p-10">
          <Image
            width={200}
            height={200}
            src="/images/landing-page/g-611m/driver.webp"
            alt="G-611M"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </section>
        {/*  */}
        <section
          id="params"
          className="bg-[url('/images/landing-page/gp-803/bg3.webp')] bg-center px-2 py-4 md:py-10  lg:py-32 lg:-ml-16 lg:-mr-16 xl:-ml-24 xl:-mr-24 "
        >
          <div className="flex flex-col justify-center items-center md:px-10">
            <h4 className="text-red-500 text-4xl font-bold mb-2 text-center">
              ENC Bluetooth Headphone
            </h4>
            <div className="relative flex py-5 items-center w-full">
              <div className="flex-grow border-t border-solid border-red-500 "></div>
              <span className="flex-shrink mx-4 text-red-500 text-xl font-semibold">
                ZADEZ GP-803B
              </span>
              <div className="flex-grow border-t border-solid border-red-500  "></div>
            </div>
          </div>
          <div className="grid grid-cols-3">
            <div className="col-span-3 md:col-span-1 text-center">
              <div>
                <p className="text-red-500 text-xl font-bold mb-2">Kích thước</p>
                <p className="font-semibold">119.3 x 79.5 x 38.3 mm</p>
              </div>
              <div>
                <p className="text-red-500 text-xl font-bold mb-2">Trọng lượng</p>
                <p className="font-semibold">78g (chưa bao gồm cáp)</p>
              </div>
              <div>
                <p className="text-red-500 text-xl font-bold mb-2">
                Đèn LED
                </p>
                <p className="font-semibold">4 màu</p>
              </div>
            </div>
  
            <div className="col-span-3 md:col-span-1 text-center">
              <div>
                <p className="text-red-500 text-xl font-bold mb-2">Số nút chức năng</p>
                <p className="font-semibold">
                6 nút chức năng
                </p>
              </div>
              <div>
                <p className="text-red-500 text-xl font-bold mb-2">Độ phân giải</p>
                <p className="font-semibold">1200/ 2400/ 4800/ 7200 DPI</p>
              </div>
              <div>
                <p className="text-red-500 text-xl font-bold mb-2">
                Độ bền nút nhấn
                </p>
                <p className="font-semibold">3 triệu lần nhấn</p>
              </div>
            </div>
  
            <div className="col-span-3 md:col-span-1 text-center">
              <div>
                <p className="text-red-500 text-xl font-bold mb-2">
                Phần mềm (driver)
                </p>
                <p className="font-semibold">Hỗ trợ chỉnh DPI, đèn và thiết lập macro.</p>
              </div>
              <div>
                <p className="text-red-500 text-xl font-bold mb-2">
                  Cổng kết nối
                </p>
                <p className="font-semibold">USB 2.0 với thiết bị chống nhiễu.</p>
              </div>
              <div>
                <p className="text-red-500 text-xl font-bold mb-2">Bảo hành</p>
                <p className="font-semibold">
                Bảo hành điện tử, 12 tháng (1 đổi 1)
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="form"
          className="grid grid-cols-2 py-4 md:py-10 lg:py-20  bg-gradient-to-r from-[#fedc45] to-[#fb7099]  px-6 lg:px-16 xl:px-24 lg:-ml-16 lg:-mr-16 xl:-ml-24 xl:-mr-24"
        >
          <div className="col-span-2 md:col-span-1">
            <h5 className="text-2xl md:text-3xl lg:text-4xl font-bold my-2 md:my-8">
              Nhanh tay đặt hàng !
            </h5>
            <p>
              Sau khi đặt hàng thành công, bộ phận CSKH sẽ tiến hành xác nhận
              thông tin quý khách mua hàng. Đóng gói sản phẩm và bàn giao cho đơn
              vị vận chuyển để mang đến sản phẩm tân tay cho quý khách.
            </p>
            <button
              className="bg-black w-40 flex justify-center items-center p-2 cursor-pointer text-white hover:scale-110 duration-200"
              onClick={addCart}
            >
              <span className="text-base md:text-xl font-semibold ">
                Đặt hàng ngay
              </span>
            </button>
            <p className="text-xs">*Nếu không tin quảng cáo, hãy qua trực tiếp cửa hàng để tham khảo cũng như đánh giá chất lượng sản phẩm 1 cách tốt nhất</p>
          </div>
          <div className="col-span-2 md:col-span-1 flex justify-center items-center">
            <Image
              className=""
              width={100}
              height={100}
              src="/images/landing-page/g-611m/5.webp"
              alt="GP-803GW"
              sizes="100vw"
              style={{
                width: "50%",
                height: "auto",
              }}
            />
          </div>
        </section>
        {/*  */}
        <section
          id="contact"
          className="py-2 lg:py-4 flex flex-col justify-center items-center text-center"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.0378510093133!2d106.73422791474857!3d10.731564092352032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752594bfc21feb%3A0xab1bca093ed432be!2sZadez%20Vietnam%20Customer%20services!5e0!3m2!1sen!2s!4v1666859573479!5m2!1sen!2s"
            width={1200}
            height={450}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Bản đồ Zadez"
          />
          <div className=" mt-10 flex flex-col justify-center items-center text-center">
            <h6 className="text-3xl my-2 md:my-4 ">CONTACT</h6>
            <p>Trung tâm chăm sóc khách hàng ZADEZ VIETNAM</p>
            <Link
              href="/lien-he"
              target="_blank"
              prefetch={false}
              style={{ textDecoration: "none" }}
            >
              <button className="bg-black w-40 flex justify-center items-center p-2 cursor-pointer hover:scale-110 duration-200">
                <span className="md:text-xl font-semibold text-white">
                  Contact
                </span>
              </button>
            </Link>
          </div>
          {/* RATE */}
          <div className="w-full bg-gray-100 my-8 lg:px-16 xl:px-24 lg:-ml-16 lg:-mr-16 xl:-ml-24 xl:-mr-24">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold my-6">
              Đánh giá của khách hàng
            </div>
            <div className=" flex-grow border-t border-solid border-yellow-400  mb-8"></div>
            <div className="mx-auto">
              <SlideReview />
            </div>
          </div>
          {/*  */}
        </section>
        <section
          id="follow us"
          className="flex flex-col justify-center items-center bg-white bg-cover rounded-xl  gap-4 py-16"
        >
          <div className="text-xl md:text-3xl font-bold mb-2">
            Theo dõi chúng tôi
          </div>
          <span className="mb-4">
            Thông báo, events, khuyến mãi... Tất cả đều có ở đây
          </span>
          <div className="flex gap-2 md:gap-10 ">
            <Link
              href="https://www.facebook.com/ZadezTechnology"
              target="_blank"
              prefetch={false}
            >
              <Image
                className="hover:scale-110 duration-200"
                width={50}
                height={50}
                src="/images/icon/facebook.webp"
                alt="facebook"
              />
            </Link>
            <Link
              href="https://www.instagram.com/zadez_official/"
              target="_blank"
            >
              <Image
                className="hover:scale-110 duration-200"
                width={50}
                height={50}
                src="/images/icon/instagram.webp"
                alt="instagram"
              />
            </Link>
            <Link
              href="https://www.youtube.com/zadezvietnam"
              target="_blank"
              prefetch={false}
            >
              <Image
                className="hover:scale-110 duration-200"
                width={50}
                height={50}
                src="/images/icon/youtube.webp"
                alt="youtube"
              />
            </Link>
            <Link href="" target="_blank" prefetch={false}>
              <Image
                className="hover:scale-110 duration-200"
                width={50}
                height={50}
                src="/images/icon/tik-tok.webp"
                alt="tiktok"
              />
            </Link>
          </div>
        </section>
  
     
      </div>
    );
  };
  export default Content;