import Image from "next/image";
import logo from "../../../../../public/Logo-ZADEZ.webp";

const HeaderG850K = () => {
  return (
    <nav data-aos="fade-down">
      <div className="flex items-center justify-center gap-10 bg-gradient-to-r from-g-850k-blue to-g-850k-green py-4">
        <div className="relative group md:block hidden">
          <a href="/" className="link-item-header">
            Trang chủ
          </a>
          <span className="underline-link-item-header"></span>
        </div>

        <div className="relative group md:block hidden">
          <a href="/" className="link-item-header">
            GP-803B
          </a>
          <span className="underline-link-item-header"></span>
        </div>

        <a href="/" target="_blank">
          <Image
            src={logo}
            width={50}
            height={50}
            className="scale-150"
            alt="zadez-logo"
          />
        </a>

        <div className="relative group md:block hidden">
          <a href="/" className="link-item-header">
            Về chúng tôi
          </a>
          <span className="underline-link-item-header"></span>
        </div>
        <div className="relative group md:block hidden">
          <a href="/" className="link-item-header">
            Liên hệ
          </a>
          <span className="underline-link-item-header"></span>
        </div>
      </div>
    </nav>
  );
};

export default HeaderG850K;
