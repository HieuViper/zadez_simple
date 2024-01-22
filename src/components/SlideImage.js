"use client";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SlideImage = ({ data, width, height }) => {
  return (
    <Swiper
      // onSwiper={setThumbsSwiper}
      loop={true}
      spaceBetween={4}
      slidesPerView={4}
      freeMode={true}
      cssMode={true}
      lazyPreloadPrevNext={1}
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
  );
};

export default SlideImage;
