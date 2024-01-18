"use client";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "./ProductCard";

const SlideCard = ({ data }) => {
  return (
    <Swiper
      // onSwiper={setThumbsSwiper}
      lazyPreloadPrevNext={2}
      loop={true}
      spaceBetween={24}
      slidesPerView={4}
      freeMode={true}
      grabCursor={true}
      watchSlidesProgress={true}
      modules={[Navigation]}
      className="mySwiperCard "
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
        1536: {
          slidesPerView: 5,
        },
      }}
    >
      {data &&
        data?.map((item, i) => (
          <SwiperSlide key={i}>
            <ProductCard data={item} key={i} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default SlideCard;
