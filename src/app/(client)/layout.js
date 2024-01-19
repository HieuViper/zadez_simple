import GoogleAnalystic from "@/components/GoogleAnalystic";
import Footer from "../../components/Footer";
// import './globals.css'
import AuthenPopup from "@/components/AuthenPopup";
// import Header from "@/components/Header";
import db from "@/models";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import { AOSInit } from "./_components/AOS";
const Header = dynamic(() => import("@/components/Header"), {
  loading: () => <p>Loading...</p>,
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Welcome to ZADEZ - ZADEZ Vietnam",
  description:
    "Chơi game là niềm đam mê của bạn và phục vụ cho niềm đam mê đó là sứ mệnh của chúng tôi. Chuyên trang giới thiệu phụ kiện Gaming của ZADEZ: Bàn phím cơ, chuột gaming, tai nghe gaming, đế treo tai nghe, miếng lót gaming... bảo hành điện tử theo Serial Number.",
  icons: {
    icon: "/zadez_logo_title.jpg",
  },
};
async function getAllCategories() {
  const res = await db.Categories.findAll({
    include: [
      {
        model: db.Products,
        as: "products",
      },
    ],
    raw: true,
    nest: true,
  });
  return res;
}

export default async function RootLayout({ children, params }) {
  const categories = await getAllCategories();

  return (
    <html>
      <GoogleAnalystic GA_TRACKING_ID={process.env.GA_TRACKING_ID} />
      <AOSInit />
      <body className={inter.className}>
        <Header categories={categories} />
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
