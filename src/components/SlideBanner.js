"use client";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SlideBanner = ({ data, width, height }) => {
  return (
    <div>
      <Swiper
        loop={true}
        // lazyPreloadPrevNext={1}
        // lazyPreloaderClass="swiper-lazy-preloader"
        slidesPerView={1}
        freeMode={true}
        grabCursor={true}
        watchSlidesProgress={true}
        modules={[Navigation, Autoplay]}
        className="mySwiperBanner btn-swiper"
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {data &&
          data?.map((item, i) => (
            <SwiperSlide key={i}>
              <Image
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                width={width}
                height={height}
                src={item.image}
                alt={item.name}
                className="rounded-lg"
                priority={true}
                // loading="lazy"
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default SlideBanner;
