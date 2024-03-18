import Image from "next/image";

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
      <div className="text-[#AAAAAA] bg-[#141414] grid grid-cols-3  justify-center gap-4 md:gap-10 lg:gap-20 pt-16 pb-24 px-10">
        <div className="col-span-3 lg:col-span-1 flex flex-col justify-center items-center mx-auto">
          <Image src={"/logo-white.webp"} width={195} height={64} alt="Zadez" />
          <div className="">
            <div className="mt-6">
              ZADEZ HONG KONG -{" "}
              <a
                style={{ textDecoration: "none", color: "#AAAAAA" }}
                href="https://zadez.hk"
                target="_blank"
                className="font-bold"
              >
                WWW.ZADEZ.HK
              </a>
            </div>
            <div className="mt-2">
              ZADEZ AMERICA -{" "}
              <a
                style={{ textDecoration: "none", color: "#AAAAAA" }}
                href="https://zadez.us"
                target="_blank"
                className="font-bold"
              >
                WWW.ZADEZ.US
              </a>
            </div>
            <div className="mt-2">
              ZADEZ VIETNAM -{" "}
              <a
                style={{ textDecoration: "none", color: "#AAAAAA" }}
                href="https://zadez.vn"
                target="_blank"
                className="font-bold"
              >
                WWW.ZADEZ.VN
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-3 lg:col-span-1">
          <div className="text-[#F88686] font-semibold">VỀ ZADEZ</div>
          <div className="text-sm">
            <p className="leading-6">
              -ZADEZ là thương hiệu phụ kiện công nghệ đầu tiên triển khai hệ
              thống quản lý chất lượng sản phẩm theo mã số định danh Serial
              Number. Tất cả sản phẩm ZADEZ đều có số Serial Number riêng biệt
              để phục vụ việc tra cứu thông tin sản xuất &amp; thông tin bảo
              hành.
              <br />
              - ZADEZ có trụ sở tại Hong Kong (ZADEZ Technology Corp.), trung
              tâm R&D tại USA (ZADEZ AMERICA LLC.) và đã phục vụ khách hàng Việt
              Nam từ năm 2007.
              <br />
              <br />
              <strong> ZADEZ - Make Life Easier</strong>
            </p>
          </div>
        </div>
        <div className="col-span-3 lg:col-span-1">
          <div className="text-[#F88686] font-semibold">THÔNG TIN LIÊN HỆ</div>
          <div className="text-sm">
            <p className="leading-6">
              - Tổng đài CSKH: (028) 7777.0053 - 1900.0053 (phục vụ từ
              8h30-17h30, T2-T6)
              <br />- Kích Hoạt &amp; Tra Cứu Bảo Hành: website
              <a
                style={{ textDecoration: "none", color: "#AAAAAA" }}
                href="https://PSI.ZADEZ.VN"
                target="_blank"
              >
                <span className="hover:text-[#F88686] font-semibold">
                  {" "}
                  PSI.ZADEZ.VN
                </span>
              </a>
              <br />- Fanpage:
              <a
                style={{ textDecoration: "none", color: "#AAAAAA" }}
                href="https://www.facebook.com/ZadezTechnology"
                target="_blank"
              >
                <span className="hover:text-[#F88686] font-semibold">
                  {" "}
                  Facebook.com/ZadezTechnology
                </span>
              </a>
              <br /> - Youtube:{" "}
              <a
                style={{ textDecoration: "none", color: "#AAAAAA" }}
                href="https://www.youtube.com/zadezvietnam"
                target="_blank"
              >
                <span className="hover:text-[#F88686] font-semibold">
                  ZADEZ Vietnam
                </span>
              </a>
              <br />- Messeger:{" "}
              <a
                style={{ textDecoration: "none", color: "#AAAAAA" }}
                href="https://m.me/ZadezTechnology"
                target="_blank"
                className="hover:text-[#F88686]"
              >
                <span className="hover:text-[#F88686] font-semibold">
                  ZADEZ Vietnam
                </span>
              </a>
              <br />- Tài khoản Zalo Official Account:{" "}
              <a
                style={{ textDecoration: "none", color: "#AAAAAA" }}
                href="https://Zalo.me/3126944695787017498"
                target="_blank"
                className="hover:text-[#F88686]"
              >
                <span className="hover:text-[#F88686] font-semibold">
                  ZADEZ Vietnam
                </span>
              </a>
              <br />- Trung tâm CSKH:
              <a
                style={{ textDecoration: "none", color: "#AAAAAA" }}
                href="https://goo.gl/maps/YDnra6Dx3oVrLnGT8"
                target="_blank"
                className="hover:text-[#F88686]"
              >
                <span className="hover:text-[#F88686] font-semibold">
                  {" "}
                  B97 Phú Thuận, phường Phú Thuận, Quận 7, Tp. Hồ Chí Minh.
                </span>
              </a>
            </p>
          </div>
          <a
            style={{ textDecoration: "none", color: "#AAAAAA" }}
            href="http://online.gov.vn/Home/WebDetails/64180"
            target="_blank"
          >
            <Image
              src={"/logoSaleNoti.webp"}
              width={135}
              height={50}
              alt="Zadez"
            />
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-2 md:flex-row justify-around bg-[#161716] text-[#AAAAAA] text-xs p-4  text-center">
        Công ty TNHH ZADEZ Việt Nam triển khai theo bản quyền của ZADEZ AMERICA
        LLC. (USA)
        <div className="flex flex-wrap items-center justify-center gap-8 ">
        <a className="text-[#0d6efd] no-underline" href="https://zadez.vn">TRANG CHỦ</a>
        <a className="text-[#0d6efd] no-underline" href="https://psi.zadez.vn" target="_blank" >BẢO HÀNH ĐIỆN TỬ</a>
        <a className="text-[#0d6efd] no-underline" href="https://psi.zadez.vn/vi/tra-cuu-bao-hanh" target="_blank" >TRA CỨU BẢO HÀNH</a>
        <a className="text-[#0d6efd] no-underline" href="https://psi.zadez.vn/vi/huong-dan" target="_blank" >HƯỚNG DẪN</a>
        <a className="text-[#0d6efd] no-underline" href="https://psi.zadez.vn/vi/chinh-sach-bao-hanh" target="_blank" >CHÍNH SÁCH BẢO HÀNH</a>
        <a className="text-[#0d6efd] no-underline" href="https://zadez.vn/lien-he">LIÊN HỆ</a>
        </div>
      </div>
      <a className="phone-call" href="tel:19000053">
        <Image
          width={50}
          height={50}
          src="/images/phone-call.webp"
          alt="zalo"
        />
      </a>
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
