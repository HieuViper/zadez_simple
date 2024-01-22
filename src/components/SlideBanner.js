"use client";
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
        slidesPerView={1}
        freeMode={true}
        lazyPreloadPrevNext={1}
        grabCursor={true}
        watchSlidesProgress={true}
        modules={[Navigation, Autoplay]}
        className="mySwiperBanner"
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {data &&
          data?.map((item, i) => (
            <SwiperSlide key={i} lazy={true}>
              <img
                style={{
                  width,
                  height,
                }}
                src={item.image}
                alt={item.name}
                className="rounded-lg"
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default SlideBanner;
