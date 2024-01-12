"use client";

import SlideBanner from "@/components/SlideBanner";
import SlideCard from "@/components/SlideCard";
import SlideImage from "@/components/SlideImage";
import { useSWRData } from "@/library/api";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  const {
    data: outstandingProducts,
  } = useSWRData(`/api/products?status=outstanding`);
  const {
    data: newPoducts,
  } = useSWRData(`/api/products?status=new`);
  const {
    data: bestSeller,
  } = useSWRData(`/api/products?status=best`);

  const banner = { name: "Tết", image: "/images/banner-tet.jpg" };
  //
  const slideBanners = [
    { name: "Zadez", image: "/images/banner1.jpg" },
    { name: "Zadez", image: "/images/banner2.webp" },
    { name: "Zadez", image: "/images/banner4.webp" },
  ];
  // Sản phẩm nổi bật-Sản phẩm mới-Top bán chạy
  const initDataSlide = [
    {
      product_code: "999",
      main_image: "/images/categories/mouse.webp",
      price: 200000,
      discount_price: 100000,
      name: "ZADEZ G-151M`",
      stock: 'in',
      short:
        "Tai nghe không dây cao cấp với công nghệ ENC - Environmental Noise Cancellation hiện đại, trọng lượng siêu nhẹ 176 gram mang đến cảm giác đeo thoải mái trong thời gian dài. Kết nối Bluetooth 5.2 và chế độ EQ Bass cho chất lượng âm thanh tuyệt hảo. Hãy trải nghiệm ngay !",
      description: "description",
    },
    {
      product_code: "999",
      main_image: "/images/ZADEZ-Gaming-Headset.webp",
      price: 500000,
      discount_price: 900,
      name: "ZADEZ G-850K GEN 2`",
      short:
        "Tai nghe không dây cao cấp với công nghệ ENC - Environmental Noise Cancellation hiện đại, trọng lượng siêu nhẹ 176 gram mang đến cảm giác đeo thoải mái trong thời gian dài. Kết nối Bluetooth 5.2 và chế độ EQ Bass cho chất lượng âm thanh tuyệt hảo. Hãy trải nghiệm ngay !",
      description: "description",
    },
    {
      product_code: 999,
      main_image: "/images/categories/headset.webp",
      price: 999999,
      name: "ZADEZ ZLB-8511 SKY BLUE`",
      stock: 'in',
      short:
        "Tai nghe không dây cao cấp với công nghệ ENC - Environmental Noise Cancellation hiện đại, trọng lượng siêu nhẹ 176 gram mang đến cảm giác đeo thoải mái trong thời gian dài. Kết nối Bluetooth 5.2 và chế độ EQ Bass cho chất lượng âm thanh tuyệt hảo. Hãy trải nghiệm ngay !",
      description: "description",
    },
    {
      product_code: "999",
      main_image: "/images/ZADEZ-Gaming-Wireless-Mouse-2.webp",
      price: "999999",
      name: "ZADEZ ZLB-8511 SKY BLUE",
      short:
        "Tai nghe không dây cao cấp với công nghệ ENC - Environmental Noise Cancellation hiện đại, trọng lượng siêu nhẹ 176 gram mang đến cảm giác đeo thoải mái trong thời gian dài. Kết nối Bluetooth 5.2 và chế độ EQ Bass cho chất lượng âm thanh tuyệt hảo. Hãy trải nghiệm ngay !",
      description: "description",
    },
    {
      product_code: "999",
      main_image: "/images/ZADEZ-Gaming-Keyboard.webp",
      price: "999999",
      name: "ZADEZ M-326`",
      short:
        "Tai nghe không dây cao cấp với công nghệ ENC - Environmental Noise Cancellation hiện đại, trọng lượng siêu nhẹ 176 gram mang đến cảm giác đeo thoải mái trong thời gian dài. Kết nối Bluetooth 5.2 và chế độ EQ Bass cho chất lượng âm thanh tuyệt hảo. Hãy trải nghiệm ngay !",
      description: "description",
    },
    {
      product_code: "999",
      main_image: "/images/ZADEZ-Headset-Stand-Ps5.webp",
      price: "999999",
      name: "Macbook Bro`",
      short:
        "Tai nghe không dây cao cấp với công nghệ ENC - Environmental Noise Cancellation hiện đại, trọng lượng siêu nhẹ 176 gram mang đến cảm giác đeo thoải mái trong thời gian dài. Kết nối Bluetooth 5.2 và chế độ EQ Bass cho chất lượng âm thanh tuyệt hảo. Hãy trải nghiệm ngay !",
      description: "description",
    },
  ]

  // Danh mục sản phẩm
  const menuCategory = [
    {
      name: "Chuột",
      image: "/images/categories/mouse.webp",
      type: "mouse",
    },
    {
      name: "Bàn phím",
      image: "/images/categories/keyboard.webp",
      type: "keyboard",
    },
    {
      name: "Âm thanh",
      image: "/images/categories/audio.webp",
      type: "audio",
    },
    {
      name: "Đồng hồ thông minh",
      image: "/images/categories/smartwatch.webp",
      type: "smartwatch",
    },
    {
      name: "Phụ kiện",
      image: "/images/categories/accessories.webp",
      type: "accessories",
    },
  ];
  // ZADEZ GAMING
  // const introProduct = [
  //   { image: "/images/categories/keyboard.webp", name: "Bàn Phím Cơ", short: "Sử dụng switch cơ cao cấp dành cho Game thủ chuyên nghiệp, đa dạng lựa chọn với Blue/ Red/ Brown/ Black switch đáp ứng cảm giác gõ cho từng nhu cầu sử dụng. Thiết kế chuẩn Full size hoặc TKL, hỗ trợ thiết lập macro qua driver chuyên dụng.", link: "" },
  //   { image: "/images/categories/keyboard2.webp", name: "Bàn Phím Membrane", short: "Bàn phím gaming dành cho game thủ trong giai đoạn khởi đầu. Sử dụng switch cao su (membrane) hỗ trợ tính năng kháng nước mà vẫn cho cảm giác gõ tương tự switch cơ dòng Brown, đồng thời thiết lập macro qua driver chuyên dụng (*)", link: "" },
  //   { image: "/images/categories/mouse.webp", name: "Chuột Gaming", short: 'Nổi bật với dòng GT dành cho Game thủ chuyên nghiệp và dòng G là lựa chọn cho sự khởi đầu hoàn hảo. Trang bị chipset cao cấp, switch bền bỉ và hỗ trợ thiết lập macro (GT), các sản phẩm Gaming mouse của ZADEZ sẽ mang đến trải nghiệm chơi game tuyệt vời nhất', link: "" },
  //   { image: "/images/categories/headset.webp", name: "Tai Nghe Gaming", short: "Âm thanh vòm 7.1 chân thật sẽ giúp các game thủ xác định phương hướng rõ ràng, đồng thời trao đổi cùng đồng đội kịp thời qua micro lọc âm. Driver chuyên dụng hỗ trợ thay đổi tần số hoặc chế độ nghe Music/ Cinema tiện dụng (*)", link: "" },
  //   { image: "/images/categories/pad.jpg", name: "Gaming Pad", short: "Chất liệu cao cấp và tăng cường độ chính xác khi sử dụng chuột, miếng lót Gaming pad là phụ kiện không thể thiếu của Game thủ chuyên nghiệp. Không phải tất cả các Gaming pad đều giống nhau, vì ZADEZ luôn tạo nên sự khác biệt.", link: "" },
  //   { image: "/images/categories/headstand.jpg", name: "Khung Treo Tai Nghe", short: "Khung treo tai nghe với thiết kế độc quyền của ZADEZ, mang đến sự tinh tế cho không gian trải nghiệm game đẳng cấp. Hãy trải nghiệm và tận hưởng các tính năng độc đáo khác của đế treo tai nghe ZADEZ (* tùy thuộc từng model)", link: "" },
  // ]
  // The New Story of GAMING
  const newStoryGaming = [{
    image: "/images/ZADEZ-Gaming-Wireless-Mouse.webp", name: "Bàn Phím Cơ"
  },
  { image: "/images/ZADEZ-Gaming-Headset.webp", name: "Bàn Phím Membrane" },
  { image: "/images/ZADEZ-Headset-Stand.webp", name: "Chuột Gaming" },
  { image: "/images/ZADEZ-Gaming-Wireless-Mouse-2.webp", name: "Tai Nghe Gaming" },
  { image: "/images/ZADEZ-Gaming-Keyboard.webp", name: "Gaming Pad" },
  { image: "/images/ZADEZ-Headset-Stand-Ps5.webp", name: "Khung Treo Tai Nghe" }]
  return (
    <main className="w-full bg-[#f8f9fa]">
      {/* BANNER */}
      {/* <section id="banner" className="w-full m-auto -mt-10">
        <Image
          src={banner?.image}
          width={1400}
          height={300}
          alt={banner.name}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </section> */}

      {/* SLIDE BANNER */}
      <section id="slide-banner" className="w-full mb-4">
        <SlideBanner data={slideBanners} width={1200} height={300} />
      </section>

      {/* SẢN PHẨM NỔI BẬT */}
      <div id="outstanding-products" className="bg-gray-100 rounded-md p-4 mb-4 bg-[url('/images/bg-newyear.jpg')] bg-contain">
        <h2 className="text-2xl font-bold text-white">Sản phẩm nổi bật</h2>
        <SlideCard data={outstandingProducts?.data} />
      </div>
      {/* SẢN PHẨM MỚI */}
      <div id="new-products" className="bg-gray-100 rounded-md p-4 mb-4 bg-[url('/images/bg-newyear2.jpg')] bg-contain">
        <h2 className="text-2xl font-bold text-white">Sản phẩm mới</h2>
        <SlideCard data={newPoducts?.data} />
      </div>

      {/* TOP BÁN CHẠY */}
      <div id="best-seller" className="bg-gray-100 rounded-md p-4 mb-4 bg-[url('/images/bg-newyear3.jpg')] bg-contain">
        <h2 className="text-2xl font-bold text-white">Top bán chạy</h2>
        <SlideCard data={bestSeller?.data} />
      </div>

      {/* DANH MỤC SẢN PHẨM */}
      <section id="categories" className="py-10rounded-md p-4 my-4 ">
        <h2 className="text-2xl font-bold text-red-500">Danh mục sản phẩm</h2>
        <div className="mx-2 lg:mx-20 grid grid-cols-4 md:grid-cols-5 gap-2 ">
          {menuCategory.map((item, i) => (
            <Link
              href={`/danh-muc-san-pham/0?type=${item.type}`}
              key={i}
              className="hover:text-red-500 cursor-pointer no-underline text-black col-span-2 md:col-span-1 flex flex-col justify-center items-center hover:transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={128}
                height={128}
                className=""
              />
              <div>{item.name}</div>
            </Link>
          ))}
        </div>
      </section>
      {/* ZADEZ */}
      <div className="flex flex-col justify-start items-center text-center h-[600px] bg-[url('/images/banner-zadez.jpg')] bg-center">
        <div className="w-1/2 ">
          <h2 className="text-2xl text-red-500 mt-32">ZADEZ GAMING</h2>
          <p className="text-base text-white">Game là niềm đam mê của bạn và phục vụ cho niềm đam mê đó là sứ mệnh của chúng tôi. Hãy trải nghiệm các phụ kiện Gaming của ZADEZ với thiết kế tinh tế, tính năng - trợ năng - hiệu năng ấn tượng, cùng sự bền bỉ & chính sách chăm sóc khách hàng vượt trội. ZADEZ - Mang Đến Sự Hài Lòng !</p>
        </div>
      </div>
      {/* intro product */}
      {/* <div className='grid grid-cols-1 md:grid-cols-2 gap-8 my-8'>
        {introProduct?.map((item, i) => (
          <div key={i} className='col-span-2 md:col-span-1 grid-cols-3 flex shadow-md rounded-lg '>
            <div className='col-span-3 md:col-span-1  overflow-hidden rounded-md hover:transform hover:scale-105 transition-transform duration-300 ease-in-out'>
              <Image width={218} height={272} alt={item.name} src={item.image} sizes="100vw" style={{
                width: "100%",
                height: "auto",
                objectFit: "contain"
              }} />
            </div>
            <div className='col-span-3 md:col-span-2 px-4'>
              <h4 className='text-red-500'>{item.name}</h4>
              <p>{item.short}</p>
            </div>
          </div>
        ))}
      </div> */}
      {/* The New Story of GAMING */}
      <div className="flex flex-col justify-center items-center text-center my-4 p-4">
        <h2 className="text-2xl text-red-500">The New Story of GAMING</h2>
        <p className="text-base ">ZADEZ hân hạnh giới thiệu đến Quý khách hàng những sản phẩm mới nhất trong dòng phụ kiện Gaming, sẽ được ra mắt từ quý 2 năm 2023.</p>
      </div>
      <SlideImage data={newStoryGaming} width={400} height={295} />
      {/* LOGO CHÍNH THỨC ZADEZ */}
      <div className="my-4 p-4">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl text-red-500">Logo Chính Thức ZADEZ</h2>
          <p className="text-base ">Hãy tham khảo logo chính thức của ZADEZ và sử dụng hệ thống tra cứu thông tin sản phẩm bằng Serial Number để nhận diện được sản phẩm ZADEZ chính hãng.</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="col-span-2 md:col-span-1 ">
            <h4 className="text-lg text-red-500 font-medium ">
              Ý Nghĩa Biểu Tượng
            </h4>
            <p className="text-base">
              Logo chính thức của ZADEZ bao gồm phần biểu tượng thể hiện chữ Z
              cách điệu và ký tự "ZADEZ". Hình tượng chữ Z biểu trưng cho sự
              tuần hoàn, sự hài hòa và sự kết hợp của "lưỡng nghi" trong quan
              niệm của người Á Đông. Cùng với biểu tượng "tiêu điểm", ZADEZ luôn
              hoạch định mục tiêu phát triển rõ ràng và có trọng tâm ngay từ lúc
              khởi đầu các dự án, trên nền tảng cân đối tổng thể các nguồn lực
              cũng như điều kiện tác động.
            </p>
            <h4 className="text-lg text-red-500 font-medium ">
              Ý Nghĩa Ký Tự
            </h4>
            <p className="text-base">
              - Chữ A: Accessories - Phụ kiện, nền tảng kinh doanh cốt lõi của
              ZADEZ.
              <br />
              - Chữ D: Digital - Kỹ thuật số, yếu tố quan trọng trong tất cả quy
              trình & sản phẩm của ZADEZ.
              <br />
              - Chữ E: Easier & Elegant - sự Tiện dụng & Tinh tế, thể hiện khát
              khao mang đến sự hài lòng cho khách hàng khi trải nghiệm sản phẩm
              ZADEZ.
              <br />
              - Chữ Z: biểu tượng của logo và là ký tự cuối cùng trong bảng chữ
              cái, thể hiện cam kết hoàn tất những việc đã được hoạch định. Tại
              ZADEZ, không có khái niệm bỏ cuộc.
              <br />
              <b>ZADEZ - Make Life Easier</b>
            </p>
          </div>
          <div className="col-span-2 md:col-span-1 ">
            <Image
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              src="/images/logo-description.jpg"
              width={500}
              height={500}
              alt="ZADEZ logo"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
