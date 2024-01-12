"use client";
import {
  BulbOutlined,
  HeartOutlined,
  HistoryOutlined,
  SettingOutlined,
  StarOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Divider } from "antd";
import Image from "next/image";
// import a from 'next/link';

const About = () => {
  const youKnow = [
    {
      name: "Thấu Hiểu Khách Hàng",
      image: "/images/technology.webp",
      short:
        "Nắm bắt, thấu hiểu nhu cầu và làm hài lòng khách hàng là kim chỉ nam trong quy trình hoạt động của ZADEZ. Khách hàng là trung tâm của tất cả các dự án và ZADEZ cam kết mang đến cho khách hàng những sản phẩm có giá trị sử dụng với giá hợp lý nhất.",
      description: "",
    },
    {
      name: "Dữ Liệu Số",
      image: "/images/quality.jpg",
      short:
        "ZADEZ đã thực hiện quy trình chuyển đổi số ứng dụng từ sản xuất đến dịch vụ khách hàng. Tất cả sản phẩm ZADEZ đều được cấp mã số định danh Serial Number riêng biệt, thuận tiện cho việc tra cứu dữ liệu trực tuyến và bảo hành điện tử.",
      description: "",
    },
    {
      name: "Công Nghệ Cao",
      image: "/images/factory.jpg",
      short:
        "CHẤT LƯỢNG - yếu tố trọng tâm & có tính chất quyết định trong quy trình sản xuất của ZADEZ. Hệ thống máy móc tự động hóa, linh kiện chất lượng cao và dữ liệu số của mỗi sản phẩm luôn được hoàn thiện để phục vụ khách hàng tốt hơn.",
      description: "",
    },
  ];
  const exp = [
    {
      name: "Bảo Vệ Quyền Lợi",
      image: "/images/bao-ve-quyen-loi.webp",
      short:
        "Với ZADEZ, khách hàng không cần phải lưu hóa đơn mua hàng/ tem bảo hành mà có thể dễ dàng tra cứu thông tin bảo hành của sản phẩm và yêu cầu bảo hành trực tuyến.",
      description: "",
    },
    {
      name: "Chất Lượng Dịch Vụ",
      image: "/images/chat-luong-dich-vu.webp",
      short:
        "ZADEZ là thương hiệu phụ kiện đầu tiên triển khai các kênh Chăm sóc khách hàng đến người tiêu dùng cuối, nhằm sẵn sàng tư vấn hỗ trợ và giải đáp các thắc mắc trong quá trình sử dụng.",
      description: "",
    },
    {
      name: "Chất Lượng Sản Phẩm",
      image: "/images/chat-luong-san-pham.webp",
      short:
        "Tất cả sản phẩm ZADEZ đều được sản xuất dưới quy trình kiểm tra chất lượng chặt chẽ, nhập khẩu chính ngạch về Việt Nam và nộp thuế đầy đủ theo quy định của pháp luật.",
      description: "",
    },
  ];
  return (
    <div className="mb-20">
      {/* Banner */}
      <div className="flex flex-col justify-center items-center text-center my-8">
        <h1 className="text-4xl text-red-500">ZADEZ-Make Life Easier</h1>
        <p className="text-base text-[#999999]">
          Đã có mặt tại Việt Nam từ năm 2007, nhưng đây có thể là lần đầu tiên
          bạn biết về ZADEZ. Hãy dành ít phút để tìm hiểu thêm về ZADEZ và cho
          ZADEZ cơ hội được phục vụ bạn nhé !
        </p>
      </div>
      {/* */}
      <section className="">
        <Image
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          src="/images/MatDungV1.jpg"
          width={1225}
          height={788}
          alt="ZADEZ Factory Vinh Long"
        />
        <div className="grid grid-cols-3 gap-2 mt-6">
          <div className="col-span-3 md:col-span-1">
            <Image
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              src="/images/MatDungV2.jpg"
              width={398}
              height={257}
              alt="ZADEZ Factory Vinh Long"
            />
          </div>
          <div className="col-span-3 md:col-span-1">
            <Image
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              src="/images/MatBenV1.jpg"
              width={398}
              height={257}
              alt="ZADEZ Factory Vinh Long"
            />
          </div>
          <div className="col-span-3 md:col-span-1">
            <Image
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              src="/images/TongTheV1.jpg"
              width={398}
              height={257}
              alt="ZADEZ Factory Vinh Long"
            />
          </div>
        </div>
      </section>
      <p className="text-base text-[#999999]">
        Hình ảnh bạn vừa xem ở trên là phối cảnh của dự án ZADEZ Factory tại
        Vĩnh Long, Việt Nam. Dự kiến phân xưởng số 1 của ZADEZ Factory sẽ đi vào
        hoạt động vào cuối quý 4 năm 2023 và cung ứng sản phẩm cho thị trường
        Việt Nam trước khi xuất khẩu đến các thị trường khác vào năm 2025.
      </p>
      {/* Năng Lực Sản Xuất */}
      <section>
        <div className="flex gap-4">
          <SettingOutlined style={{ fontSize: 32, color: "red" }} />
          <h4 className="text-xl text-red-500 font-semibold my-2">
            Năng lực sản xuất
          </h4>
        </div>
        <Divider style={{ marginTop: "0px", backgroundColor: "red" }} />
        <p className="text-base text-[#999999]">
          Là thương hiệu phụ kiện công nghệ đã có gần 20 năm kinh nghiệm sản
          xuất, ZADEZ có quy trình thiết kế sản phẩm và sản xuất chuyên nghiệp
          với hệ thống máy móc tự động, cùng quy trình kiểm tra chất lượng sản
          phẩm nghiêm ngặt. Sau đây là một đoạn video clip ngắn mô tả quy trình
          thiết kế 1 dòng sản phẩm chuột không dây tại các nhà máy của ZADEZ.
        </p>
        <div className="flex justify-center items-center  my-8">
          <iframe
            width="980"
            height="551"
            src="https://www.youtube.com/embed/RUDJmC5dZYI"
            title="ZADEZ - Năng Lực Sản Xuất Thực Tế"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </section>
      {/* Và Bạn Có Biết */}
      <section className="">
        <div className="flex gap-4">
          <BulbOutlined style={{ fontSize: 32, color: "red" }} />
          <h4 className="text-xl text-red-500 font-semibold my-2">
            Và bạn có biết
          </h4>
        </div>
        <Divider style={{ marginTop: "0px", backgroundColor: "red" }} />
        <p className="text-base text-[#999999]">
          ZADEZ là thương hiệu phụ kiện duy nhất tại thị trường Việt Nam quản lý
          từng sản phẩm theo mã số định danh – Serial Number (tương tự với
          smartphone/ notebook v.v.), điều này cho phép ZADEZ quản lý và giám
          sát chất lượng sản phẩm theo tiêu chuẩn cao nhất. Đồng thời, bạn có
          thể tra cứu thông tin về sản phẩm một cách dễ dàng thông qua hệ thống
          kích hoạt bảo hành trực tuyến
          <a className="text-red-500 no-underline" href="https://psi.zadez.vn">
            {" "}
            PSI.ZADEZ.VN
          </a>
        </p>
        <div className="grid grid-cols-3 gap-4">
          {youKnow?.map((item, i) => (
            <div
              key={i}
              className="col-span-3 md:col-span-1 shadow-xl rounded-lg"
            >
              <Image
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                src={item.image}
                width={398}
                height={287}
                alt="ZADEZ Technology"
              />
              <div className="p-7">
                <h4 className="text-red-500 text-base mt-0">{item.name}</h4>
                <p className="text-sm text-[#999999]">{item.short}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Trải Nghiệm Sự Khác Biệt */}
      <section className="mt-8">
        <div className=" flex gap-4 border border-b-red-500">
          <HeartOutlined style={{ fontSize: 32, color: "red" }} />
          <h4 className="text-xl text-red-500 font-semibold my-2">
            Trải Nghiệm Sự Khác Biệt
          </h4>
        </div>
        <Divider style={{ marginTop: "0px", backgroundColor: "red" }} />
        <p className="text-sm text-[#999999]">
          Với hệ thống kích hoạt – tra cứu và yêu cầu bảo hành trực tuyến
          <a className="text-red-500 no-underline" href="https://psi.zadez.vn">
            {" "}
            PSI.ZADEZ.VN
          </a>{" "}
          , ZADEZ tự tin sẽ đem đến cho bạn một trải nghiệm hoàn toàn mới khi
          lựa chọn sử dụng các sản phẩm mang thương hiệu ZADEZ. Sự hài lòng của
          bạn là sứ mệnh của chúng tôi.
        </p>
        <div className="grid grid-cols-3 gap-4">
          {exp?.map((item, i) => (
            <div
              key={i}
              className="col-span-3 md:col-span-1 shadow-xl rounded-lg"
            >
              <Image
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                src={item.image}
                width={398}
                height={287}
                alt="ZADEZ Technology"
              />
              <div className="p-7">
                <h4 className="text-red-500 text-base mt-0">{item.name}</h4>
                <p className="text-sm text-[#999999]">{item.short}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* ZADEZ VIETNAM Channel */}
      <section className="my-8">
        <div className="flex gap-4">
          <YoutubeOutlined style={{ fontSize: 32, color: "red" }} />
          <h4 className="text-xl text-red-500 font-semibold my-2">
            ZADEZ VIETNAM Channel
          </h4>
        </div>
        <Divider style={{ marginTop: "0px", backgroundColor: "red" }} />
        <p className="text-sm text-[#999999]">
          ZADEZ Việt Nam xây dựng kênh truyền thông trên Youtube nhằm tăng cường
          sự tương tác cũng như tạo điều kiện để bạn dễ dàng tìm kiếm các hướng
          dẫn sử dụng, các clip giới thiệu về sản phẩm cũng như các thủ thuật
          khác. Sau đây là một clip ngắn để giới thiệu về ZADEZ, bạn xem nếu
          thích thì nhớ Like, Share & Subscribe nhé 🙂
        </p>
        <div className="flex justify-center items-center my-8">
          <iframe
            width="980"
            height="551"
            src="https://www.youtube.com/embed/3itpgGB9Z_w"
            title="Giới thiệu về ZADEZ Technology Corp. và ZADEZ VIỆT NAM LTD."
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>{" "}
        </div>
      </section>
      {/* Lịch Sử Phát Triển */}
      <section>
        <div className="flex gap-4">
          <HistoryOutlined style={{ fontSize: 32, color: "red" }} />
          <h4 className="text-xl text-red-500 font-semibold my-2">
            Lịch Sử Phát Triển
          </h4>
        </div>
        <Divider style={{ marginTop: "0px", backgroundColor: "red" }} />
        <p className="text-base text-[#999999]">
          Khác biệt so với hầu hết các thương hiệu phụ kiện trên thị trường,
          ZADEZ chỉ tập trung hợp tác với một số chuỗi bán lẻ như Thế Giới Di
          Động, FPT Shops, Nguyễn Kim v.v trong suốt quá trình phục vụ khách
          hàng từ năm 2007 cho đến năm 2019. Đây là các đối tác bán lẻ uy tín,
          có quy trình chọn lọc sản phẩm kinh doanh chặt chẽ về chất lượng cũng
          như nguồn gốc xuất xứ (nhập khẩu chính thức và hóa đơn chứng từ rõ
          ràng). Do đó, sự hiện diện của ZADEZ khá hạn chế, ít được người tiêu
          dùng nhận biết hơn so với các thương hiệu khác.
        </p>
        <p className="text-base text-[#999999]">
          Từ 2020, ZADEZ bắt đầu mở rộng hệ thống đối tác và kênh phân phối
          thông qua các đối tác bán lẻ hiện đại như CellPhoneS, Phong Vũ, Di
          Động Việt, Thành Nhân Computer, Tiki Trading v.v. và các đối tác khác
          trên toàn quốc.
        </p>
        <p className="text-base text-[#999999]">
          Và trong tương lai, ZADEZ mong muốn được hiện diện rộng khắp hơn, phục
          vụ nhiều hơn và mang đến sự hài lòng tốt hơn đến với quý khách hàng
          cũng như quý đối tác.
        </p>
        <div className="mx-40">
          <Image
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            src="/images/history.png"
            width={980}
            height={551}
            alt="ZADEZ History"
          />
        </div>
      </section>
      {/*Hệ Thống Nhận Diện Thương Hiệu */}
      <section>
        <div className="flex gap-4 mt-6">
          <StarOutlined style={{ fontSize: 32, color: "red" }} />
          <h4 className="text-xl text-red-500 font-semibold my-2">
            Hệ Thống Nhận Diện Thương Hiệu
          </h4>
        </div>
        <Divider style={{ marginTop: "0px", backgroundColor: "red" }} />
        <p className="text-base text-[#999999]">
          Hãy tham khảo logo chính thức của ZADEZ và sử dụng hệ thống tra cứu
          thông tin sản phẩm bằng Serial Number để nhận diện được sản phẩm ZADEZ
          chính hãng.
        </p>
        <div className="grid grid-cols-2 gap-2">
          <div className="col-span-2 md:col-span-1 ">
            <h4 className="text-base text-red-500 font-medium ">
              Ý Nghĩa Biểu Tượng
            </h4>
            <p className="text-base text-[#999999]">
              Logo chính thức của ZADEZ bao gồm phần biểu tượng thể hiện chữ Z
              cách điệu và ký tự &ldquo;ZADEZ&rdquo;. Hình tượng chữ Z biểu trưng cho sự
              tuần hoàn, sự hài hòa và sự kết hợp của &ldquo;lưỡng nghi&rdquo; trong quan
              niệm của người Á Đông. Cùng với biểu tượng &ldquo;tiêu điểm&rdquo;, ZADEZ luôn
              hoạch định mục tiêu phát triển rõ ràng và có trọng tâm ngay từ lúc
              khởi đầu các dự án, trên nền tảng cân đối tổng thể các nguồn lực
              cũng như điều kiện tác động.
            </p>
            <h4 className="text-base text-red-500 font-medium ">
              Ý Nghĩa Ký Tự
            </h4>
            <p className="text-base text-[#999999]">
              - Chữ A: Accessories - Phụ kiện, nền tảng kinh doanh cốt lõi của
              ZADEZ.
              <br />
              - Chữ D: Digital - Kỹ thuật số, yếu tố quan trọng trong tất cả quy
              trình & sản phẩm của ZADEZ.
              <br />
              - Chữ E: Easier & Elegant - sự Tiện dụng & Tinh tế, thể hiện khát
              khao mang đến sự hài lòng cho khách hàng khi trải nghiệm sản phẩm
              ZADEZ.
              <br />
              - Chữ Z: biểu tượng của logo và là ký tự cuối cùng trong bảng chữ
              cái, thể hiện cam kết hoàn tất những việc đã được hoạch định. Tại
              ZADEZ, không có khái niệm bỏ cuộc.
              <br />
              <b>ZADEZ - Make Life Easier</b>
            </p>
          </div>
          <div className="col-span-2 md:col-span-1 ">
            <Image
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              src="/images/logo-description.jpg"
              width={500}
              height={500}
              alt="ZADEZ logo"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
