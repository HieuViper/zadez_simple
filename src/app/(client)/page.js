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
import Image from "next/image";
import Link from "next/link";

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
const aboutZadez = [
  {
    name: "Thấu Hiểu Khách Hàng",
    image: "/images/technology.webp",
    short:
      "Nắm bắt, thấu hiểu nhu cầu và làm hài lòng khách hàng là kim chỉ nam trong quy trình hoạt động của ZADEZ. Khách hàng là trung tâm của tất cả các dự án và ZADEZ cam kết mang đến cho khách hàng những sản phẩm có giá trị sử dụng với giá hợp lý nhất.",
    description: "",
  },
  {
    name: "Dữ Liệu Số",
    image: "/images/quality.jpg",
    short:
      "ZADEZ đã thực hiện quy trình chuyển đổi số ứng dụng từ sản xuất đến dịch vụ khách hàng. Tất cả sản phẩm ZADEZ đều được cấp mã số định danh Serial Number riêng biệt, thuận tiện cho việc tra cứu dữ liệu trực tuyến và bảo hành điện tử.",
    description: "",
  },
  {
    name: "Công Nghệ Cao",
    image: "/images/factory.jpg",
    short:
      "CHẤT LƯỢNG - yếu tố trọng tâm & có tính chất quyết định trong quy trình sản xuất của ZADEZ. Hệ thống máy móc tự động hóa, linh kiện chất lượng cao và dữ liệu số của mỗi sản phẩm luôn được hoàn thiện để phục vụ khách hàng tốt hơn.",
    description: "",
  },
];

async function getProductsByStatus(status) {
  const res = await db.Products.findAll({
    where: {
      status: status,
    },
    raw: true,
    nest:true,
  });
  return res;
  
}

export default async function Home() {
  const newProducts = await getProductsByStatus("new");

  return (
    <main className="w-full m-auto md:max-w-3xl lg:max-w-7xl">
      {/* BANNER */}
      <section id="slide-banner" className="w-full my-4">
        <SlideBanner data={slideBanners} width={1200} height={300} />
      </section>
      {/* DANH MỤC SẢN PHẨM */}
      <section className="">
        <h2 className="text-3xl text-primary font-bold text-center mt-6 mb-2">Danh mục sản phẩm</h2>
        <div className="grid grid-cols-3 my-4">
          <div
            className="col-span-3 md:col-span-1 flex flex-col justify-center items-center bg-[#e5e7eb] rounded-2xl m-1 md:m-2 lg:m-4 cursor-pointer  text-center"
          >
            <Link style={{ textDecoration: 'none' }} href='/danh-muc-san-pham/0?type=headset'
              className=" hover:transform hover:scale-105 transition-transform duration-300 ease-in-out text-black hover:text-primary hover:font-semibold">
              <Image
                // sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                width={200}
                height={200}
                src="/images/categories/headset.webp"
                alt="Tai nghe"
                className="w-32 h-32 md:w-full md:h-full"
              />
              <div className="mb-4">Tai nghe</div>
            </Link>
          </div>
          <div className="col-span-3 md:col-span-1 grid grid-cols-2">
            <div
              className=" col-span-1 flex flex-col justify-center items-center bg-[#e5e7eb] rounded-2xl m-1 md:m-2 lg:m-4 cursor-pointer hover:text-primary text-center"
            >
              <Link style={{ textDecoration: 'none' }} href='/danh-muc-san-pham/0?type=mouse'
                className="hover:transform hover:scale-105 transition-transform duration-300 ease-in-out text-black hover:text-primary hover:font-semibold">
                <Image
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  width={200}
                  height={200}
                  src="/images/categories/mouse.webp"
                  alt="Chuột"
                />
                <div className="mb-4">Chuột</div>
              </Link>
            </div>
            <div
              className="col-span-1 flex flex-col justify-center items-center bg-[#e5e7eb] rounded-2xl m-1 md:m-2 lg:m-4 cursor-pointer hover:text-primary text-center"
            >
              <Link style={{ textDecoration: 'none' }} href='/danh-muc-san-pham/0?type=keyboard'
                className="hover:transform hover:scale-105 transition-transform duration-300 ease-in-out text-black hover:text-primary hover:font-semibold">
                <Image
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  width={200}
                  height={200}
                  src="/images/categories/keyboard.webp"
                  alt="Bàn phím"
                />
                <div className="mb-4">Bàn phím</div>
              </Link>
            </div>
            <div
              className=" col-span-1 flex flex-col justify-center items-center bg-[#e5e7eb] rounded-2xl m-1 md:m-2 lg:m-4 cursor-pointer hover:text-primary text-center"
            >
              <Link style={{ textDecoration: 'none' }} href='/danh-muc-san-pham/0?type=bag'
                className="hover:transform hover:scale-105 transition-transform duration-300 ease-in-out text-black hover:text-primary hover:font-semibold">
                <Image
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  width={200}
                  height={200}
                  src="/images/categories/bag.webp"
                  alt="Túi chống sốc"
                />
                <div className="mb-4">Túi chống sốc</div>
              </Link>
            </div>
            <div
              className="col-span-1 flex flex-col justify-center items-center bg-[#e5e7eb] rounded-2xl m-1 md:m-2 lg:m-4 cursor-pointer hover:text-primary hover:transform text-center"
            >
              <Link style={{ textDecoration: 'none' }} href='/danh-muc-san-pham/0?type=accessories'
                className="hover:transform hover:scale-105 transition-transform duration-300 ease-in-out text-black hover:text-primary hover:font-semibold">
                <Image
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  width={200}
                  height={200}
                  src="/images/categories/accessories.webp"
                  alt="Phụ kiện"
                />
                <div className="mb-4">Phụ kiện</div>
              </Link>
            </div>
          </div>
          <div
            className="col-span-3 md:col-span-1 flex flex-col justify-center items-center bg-[#e5e7eb] rounded-2xl m-1 md:m-2 lg:m-4 cursor-pointer hover:text-primary hover:transform text-center"
          >
            <Link style={{ textDecoration: 'none' }} href='/danh-muc-san-pham/0?type=speaker'
              className="hover:transform hover:scale-105 transition-transform duration-300 ease-in-out text-black hover:text-primary hover:font-semibold">
              <Image
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                width={200}
                height={200}
                src="/images/categories/audio.webp"
                alt="Loa"
              />
              <div className="mb-4">Loa</div>
            </Link>
          </div>
        </div>
        </section>
              {/* SẢN PHẨM MỚI */}
      {newProducts?.length > 0 && (
        <div
          id="new-products"
          className=" bg-[#e5e7eb] rounded-md p-4 mb-4 text-center"
        >
          <h2 className="text-2xl font-bold text-primary">Sản Phẩm Mới</h2>
        <div className="">
          
          <SlideCard data={newProducts} />
        </div>
        </div>
      )}
      <section className="">
        <div className="flex flex-col justify-center items-center text-center my-4 p-4">
          <h4 className="text-2xl text-primary my-2">The New Story Of GAMING</h4>
          <p className="text-base ">
            ZADEZ hân hạnh giới thiệu đến Quý khách hàng những sản phẩm mới nhất
            trong dòng phụ kiện Gaming, sẽ được ra mắt từ quý 2 năm 2023.
          </p>
        </div>
        <SlideImage data={newStoryGaming} width={400} height={295} />
      </section>
      <section className="text-center mt-8">
        <h5 className="text-2xl text-primary font-semibold my-2">
          About Zadez
        </h5>
        <p className="text-base text-[#999999] mx-8 mb-4">
          ZADEZ là thương hiệu phụ kiện duy nhất tại thị trường Việt Nam quản lý
          từng sản phẩm theo mã số định danh – Serial Number (tương tự với
          smartphone/ notebook v.v.), điều này cho phép ZADEZ quản lý và giám
          sát chất lượng sản phẩm theo tiêu chuẩn cao nhất. Đồng thời, bạn có
          thể tra cứu thông tin về sản phẩm một cách dễ dàng thông qua hệ thống
          kích hoạt bảo hành trực tuyến&nbsp;
          <a className="text-primary no-underline" target="_blank" href="https://psi.zadez.vn">
             PSI.ZADEZ.VN
          </a>
        </p>
        <div className="grid grid-cols-3 gap-4">
          {aboutZadez?.map((item, i) => (
            <div
              key={i}
              className="col-span-3 md:col-span-1 shadow-xl rounded-lg"
            >
              <Image
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                src={item.image}
                width={398}
                height={287}
                alt="ZADEZ Technology"
                className="rounded-lg"
              />
              <div className="p-7">
                <h4 className="text-primary text-base mt-0">{item.name}</h4>
                <p className="text-sm text-[#999999]">{item.short}</p>
              </div>
            </div>
          ))}
        </div>
        </section>

    </main>
  );
}
