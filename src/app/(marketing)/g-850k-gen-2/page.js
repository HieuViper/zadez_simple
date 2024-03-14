import G850KPage from "./_components/Page850K";

export const metadata = {
  title: "GAMING KEYBOARD G-850K GEN2",
  description:
    "Bàn phím Membrane với switch cao su mô phỏng vận hành của switch cơ học, mang đến cảm giác gõ tốt hơn các loại bàn phím thông thường, đồng thời gia tăng sự bền bỉ đến 5 triệu lần nhấn. Một sự lựa chọn tuyệt vời cho nhu cầu làm việc văn phòng kèm theo chơi game trong những lúc thư giãn.",
  keywords: [
    "G-850K",
    "Gaming Keyboard",
    "Gaming Keyboard G-850K",
    "Gaming Keyboard G-850K Gen2",
  ],
  openGraph: {
    title: "Next.js",
    description: "The React Framework for the Web",
    url: global?.window && window.location.href,
    siteName: "Zadez Việt Nam",
    images: [
      {
        url: `${process.env.BASE_URL}/api/image?path=/src/uploads/mar2024/ZADEZ-G-850k-Wallpaper-1536x1062.webp`,
        width: 800,
        height: 600,
      },
    ],
    locale: "vi",
    type: "website",
  },
};

const Page = () => {
  return <G850KPage />;
};

export default Page;
