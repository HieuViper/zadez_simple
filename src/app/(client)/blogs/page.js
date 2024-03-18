"use client";
import { toSlug } from "@/library/util";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useSWRInfinite from "swr/infinite";
import Banner from "./_components/Banner";

const PAGE_SIZE = 4;

const BlogsPage = () => {
  const router = useRouter();

  const { data, mutate, size, setSize, isValidating, isLoading } =
    useSWRInfinite(
      (index) => `/api/articles?limit=${PAGE_SIZE}&page=${index + 1}`,
      (url) => axios.get(url).then((res) => res.data.data)
    );

  console.log("🚀 ~ BlogsPage ~ data:", data);
  const blogs = data ? [].concat(...data) : [];
  console.log("🚀 ~ BlogsPage ~ blogs:", blogs);
  const isLoadingMore =
    isLoading || (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE);

  if (isLoading) return <div>loading..</div>;

  return (
    <div className="wrapper">
      <div className="sm:hidden block bg-white md:px-20 px-4 py-4 rounded-lg m-auto">
        <Banner listImage={blogs.slice(0, 4)} />
      </div>

      <div
        style={{
          backgroundImage: `url("${
            blogs?.[0].mainImageURL || "/no-image.jpg"
          }")`,
        }}
        className="h-[70%] sm:grid hidden relative -mx-6 lg:-mx-16 xl:-mx-24 text-white sm:pl-10 lg:pl-20 py-16 grid-cols-12 bg-no-repeat bg-cover bg-center"
      >
        <div
          className="cursor-pointer sm:flex hidden flex-col gap-4 col-start-1 sm:col-span-7 lg:col-span-4 justify-center h-full z-10"
          onClick={() =>
            router.push(
              "/blogs/" + toSlug(blogs?.[0].title + " " + blogs?.[0].id)
            )
          }
        >
          <div className="text-3xl font-semibold">{blogs?.[0].title}</div>
          <Image
            src={
              blogs?.[0].mainImageURL
                ? blogs?.[0].mainImageURL
                : "/no-image.jpg"
            }
            width={600}
            height={300}
            alt="ok"
            className="object-cover rounded-lg"
          />
          <div className="text-xs">{blogs?.[0].short}</div>
        </div>

        <div className="col-end-13 col-span-4 z-10">
          <div className="flex flex-col">
            {blogs?.slice(0, 4).map((item, index) => (
              <div
                className={`flex items-center gap-4 py-4 pl-2 cursor-pointer hover:bg-[rgba(0,0,0,0.2)] ${
                  index != blogs.slice(0, 4).length - 1
                    ? "border-solid border-0 border-b border-gray-500"
                    : ""
                }`}
                key={index}
                onClick={() =>
                  router.push("/blogs/" + toSlug(item.title + " " + item.id))
                }
              >
                <div
                  className="w-[100px] h-[70px]"
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
                <div className="flex flex-col gap-3">
                  <div className="font-bold">
                    {item.title.slice(0, 20) +
                      (item.title.length > 20 ? "..." : "")}
                  </div>
                  <div className="italic text-sm">
                    {item?.short?.slice(0, 20) +
                      (item?.short?.length > 20 ? "..." : "")}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute inset-0 bg-gray-900 bg-opacity-30 rounded-lg"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-6 sm:py-16">
        {blogs?.map((item, index) => (
          <div
            key={index}
            className={`h-[350px] cursor-pointer rounded-lg bg-opacity-15 bg-cover bg-no-repeat relative shadow overflow-hidden`}
            onClick={() =>
              router.push("/blogs/" + toSlug(item.title + " " + item.id))
            }
          >
            <div className="absolute bottom-8 left-8 text-xl text-white font-semibold z-10">
              {item.title}
            </div>
            <div
              className="absolute inset-0 bg-gray-900 bg-opacity-30 rounded-lg transition-all bg-cover bg-center scale-100 hover:scale-110"
              style={{
                backgroundImage: `url('${
                  item?.mainImageURL ? item?.mainImageURL : "/no-image.jpg"
                }')`,
              }}
            />
          </div>
        ))}
      </div>

      <div className="w-full flex justify-center items-center">
        <button
          disabled={isLoadingMore || isReachingEnd}
          onClick={() => setSize(size + 1)}
          type="button"
          className="outline-none text-white bg-red-700 hover:bg-red-800 border-none cursor-pointer font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
        >
          {isLoadingMore ? "loading..." : isReachingEnd ? "Hết" : "Tải thêm"}
        </button>
      </div>

      {isEmpty ? <p>Không có bài viết nào</p> : null}
    </div>
  );
};

export default BlogsPage;

const Loader = () => (
  <div role="status">
    <svg
      aria-hidden="true"
      className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill"
      />
    </svg>
    <span className="sr-only">Loading...</span>
  </div>
);
