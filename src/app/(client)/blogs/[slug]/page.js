"use client";
import Loading from "@/components/Loading";
import { useSWRData } from "@/library/api";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Aticle = ({ params }) => {
  const router = useRouter();
  const { slug } = params;
  const id = slug.split("-")[slug.split("-").length - 1];
  const { data: article,isLoading } = useSWRData(`/api/articles/${id}`);
  const { data: articles } = useSWRData(`/api/articles?limit=5`);
  const { data: sameArticles } = useSWRData(
    `/api/articles?value=${article?.value}&limit=4`
  );
  if (isLoading) return <div><Loading/></div>;
  return (
    <div className="m-auto md:max-w-3xl lg:max-w-7xl bg-white my-4 rounded-xl">
      <div className="grid grid-cols-3">
        <div className="col-span-3 lg:col-span-2 flex flex-col overflow-hidden p-4">
          <h1 className="text-4xl font-bold">{article?.title}</h1>
          <div className="text-xl font-semibold">{article?.short}</div>
          <div className="editor editor-article mt-8 text-justify">
            <div dangerouslySetInnerHTML={{ __html: article?.description }} />
          </div>
          {sameArticles && sameArticles?.data?.length > 0 &&(
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
                      sizes="(min-width: 20em) 30vw,
                (min-width: 28em) 45vw,
                100vw"
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                      width={150}
                      height={100}
                      src={item?.mainImageURL}
                      alt={item?.title}
                      className="rounded-xl"
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
                <div key={i} className="flex flex-col mb-4 col-span-1"
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
                }>
                  <Image
                    sizes="(min-width: 20em) 30vw,
                (min-width: 28em) 45vw,
                100vw"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    width={150}
                    height={100}
                    src={item?.mainImageURL}
                    alt={item?.title}
                    className="rounded-xl"
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
            <div key={i} className="flex mb-4"
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
            }>
              <Image
                // sizes="(min-width: 20em) 30vw,
                //   (min-width: 28em) 45vw,
                //   100vw"
                // style={{
                //   width: "100%",
                //   height: "auto",
                // }}
                width={150}
                height={100}
                src={item?.mainImageURL}
                alt={item?.title}
                className="rounded-xl"
              />
              <div className="px-2 leading-6">{item?.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aticle;
