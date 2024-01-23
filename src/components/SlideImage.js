"use client";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SlideImage = ({ data, width, height }) => {
  return (
    <Swiper
      // onSwiper={setThumbsSwiper}
      loop={true}
      lazyPreloadPrevNext={1}
      lazyPreloaderClass="swiper-lazy-preloader"
      // lazy={true}
      spaceBetween={4}
      slidesPerView={4}
      freeMode={true}
      grabCursor={true}
      watchSlidesProgress={true}
      modules={[Navigation, Autoplay]}
      className="mySwiperCard"
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        820: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
    >
      {data &&
        data?.map((item, i) => (
          <SwiperSlide key={i}>
            <Image
              src={item.image}
              alt={item.name}
              width={width}
              height={height}
              priority={true}
              // loading="lazy"
              // sizes="100vw"
              // style={{
              //     width: "100%",
              //     height: "auto",
              // }}
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default SlideImage;
