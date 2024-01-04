"use client";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SlideBanner = () => {
  const banners = [
    {
      name: "Zadez",
      image: "https://zadez.vn/wp-content/uploads/2022/12/1-2.webp",
    },
    {
      name: "Zadez",
      image: "https://zadez.vn/wp-content/uploads/2022/12/1-2.webp",
    },
    {
      name: "Zadez",
      image: "https://zadez.vn/wp-content/uploads/2022/12/1-2.webp",
    },
  ];
  return (
    <div>
      <Swiper
        loop={true}
        slidesPerView={1}
        freeMode={true}
        grabCursor={true}
        watchSlidesProgress={true}
        modules={[Navigation]}
        className="mySwiperBanner"
        navigation={true}
      >
        {banners &&
          banners?.map((item, i) => (
            <SwiperSlide>
              <div className="h-96 flex justify-center items-center">
                <img
                  className="object-contain"
                  src={item.image}
                  alt={item.name}
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default SlideBanner;
