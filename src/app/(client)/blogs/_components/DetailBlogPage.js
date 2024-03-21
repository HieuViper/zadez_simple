"use client";
import Loading from "@/components/Loading";
import { useSWRData } from "@/library/api";
import { SwapLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const DetailBlogPage = ({ params }) => {
  const router = useRouter();
  const { slug } = params;
  const id = slug.split("-")[slug.split("-").length - 1];
  const { data: article, isLoading } = useSWRData(`/api/articles/${id}`);
  const { data: articles } = useSWRData(`/api/articles?limit=5`);
  const { data: sameArticles } = useSWRData(
    `/api/articles?value=${article?.value}&limit=4`
  );
  if (isLoading)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <div className="m-auto md:max-w-3xl lg:max-w-7xl bg-white my-4 rounded-xl">
      <div className="pt-3 pl-3">
        <Link href={`/blogs`}>
          <Button type="dashed" icon={<SwapLeftOutlined />}>
            Quay lại trang bài viết
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-3">
        <div className="col-span-3 lg:col-span-2 flex flex-col overflow-hidden p-4">
          <h1 className="text-4xl font-bold my-3">{article?.title}</h1>
          <div className="text-xl font-semibold">{article?.short}</div>
          <div className="editor editor-article mt-8 text-justify">
            <div dangerouslySetInnerHTML={{ __html: article?.description }} />
          </div>
          {sameArticles && sameArticles?.data?.length > 0 && (
            <>
              <div className="text-2xl my-4">CHỦ ĐỀ TƯƠNG TỰ</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {sameArticles?.data?.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col justify-center items-center  mb-4 col-span-1 cursor-pointer"
                    onClick={() =>
                      router.push(
                        "/blogs/" +
                          item?.title
                            .toLowerCase()
                            .replace(/ /g, "-")
                            .replace(/[^\w-]+/g, "") +
                          "-" +
                          item.id
                      )
                    }
                  >
                    <Image
                      //       sizes="(min-width: 20em) 30vw,
                      // (min-width: 28em) 45vw,
                      // 100vw"
                      //       style={{
                      //         width: "100%",
                      //         height: "auto",
                      //       }}
                      width={150}
                      height={100}
                      src={item?.mainImageURL}
                      alt={item?.title}
                      className="rounded-xl object-cover"
                    />
                    <div className="px-2 leading-6">{item?.title}</div>
                  </div>
                ))}
              </div>
            </>
          )}
          <div id="new-article-mobile" className="block lg:hidden">
            <div className="text-2xl my-4">BÀI MỚI</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 cursor-pointer">
              {articles?.data?.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col mb-4 col-span-1"
                  onClick={() =>
                    router.push(
                      "/blogs/" +
                        item?.title
                          .toLowerCase()
                          .replace(/ /g, "-")
                          .replace(/[^\w-]+/g, "") +
                        "-" +
                        item.id
                    )
                  }
                >
                  <Image
                    //     sizes="(min-width: 20em) 30vw,
                    // (min-width: 28em) 45vw,
                    // 100vw"
                    //     style={{
                    //       width: "100%",
                    //       height: "auto",
                    //     }}
                    width={150}
                    height={100}
                    src={item?.mainImageURL}
                    alt={item?.title}
                    className="rounded-xl object-cover"
                  />
                  <div className="px-2 leading-6">{item?.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="hidden md:col-span-1 lg:flex flex-col p-4 cursor-pointer">
          <div className="text-2xl font-medium my-4">Bài mới</div>
          {articles?.data?.map((item, i) => (
            <div
              key={i}
              className="flex gap-2 mb-4"
              onClick={() =>
                router.push(
                  "/blogs/" +
                    item?.title
                      .toLowerCase()
                      .replace(/ /g, "-")
                      .replace(/[^\w-]+/g, "") +
                    "-" +
                    item.id
                )
              }
            >
              <div
                className="w-[200px] h-[100px]"
                style={{ position: "relative" }}
              >
                <Image
                  src={
                    item?.mainImageURL ? item?.mainImageURL : "/no-image.jpg"
                  }
                  alt=""
                  fill
                  className="rounded-lg object-cover object-center"
                />
              </div>
              <div className="leading-6 w-full">{item?.title}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden">
        ZADEZ GAMING Game là niềm đam mê của bạn và phục vụ cho niềm đam mê đó
        là sứ mệnh của chúng tôi. Hãy trải nghiệm các phụ kiện Gaming của ZADEZ
        với thiết kế tinh tế, tính năng - trợ năng - hiệu năng ấn tượng, cùng sự
        bền bỉ & chính sách chăm sóc khách hàng vượt trội. ZADEZ - Mang Đến Sự
        Hài Lòng ! Bàn Phím Cơ Sử dụng switch cơ cao cấp dành cho Game thủ
        chuyên nghiệp, đa dạng lựa chọn với Blue/ Red/ Brown/ Black switch đáp
        ứng cảm giác gõ cho từng nhu cầu sử dụng. Thiết kế chuẩn Full size hoặc
        TKL, hỗ trợ thiết lập macro qua driver chuyên dụng. Bàn Phím Membrane
        Bàn phím gaming dành cho game thủ trong giai đoạn khởi đầu. Sử dụng
        switch cao su (membrane) hỗ trợ tính năng kháng nước mà vẫn cho cảm giác
        gõ tương tự switch cơ dòng Brown, đồng thời thiết lập macro qua driver
        chuyên dụng (*). Chuột Gaming Nổi bật với dòng GT dành cho Game thủ
        chuyên nghiệp và dòng G là lựa chọn cho sự khởi đầu hoàn hảo. Trang bị
        chipset cao cấp, switch bền bỉ và hỗ trợ thiết lập macro (GT), các sản
        phẩm Gaming mouse của ZADEZ sẽ mang đến trải nghiệm chơi game tuyệt vời
        nhất. Tai Nghe Gaming Âm thanh vòm 7.1 chân thật sẽ giúp các game thủ
        xác định phương hướng rõ ràng, đồng thời trao đổi cùng đồng đội kịp thời
        qua micro lọc âm. Driver chuyên dụng hỗ trợ thay đổi tần số hoặc chế độ
        nghe Music/ Cinema tiện dụng (*) Gaming Pad Chất liệu cao cấp và tăng
        cường độ chính xác khi sử dụng chuột, miếng lót Gaming pad là phụ kiện
        không thể thiếu của Game thủ chuyên nghiệp. Không phải tất cả các Gaming
        pad đều giống nhau, vì ZADEZ luôn tạo nên sự khác biệt. Khung Treo Tai
        Nghe Khung treo tai nghe với thiết kế độc quyền của ZADEZ, mang đến sự
        tinh tế cho không gian trải nghiệm game đẳng cấp. Hãy trải nghiệm và tận
        hưởng các tính năng độc đáo khác của đế treo tai nghe ZADEZ (* tùy thuộc
        từng model)ZADEZ GAMING Game là niềm đam mê của bạn và phục vụ cho niềm
        đam mê đó là sứ mệnh của chúng tôi. Hãy trải nghiệm các phụ kiện Gaming
        của ZADEZ với thiết kế tinh tế, tính năng - trợ năng - hiệu năng ấn
        tượng, cùng sự bền bỉ & chính sách chăm sóc khách hàng vượt trội. ZADEZ
        - Mang Đến Sự Hài Lòng ! Bàn Phím Cơ Sử dụng switch cơ cao cấp dành cho
        Game thủ chuyên nghiệp, đa dạng lựa chọn với Blue/ Red/ Brown/ Black
        switch đáp ứng cảm giác gõ cho từng nhu cầu sử dụng. Thiết kế chuẩn Full
        size hoặc TKL, hỗ trợ thiết lập macro qua driver chuyên dụng. Bàn Phím
        Membrane Bàn phím gaming dành cho game thủ trong giai đoạn khởi đầu. Sử
        dụng switch cao su (membrane) hỗ trợ tính năng kháng nước mà vẫn cho cảm
        giác gõ tương tự switch cơ dòng Brown, đồng thời thiết lập macro qua
        driver chuyên dụng (*). Chuột Gaming Nổi bật với dòng GT dành cho Game
        thủ chuyên nghiệp và dòng G là lựa chọn cho sự khởi đầu hoàn hảo. Trang
        bị chipset cao cấp, switch bền bỉ và hỗ trợ thiết lập macro (GT), các
        sản phẩm Gaming mouse của ZADEZ sẽ mang đến trải nghiệm chơi game tuyệt
        vời nhất. Tai Nghe Gaming Âm thanh vòm 7.1 chân thật sẽ giúp các game
        thủ xác định phương hướng rõ ràng, đồng thời trao đổi cùng đồng đội kịp
        thời qua micro lọc âm. Driver chuyên dụng hỗ trợ thay đổi tần số hoặc
        chế độ nghe Music/ Cinema tiện dụng (*) Gaming Pad Chất liệu cao cấp và
        tăng cường độ chính xác khi sử dụng chuột, miếng lót Gaming pad là phụ
        kiện không thể thiếu của Game thủ chuyên nghiệp. Không phải tất cả các
        Gaming pad đều giống nhau, vì ZADEZ luôn tạo nên sự khác biệt. Khung
        Treo Tai Nghe Khung treo tai nghe với thiết kế độc quyền của ZADEZ, mang
        đến sự tinh tế cho không gian trải nghiệm game đẳng cấp. Hãy trải nghiệm
        và tận hưởng các tính năng độc đáo khác của đế treo tai nghe ZADEZ (*
        tùy thuộc từng model)ZADEZ GAMING Game là niềm đam mê của bạn và phục vụ
        cho niềm đam mê đó là sứ mệnh của chúng tôi. Hãy trải nghiệm các phụ
        kiện Gaming của ZADEZ với thiết kế tinh tế, tính năng - trợ năng - hiệu
        năng ấn tượng, cùng sự bền bỉ & chính sách chăm sóc khách hàng vượt
        trội. ZADEZ - Mang Đến Sự Hài Lòng ! Bàn Phím Cơ Sử dụng switch cơ cao
        cấp dành cho Game thủ chuyên nghiệp, đa dạng lựa chọn với Blue/ Red/
        Brown/ Black switch đáp ứng cảm giác gõ cho từng nhu cầu sử dụng. Thiết
        kế chuẩn Full size hoặc TKL, hỗ trợ thiết lập macro qua driver chuyên
        dụng. Bàn Phím Membrane Bàn phím gaming dành cho game thủ trong giai
        đoạn khởi đầu. Sử dụng switch cao su (membrane) hỗ trợ tính năng kháng
        nước mà vẫn cho cảm giác gõ tương tự switch cơ dòng Brown, đồng thời
        thiết lập macro qua driver chuyên dụng (*). Chuột Gaming Nổi bật với
        dòng GT dành cho Game thủ chuyên nghiệp và dòng G là lựa chọn cho sự
        khởi đầu hoàn hảo. Trang bị chipset cao cấp, switch bền bỉ và hỗ trợ
        thiết lập macro (GT), các sản phẩm Gaming mouse của ZADEZ sẽ mang đến
        trải nghiệm chơi game tuyệt vời nhất. Tai Nghe Gaming Âm thanh vòm 7.1
        chân thật sẽ giúp các game thủ xác định phương hướng rõ ràng, đồng thời
        trao đổi cùng đồng đội kịp thời qua micro lọc âm. Driver chuyên dụng hỗ
        trợ thay đổi tần số hoặc chế độ nghe Music/ Cinema tiện dụng (*) Gaming
        Pad Chất liệu cao cấp và tăng cường độ chính xác khi sử dụng chuột,
        miếng lót Gaming pad là phụ kiện không thể thiếu của Game thủ chuyên
        nghiệp. Không phải tất cả các Gaming pad đều giống nhau, vì ZADEZ luôn
        tạo nên sự khác biệt. Khung Treo Tai Nghe Khung treo tai nghe với thiết
        kế độc quyền của ZADEZ, mang đến sự tinh tế cho không gian trải nghiệm
        game đẳng cấp. Hãy trải nghiệm và tận hưởng các tính năng độc đáo khác
        của đế treo tai nghe ZADEZ (* tùy thuộc từng model)ZADEZ GAMING Game là
        niềm đam mê của bạn và phục vụ cho niềm đam mê đó là sứ mệnh của chúng
        tôi. Hãy trải nghiệm các phụ kiện Gaming của ZADEZ với thiết kế tinh tế,
        tính năng - trợ năng - hiệu năng ấn tượng, cùng sự bền bỉ & chính sách
        chăm sóc khách hàng vượt trội. ZADEZ - Mang Đến Sự Hài Lòng ! Bàn Phím
        Cơ Sử dụng switch cơ cao cấp dành cho Game thủ chuyên nghiệp, đa dạng
        lựa chọn với Blue/ Red/ Brown/ Black switch đáp ứng cảm giác gõ cho từng
        nhu cầu sử dụng. Thiết kế chuẩn Full size hoặc TKL, hỗ trợ thiết lập
        macro qua driver chuyên dụng. Bàn Phím Membrane Bàn phím gaming dành cho
        game thủ trong giai đoạn khởi đầu. Sử dụng switch cao su (membrane) hỗ
        trợ tính năng kháng nước mà vẫn cho cảm giác gõ tương tự switch cơ dòng
        Brown, đồng thời thiết lập macro qua driver chuyên dụng (*). Chuột
        Gaming Nổi bật với dòng GT dành cho Game thủ chuyên nghiệp và dòng G là
        lựa chọn cho sự khởi đầu hoàn hảo. Trang bị chipset cao cấp, switch bền
        bỉ và hỗ trợ thiết lập macro (GT), các sản phẩm Gaming mouse của ZADEZ
        sẽ mang đến trải nghiệm chơi game tuyệt vời nhất. Tai Nghe Gaming Âm
        thanh vòm 7.1 chân thật sẽ giúp các game thủ xác định phương hướng rõ
        ràng, đồng thời trao đổi cùng đồng đội kịp thời qua micro lọc âm. Driver
        chuyên dụng hỗ trợ thay đổi tần số hoặc chế độ nghe Music/ Cinema tiện
        dụng (*) Gaming Pad Chất liệu cao cấp và tăng cường độ chính xác khi sử
        dụng chuột, miếng lót Gaming pad là phụ kiện không thể thiếu của Game
        thủ chuyên nghiệp. Không phải tất cả các Gaming pad đều giống nhau, vì
        ZADEZ luôn tạo nên sự khác biệt. Khung Treo Tai Nghe Khung treo tai nghe
        với thiết kế độc quyền của ZADEZ, mang đến sự tinh tế cho không gian
        trải nghiệm game đẳng cấp. Hãy trải nghiệm và tận hưởng các tính năng
        độc đáo khác của đế treo tai nghe ZADEZ (* tùy thuộc từng model)ZADEZ
        GAMING Game là niềm đam mê của bạn và phục vụ cho niềm đam mê đó là sứ
        mệnh của chúng tôi. Hãy trải nghiệm các phụ kiện Gaming của ZADEZ với
        thiết kế tinh tế, tính năng - trợ năng - hiệu năng ấn tượng, cùng sự bền
        bỉ & chính sách chăm sóc khách hàng vượt trội. ZADEZ - Mang Đến Sự Hài
        Lòng ! Bàn Phím Cơ Sử dụng switch cơ cao cấp dành cho Game thủ chuyên
        nghiệp, đa dạng lựa chọn với Blue/ Red/ Brown/ Black switch đáp ứng cảm
        giác gõ cho từng nhu cầu sử dụng. Thiết kế chuẩn Full size hoặc TKL, hỗ
        trợ thiết lập macro qua driver chuyên dụng. Bàn Phím Membrane Bàn phím
        gaming dành cho game thủ trong giai đoạn khởi đầu. Sử dụng switch cao su
        (membrane) hỗ trợ tính năng kháng nước mà vẫn cho cảm giác gõ tương tự
        switch cơ dòng Brown, đồng thời thiết lập macro qua driver chuyên dụng
        (*). Chuột Gaming Nổi bật với dòng GT dành cho Game thủ chuyên nghiệp và
        dòng G là lựa chọn cho sự khởi đầu hoàn hảo. Trang bị chipset cao cấp,
        switch bền bỉ và hỗ trợ thiết lập macro (GT), các sản phẩm Gaming mouse
        của ZADEZ sẽ mang đến trải nghiệm chơi game tuyệt vời nhất. Tai Nghe
        Gaming Âm thanh vòm 7.1 chân thật sẽ giúp các game thủ xác định phương
        hướng rõ ràng, đồng thời trao đổi cùng đồng đội kịp thời qua micro lọc
        âm. Driver chuyên dụng hỗ trợ thay đổi tần số hoặc chế độ nghe Music/
        Cinema tiện dụng (*) Gaming Pad Chất liệu cao cấp và tăng cường độ chính
        xác khi sử dụng chuột, miếng lót Gaming pad là phụ kiện không thể thiếu
        của Game thủ chuyên nghiệp. Không phải tất cả các Gaming pad đều giống
        nhau, vì ZADEZ luôn tạo nên sự khác biệt. Khung Treo Tai Nghe Khung treo
        tai nghe với thiết kế độc quyền của ZADEZ, mang đến sự tinh tế cho không
        gian trải nghiệm game đẳng cấp. Hãy trải nghiệm và tận hưởng các tính
        năng độc đáo khác của đế treo tai nghe ZADEZ (* tùy thuộc từng
        model)ZADEZ GAMING Game là niềm đam mê của bạn và phục vụ cho niềm đam
        mê đó là sứ mệnh của chúng tôi. Hãy trải nghiệm các phụ kiện Gaming của
        ZADEZ với thiết kế tinh tế, tính năng - trợ năng - hiệu năng ấn tượng,
        cùng sự bền bỉ & chính sách chăm sóc khách hàng vượt trội. ZADEZ - Mang
        Đến Sự Hài Lòng ! Bàn Phím Cơ Sử dụng switch cơ cao cấp dành cho Game
        thủ chuyên nghiệp, đa dạng lựa chọn với Blue/ Red/ Brown/ Black switch
        đáp ứng cảm giác gõ cho từng nhu cầu sử dụng. Thiết kế chuẩn Full size
        hoặc TKL, hỗ trợ thiết lập macro qua driver chuyên dụng. Bàn Phím
        Membrane Bàn phím gaming dành cho game thủ trong giai đoạn khởi đầu. Sử
        dụng switch cao su (membrane) hỗ trợ tính năng kháng nước mà vẫn cho cảm
        giác gõ tương tự switch cơ dòng Brown, đồng thời thiết lập macro qua
        driver chuyên dụng (*). Chuột Gaming Nổi bật với dòng GT dành cho Game
        thủ chuyên nghiệp và dòng G là lựa chọn cho sự khởi đầu hoàn hảo. Trang
        bị chipset cao cấp, switch bền bỉ và hỗ trợ thiết lập macro (GT), các
        sản phẩm Gaming mouse của ZADEZ sẽ mang đến trải nghiệm chơi game tuyệt
        vời nhất. Tai Nghe Gaming Âm thanh vòm 7.1 chân thật sẽ giúp các game
        thủ xác định phương hướng rõ ràng, đồng thời trao đổi cùng đồng đội kịp
        thời qua micro lọc âm. Driver chuyên dụng hỗ trợ thay đổi tần số hoặc
        chế độ nghe Music/ Cinema tiện dụng (*) Gaming Pad Chất liệu cao cấp và
        tăng cường độ chính xác khi sử dụng chuột, miếng lót Gaming pad là phụ
        kiện không thể thiếu của Game thủ chuyên nghiệp. Không phải tất cả các
        Gaming pad đều giống nhau, vì ZADEZ luôn tạo nên sự khác biệt. Khung
        Treo Tai Nghe Khung treo tai nghe với thiết kế độc quyền của ZADEZ, mang
        đến sự tinh tế cho không gian trải nghiệm game đẳng cấp. Hãy trải nghiệm
        và tận hưởng các tính năng độc đáo khác của đế treo tai nghe ZADEZ (*
        tùy thuộc từng model)ZADEZ GAMING Game là niềm đam mê của bạn và phục vụ
        cho niềm đam mê đó là sứ mệnh của chúng tôi. Hãy trải nghiệm các phụ
        kiện Gaming của ZADEZ với thiết kế tinh tế, tính năng - trợ năng - hiệu
        năng ấn tượng, cùng sự bền bỉ & chính sách chăm sóc khách hàng vượt
        trội. ZADEZ - Mang Đến Sự Hài Lòng ! Bàn Phím Cơ Sử dụng switch cơ cao
        cấp dành cho Game thủ chuyên nghiệp, đa dạng lựa chọn với Blue/ Red/
        Brown/ Black switch đáp ứng cảm giác gõ cho từng nhu cầu sử dụng. Thiết
        kế chuẩn Full size hoặc TKL, hỗ trợ thiết lập macro qua driver chuyên
        dụng. Bàn Phím Membrane Bàn phím gaming dành cho game thủ trong giai
        đoạn khởi đầu. Sử dụng switch cao su (membrane) hỗ trợ tính năng kháng
        nước mà vẫn cho cảm giác gõ tương tự switch cơ dòng Brown, đồng thời
        thiết lập macro qua driver chuyên dụng (*). Chuột Gaming Nổi bật với
        dòng GT dành cho Game thủ chuyên nghiệp và dòng G là lựa chọn cho sự
        khởi đầu hoàn hảo. Trang bị chipset cao cấp, switch bền bỉ và hỗ trợ
        thiết lập macro (GT), các sản phẩm Gaming mouse của ZADEZ sẽ mang đến
        trải nghiệm chơi game tuyệt vời nhất. Tai Nghe Gaming Âm thanh vòm 7.1
        chân thật sẽ giúp các game thủ xác định phương hướng rõ ràng, đồng thời
        trao đổi cùng đồng đội kịp thời qua micro lọc âm. Driver chuyên dụng hỗ
        trợ thay đổi tần số hoặc chế độ nghe Music/ Cinema tiện dụng (*) Gaming
        Pad Chất liệu cao cấp và tăng cường độ chính xác khi sử dụng chuột,
        miếng lót Gaming pad là phụ kiện không thể thiếu của Game thủ chuyên
        nghiệp. Không phải tất cả các Gaming pad đều giống nhau, vì ZADEZ luôn
        tạo nên sự khác biệt. Khung Treo Tai Nghe Khung treo tai nghe với thiết
        kế độc quyền của ZADEZ, mang đến sự tinh tế cho không gian trải nghiệm
        game đẳng cấp. Hãy trải nghiệm và tận hưởng các tính năng độc đáo khác
        của đế treo tai nghe ZADEZ (* tùy thuộc từng model)ZADEZ GAMING Game là
        niềm đam mê của bạn và phục vụ cho niềm đam mê đó là sứ mệnh của chúng
        tôi. Hãy trải nghiệm các phụ kiện Gaming của ZADEZ với thiết kế tinh tế,
        tính năng - trợ năng - hiệu năng ấn tượng, cùng sự bền bỉ & chính sách
        chăm sóc khách hàng vượt trội. ZADEZ - Mang Đến Sự Hài Lòng ! Bàn Phím
        Cơ Sử dụng switch cơ cao cấp dành cho Game thủ chuyên nghiệp, đa dạng
        lựa chọn với Blue/ Red/ Brown/ Black switch đáp ứng cảm giác gõ cho từng
        nhu cầu sử dụng. Thiết kế chuẩn Full size hoặc TKL, hỗ trợ thiết lập
        macro qua driver chuyên dụng. Bàn Phím Membrane Bàn phím gaming dành cho
        game thủ trong giai đoạn khởi đầu. Sử dụng switch cao su (membrane) hỗ
        trợ tính năng kháng nước mà vẫn cho cảm giác gõ tương tự switch cơ dòng
        Brown, đồng thời thiết lập macro qua driver chuyên dụng (*). Chuột
        Gaming Nổi bật với dòng GT dành cho Game thủ chuyên nghiệp và dòng G là
        lựa chọn cho sự khởi đầu hoàn hảo. Trang bị chipset cao cấp, switch bền
        bỉ và hỗ trợ thiết lập macro (GT), các sản phẩm Gaming mouse của ZADEZ
        sẽ mang đến trải nghiệm chơi game tuyệt vời nhất. Tai Nghe Gaming Âm
        thanh vòm 7.1 chân thật sẽ giúp các game thủ xác định phương hướng rõ
        ràng, đồng thời trao đổi cùng đồng đội kịp thời qua micro lọc âm. Driver
        chuyên dụng hỗ trợ thay đổi tần số hoặc chế độ nghe Music/ Cinema tiện
        dụng (*) Gaming Pad Chất liệu cao cấp và tăng cường độ chính xác khi sử
        dụng chuột, miếng lót Gaming pad là phụ kiện không thể thiếu của Game
        thủ chuyên nghiệp. Không phải tất cả các Gaming pad đều giống nhau, vì
        ZADEZ luôn tạo nên sự khác biệt. Khung Treo Tai Nghe Khung treo tai nghe
        với thiết kế độc quyền của ZADEZ, mang đến sự tinh tế cho không gian
        trải nghiệm game đẳng cấp. Hãy trải nghiệm và tận hưởng các tính năng
        độc đáo khác của đế treo tai nghe ZADEZ (* tùy thuộc từng model)ZADEZ
        GAMING Game là niềm đam mê của bạn và phục vụ cho niềm đam mê đó là sứ
        mệnh của chúng tôi. Hãy trải nghiệm các phụ kiện Gaming của ZADEZ với
        thiết kế tinh tế, tính năng - trợ năng - hiệu năng ấn tượng, cùng sự bền
        bỉ & chính sách chăm sóc khách hàng vượt trội. ZADEZ - Mang Đến Sự Hài
        Lòng ! Bàn Phím Cơ Sử dụng switch cơ cao cấp dành cho Game thủ chuyên
        nghiệp, đa dạng lựa chọn với Blue/ Red/ Brown/ Black switch đáp ứng cảm
        giác gõ cho từng nhu cầu sử dụng. Thiết kế chuẩn Full size hoặc TKL, hỗ
        trợ thiết lập macro qua driver chuyên dụng. Bàn Phím Membrane Bàn phím
        gaming dành cho game thủ trong giai đoạn khởi đầu. Sử dụng switch cao su
        (membrane) hỗ trợ tính năng kháng nước mà vẫn cho cảm giác gõ tương tự
        switch cơ dòng Brown, đồng thời thiết lập macro qua driver chuyên dụng
        (*). Chuột Gaming Nổi bật với dòng GT dành cho Game thủ chuyên nghiệp và
        dòng G là lựa chọn cho sự khởi đầu hoàn hảo. Trang bị chipset cao cấp,
        switch bền bỉ và hỗ trợ thiết lập macro (GT), các sản phẩm Gaming mouse
        của ZADEZ sẽ mang đến trải nghiệm chơi game tuyệt vời nhất. Tai Nghe
        Gaming Âm thanh vòm 7.1 chân thật sẽ giúp các game thủ xác định phương
        hướng rõ ràng, đồng thời trao đổi cùng đồng đội kịp thời qua micro lọc
        âm. Driver chuyên dụng hỗ trợ thay đổi tần số hoặc chế độ nghe Music/
        Cinema tiện dụng (*) Gaming Pad Chất liệu cao cấp và tăng cường độ chính
        xác khi sử dụng chuột, miếng lót Gaming pad là phụ kiện không thể thiếu
        của Game thủ chuyên nghiệp. Không phải tất cả các Gaming pad đều giống
        nhau, vì ZADEZ luôn tạo nên sự khác biệt. Khung Treo Tai Nghe Khung treo
        tai nghe với thiết kế độc quyền của ZADEZ, mang đến sự tinh tế cho không
        gian trải nghiệm game đẳng cấp. Hãy trải nghiệm và tận hưởng các tính
        năng độc đáo khác của đế treo tai nghe ZADEZ (* tùy thuộc từng
        model)ZADEZ GAMING Game là niềm đam mê của bạn và phục vụ cho niềm đam
        mê đó là sứ mệnh của chúng tôi. Hãy trải nghiệm các phụ kiện Gaming của
        ZADEZ với thiết kế tinh tế, tính năng - trợ năng - hiệu năng ấn tượng,
        cùng sự bền bỉ & chính sách chăm sóc khách hàng vượt trội. ZADEZ - Mang
        Đến Sự Hài Lòng ! Bàn Phím Cơ Sử dụng switch cơ cao cấp dành cho Game
        thủ chuyên nghiệp, đa dạng lựa chọn với Blue/ Red/ Brown/ Black switch
        đáp ứng cảm giác gõ cho từng nhu cầu sử dụng. Thiết kế chuẩn Full size
        hoặc TKL, hỗ trợ thiết lập macro qua driver chuyên dụng. Bàn Phím
        Membrane Bàn phím gaming dành cho game thủ trong giai đoạn khởi đầu. Sử
        dụng switch cao su (membrane) hỗ trợ tính năng kháng nước mà vẫn cho cảm
        giác gõ tương tự switch cơ dòng Brown, đồng thời thiết lập macro qua
        driver chuyên dụng (*). Chuột Gaming Nổi bật với dòng GT dành cho Game
        thủ chuyên nghiệp và dòng G là lựa chọn cho sự khởi đầu hoàn hảo. Trang
        bị chipset cao cấp, switch bền bỉ và hỗ trợ thiết lập macro (GT), các
        sản phẩm Gaming mouse của ZADEZ sẽ mang đến trải nghiệm chơi game tuyệt
        vời nhất. Tai Nghe Gaming Âm thanh vòm 7.1 chân thật sẽ giúp các game
        thủ xác định phương hướng rõ ràng, đồng thời trao đổi cùng đồng đội kịp
        thời qua micro lọc âm. Driver chuyên dụng hỗ trợ thay đổi tần số hoặc
        chế độ nghe Music/ Cinema tiện dụng (*) Gaming Pad Chất liệu cao cấp và
        tăng cường độ chính xác khi sử dụng chuột, miếng lót Gaming pad là phụ
        kiện không thể thiếu của Game thủ chuyên nghiệp. Không phải tất cả các
        Gaming pad đều giống nhau, vì ZADEZ luôn tạo nên sự khác biệt. Khung
        Treo Tai Nghe Khung treo tai nghe với thiết kế độc quyền của ZADEZ, mang
        đến sự tinh tế cho không gian trải nghiệm game đẳng cấp. Hãy trải nghiệm
        và tận hưởng các tính năng độc đáo khác của đế treo tai nghe ZADEZ (*
        tùy thuộc từng model)ZADEZ GAMING Game là niềm đam mê của bạn và phục vụ
        cho niềm đam mê đó là sứ mệnh của chúng tôi. Hãy trải nghiệm các phụ
        kiện Gaming của ZADEZ với thiết kế tinh tế, tính năng - trợ năng - hiệu
        năng ấn tượng, cùng sự bền bỉ & chính sách chăm sóc khách hàng vượt
        trội. ZADEZ - Mang Đến Sự Hài Lòng ! Bàn Phím Cơ Sử dụng switch cơ cao
        cấp dành cho Game thủ chuyên nghiệp, đa dạng lựa chọn với Blue/ Red/
        Brown/ Black switch đáp ứng cảm giác gõ cho từng nhu cầu sử dụng. Thiết
        kế chuẩn Full size hoặc TKL, hỗ trợ thiết lập macro qua driver chuyên
        dụng. Bàn Phím Membrane Bàn phím gaming dành cho game thủ trong giai
        đoạn khởi đầu. Sử dụng switch cao su (membrane) hỗ trợ tính năng kháng
        nước mà vẫn cho cảm giác gõ tương tự switch cơ dòng Brown, đồng thời
        thiết lập macro qua driver chuyên dụng (*). Chuột Gaming Nổi bật với
        dòng GT dành cho Game thủ chuyên nghiệp và dòng G là lựa chọn cho sự
        khởi đầu hoàn hảo. Trang bị chipset cao cấp, switch bền bỉ và hỗ trợ
        thiết lập macro (GT), các sản phẩm Gaming mouse của ZADEZ sẽ mang đến
        trải nghiệm chơi game tuyệt vời nhất. Tai Nghe Gaming Âm thanh vòm 7.1
        chân thật sẽ giúp các game thủ xác định phương hướng rõ ràng, đồng thời
        trao đổi cùng đồng đội kịp thời qua micro lọc âm. Driver chuyên dụng hỗ
        trợ thay đổi tần số hoặc chế độ nghe Music/ Cinema tiện dụng (*) Gaming
        Pad Chất liệu cao cấp và tăng cường độ chính xác khi sử dụng chuột,
        miếng lót Gaming pad là phụ kiện không thể thiếu của Game thủ chuyên
        nghiệp. Không phải tất cả các Gaming pad đều giống nhau, vì ZADEZ luôn
        tạo nên sự khác biệt. Khung Treo Tai Nghe Khung treo tai nghe với thiết
        kế độc quyền của ZADEZ, mang đến sự tinh tế cho không gian trải nghiệm
        game đẳng cấp. Hãy trải nghiệm và tận hưởng các tính năng độc đáo khác
        của đế treo tai nghe ZADEZ (* tùy thuộc từng model)ZADEZ GAMING Game là
        niềm đam mê của bạn và phục vụ cho niềm đam mê đó là sứ mệnh của chúng
        tôi. Hãy trải nghiệm các phụ kiện Gaming của ZADEZ với thiết kế tinh tế,
        tính năng - trợ năng - hiệu năng ấn tượng, cùng sự bền bỉ & chính sách
        chăm sóc khách hàng vượt trội. ZADEZ - Mang Đến Sự Hài Lòng ! Bàn Phím
        Cơ Sử dụng switch cơ cao cấp dành cho Game thủ chuyên nghiệp, đa dạng
        lựa chọn với Blue/ Red/ Brown/ Black switch đáp ứng cảm giác gõ cho từng
        nhu cầu sử dụng. Thiết kế chuẩn Full size hoặc TKL, hỗ trợ thiết lập
        macro qua driver chuyên dụng. Bàn Phím Membrane Bàn phím gaming dành cho
        game thủ trong giai đoạn khởi đầu. Sử dụng switch cao su (membrane) hỗ
        trợ tính năng kháng nước mà vẫn cho cảm giác gõ tương tự switch cơ dòng
        Brown, đồng thời thiết lập macro qua driver chuyên dụng (*). Chuột
        Gaming Nổi bật với dòng GT dành cho Game thủ chuyên nghiệp và dòng G là
        lựa chọn cho sự khởi đầu hoàn hảo. Trang bị chipset cao cấp, switch bền
        bỉ và hỗ trợ thiết lập macro (GT), các sản phẩm Gaming mouse của ZADEZ
        sẽ mang đến trải nghiệm chơi game tuyệt vời nhất. Tai Nghe Gaming Âm
        thanh vòm 7.1 chân thật sẽ giúp các game thủ xác định phương hướng rõ
        ràng, đồng thời trao đổi cùng đồng đội kịp thời qua micro lọc âm. Driver
        chuyên dụng hỗ trợ thay đổi tần số hoặc chế độ nghe Music/ Cinema tiện
        dụng (*) Gaming Pad Chất liệu cao cấp và tăng cường độ chính xác khi sử
        dụng chuột, miếng lót Gaming pad là phụ kiện không thể thiếu của Game
        thủ chuyên nghiệp. Không phải tất cả các Gaming pad đều giống nhau, vì
        ZADEZ luôn tạo nên sự khác biệt. Khung Treo Tai Nghe Khung treo tai nghe
        với thiết kế độc quyền của ZADEZ, mang đến sự tinh tế cho không gian
        trải nghiệm game đẳng cấp. Hãy trải nghiệm và tận hưởng các tính năng
        độc đáo khác của đế treo tai nghe ZADEZ (* tùy thuộc từng model)ZADEZ
        GAMING Game là niềm đam mê của bạn và phục vụ cho niềm đam mê đó là sứ
        mệnh của chúng tôi. Hãy trải nghiệm các phụ kiện Gaming của ZADEZ với
        thiết kế tinh tế, tính năng - trợ năng - hiệu năng ấn tượng, cùng sự bền
        bỉ & chính sách chăm sóc khách hàng vượt trội. ZADEZ - Mang Đến Sự Hài
        Lòng ! Bàn Phím Cơ Sử dụng switch cơ cao cấp dành cho Game thủ chuyên
        nghiệp, đa dạng lựa chọn với Blue/ Red/ Brown/ Black switch đáp ứng cảm
        giác gõ cho từng nhu cầu sử dụng. Thiết kế chuẩn Full size hoặc TKL, hỗ
        trợ thiết lập macro qua driver chuyên dụng. Bàn Phím Membrane Bàn phím
        gaming dành cho game thủ trong giai đoạn khởi đầu. Sử dụng switch cao su
        (membrane) hỗ trợ tính năng kháng nước mà vẫn cho cảm giác gõ tương tự
        switch cơ dòng Brown, đồng thời thiết lập macro qua driver chuyên dụng
        (*). Chuột Gaming Nổi bật với dòng GT dành cho Game thủ chuyên nghiệp và
        dòng G là lựa chọn cho sự khởi đầu hoàn hảo. Trang bị chipset cao cấp,
        switch bền bỉ và hỗ trợ thiết lập macro (GT), các sản phẩm Gaming mouse
        của ZADEZ sẽ mang đến trải nghiệm chơi game tuyệt vời nhất. Tai Nghe
        Gaming Âm thanh vòm 7.1 chân thật sẽ giúp các game thủ xác định phương
        hướng rõ ràng, đồng thời trao đổi cùng đồng đội kịp thời qua micro lọc
        âm. Driver chuyên dụng hỗ trợ thay đổi tần số hoặc chế độ nghe Music/
        Cinema tiện dụng (*) Gaming Pad Chất liệu cao cấp và tăng cường độ chính
        xác khi sử dụng chuột, miếng lót Gaming pad là phụ kiện không thể thiếu
        của Game thủ chuyên nghiệp. Không phải tất cả các Gaming pad đều giống
        nhau, vì ZADEZ luôn tạo nên sự khác biệt. Khung Treo Tai Nghe Khung treo
        tai nghe với thiết kế độc quyền của ZADEZ, mang đến sự tinh tế cho không
        gian trải nghiệm game đẳng cấp. Hãy trải nghiệm và tận hưởng các tính
        năng độc đáo khác của đế treo tai nghe ZADEZ (* tùy thuộc từng
        model)ZADEZ GAMING Game là niềm đam mê của bạn và phục vụ cho niềm đam
        mê đó là sứ mệnh của chúng tôi. Hãy trải nghiệm các phụ kiện Gaming của
        ZADEZ với thiết kế tinh tế, tính năng - trợ năng - hiệu năng ấn tượng,
        cùng sự bền bỉ & chính sách chăm sóc khách hàng vượt trội. ZADEZ - Mang
        Đến Sự Hài Lòng ! Bàn Phím Cơ Sử dụng switch cơ cao cấp dành cho Game
        thủ chuyên nghiệp, đa dạng lựa chọn với Blue/ Red/ Brown/ Black switch
        đáp ứng cảm giác gõ cho từng nhu cầu sử dụng. Thiết kế chuẩn Full size
        hoặc TKL, hỗ trợ thiết lập macro qua driver chuyên dụng. Bàn Phím
        Membrane Bàn phím gaming dành cho game thủ trong giai đoạn khởi đầu. Sử
        dụng switch cao su (membrane) hỗ trợ tính năng kháng nước mà vẫn cho cảm
        giác gõ tương tự switch cơ dòng Brown, đồng thời thiết lập macro qua
        driver chuyên dụng (*). Chuột Gaming Nổi bật với dòng GT dành cho Game
        thủ chuyên nghiệp và dòng G là lựa chọn cho sự khởi đầu hoàn hảo. Trang
        bị chipset cao cấp, switch bền bỉ và hỗ trợ thiết lập macro (GT), các
        sản phẩm Gaming mouse của ZADEZ sẽ mang đến trải nghiệm chơi game tuyệt
        vời nhất. Tai Nghe Gaming Âm thanh vòm 7.1 chân thật sẽ giúp các game
        thủ xác định phương hướng rõ ràng, đồng thời trao đổi cùng đồng đội kịp
        thời qua micro lọc âm. Driver chuyên dụng hỗ trợ thay đổi tần số hoặc
        chế độ nghe Music/ Cinema tiện dụng (*) Gaming Pad Chất liệu cao cấp và
        tăng cường độ chính xác khi sử dụng chuột, miếng lót Gaming pad là phụ
        kiện không thể thiếu của Game thủ chuyên nghiệp. Không phải tất cả các
        Gaming pad đều giống nhau, vì ZADEZ luôn tạo nên sự khác biệt. Khung
        Treo Tai Nghe Khung treo tai nghe với thiết kế độc quyền của ZADEZ, mang
        đến sự tinh tế cho không gian trải nghiệm game đẳng cấp. Hãy trải nghiệm
        và tận hưởng các tính năng độc đáo khác của đế treo tai nghe ZADEZ (*
        tùy thuộc từng model)ZADEZ GAMING Game là niềm đam mê của bạn và phục vụ
        cho niềm đam mê đó là sứ mệnh của chúng tôi. Hãy trải nghiệm các phụ
        kiện Gaming của ZADEZ với thiết kế tinh tế, tính năng - trợ năng - hiệu
        năng ấn tượng, cùng sự bền bỉ & chính sách chăm sóc khách hàng vượt
        trội. ZADEZ - Mang Đến Sự Hài Lòng ! Bàn Phím Cơ Sử dụng switch cơ cao
        cấp dành cho Game thủ chuyên nghiệp, đa dạng lựa chọn với Blue/ Red/
        Brown/ Black switch đáp ứng cảm giác gõ cho từng nhu cầu sử dụng. Thiết
        kế chuẩn Full size hoặc TKL, hỗ trợ thiết lập macro qua driver chuyên
        dụng. Bàn Phím Membrane Bàn phím gaming dành cho game thủ trong giai
        đoạn khởi đầu. Sử dụng switch cao su (membrane) hỗ trợ tính năng kháng
        nước mà vẫn cho cảm giác gõ tương tự switch cơ dòng Brown, đồng thời
        thiết lập macro qua driver chuyên dụng (*). Chuột Gaming Nổi bật với
        dòng GT dành cho Game thủ chuyên nghiệp và dòng G là lựa chọn cho sự
        khởi đầu hoàn hảo. Trang bị chipset cao cấp, switch bền bỉ và hỗ trợ
        thiết lập macro (GT), các sản phẩm Gaming mouse của ZADEZ sẽ mang đến
        trải nghiệm chơi game tuyệt vời nhất. Tai Nghe Gaming Âm thanh vòm 7.1
        chân thật sẽ giúp các game thủ xác định phương hướng rõ ràng, đồng thời
        trao đổi cùng đồng đội kịp thời qua micro lọc âm. Driver chuyên dụng hỗ
        trợ thay đổi tần số hoặc chế độ nghe Music/ Cinema tiện dụng (*) Gaming
        Pad Chất liệu cao cấp và tăng cường độ chính xác khi sử dụng chuột,
        miếng lót Gaming pad là phụ kiện không thể thiếu của Game thủ chuyên
        nghiệp. Không phải tất cả các Gaming pad đều giống nhau, vì ZADEZ luôn
        tạo nên sự khác biệt. Khung Treo Tai Nghe Khung treo tai nghe với thiết
        kế độc quyền của ZADEZ, mang đến sự tinh tế cho không gian trải nghiệm
        game đẳng cấp. Hãy trải nghiệm và tận hưởng các tính năng độc đáo khác
        của đế treo tai nghe ZADEZ (* tùy thuộc từng model)
      </div>
    </div>
  );
};

export default DetailBlogPage;
