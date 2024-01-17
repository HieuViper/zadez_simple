"use client";
import Image from "next/image";
import logo from "/public/images/logo-white.png";

const Footer = () => {
  // const introFooter =
  // const contactFooter =
  const introFooter = {
    name: "ZADEZ.VN",
    description:
      "<p>ZADEZ là thương hiệu phụ kiện công nghệ đầu tiên triển khai hệ thống quản lý chất lượng sản phẩm theo mã số định danh Serial Number. Tất cả sản phẩm ZADEZ đều có số Serial Number riêng biệt để phục vụ việc tra cứu thông tin sản xuất &amp; thông tin bảo hành. Quý khách hàng tại thị trường Việt Nam vui lòng kích hoạt và tra cứu bảo hành (miễn phí) tại website PSI.ZADEZ.VN<br>ZADEZ - Make Life Easier</p>",
  };
  const contactFooter = {
    name: "THÔNG TIN LIÊN HỆ",
    description:
      "<p>- Tổng đài CSKH: (028) 7777.0053 - 1900.0053 (phục vụ từ 8h30-17h30, T2-T6)<br>- Kích Hoạt &amp; Tra Cứu Bảo Hành: website PSI.ZADEZ.VN<br>- Fanpage: Facebook.com/ZadezVietnam<br>- Messeger: M.me/ZadezVietnam<br>- Tài khoản Zalo Official Account: Zalo.me/3126944695787017498<br>- Trung tâm CSKH: B97 Phú Thuận, phường Phú Thuận, Quận 7, Tp. Hồ Chí Minh</p>",
  };
  return (
    <footer>
      <div className="text-[#AAAAAA] bg-[#1D1D1D] flex lg:flex-row lg:justify-around flex-col justify-center items-center gap-8 pt-20 pb-32 px-10">
        <div className="lg:w-1/3 p-6 lg:p-28">
          <Image src={logo} width={200} height={80} alt="Zadez" />
        </div>
        <div className="lg:w-1/3 p-6">
          <div className="text-white font-bold mb-7">{introFooter?.name}</div>
          <div className="text-sm">
            <div
              className="leading-7"
              dangerouslySetInnerHTML={{
                __html: introFooter?.description,
              }}
            />
          </div>
        </div>
        <div className="lg:w-1/3 p-6">
          <div className="text-white font-bold mb-7">{contactFooter?.name}</div>
          <div className="text-sm">
            <div
              className="leading-7"
              dangerouslySetInnerHTML={{
                __html: contactFooter?.description,
              }}
            />
          </div>
        </div>
      </div>
      <div className="bg-[#161716] text-[#AAAAAA] text-xs p-4  text-center">
        &ldquo;Công ty TNHH ZADEZ Việt Nam triển khai theo bản quyền của ZADEZ AMERICA
        LLC. (USA)&rdquo; : &ldquo;ZADEZ Vietnam Co., Ltd. is published under the copyright
        of ZADEZ AMERICA LLC. (USA)&rdquo;
      </div>
      <a
        className="zalo-chat-widget"
        href="https://zalo.me/3126944695787017498"
        target="_blank"
      >
        <Image
          width={50}
          height={50}
          src="/images/icon-zalo.svg"
          alt="zalo"
        />
      </a>
    </footer>
  );
};

export default Footer;
