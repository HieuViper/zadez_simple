import { AOSInit } from "@/components/AOS";
import { RootStyleRegistry } from "@/library/RootStyleRegistry";
import { ConfigProvider } from "antd";
import dynamic from "next/dynamic";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const AuthenPopup = dynamic(() => import("@/components/AuthenPopup"), {
  ssr: true,
});
const GoogleAnalytics = dynamic(() => import("@/components/GoogleAnalystic"), {
  ssr: true,
});
const Header = dynamic(() => import("@/components/Header"), {
  loading: () => (
    <div className="flex justify-around items-center w-full h-[112px] z-30 fixed top-0 bg-white">
      <div
        role="status"
        className="w-40 flex items-center justify-center rounded-lg animate-pulse dark:bg-gray-700"
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
      <div className="lg:flex hidden items-center justify-between gap-2">
        <div className="lg:w-24 xl:w-32 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 me-3"></div>
        <div className="lg:w-24 xl:w-32 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 me-3"></div>
        <div className="lg:w-24 xl:w-32 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 me-3"></div>
        <div className="lg:w-24 xl:w-32 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 me-3"></div>
        <div className="lg:w-24 xl:w-32 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 me-3"></div>
        <div className="lg:w-24 xl:w-32 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 me-3"></div>
      </div>
      <div className="lg:flex hidden  items-center justify-center gap-2">
        <div className="w-8 bg-gray-300 h-8 rounded-full "></div>
        <div className="w-8 bg-gray-300 h-8 rounded-full "></div>
      </div>
    </div>
  ),
  ssr: true,
});
const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div></div>,
  ssr: true,
});

export const metadata = {
  title: "Welcome to ZADEZ - ZADEZ Vietnam",
  description:
    "Chơi game là niềm đam mê của bạn và phục vụ cho niềm đam mê đó là sứ mệnh của chúng tôi. Chuyên trang giới thiệu phụ kiện Gaming của ZADEZ: Bàn phím cơ, chuột gaming, tai nghe gaming, đế treo tai nghe, miếng lót gaming... bảo hành điện tử theo Serial Number.",
  icons: {
    icon: "/zadez_logo_title.jpg",
  },
};

export default async function RootLayout({ children, params }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#AF131C",
        },
      }}
    >
      <AOSInit />
      <GoogleAnalytics />
      <Header />
      <main>
        <div
          className="px-6 lg:px-16 xl:px-24 pt-28 pb-10 overflow-x-hidden"
          style={{
            backgroundImage: `url("/images/bg-white.webp")`,
            backgroundSize: "contain",
          }}
        >
          <RootStyleRegistry>{children}</RootStyleRegistry>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <AuthenPopup />
        </div>
      </main>
      <Footer />
    </ConfigProvider>
  );
}
