// import Footer from "../../components/Footer";
import AuthenPopup from "@/components/AuthenPopup";
import GoogleAnalytics from "@/components/GoogleAnalystic";
import dynamic from "next/dynamic";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { AOSInit } from "./_components/AOS";
const Header = dynamic(() => import("@/components/Header"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});
const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
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
    <>
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
          {children}
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <AuthenPopup />
        </div>
      </main>
      <Footer />
    </>
  );
}
