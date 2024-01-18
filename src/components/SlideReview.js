"use client";
import { Avatar, Card, Rate } from "antd";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SlideReview = ({ width, height }) => {
    const { Meta } = Card;
    const data = [{ name: "Pon Phan", image: "https://zadez.vn/wp-content/uploads/2023/06/ChIJ6x_Cv5QldTERvjLUPgnKG6s_8e0bf1b93e681e3747619fc097ca1a00.jpg", rate: 5, description: "Trung tâm hỗ trợ rất nhiệt tình. Nhân viên hướng dẫn chi tiết và cụ thể.Mình mất receiver của con chuột. May mà tt hỗ trợ chứ ko là vất rồi.Cảm ơn các bạn rất nhiều." },
    { name: "Đăng Khoa Huỳnh ", image: "https://zadez.vn/wp-content/uploads/2023/06/ChIJ6x_Cv5QldTERvjLUPgnKG6s_d86e8041c763c1ecf62da501dc185e68.jpg", rate: 5, description: "Dịch vụ chăm sóc khách hàng qua FB rất nhiệt tình, hỗ trợ cả khi máy đã hết hạn bảo hành rất chi tiết" },
    { name: "Minh D. Phan", image: "https://zadez.vn/wp-content/uploads/2023/06/ChIJ6x_Cv5QldTERvjLUPgnKG6s_d25bebd2e362edc2743651792b38238f.jpg", rate: 4, description: "Văn phòng mới rộng rãi thoáng mát. Đặc biệt là thuận tiện đậu xe hơn văn phòng trước đây." },
    { name: "Đăng Khoa Huỳnh", image: "https://zadez.vn/wp-content/uploads/2023/06/ChIJ6x_Cv5QldTERvjLUPgnKG6s_d86e8041c763c1ecf62da501dc185e68.jpg", rate: 5, description: "Dịch vụ chăm sóc khách hàng qua FB rất nhiệt tình, hỗ trợ cả khi máy đã hết hạn bảo hành rất chi tiết" },
    { name: "Linh Tố", image: "https://lh3.googleusercontent.com/a-/AD5-WCmslxeKB1vwDmW_ZrGlgR-jI7jwVilO-pWVI4ltUg=s56-c0x00000000-cc-rp-mo", rate: 5, description: "Hãng chăm sóc khách hàng tốt, trả lời tin nhắn nhanh, giải quyết vấn đề nhanh chóng." }]

    return (
        <Swiper
            // onSwiper={setThumbsSwiper}
            lazyPreloadPrevNext={2}
            loop={true}
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
                1280: {
                    slidesPerView: 5,
                },
            }}
        >
            {data &&
                data?.map((item, i) => (
                    <SwiperSlide key={i}>
                        <Card
                            hoverable
                            style={{
                                width: 260,
                                height: 280
                            }}
                        >
                            {/* <Meta
                                avatar={<Avatar src={item.image} size={50} />}
                                title={item.name}
                            /> */}
                            <div className="flex ">
                                <Avatar src={item.image} size={50} />
                                <div className="text-base text-cyan-600 font-semibold ml-4 flex items-center">{item.name}</div>
                            </div>
                            <div className="mt-6" >
                                <Rate value={item.rate} disabled={true} />
                            </div>
                            <div>{item.description}</div>
                        </Card>
                    </SwiperSlide>
                ))}
        </Swiper>
    );
};

export default SlideReview;
