import { AOSInit } from "@/components/AOS";
import bgImage from "../../../public/images/bg-white.webp";

const MarketingLayout = ({ children }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "contain",
      }}
    >
      <AOSInit />
      {children}
    </div>
  );
};

export default MarketingLayout;
