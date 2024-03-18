import localFont from "next/font/local";
import "./globals.css";
const roboto = localFont({
  src: [
    {
      path: "../../public/font/Roboto-Light.ttf",
      weight: "300",
      style: "light",
    },
    {
      path: "../../public/font/Roboto-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/font/Roboto-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/font/Roboto-Medium.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../../public/font/Roboto-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "Zadez VietNam",
  description: "ZadezVietNam",
  icons: {
    icon: {
      url: "/favicon-16x16.png",
    },
  },
  other: {
    "google-site-verification": "UW_VHjIfF1uepK7unUa-BxQb8P1Fv68xaLKtUswYnQw",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
