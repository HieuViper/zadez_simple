'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs'
import ProductCard from './ProductCard';

const SlideCard = (props) => {
    const products = props.products
    console.log('products :', products);
    const addToCard = (id) => {

    }
    return (
        <Swiper
            // onSwiper={setThumbsSwiper}
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
            }}
        >
            {products && products?.map((item) => (
                <SwiperSlide>
                    <ProductCard data={item} key={i} />
                </SwiperSlide>))}
        </Swiper>
    )
}

export default SlideCard