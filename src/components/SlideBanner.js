'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs'
import Image from 'next/image';

const SlideBanner = () => {
    const banners = [{ name: "Zadez", image: "/images/categories/audio.webp" },
    { name: "Zadez", image: "/images/categories/audio.webp" },
    { name: "Zadez", image: "/images/categories/audio.webp" }]
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
                {banners && banners?.map((item, i) => (
                    <SwiperSlide>
                        {/* <div className='h-96 flex justify-center items-center'>
                            <img className='object-contain' src={item.image} alt={item.name} />
                        </div> */}
                        <Image width={500} height={500} src={item.image} alt={item.name} />

                    </SwiperSlide>))}
            </Swiper>
        </div>
    )
}

export default SlideBanner