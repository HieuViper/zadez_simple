import GoogleAnalystic from "@/components/GoogleAnalystic";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
// import './globals.css'
import AuthenPopup from "@/components/AuthenPopup";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Welcome to ZADEZ - ZADEZ Vietnam",
  description:
    "Chơi game là niềm đam mê của bạn và phục vụ cho niềm đam mê đó là sứ mệnh của chúng tôi. Chuyên trang giới thiệu phụ kiện Gaming của ZADEZ: Bàn phím cơ, chuột gaming, tai nghe gaming, đế treo tai nghe, miếng lót gaming... bảo hành điện tử theo Serial Number.",
  openGraph: {
    type: "website",
    title: "Welcome to ZADEZ - ZADEZ Vietnam",
    description:
      "Chơi game là niềm đam mê của bạn và phục vụ cho niềm đam mê đó là sứ mệnh của chúng tôi. Chuyên trang giới thiệu phụ kiện Gaming của ZADEZ: Bàn phím cơ, chuột gaming, tai nghe gaming, đế treo tai nghe, miếng lót gaming... bảo hành điện tử theo Serial Number.",
    site_name: "ZADEZ Vietnam",
    image: `/images/logo-zadez.png`,
    url: `zadez.vn`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Welcome to ZADEZ - ZADEZ Vietna",
    description:
      "Chơi game là niềm đam mê của bạn và phục vụ cho niềm đam mê đó là sứ mệnh của chúng tôi. Chuyên trang giới thiệu phụ kiện Gaming của ZADEZ: Bàn phím cơ, chuột gaming, tai nghe gaming, đế treo tai nghe, miếng lót gaming... bảo hành điện tử theo Serial Number.",
    creator: "Zadez",
    images: `/Logo-ZADEZ.png`,
  },
  icons: {
    icon: "/zadez_logo_title.jpg",
  },
};

export default function RootLayout({ children, params }) {
  return (
    <html>
      <GoogleAnalystic GA_TRACKING_ID={process.env.GA_TRACKING_ID} />
      <body className={inter.className}>
        <Header />
        <div className="px-6 lg:px-16 xl:px-24 pt-28 pb-10 bg-[url('/images/bg-white.webp')] bg-contain overflow-x-hidden">
          {children}
        </div>
        <Footer />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <AuthenPopup />
        </div>
      </body>
    </html>
  );
}
