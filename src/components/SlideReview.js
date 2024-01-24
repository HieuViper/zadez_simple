"use client";
import { Avatar, Card, Rate } from "antd";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SlideReview = ({ width, height }) => {
  const data = [
    {
      name: "Huỳnh Như ",
      image: "/images/review1.webp",
      rate: 5,
      description: "Nhiệt tình, thân thiện!Sản phẩm chất lượng tốt!",
    },
    {
      name: "Linh Tố",
      image: "/images/review2.webp",
      rate: 5,
      description:
        "Hãng chăm sóc khách hàng tốt, trả lời tin nhắn nhanh, giải quyết vấn đề nhanh chóng.",
    },
    {
      name: "Mai Uyên Lâm",
      image: "/images/review3.webp",
      rate: 5,
      description:
        "Công ty chăm sóc khách hàng rất tốt và tận tâm, hỗ trợ kịp thời cho mình. Nên mình cảm thấy rất an tâm và đúng đắn khi chọn mua sản phẩm ở Zadez.",
    },
    {
      name: "Ruby Nguyen",
      image: "/images/review4.webp",
      rate: 4,
      description:
        "Văn phòng mới rộng rãi thoáng mát. Đặc biệt là thuận tiện đậu xe hơn văn phòng trước đây.",
    },
    {
      name: "Đăng Khoa Huỳnh",
      image: "/images/review5.webp",
      rate: 5,
      description:
        "Dịch vụ chăm sóc khách hàng qua FB rất nhiệt tình, hỗ trợ cả khi máy đã hết hạn bảo hành rất chi tiết",
    },
    {
      name: "Lan Tran",
      image: "/images/review6.webp",
      rate: 5,
      description:
        "Bảo hành rất chu đáo: hướng dẫn gửi sản phẩm ra sao, hồi đáp nhanh chóng qua messenger, gửi trả sản phẩm bảo hành trong chưa đầy 24 giờ. Ưng lắm luôn!",
    },
  ];
  return (
    <Swiper
      // onSwiper={setThumbsSwiper}
      lazyPreloadPrevNext={1}
      lazyPreloaderClass="swiper-lazy-preloader"
      loop={true}
      spaceBetween={4}
      // slidesPerView={4}

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
        640: {
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
            <Card
              hoverable
              style={{
                height: 280,
              }}
            >
              <div className="flex ">
                <Avatar src={item.image} size={50} alt={item.name} />
                <div className="text-base text-[#0B606F] font-semibold ml-4 ">
                  {item.name}
                </div>
              </div>
              <div className="mt-4 mb-2">
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
