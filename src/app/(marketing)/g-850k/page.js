"use client";

import Footer from "@/components/Footer";
import Image from "next/image";
import { useEffect } from "react";
import Img2 from "../../../../public/images/landing-page/g-850k/2.webp";
import Img3 from "../../../../public/images/landing-page/g-850k/3.webp";
import Img4 from "../../../../public/images/landing-page/g-850k/4.webp";
import Img7 from "../../../../public/images/landing-page/g-850k/7.webp";
import Img8 from "../../../../public/images/landing-page/g-850k/8.webp";
import Img9 from "../../../../public/images/landing-page/g-850k/9.webp";
import Bg4 from "../../../../public/images/landing-page/g-850k/bg-4.webp";
import HeaderG850K from "./_components/HeaderG850K";
import "./_styles/swiperG850K.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import required modules
import PreLoader from "@/components/PreLoader";
import { useSWRData } from "@/library/api";
import store from "@/library/zustand/store";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
const SlideReview = dynamic(() => import("@/components/SlideReview"), {
  loading: () => <div></div>,
  ssr: false,
});
const SlideShow = dynamic(() => import("@/components/SlideShow"), {
  loading: () => <div></div>,
  ssr: false,
});

const productItem = {
  list_image: [
    {
      url: "/images/landing-page/g-850k/1.webp",
      name: "g-850k-1.webp",
    },
    {
      url: "/images/landing-page/g-850k/2.webp",
      name: "g-850k-2.webp",
    },
    {
      url: "/images/landing-page/g-850k/1.webp",
      name: "g-850k-3.webp",
    },
    {
      url: "/images/landing-page/g-850k/0.webp",
      name: "g-850k-4.webp",
    },
    {
      url: "/images/landing-page/g-850k/3.webp",
      name: "g-850k-5.webp",
    },
  ],
};

const G850KPage = () => {
  const { addToCart } = store();
  const { data } = useSWRData(`/api/products?product_code=zadez-g-850k-gen-2`);
  const router = useRouter();

  const handleAddToCart = () => {
    addToCart(data.data[0]);
    router.push("/gio-hang");
  };

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <>
      <PreLoader />
      <HeaderG850K />
      <main className="mt-10 md:mt-40 mb-24 min-h-screen max-w-screen-3xl mx-auto">
        <section id="section-1">
          <div className="wrapper-content gap-10 grid grid-cols-1 md:grid-cols-2">
            <div className="col-span-1 flex flex-col gap-6">
              <span
                className="uppercase font-semibold"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                zadez new product
              </span>
              <div data-aos="fade-right" data-aos-delay="300">
                <span className="text-3xl md:text-5xl uppercase font-bold">
                  gaming keyboard
                </span>
                <h1 className="md:text-5xl text-7xl uppercase font-extrabold m-0">
                  g-850k gen2
                </h1>
              </div>
              <span data-aos="fade-right" data-aos-delay="400">
                Sự kết hợp tinh tế giữa thiết kế hiện đại và tính năng đa dạng
                đã giúp bàn phím Zadez G-850K Gen2 trở thành một lựa chọn tuyệt
                vời cho game thủ. Hơn nữa, bàn phím còn sử dụng switch siêu bền
                để đồng hành cùng người dùng trong thời gian dài. Hãy trải
                nghiệm ngay!
              </span>
              <div data-aos="fade-right" data-aos-delay="500">
                <button className="button-gradient-1" onClick={handleAddToCart}>
                  <span className="font-extrabold text-xl">850.000 VNĐ</span>
                </button>
              </div>
            </div>
            <div className="col-span-1 relative" data-aos="flip-up">
              <Image
                width={0}
                height={520}
                src={Img2}
                alt="Image 2"
                className="object-cover w-full h-auto scale-100 md:scale-110"
                layout="responsive"
                sizes="(max-width: 425px) 50vw, 75vw"
                priority
              />
            </div>
          </div>
        </section>

        <section id="section-2" className="relative mt-20 md:mt-72">
          <div className="relative md:absolute bg-gray-200 grid grid-cols-1 md:grid-cols-2 md:gap-40 gap-20 md:-translate-y-1/2  md:w-3/4 md:left-1/2 md:transform md:-translate-x-1/2 rounded-xl shadow-xl p-4">
            <div
              className="col-span-1 relative"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <Image
                width={0}
                height={350}
                src={Bg4}
                alt="Bg 4"
                className="object-cover w-full h-full"
                sizes="(max-width: 425px) 50vw, 75vw"
                priority
              />
            </div>
            <div
              className="col-span-1 flex flex-col gap-4 justify-center"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <h2 className="text-3xl md:text-5xl uppercase font-bold text-gradient-1 m-0">
                switch membrane <br /> 98 phím
              </h2>
              <span>
                Bàn phím Zadez G-850K Gen 2 được trang bị công nghệ switch
                membrane giả cơ, tạo nên trải nghiệm gõ phím êm ái và thoải mái,
                đồng thời giảm thiểu tối đa tiếng ồn, mang lại sự yên tĩnh và
                tập trung cho người dùng trong quá trình chơi game. Loại switch
                này sử dụng màng cao su đặc biệt tạo ra lực nhấn, giúp người
                dùng có cảm giác phản hồi tốt và độ chính xác cao khi thao tác.
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-[url('/images/landing-page/g-850k/bg-1.webp')] bg-no-repeat bg-cover bg-center h-[500px] pt-40 md:pt-60 px-10 md:px-24 pb-20">
            <div className="col-span-1 md:block hidden" data-aos="zoom-in">
              <Image
                width={500}
                height={500}
                src={Img3}
                alt="Image 3"
                className="object-contain w-full h-auto"
                layout="responsive"
                sizes="(max-width: 425px) 50vw, 75vw"
                priority
              />
            </div>
            <div className="col-span-1 text-right flex items-end flex-col gap-6">
              <h2
                className="text-3xl md:text-6xl font-bold m-0 text-gradient-1"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                Thiết kế Gaming <br /> Tinh tế, hiện đại
              </h2>
              <span
                className="text-white md:text-base text-sm"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                Bàn phím Zadez G-850K Gen 2 tự hào sở hữu kích thước nhỏ gọn
                (400 x 140 x 44mm) cùng trọng lượng khá nhẹ (790 gram), tạo nên
                sự chắc chắn và thoải mái khi sử dụng. Được sản xuất từ chất
                liệu nhựa ABS cap cấp, bàn phím không chỉ khẳn định được độ bền
                vượt trội, mà còn có khả năng chống chịu đáng kinh ngạc trước
                tác động từ môi trường xung quanh.
              </span>
              <div data-aos="fade-left" data-aos-delay="400">
                <button className="button-gradient-1" onClick={handleAddToCart}>
                  <span className="font-semibold text-lg">Mua ngay &gt;</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="section-3">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center wrapper-content justify-center gap-2 py-20">
            <div data-aos="fade-right">
              <Image
                width={300}
                height={400}
                src={Img8}
                alt="Image 8"
                className="object-cover w-full h-auto shadow-xl rounded-lg col-span-1 transform hover:scale-x-[-1] transition-transform duration-300"
                sizes="(max-width: 425px) 50vw, 75vw"
              />
            </div>
            <div data-aos="fade-left">
              <Image
                width={300}
                height={400}
                src={Img7}
                alt="Image 7"
                className="object-cover w-full h-auto shadow-xl rounded-lg col-span-1 transform hover:scale-x-[-1] transition-transform duration-300"
                sizes="(max-width: 425px) 50vw, 75vw"
              />
            </div>
          </div>
        </section>

        <section id="section-4">
          {/* <div class="swiper-container gallery-top">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="swiper-slide-container">Slide 1</div>
              </div>
              <div class="swiper-slide">
                <div class="swiper-slide-container">Slide 2</div>
              </div>
              <div class="swiper-slide">
                <div class="swiper-slide-container">Slide 3</div>
              </div>
              <div class="swiper-slide">
                <div class="swiper-slide-container">Slide 4</div>
              </div>
              <div class="swiper-slide">
                <div class="swiper-slide-container">Slide 5</div>
              </div>
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
          </div>
          <div class="swiper-container gallery-thumbs">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="swiper-slide-container">Slide 1</div>
              </div>
              <div class="swiper-slide">
                <div class="swiper-slide-container">Slide 2</div>
              </div>
              <div class="swiper-slide">
                <div class="swiper-slide-container">Slide 3</div>
              </div>
              <div class="swiper-slide">
                <div class="swiper-slide-container">Slide 4</div>
              </div>
              <div class="swiper-slide">
                <div class="swiper-slide-container">Slide 5</div>
              </div>
            </div>
          </div> */}
          <div className="bg-[url('/images/landing-page/g-850k/bg-2.webp')] bg-no-repeat bg-cover bg-center md:px-56 px-20 py-20">
            <div className=" bg-white md:px-20 px-4 py-4 rounded-lg m-auto">
              <SlideShow listImage={productItem?.list_image} />
            </div>
            <div className="flex flex-col justify-center items-center gap-4 text-center mt-5">
              <span className="text-3xl font-bold uppercase">
                keyboard gaming g-850k gen2
              </span>
              <span className="font-medium">
                Sản phẩm này sẽ đáp ứng hoàn hảo nhu cầu và kỳ vọng của người
                dùng trong quá trình chơi game.
              </span>
              <button
                className="border-0 outline-none rounded-lg px-6 py-2 bg-black text-white hover:opacity-80 transition-all cursor-pointer"
                onClick={handleAddToCart}
              >
                Mua ngay
              </button>
            </div>
          </div>
          {/* <div className="wrapper-content  ">
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              <SwiperSlide>
                <Image
                  src="/no-image.jpg"
                  width={500}
                  height={500}
                  alt="Zadez1"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/Logo-ZADEZ.png"
                  width={500}
                  height={500}
                  alt="Zadez2"
                />
              </SwiperSlide>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
              </SwiperSlide>
            </Swiper>
          </div> */}
        </section>

        <section id="section-5">
          <div className="wrapper-content py-10" data-aos="zoom-out">
            <Image
              width={1000}
              height={900}
              src={Img9}
              alt="Image 9"
              className="object-contain w-full h-auto rounded-xl shadow-md transition-all hover:scale-110"
              layout="responsive"
              sizes="(max-width: 425px) 50vw, 75vw"
            />
          </div>
        </section>

        <section id="section-6">
          <div
            className="bg-[url('/images/landing-page/g-850k/bg-3.webp')] bg-no-repeat bg-cover bg-center px-6 md:px-48 py-40 flex flex-col gap-10"
            data-aos="fade-down"
          >
            <div className="flex flex-col text-red-500">
              <span className="text-2xl font-extrabold text-center capitalize">
                gaming keyboard membrane
              </span>
              <div className="flex items-end gap-2">
                <div className="h-[3px] w-full bg-red-500 " />
                <span className="text-nowrap font-bold -mb-1">
                  ZADEZ&nbsp;G-850K&nbsp;Gen&nbsp;2
                </span>
                <div className="h-[3px] w-full bg-red-500 " />
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
              <SectionSixItem title={"Kích thước"} content={"400*140*44mm"} />
              <SectionSixItem
                title={"Tương thích"}
                content={"Window 8/10 và Mac OS 10.5.1"}
              />
              <SectionSixItem
                title={"Chất liệu"}
                content={"Phím khắc Laser, chất liệu nhựa ABS"}
              />
              <SectionSixItem
                title={"Trọng lượng"}
                content={"790 gms (bàn phím)"}
              />
              <SectionSixItem title={"Layout"} content={"98 Phím"} />
              <SectionSixItem
                title={"Cổng kết nối"}
                content={"Cổng USB mạ vàng"}
              />
              <SectionSixItem
                title={"Chiều dài dây"}
                content={"1.5 mét, dây bọc dù"}
              />
              <SectionSixItem title={"Switch"} content={"Menbrane giả cơ"} />
              <SectionSixItem
                title={"Bảo hành"}
                content={"Bảo hành điện tử, 12 tháng (1 đổi 1)"}
              />
            </div>
          </div>
        </section>

        <section id="section-7">
          <div className="bg-gradient-to-r from-g-850k-green to-g-850k-blue grid grid-cols-2 px-10 md:px-48 pt-10 pb-4">
            <div className="col-span-2 md:col-span-1 flex flex-col gap-7">
              <span
                className="text-3xl md:text-5xl font-extrabold"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                Nhanh tay đặt hàng !
              </span>
              <span data-aos="fade-right" data-aos-delay="300">
                Sau khi đặt hàng thành công, bộ phận CSKH sẽ tiến hành xác nhận
                thông tin quý khách hàng mua hàng. <br /> Đóng gói sản phẩm và
                bàn giao cho đơn vị vận chuyển để mang đến sản phẩm tận tay cho
                quý khách.
              </span>
              <button
                className="animate-bounce focus:animate-none hover:animate-none  w-fit
        inline-flex text-md font-medium bg-black px-8 py-2 rounded-lg tracking-wide 
        text-white cursor-pointer"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                <span className="text-lg font-medium">Đặt hàng ngay</span>
              </button>
              <span
                className="italic text-xs"
                data-aos="fade-right"
                data-aos-delay="500"
              >
                *Nếu không tin quảng cáo, hãy qua trực tiếp cửa hàng để tham
                khảo cũng như đánh giá chất lượng sản phẩm một cách tốt nhất.
              </span>
            </div>
            <div
              className="col-span-2 md:col-span-1 relative"
              data-aos="fade-right"
            >
              <Image
                width={400}
                height={400}
                src={Img4}
                alt="Image 4"
                layout="responsive"
                sizes="(max-width: 425px) 50vw, 75vw"
                className="object-contain"
              />
            </div>
          </div>
        </section>

        <section id="section-8">
          <div
            className="flex justify-center items-center py-10"
            data-aos="zoom-in"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.0378510474025!2d106.73384167498139!3d10.731564089414565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752594bfc21feb%3A0xab1bca093ed432be!2zVHJ1bmcgdMOibSBDaMSDbSBzw7NjIGtow6FjaCBow6BuZyAmIEThu4tjaCB24bulIGLhuqNvIGjDoG5oIFpBREVa!5e0!3m2!1svi!2s!4v1706374174113!5m2!1svi!2s"
              width="1000"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Zadez Map"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div
            className="flex flex-col gap-2 justify-center items-center text-center"
            data-aos="fade-up"
          >
            <span className="font-semibold uppercase text-3xl">contact</span>
            <span>Trung tâm chăm sóc khách hàng ZADEZ VIETNAM</span>

            <button className="px-8 py-2 bg-black rounded-xl relative text-white mt-2">
              <div className="absolute -top-3 -right-1">
                <span className="relative flex h-3 w-3 mt-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-g-850k-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-g-850k-green"></span>
                </span>
              </div>
              Contact
            </button>
          </div>
        </section>

        <section id="section-9">
          <div
            className="wrapper-content flex flex-col gap-5 py-10"
            data-aos="fade-up"
          >
            <span className="text-4xl font-extrabold text-center">
              Đánh giá của khách hàng
            </span>
            <div className="h-1 bg-yellow-300 w-full"></div>
            <div className="">
              <SlideReview />
            </div>
          </div>
        </section>

        <section id="section-10">
          <div className="flex flex-col justify-center items-center bg-white rounded-xl gap-4 py-10">
            <div
              className="text-xl md:text-3xl font-bold"
              data-aos="fade-right"
            >
              Theo dõi chúng tôi
            </div>

            <div className="flex gap-2 md:gap-10 ">
              <a
                href="https://www.facebook.com/ZadezTechnology"
                target="_blank"
                data-aos="fade-up"
                data-aos-duration="200"
              >
                <Image
                  className="hover:scale-110 duration-200"
                  width={50}
                  height={50}
                  src="/images/icon/facebook.webp"
                  alt="facebook"
                />
              </a>
              <a
                href="https://www.instagram.com/zadez_official/"
                target="_blank"
                data-aos="fade-up"
                data-aos-duration="300"
              >
                <Image
                  className="hover:scale-110 duration-200"
                  width={50}
                  height={50}
                  src="/images/icon/instagram.webp"
                  alt="instagram"
                />
              </a>
              <a
                href="https://www.youtube.com/zadezvietnam"
                target="_blank"
                data-aos="fade-up"
                data-aos-duration="400"
              >
                <Image
                  className="hover:scale-110 duration-200"
                  width={50}
                  height={50}
                  src="/images/icon/youtube.webp"
                  alt="youtube"
                />
              </a>
              <a
                href=""
                target="_blank"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <Image
                  className="hover:scale-110 duration-200"
                  width={50}
                  height={50}
                  src="/images/icon/tik-tok.webp"
                  alt="tiktok"
                />
              </a>
            </div>

            <span className="text-sm" data-aos="fade-left">
              Thông báo, events, khuyến mãi... Tất cả đều có ở đây
            </span>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default G850KPage;

const SectionSixItem = ({ title, content }) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-lg md:text-2xl font-extrabold m-0 text-red-500">
        {title}
      </span>
      <span className="font-[500]">{content}</span>
    </div>
  );
};
