const SlideBanner = dynamic(() => import("@/components/SlideBanner"), {
  loading: () => <p>Loading...</p>,
});
const SlideCard = dynamic(() => import("@/components/SlideCard"), {
  loading: () => <p>Loading...</p>,
});
const SlideImage = dynamic(() => import("@/components/SlideImage"), {
  loading: () => <p>Loading...</p>,
});
import db from "@/models";
import dynamic from "next/dynamic";

//
const slideBanners = [
  { name: "Zadez", image: "/images/banner1.webp" },
  { name: "Zadez", image: "/images/banner2.webp" },
  { name: "Zadez", image: "/images/banner3.webp" },
];

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
const newStoryGaming = [
  {
    image: "/images/ZADEZ-Gaming-Wireless-Mouse.webp",
    name: "Bàn Phím Cơ",
  },
  { image: "/images/ZADEZ-Gaming-Headset.webp", name: "Bàn Phím Membrane" },
  { image: "/images/ZADEZ-Headset-Stand.webp", name: "Chuột Gaming" },
  {
    image: "/images/ZADEZ-Gaming-Wireless-Mouse-2.webp",
    name: "Tai Nghe Gaming",
  },
  { image: "/images/ZADEZ-Gaming-Keyboard.webp", name: "Gaming Pad" },
  {
    image: "/images/ZADEZ-Headset-Stand-Ps5.webp",
    name: "Khung Treo Tai Nghe",
  },
];

async function getProductsByStatus(status) {
  // const res = await fetch(
  //   `${process.env.BASE_URL}/api/products?status=${status}`,
  //   { cache: "no-store" }
  // );
  const res = await db.Products.findAll({
    where: {
      status: status,
    },
    raw: true,
  });
  return res;
}

export default async function Home() {
  const outstandingProducts = await getProductsByStatus("outstanding");
  const newProducts = await getProductsByStatus("new");
  const bestSeller = await getProductsByStatus("best");

  return (
    <main className="w-full">
      {/* SLIDE BANNER */}
      <section id="slide-banner" className="w-full my-4">
        <SlideBanner data={slideBanners} width={1200} height={300} />
      </section>

      {/* The New Story of GAMING */}
      <div className="flex flex-col justify-center items-center text-center my-4 p-4">
        <h5 className="text-2xl text-red-500">The New Story of GAMING</h5>
        <p className="text-base ">
          ZADEZ hân hạnh giới thiệu đến Quý khách hàng những sản phẩm mới nhất
          trong dòng phụ kiện Gaming, sẽ được ra mắt từ quý 2 năm 2023.
        </p>
      </div>
      <SlideImage data={newStoryGaming} width={400} height={295} />
    </main>
  );
}
