import Image from "next/image";
import Link from "next/link";

const Footer = () => {
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
      <div className="text-[#AAAAAA] bg-[#1D1D1D] grid grid-cols-3  justify-center gap-4 md:gap-10 lg:gap-20 pt-16 pb-24 px-10">
        <div className="col-span-3 lg:col-span-1 flex flex-col justify-center items-center mx-auto">
          <Image src={"/logo-white.webp"} width={195} height={64} alt="Zadez" />
          <div className="">
            <div className="mt-6">
              ZADEZ HONG KONG -{" "}
              <Link
                style={{ textDecoration: "none", color: "#AAAAAA" }}
                href="https://zadez.hk"
                target="_blank"
                className="font-bold"
              >
                WWW.ZADEZ.HK
              </Link>
            </div>
            <div className="mt-2">
              ZADEZ AMERICA -{" "}
              <Link
                style={{ textDecoration: "none", color: "#AAAAAA" }}
                href="https://zadez.us"
                target="_blank"
                className="font-bold"
              >
                WWW.ZADEZ.US
              </Link>
            </div>
            <div className="mt-2">
              ZADEZ VIETNAM -{" "}
              <Link
                style={{ textDecoration: "none", color: "#AAAAAA" }}
                href="https://zadez.vn"
                target="_blank"
                className="font-bold"
              >
                WWW.ZADEZ.VN
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-3 lg:col-span-1">
          <div className="text-red-500 font-semibold">VỀ ZADEZ</div>
          <div className="text-sm">
            <p className="leading-6">
              -ZADEZ là thương hiệu phụ kiện công nghệ đầu tiên triển khai hệ
              thống quản lý chất lượng sản phẩm theo mã số định danh Serial
              Number. Tất cả sản phẩm ZADEZ đều có số Serial Number riêng biệt
              để phục vụ việc tra cứu thông tin sản xuất &amp; thông tin bảo
              hành.
              <br />
              - ZADEZ có trụ sở tại Hong Kong (ZADEZ Technology Corp.),
              trung tâm R&D tại USA (ZADEZ AMERICA LLC.) và đã phục vụ khách
              hàng Việt Nam từ năm 2007. 
              <br />
              <br />
              <strong> ZADEZ - Make Life Easier</strong>
             
            </p>
          </div>
        </div>
        <div className="col-span-3 lg:col-span-1">
        <div className="text-red-500 font-semibold">THÔNG TIN LIÊN HỆ</div>
          <div className="text-sm">
            <p className="leading-6">
              - Tổng đài CSKH: (028) 7777.0053 - 1900.0053 (phục vụ từ
              8h30-17h30, T2-T6)
              <br />- Kích Hoạt &amp; Tra Cứu Bảo Hành: website 
              <Link
                style={{ textDecoration: "none", color: "#AAAAAA" }}
                href="https://PSI.ZADEZ.VN"
                target="_blank"
                
              >
                <span className="hover:text-red-500 font-semibold"> PSI.ZADEZ.VN</span>
              </Link>
              <br />- Fanpage: 
              <Link
                style={{ textDecoration: "none", color: "#AAAAAA" }}
                href="https://www.facebook.com/ZadezTechnology"
                target="_blank"
                
              >
                <span className="hover:text-red-500 font-semibold"> Facebook.com/ZadezTechnology</span>
              </Link>
              <br /> - Youtube: <Link
                style={{ textDecoration: "none", color: "#AAAAAA" }}
                href="https://www.youtube.com/zadezvietnam"
                target="_blank"
                
              >
                <span className="hover:text-red-500 font-semibold">ZADEZ Vietnam</span>
              </Link>
              <br />- Messeger: <Link
                style={{ textDecoration: "none", color: "#AAAAAA" }}
                href="https://m.me/ZadezTechnology"
                target="_blank"
                className="hover:text-red-500"
              >
                <span className="hover:text-red-500 font-semibold">ZADEZ Vietnam</span>
              </Link>
              <br />- Tài khoản Zalo Official Account: <Link
                style={{ textDecoration: "none", color: "#AAAAAA" }}
                href="https://Zalo.me/3126944695787017498"
                target="_blank"
                className="hover:text-red-500"
              >
                <span className="hover:text-red-500 font-semibold">ZADEZ Vietnam</span>
              </Link>
              <br />- Trung tâm CSKH: 
              <Link
                style={{ textDecoration: "none", color: "#AAAAAA" }}
                href="https://goo.gl/maps/YDnra6Dx3oVrLnGT8"
                target="_blank"
                className="hover:text-red-500"
              >
                <span className="hover:text-red-500 font-semibold"> B97 Phú Thuận, phường Phú Thuận, Quận 7,
              Tp. Hồ Chí Minh</span>
              </Link>
            </p>
          </div>
          <Link
                style={{ textDecoration: "none", color: "#AAAAAA" }}
                href="http://online.gov.vn/Home/WebDetails/64180"
                target="_blank"
              >
          <Image src={"/logoSaleNoti.webp"} width={135} height={50} alt="Zadez" />
              </Link>
        </div>
      </div>
      <div className="bg-[#161716] text-[#AAAAAA] text-xs p-4  text-center">
        Công ty TNHH ZADEZ Việt Nam triển khai theo bản quyền của ZADEZ AMERICA
        LLC. (USA)
      </div>
      <a
        className="zalo-chat-widget"
        href="https://zalo.me/3126944695787017498"
        target="_blank"
      >
        <Image width={50} height={50} src="/images/icon-zalo.svg" alt="zalo" />
      </a>
    </footer>
  );
};

export default Footer;
