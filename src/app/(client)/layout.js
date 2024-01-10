import Footer from "../../components/Footer";
import Header from "../../components/Header";
// import './globals.css'
import AuthenPopup from "@/components/AuthenPopup";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ZadezVN",
  description: "Created By Zadez",
};

export default function RootLayout({ children, params }) {
  return (
    <html>
      <body className={inter.className}>
        <Header />
        <div className="px-6 md:px-12 lg:px-16 xl:px-24 py-10">{children}</div>
        <Footer />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <AuthenPopup />
        </div>
      </body>
    </html>
  );
}
