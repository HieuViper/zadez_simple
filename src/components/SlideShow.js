"use client";
import { useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// import './styles.css';

const SlideShow = (props) => {
  // const listImage = [
  //     { url: "https://zadez.vn/wp-content/uploads/2023/08/GP-803B-Black_Square_1-1024x1024.webp" },
  //     { url: "https://zadez.vn/wp-content/uploads/2023/08/GP-803B-White_Square_1-1024x1024.webp" },
  //     { url: "https://zadez.vn/wp-content/uploads/2023/08/GP-803B-Black_Square_2-1024x1024.webp" },
  //     { url: "https://zadez.vn/wp-content/uploads/2023/08/GP-803B-White_Square_2-1024x1024.webp" },
  //     { url: "https://zadez.vn/wp-content/uploads/2023/08/3.webp" },
  //     { url: "https://zadez.vn/wp-content/uploads/2023/08/2.webp" },
  //     { url: "https://zadez.vn/wp-content/uploads/2023/08/4.webp" },
  //     { url: "https://zadez.vn/wp-content/uploads/2023/08/5.webp" },
  //     { url: "https://zadez.vn/wp-content/uploads/2023/08/6.webp" },

  // ]
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
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {listImage &&
          listImage?.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={item.url} />
            </SwiperSlide>
          ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        // spaceBetween={1}
        slidesPerView={5}
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
          1024: {
            slidesPerView: 5,
          },
        }}
      >
        {listImage &&
          listImage?.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={item.url} />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default SlideShow;
