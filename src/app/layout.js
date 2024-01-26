import { RootStyleRegistry } from "@/library/RootStyleRegistry";
import { ConfigProvider } from "antd";
import { Roboto } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Zadez Simple",
  description: "Generated by create next app",
  icons: {
    icon: {
      url: "/Logo-ZADEZ.png",
      type: "image/png",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#AF131C",
            },
          }}
        >
          <RootStyleRegistry>{children}</RootStyleRegistry>
        </ConfigProvider>
      </body>
    </html>
  );
}
