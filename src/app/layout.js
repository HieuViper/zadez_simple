import { Roboto } from "next/font/google";
import "./globals.css";
export const roboto = Roboto({
  subsets: ["vietnamese"],
  weight: ["100", "300", "400", "500", "700", "900"],
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
