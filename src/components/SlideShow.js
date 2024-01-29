"use client";
import Image from "next/image";
import { useState } from "react";
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
        spaceBetween={10}
        navigation={true}
        grabCursor={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper btn-swiper"
      >
        {listImage &&
          listImage?.map((item, index) => (
            <SwiperSlide key={index}>
              <Image src={item.url} width={400} height={500} alt="Zadez" />
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
              <Image
                src={item.url}
                width={200}
                height={200}
                alt="Zadez"
                className="scale-75"
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default SlideShow;
