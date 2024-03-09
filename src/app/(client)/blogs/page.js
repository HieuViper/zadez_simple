"use client";
import { useSWRData } from "@/library/api";
import Image from "next/image";

const BlogsPage = () => {
  const arr = Array.apply(null, Array(4)).map(Number.prototype.valueOf, 0);

  const { data } = useSWRData("/api/articles");
  console.log("🚀 ~ BlogsPage ~ data:", data);

  return (
    <div className="wrapper">
      <div className="h-[70%] relative -mx-6 lg:-mx-16 xl:-mx-24 text-white sm:pl-10 lg:pl-20 py-16 grid grid-cols-12 bg-[url('https://www.slingacademy.com/wp-content/uploads/2022/10/hero-image-example.webp')]">
        <div className="flex flex-col gap-4 col-start-1 sm:col-span-7 lg:col-span-4 justify-center h-full z-10">
          <div className="text-2xl font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam rerum
            asperiores optio, veritatis
          </div>
          <Image src={"/background.jpg"} width={400} height={250} alt="ok" />
          <div className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            veniam commodi quae veritatis ullam expedita fuga ut. Perferendis
            delectus tenetur provident, minima placeat excepturi mollitia natus,
            laborum eaque suscipit ut!
          </div>
        </div>

        <div className="col-end-13 col-span-4 z-10">
          <div className="flex flex-col">
            {data?.data.map((item, index) => (
              <div
                className={`flex items-center gap-4 py-4 ${
                  index != arr.length - 1
                    ? "border-solid border-0 border-b border-gray-500"
                    : ""
                }`}
                key={index}
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

      <div className="grid grid-cols-2 gap-8 py-16">
        {data?.data.map((item, index) => (
          <div
            key={index}
            className={`h-[350px] cursor-pointer rounded-lg bg-opacity-15 bg-cover bg-no-repeat relative`}
            style={{ backgroundImage: `url('${item.mainImageURL}')` }}
          >
            <div className="absolute bottom-8 left-8 text-xl text-white font-semibold z-10">
              {item.title}
            </div>
            <div className="absolute inset-0 bg-gray-900 bg-opacity-30 rounded-lg"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
