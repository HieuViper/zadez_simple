// import Footer from "../../components/Footer";
import AuthenPopup from "@/components/AuthenPopup";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
const Header = dynamic(() => import("@/components/Header"), {
  loading: () => <p>Loading...</p>,
});
const Footer = dynamic(() => import("@/components/Footer"), {
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

// async function getAllCategories() {
//   let res = await db.Categories.findAll({
//     include: [
//       {
//         model: db.Products,
//         as: "products",
//       },
//     ],
//   });
//   res = JSON.stringify(res);
//   res = JSON.parse(res);
//   return res;
// }

export default async function RootLayout({ children, params }) {
  // const file = await fs.readFile(
  //   process.cwd() + "/src/jsonCache/CateJson.json",
  //   "utf8"
  // );
  // const categories = JSON.parse(file);
  // console.log("🚀 ~ RootLayout ~ categories:", categories);

  // const categories = await getAllCategories();

  return (
    <html>
      {/* <GoogleAnalystic GA_TRACKING_ID={process.env.GA_TRACKING_ID} />
      <AOSInit /> */}
      <body className={inter.className}>
        <Header />
        <div
          className="px-6 lg:px-16 xl:px-24 pt-28 pb-10 overflow-x-hidden"
          style={{
            backgroundImage: `url("/images/bg-white.webp")`,
            backgroundSize: "contain",
          }}
        >
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
