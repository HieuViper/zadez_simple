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

const LadingPageOne = () => {
    const { addToCart } = store();
    const [activeCard, setActiveCard] = useState(1);
    const router = useRouter();
    const productBlack = {
      list_image: [
        {
          url: "/images/landing-page/gp-803/GP_803B/GP-803B-1.webp",
          name: "GP-803B-1.webp",
        },
        {
          url: "/images/landing-page/gp-803/GP_803B/GP-803B-2.webp",
          name: "GP-803B-2.webp",
        },
        {
          url: "/images/landing-page/gp-803/GP_803B/GP-803B-3.webp",
          name: "GP-803B-3.webp",
        },
        {
          url: "/images/landing-page/gp-803/GP_803B/GP-803B-4.webp",
          name: "GP-803B-4.webp",
        },
        {
          url: "/images/landing-page/gp-803/GP_803B/GP-803B-5.webp",
          name: "GP-803B-5.webp",
        },
      ],
    };
    const productWhite = {
      list_image: [
        {
          url: "/images/landing-page/gp-803/GP-803BW/GP-803GW-1.webp",
          name: "GP-803B-1.webp",
        },
        {
          url: "/images/landing-page/gp-803/GP-803BW/GP-803GW-2.webp",
          name: "GP-803B-2.webp",
        },
        {
          url: "/images/landing-page/gp-803/GP-803BW/GP-803GW-3.webp",
          name: "GP-803B-3.webp",
        },
        {
          url: "/images/landing-page/gp-803/GP-803BW/GP-803GW-4.webp",
          name: "GP-803B-4.webp",
        },
        {
          url: "/images/landing-page/gp-803/GP-803BW/GP-803GW-5.webp",
          name: "GP-803B-5.webp",
        },
      ],
    };
  
    const { data: GP803B } = useSWRData(
      `/api/products?product_code=zadez-gp-803b`
    );
    const { data: GP803BW } = useSWRData(
      `/api/products?product_code=zadez-gp-803bW`
    );
  
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      // setIsModalOpen(false);
      if (activeCard == 1) {
        GP803B && addToCart(GP803B.data[0]);
      } else if (activeCard == 2) {
        GP803BW && addToCart(GP803BW.data[0]);
      }
      router.push("/gio-hang");
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
  
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
              ENC BLUETOOTH HEADPHONE
            </p>
            <h1 className="text-2xl md:text-5xl font-bold m-0">GP-803 SERIES</h1>
            <p>
              Tai nghe không dây cao cấp với công nghệ ENC-Environmental Noise
              Cancellation hiện đại, trọng lượng siêu nhẹ 176gram mang đến cảm
              giác đeo thoải mái trong thời gian dài. Kết nối bluetooth 5.2 và chế
              độ EQ Bass cho chất lượng âm thanh tuyệt hảo. Hãy trải nghiệm ngay!{" "}
            </p>
            <button className="bg-yellow-300 w-40 flex justify-center items-center p-2">
              <span className="text-xl font-semibold">850.000 VNĐ</span>
            </button>
          </div>
          <div
            className="col-span-2 md:col-span-1 flex justify-center items-center"
            data-aos="zoom-in"
            data-aos-duration="500"
          >
            <Image
              width={600}
              height={400}
              src="/images/landing-page/gp-803/img1.webp"
              alt="GP-803"
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
                  src="/images/landing-page/gp-803/img2.webp"
                  alt="GP-803"
                  fill
                  sizes="100%"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
            <div className="col-span-2 md:col-span-1 md:p-6 lg:p-10 xl:p-20 hidden md:block">
              <h2 className="mt-2 text-5xl md:text-3xl lg:text-4xl xl:text-5xl font-bold uppercase text-yellow-400">
                ULTRA LIGHT 176 GRAM
              </h2>
              <p>
                Với chất liệu cao cấp và bền bỉ, ZADEZ GP-803B có trọng lượng siêu
                nhẹ chỉ 176 gram, mang đến trải nghiệm âm nhạc tuyệt vời trong
                thời gian dài.
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
          className="grid grid-cols-2 gap-8 pt-64 pb-8 md:pb-16 lg:pb-32 bg-[url('/images/landing-page/gp-803/bg1.webp')] bg-center lg:-ml-16 lg:-mr-16 xl:-ml-24 xl:-mr-24"
        >
          <div
            className="col-span-2 md:col-span-1 flex justify-center items-center"
            data-aos="zoom-in-right"
            data-aos-duration="500"
          >
            <Image
              width={200}
              height={200}
              src="/images/landing-page/gp-803/img7.webp"
              alt="GP-803"
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
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold uppercase text-yellow-400 ">
              ENC-KHỬ ỒN CAO CẤP
            </h2>
            <p className="text-white">
              ENC - Environmental Noise Cancellation là công nghệ khử ồn cao cấp,
              có thể hạn chế đến 96% tạp âm đến từ môi trường bên ngoài.
            </p>
            <p className="text-white">
              Chế độ EQ có 2 chế độ tùy chỉnh âm thanh HIFI hoặc BASS, đáp ứng nhu
              cầu thưởng thức âm nhạc và điện ảnh trong điều kiện tốt nhất.
            </p>
            <div className="flex justify-end ">
              <button
                className="bg-yellow-300 w-40 p-2 lg:p-4 flex justify-center items-center cursor-pointer hover:scale-110 duration-200"
                onClick={showModal}
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
            src="/images/landing-page/gp-803/img3.webp"
            alt="GP-803"
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
            src="/images/landing-page/gp-803/img6.webp"
            alt="GP-803"
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
          className="bg-[url('/images/landing-page/gp-803/bg2.webp')] bg-center py-4 md:py-10 lg:py-20 lg:-ml-16 lg:-mr-16 xl:-ml-24 xl:-mr-24"
        >
          <div className="w-full lg:w-4/6 m-auto">
            <Tabs
              defaultActiveKey="1"
              centered
              tabBarStyle={{ borderBottom: "none" }}
              items={[
                {
                  key: "1",
                  label: (
                    <span className="text-base md:text-lg font-bold">
                      GP-803 BLACK
                    </span>
                  ),
                  children: (
                    <div className=" bg-white px-4 md:px-20 pb-4 rounded-lg m-auto">
                      <SlideShow listImage={productBlack?.list_image} />
                    </div>
                  ),
                },
                {
                  key: "2",
                  label: (
                    <span className="text-base md:text-lg font-bold">
                      GP-803 WHITE
                    </span>
                  ),
                  children: (
                    <div className=" bg-white px-4 md:px-20 pb-4 rounded-lg m-auto">
                      <SlideShow listImage={productWhite?.list_image} />
                    </div>
                  ),
                },
              ]}
            />
          </div>
          <div className="flex flex-col justify-center items-center p-2">
            <h3 className="text-xl md:text-3xl my-4">GP-803 BLACK & WHITE</h3>
            <p>
              Tai nghe ZADEZ GP-803 Series có hai màu sắc &ldquo;Đen&rdquo; và
              &ldquo;Trắng&rdquo; cho khách hàng lựa chọn
            </p>
            <button
              className="bg-black w-40 flex justify-center items-center p-2 cursor-pointer hover:scale-110 duration-200"
              onClick={showModal}
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
            src="/images/landing-page/gp-803/bg5.webp"
            alt="GP-803"
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
                <p className="text-red-500 text-xl font-bold mb-2">Bluetooth</p>
                <p className="font-semibold">Chuẩn V5.2</p>
              </div>
              <div>
                <p className="text-red-500 text-xl font-bold mb-2">Trọng lượng</p>
                <p className="font-semibold">176 g (tai nghe)</p>
              </div>
              <div>
                <p className="text-red-500 text-xl font-bold mb-2">
                  Dung lượng pin
                </p>
                <p className="font-semibold">Li-Polymer 400 mAh</p>
              </div>
            </div>
  
            <div className="col-span-3 md:col-span-1 text-center">
              <div>
                <p className="text-red-500 text-xl font-bold mb-2">Tương thích</p>
                <p className="font-semibold">
                  iOS, Android, Windows OS, MacOS (kết nối Bluetooth tương thích).
                </p>
              </div>
              <div>
                <p className="text-red-500 text-xl font-bold mb-2">Trở kháng</p>
                <p className="font-semibold">23 ± 15%</p>
              </div>
              <div>
                <p className="text-red-500 text-xl font-bold mb-2">
                  Độ nhạy của Micrô
                </p>
                <p className="font-semibold">40 ± 3dB</p>
              </div>
            </div>
  
            <div className="col-span-3 md:col-span-1 text-center">
              <div>
                <p className="text-red-500 text-xl font-bold mb-2">
                  Đệm tai nghe
                </p>
                <p className="font-semibold">Bọc vải cao cấp thoáng khí</p>
              </div>
              <div>
                <p className="text-red-500 text-xl font-bold mb-2">
                  Cổng kết nối
                </p>
                <p className="font-semibold">USB-C (Type-C)</p>
              </div>
              <div>
                <p className="text-red-500 text-xl font-bold mb-2">Bảo hành</p>
                <p className="font-semibold">
                  Kích hoạt bảo hành điện tử, 12 tháng (1 đổi 1)
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="form"
          className="grid grid-cols-2 py-4 md:py-10 lg:py-20  bg-yellow-300 px-6 lg:px-16 xl:px-24 lg:-ml-16 lg:-mr-16 xl:-ml-24 xl:-mr-24"
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
              onClick={showModal}
            >
              <span className="text-base md:text-xl font-semibold ">
                Đặt hàng ngay
              </span>
            </button>
          </div>
          <div className="col-span-2 md:col-span-1 grid grid-cols-2 justify-center items-center">
            <Image
              className="col-span-2 md:col-span-1"
              width={300}
              height={300}
              src="/images/landing-page/gp-803/GP-803BW/GP-803GW-1.webp"
              alt="GP-803GW"
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            <Image
              className="col-span-2 md:col-span-1"
              width={300}
              height={300}
              src="/images/landing-page/gp-803/GP_803B/GP-803B-3.webp"
              alt="GP-803B"
              style={{
                width: "100%",
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
  
        <Modal
          title="Lựa chọn màu bạn muốn mua?"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button key="back" onClick={handleCancel}>
              Hủy
            </Button>,
            <Button key="submit" type="primary" onClick={handleOk}>
              Đến giỏ hàng
            </Button>,
          ]}
        >
          <div className="grid grid-cols-2 gap-2">
            <div
              className={`flex flex-col justify-center items-center cursor-pointer rounded-lg border  hover:border-solid hover:border-cyan-500 ${
                activeCard == 1
                  ? "border-solid border-cyan-500 duration-100 shadow-xl"
                  : ""
              }`}
              onClick={() => {
                setActiveCard(1);
              }}
            >
              <Image
                className="col-span-2 md:col-span-1"
                width={300}
                height={300}
                src="/images/landing-page/gp-803/GP_803B/GP-803B-3.webp"
                alt="GP-803B"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
              <p className={`${activeCard === 1 ? "font-bold" : ""}`}>Đen</p>
            </div>
            <div
              className={`flex flex-col justify-center items-center cursor-pointer rounded-lg border hover:border-solid hover:border-cyan-500 ${
                activeCard == 2
                  ? "border-solid border-cyan-500 duration-100 shadow-xl"
                  : ""
              }`}
              onClick={() => {
                setActiveCard(2);
              }}
            >
              <Image
                className="col-span-2 md:col-span-1"
                width={300}
                height={300}
                src="/images/landing-page/gp-803/GP-803BW/GP-803GW-1.webp"
                alt="GP-803GW"
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
              <p className={`${activeCard === 2 ? "font-bold" : ""}`}>Trắng</p>
            </div>
          </div>
        </Modal>
      </div>
    );
  };
  export default LadingPageOne;