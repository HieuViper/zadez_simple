"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = (props) => {
  const listImage = props.listImage;
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const router = useRouter();

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
            <SwiperSlide
              key={index}
              onClick={() =>
                router.push(
                  "/blogs/" +
                    item.title
                      .toLowerCase()
                      .replace(/ /g, "-")
                      .replace(/[^\w-]+/g, "") +
                    "-" +
                    item.id
                )
              }
            >
              <Image
                src={item.mainImageURL}
                width={400}
                height={4}
                alt="Zadez"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-semibold text-white">
                {item.title}
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default Banner;
