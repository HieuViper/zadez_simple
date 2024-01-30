const SlideBanner = dynamic(() => import("@/components/SlideBanner"), {
  ssr: false,
  loading: () => (
    <div
      role="status"
      className="h-[8rem] md:h-[20rem] lg:h-[24rem]  xl:h-[28rem] h- flex items-center justify-center  bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
    >
      <svg
        className="w-10 h-10 text-gray-200 dark:text-gray-600"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 18"
      >
        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
      </svg>
    </div>
  ),
});
const SlideImage = dynamic(() => import("@/components/SlideImage"), {
  ssr: false,
  loading: () => <div></div>,
});
const NewProducts = dynamic(() => import("./_components/NewProducts"), {
  ssr: false,
  loading: () => <div></div>,
});
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

import ImageAccesories from "../../../public/images/categories/accessories.webp";
import ImageAudio from "../../../public/images/categories/audio.webp";
import ImageBag from "../../../public/images/categories/bag.webp";
import ImageHeadset from "../../../public/images/categories/headset.webp";
import ImageKeyboard from "../../../public/images/categories/keyboard.webp";
import ImageMouse from "../../../public/images/categories/mouse.webp";

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
    image: "/images/quality.webp",
    short:
      "ZADEZ đã thực hiện quy trình chuyển đổi số ứng dụng từ sản xuất đến dịch vụ khách hàng. Tất cả sản phẩm ZADEZ đều được cấp mã số định danh Serial Number riêng biệt, thuận tiện cho việc tra cứu dữ liệu trực tuyến và bảo hành điện tử.",
    description: "",
  },
  {
    name: "Công Nghệ Cao",
    image: "/images/factory.webp",
    short:
      "CHẤT LƯỢNG - yếu tố trọng tâm & có tính chất quyết định trong quy trình sản xuất của ZADEZ. Hệ thống máy móc tự động hóa, linh kiện chất lượng cao và dữ liệu số của mỗi sản phẩm luôn được hoàn thiện để phục vụ khách hàng tốt hơn.",
    description: "",
  },
];

export default async function Home() {
  return (
    <main className="w-full m-auto md:max-w-3xl lg:max-w-7xl">
      {/* BANNER */}
      <section id="slide-banner" className="w-full my-4">
        <SlideBanner data={slideBanners} width={1200} height={300} />
      </section>
      <h1 className="invisible m-0 text-xs">ZADEZ VIỆT NAM</h1>
      {/* DANH MỤC SẢN PHẨM */}
      <section className="">
        <h2 className="text-2xl text-primary font-bold text-center mt-6 mb-2">
          Danh mục sản phẩm
        </h2>
        <div className="grid grid-cols-3 my-4">
          <div className="col-span-3 md:col-span-1 flex flex-col justify-center items-center bg-[#e5e7eb] rounded-2xl m-1 md:m-2 lg:m-4 cursor-pointer  text-center">
            <Link
              style={{ textDecoration: "none" }}
              href="/danh-muc-san-pham/0?type=headset"
              className=" hover:transform hover:scale-105 transition-transform duration-300 ease-in-out text-black hover:text-primary hover:font-semibold"
              prefetch={false}
            >
              <Image
                sizes="(min-width: 60em) 24vw,
                    (min-width: 28em) 45vw,
                    100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                width={200}
                height={200}
                src={ImageHeadset}
                alt="Tai nghe zadez"
                placeholder="blur"
                priority={true}
              />
              <div className="mb-4">Tai nghe</div>
            </Link>
          </div>
          <div className="col-span-3 md:col-span-1 grid grid-cols-2">
            <div className=" col-span-1 flex flex-col justify-center items-center bg-[#e5e7eb] rounded-2xl m-1 md:m-2 lg:m-4 cursor-pointer hover:text-primary text-center">
              <Link
                style={{ textDecoration: "none" }}
                href="/danh-muc-san-pham/0?type=mouse"
                className="hover:transform hover:scale-105 transition-transform duration-300 ease-in-out text-black hover:text-primary hover:font-semibold"
                prefetch={false}
              >
                <Image
                  sizes="(min-width: 60em) 24vw,
                    (min-width: 28em) 45vw,
                    100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  width={200}
                  height={200}
                  src={ImageMouse}
                  alt="Chuột zadez"
                  priority={true}
                  placeholder="blur"
                />
                <div className="mb-4">Chuột</div>
              </Link>
            </div>
            <div className="col-span-1 flex flex-col justify-center items-center bg-[#e5e7eb] rounded-2xl m-1 md:m-2 lg:m-4 cursor-pointer hover:text-primary text-center">
              <Link
                style={{ textDecoration: "none" }}
                href="/danh-muc-san-pham/0?type=keyboard"
                className="hover:transform hover:scale-105 transition-transform duration-300 ease-in-out text-black hover:text-primary hover:font-semibold"
                prefetch={false}
              >
                <Image
                  sizes="(min-width: 60em) 24vw,
                    (min-width: 28em) 45vw,
                    100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  width={200}
                  height={200}
                  src={ImageKeyboard}
                  alt="Bàn phím zadez"
                  priority={true}
                  placeholder="blur"
                />
                <div className="mb-4">Bàn phím</div>
              </Link>
            </div>
            <div className=" col-span-1 flex flex-col justify-center items-center bg-[#e5e7eb] rounded-2xl m-1 md:m-2 lg:m-4 cursor-pointer hover:text-primary text-center">
              <Link
                style={{ textDecoration: "none" }}
                href="/danh-muc-san-pham/0?type=bag"
                className="hover:transform hover:scale-105 transition-transform duration-300 ease-in-out text-black hover:text-primary hover:font-semibold"
                prefetch={false}
              >
                <Image
                  sizes="(min-width: 60em) 24vw,
                    (min-width: 28em) 45vw,
                    100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  width={200}
                  height={200}
                  src={ImageBag}
                  alt="Túi chống sốc zadez"
                  priority={true}
                  placeholder="blur"
                />
                <div className="mb-4">Túi chống sốc</div>
              </Link>
            </div>
            <div className="col-span-1 flex flex-col justify-center items-center bg-[#e5e7eb] rounded-2xl m-1 md:m-2 lg:m-4 cursor-pointer hover:text-primary hover:transform text-center">
              <Link
                style={{ textDecoration: "none" }}
                href="/danh-muc-san-pham/0?type=accessories"
                className="hover:transform hover:scale-105 transition-transform duration-300 ease-in-out text-black hover:text-primary hover:font-semibold"
                prefetch={false}
              >
                <Image
                  sizes="(min-width: 60em) 24vw,
                    (min-width: 28em) 45vw,
                    100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  width={200}
                  height={200}
                  src={ImageAccesories}
                  placeholder="blur"
                  alt="Phụ kiện zadez"
                  priority={true}
                />
                <div className="mb-4">Phụ kiện</div>
              </Link>
            </div>
          </div>
          <div className="col-span-3 md:col-span-1 flex flex-col justify-center items-center bg-[#e5e7eb] rounded-2xl m-1 md:m-2 lg:m-4 cursor-pointer hover:text-primary hover:transform text-center">
            <Link
              style={{ textDecoration: "none" }}
              href="/danh-muc-san-pham/0?type=speaker"
              className="hover:transform hover:scale-105 transition-transform duration-300 ease-in-out text-black hover:text-primary hover:font-semibold"
              prefetch={false}
            >
              <Image
                sizes="(min-width: 60em) 24vw,
                    (min-width: 28em) 45vw,
                    100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                width={200}
                height={200}
                src={ImageAudio}
                placeholder="blur"
                alt="Loa zadez"
                priority={true}
              />
              <div className="mb-4">Loa</div>
            </Link>
          </div>
        </div>
      </section>
      {/* SẢN PHẨM MỚI */}
      <NewProducts />

      <section className="">
        <div className="flex flex-col justify-center items-center text-center my-4 p-4">
          <h4 className="text-2xl text-primary font-bold my-2">
            The New Story Of GAMING
          </h4>
          <p className="text-base ">
            ZADEZ hân hạnh giới thiệu đến Quý khách hàng những sản phẩm mới nhất
            trong dòng phụ kiện Gaming, sẽ được ra mắt từ quý 2 năm 2023.
          </p>
        </div>
        <SlideImage data={newStoryGaming} width={400} height={295} />
      </section>
      <section className="text-center mt-8">
        <h5 className="text-2xl text-primary font-bold my-2">About Zadez</h5>
        <p className="text-base mx-8 mb-4">
          ZADEZ là thương hiệu phụ kiện duy nhất tại thị trường Việt Nam quản lý
          từng sản phẩm theo mã số định danh – Serial Number (tương tự với
          smartphone/ notebook v.v.), điều này cho phép ZADEZ quản lý và giám
          sát chất lượng sản phẩm theo tiêu chuẩn cao nhất. Đồng thời, bạn có
          thể tra cứu thông tin về sản phẩm một cách dễ dàng thông qua hệ thống
          kích hoạt bảo hành trực tuyến&nbsp;
          <a
            className="text-primary no-underline"
            target="_blank"
            href="https://psi.zadez.vn"
          >
            PSI.ZADEZ.VN
          </a>
        </p>
        <div className="grid grid-cols-3 gap-4">
          {aboutZadez?.map((item, i) => (
            <div
              key={i}
              className="col-span-3 md:col-span-1 duration-200 hover:-translate-y-2 ease-in hover:shadow-2xl shadow-md rounded-lg"
            >
              <Image
                sizes="(min-width: 60em) 24vw,
                    (min-width: 28em) 45vw,
                    100vw"
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
                <div className="text-primary text-base mt-0">{item.name}</div>
                <p className="text-sm">{item.short}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
