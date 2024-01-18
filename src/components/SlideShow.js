"use client";
import Image from "next/image";
import { useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SlideShow = (props) => {
  const listImage = props.listImage;
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        lazyPreloadPrevNext={2}
        spaceBetween={10}
        navigation={true}
        grabCursor={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {listImage &&
          listImage?.map((item, index) => (
            <SwiperSlide key={index}>
              <Image src={item.url} width={500} height={500} alt="Zadez" priority={true} />
            </SwiperSlide>
          ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        // spaceBetween={1}
        lazyPreloadPrevNext={2}
        slidesPerView={4}
        freeMode={true}
        grabCursor={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper1"
        breakpoints={{
          0: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 4,
          },
          // 1024: {
          //   slidesPerView: 5,
          // },
        }}
      >
        {listImage &&
          listImage?.map((item, index) => (
            <SwiperSlide key={index}>
              <Image src={item.url} width={500} height={500} alt="Zadez" priority={true} />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default SlideShow;
