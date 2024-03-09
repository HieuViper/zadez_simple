"use client";
import { useSWRData } from "@/library/api";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Banner from "./_components/Banner";

const BlogsPage = () => {
  const arr = Array.apply(null, Array(4)).map(Number.prototype.valueOf, 0);
  const router = useRouter();

  const { data, isLoading } = useSWRData("/api/articles");
  console.log("🚀 ~ BlogsPage ~ data:", data);

  if (isLoading) return <div>loading..</div>;

  return (
    <div className="wrapper">
      <div className=" bg-white md:px-20 px-4 py-4 rounded-lg m-auto">
        <Banner listImage={data?.data} />
      </div>

      <div
        style={{
          backgroundImage: `url("${data?.data[0].mainImageURL}")`,
        }}
        className="h-[70%] sm:grid hidden relative -mx-6 lg:-mx-16 xl:-mx-24 text-white sm:pl-10 lg:pl-20 py-16 grid-cols-12 bg-no-repeat bg-cover"
      >
        <div
          className="cursor-pointer sm:flex hidden flex-col gap-4 col-start-1 sm:col-span-7 lg:col-span-4 justify-center h-full z-10"
          onClick={() =>
            router.push(
              "/blogs/" +
                data?.data[0].title
                  .toLowerCase()
                  .replace(/ /g, "-")
                  .replace(/[^\w-]+/g, "") +
                "-" +
                data?.data[0].id
            )
          }
        >
          <div className="text-3xl font-semibold">{data?.data[0].title}</div>
          <Image
            src={"/background.jpg"}
            width={600}
            height={300}
            alt="ok"
            className="object-cover"
          />
          <div className="text-xs">{data?.data[0].short}</div>
        </div>

        <div className="col-end-13 col-span-4 z-10">
          <div className="flex flex-col">
            {data?.data.map((item, index) => (
              <div
                className={`flex items-center gap-4 py-4 cursor-pointer hover:bg-[rgba(0,0,0,0.2)] ${
                  index != arr.length - 1
                    ? "border-solid border-0 border-b border-gray-500"
                    : ""
                }`}
                key={index}
                onClick={() =>
                  router.push(
                    "/blogs/" +
                      item.title
                        .toLowerCase()
                        .replace(/ /g, "-")
                        .replace(/[^\w-]+/g, "") +
                      "-" +
                      item.id
                  )
                }
              >
                <Image
                  src={item.mainImageURL}
                  width={100}
                  height={70}
                  alt="ok"
                />
                <div className="flex flex-col gap-3">
                  <div className="font-bold">
                    {item.title.slice(0, 20) +
                      (item.title.length > 20 ? "..." : "")}
                  </div>
                  <div className="italic text-sm">
                    {item.short.slice(0, 20) +
                      (item.short.length > 20 ? "..." : "")}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute inset-0 bg-gray-900 bg-opacity-30 rounded-lg"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-6 sm:py-16">
        {data?.data.map((item, index) => (
          <div
            key={index}
            className={`h-[350px] cursor-pointer rounded-lg bg-opacity-15 bg-cover bg-no-repeat relative shadow overflow-hidden`}
            onClick={() =>
              router.push(
                "/blogs/" +
                  item.title
                    .toLowerCase()
                    .replace(/ /g, "-")
                    .replace(/[^\w-]+/g, "") +
                  "-" +
                  item.id
              )
            }
          >
            <div className="absolute bottom-8 left-8 text-xl text-white font-semibold z-10">
              {item.title}
            </div>
            <div
              className="absolute inset-0 bg-gray-900 bg-opacity-30 rounded-lg transition-all bg-cover bg-center scale-100 hover:scale-110"
              style={{ backgroundImage: `url('${item.mainImageURL}')` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
