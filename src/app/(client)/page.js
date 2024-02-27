import dynamic from "next/dynamic";
import Image from "next/image";

const SlideBanner = dynamic(() => import("@/components/SlideBanner"), {
  ssr: false,
  loading: () => (
    <div
      role="status"
      className="h-[8rem] md:h-[20rem] lg:h-[24rem] xl:h-[28rem]  flex items-center justify-center  bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
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
  loading: () =>   
  <div className="h-[16rem] flex items-center justify-center bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
  <svg
   className="w-10 h-10 text-gray-200 dark:text-gray-600"
   aria-hidden="true"
   xmlns="http://www.w3.org/2000/svg"
   fill="currentColor"
   viewBox="0 0 20 18"
 >
   <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
 </svg>
 </div>,
});
const NewProducts = dynamic(() => import("./_components/NewProducts"), {
  ssr: false,
  loading: () =>   <div
  id="new-products"
  className=" bg-[#e5e7eb] rounded-md p-4 mb-4 text-center"
>
  <h3 className="text-xl md:text-2xl font-bold text-primary">Sản Phẩm Mới</h3>
  <div className="h-[22rem]  flex items-center justify-center bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">

      </div>
</div>,
});
const CategoriesProduct = dynamic(() => import('./_components/CategoriesProduct'), {
  ssr: false,
  loading: () => 
  <div>
<h2 className="text-xl md:text-2xl text-primary font-bold text-center m-0 mb-2">
      Danh Mục Sản Phẩm
    </h2>
  <div className="lg:h-[34rem] grid grid-cols-3 gap-2 md:gap-4 my-4">
      <div className="h-[10rem] md:h-[20rem] lg:h-[22rem] col-span-3 md:col-span-1 flex items-center justify-center bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"></div>
      <div className="h-[20rem] lg:h-[22rem]  col-span-3 md:col-span-1 grid grid-cols-2 gap-2 lg:gap-4 ">
      <div className="col-span-1 bg-gray-300 animate-pulse dark:bg-gray-700 rounded-2xl"></div>
      <div className="col-span-1 bg-gray-300 animate-pulse dark:bg-gray-700 rounded-2xl"></div>
      <div className="col-span-1 bg-gray-300 animate-pulse dark:bg-gray-700 rounded-2xl"></div>
      <div className="col-span-1 bg-gray-300 animate-pulse dark:bg-gray-700 rounded-2xl"></div>
      </div>
      <div className="h-[10rem] md:h-[20rem] lg:h-[22rem]  col-span-3 md:col-span-1 flex items-center justify-center bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"></div>
  </div>
  </div>
});



//
const slideBanners = [
  { name: "Zadez", image: "/images/banner1.webp" },
  { name: "Zadez", image: "/images/banner2.webp" },
  { name: "Zadez", image: "/images/banner3.webp" },
];

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
     <CategoriesProduct/>
     
      {/* SẢN PHẨM MỚI */}
      <NewProducts />

      <section className="">
        <div className="flex flex-col justify-center items-center text-justify md:text-center my-4 p-4">
          <h4 className="text-xl md:text-2xl text-primary font-bold my-2">
            The New Story Of GAMING
          </h4>
          <p className="text-base ">
            ZADEZ hân hạnh giới thiệu đến Quý khách hàng những sản phẩm mới nhất
            trong dòng phụ kiện Gaming, sẽ được ra mắt từ quý 2 năm 2023.
          </p>
        </div>
        <SlideImage data={newStoryGaming} width={400} height={295} />
      </section>
      <section className="flex flex-col justify-center items-center text-justify md:text-center md:mt-8">
        <h5 className="text-xl md:text-2xl text-primary font-bold my-2">About Zadez</h5>
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
              <div className="p-7 flex flex-col justify-center items-center text-justify ">
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
