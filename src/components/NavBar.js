"use client";
// import { useScrollPosition } from "@/library/useScrollPosition";
import Image from "next/image";
import Link from "next/link";
const NavBar = ({ data }) => {
  // const scrollPosition = useScrollPosition();
  return (
    <>
      <div className="md:flex hidden uppercase items-center justify-center gap-2">
        {data?.map((item, i) => (
          <div key={i} className="">
            <div className="px-3 text-left group ">
              {!item?.children ? (
                <Link
                  href={`/${item.category_code}`}
                  style={{ textDecoration: "none", color: "black" }}
                  prefetch={false}
                >
                  <span className="py-2 flex justify-between items-center md:pr-0 pr-5 text-sm lg:text-[11px] 2xl:text-base font-medium md:cursor-pointer group-hover:text-red-500 text-black duration-200 transition">
                    {item.name}
                  </span>
                </Link>
              ) : (
                <Link
                href={item.category_code == "zadez" || item.category_code == "catalogue" ? '/' : `/danh-muc/${item.category_code}`}
                style={{ textDecoration: "none", color: "black" }}
                prefetch={false}
              >
                <span className=" py-2 flex justify-between items-center md:pr-0 pr-5 text-sm lg:text-[11px] 2xl:text-base font-medium md:cursor-pointer group-hover:text-red-500 text-black duration-200 transition">
                  {item.name}
                  {item?.children && (
                    <span className="text-xs md:mt-1 md:ml-2  md:block hidden transition-all transform group-hover:rotate-180 group-hover:-mt-2">
                      <Image
                        height={12}
                        width={12}
                        src="/images/dropdown.svg"
                        alt="dropdown"
                      />
                    </span>
                  )}
                </span>
                </Link>
              )}
              {item?.children && (
                <div
                  className={`absolute top-[64px] invisible group-hover:md:visible hover:md:visible bg-white mt-5 py-2 pl-2 gap-10  rounded-xl shadow-lg  ease-in-out transition-all group-hover:md:-translate-y-6 duration-200 opacity-0 group-hover:opacity-100`}
                >
                  {item?.children &&
                    item?.children.map((item, i) => (
                      <div key={i} className=" md:cursor-pointer group/item ">
                        <Link
                          href={`${
                            item.products.length > 0 ? `/danh-muc-san-pham` : ""
                          }/${item.category_code}`}
                          style={{ textDecoration: "none", color: "black" }}
                          prefetch={false}
                        >
                          <div className="col-span-1 flex items-center justify-between group-hover/item:text-red-500 duration-200 transition mx-2">
                            <div className="flex items-center justify-center flex-wrap">
                              {item?.image && (
                                <Image
                                  src={item.image}
                                  width={50}
                                  height={50}
                                  className="p-2"
                                  alt={item.name}
                                />
                              )}
                              <span className="text-xs 2xl:text-base font-medium my-1 mr-2">
                                {item.name}
                              </span>
                            </div>
                            {item.products.length > 0 && (
                              <span className="md:block hidden transition-all transform group-hover/item:-rotate-90 mr-2  ">
                                <Image
                                  height={12}
                                  width={12}
                                  src="/images/dropdown.svg"
                                  alt="dropdown"
                                />
                              </span>
                            )}
                          </div>
                        </Link>
                        {item.products.length > 0 && (
                          <div className="absolute -mt-8 -right-[300px] m-2 w-60  invisible  group-hover/item:md:visible hover:md:visible bg-white p-2 gap-10  rounded-xl shadow-lg max-h-96 overflow-y-auto ease-in transition-all group-hover/item:md:-translate-x-9 duration-100 opacity-0 group-hover/item:opacity-100">
                            {item?.products.length > 0 &&
                              item?.products.map((item, i) => (
                                <Link
                                  key={i}
                                  href={`/san-pham/${item.product_code}`}
                                  className="col-span-1"
                                  style={{
                                    textDecoration: "none",
                                    color: "black",
                                  }}
                                  prefetch={false}
                                >
                                  <div className="flex items-center  hover:text-red-500 duration-200 transition">
                                    {item?.main_image && (
                                      <Image
                                        src={item.main_image}
                                        width={40}
                                        height={40}
                                        className="p-1"
                                        alt={item.name}
                                      />
                                    )}
                                    <span className="text-xs 2xl:text-base font-medium my-1">
                                      {item.name}
                                    </span>
                                  </div>
                                </Link>
                              ))}
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              )}
            </div>
            {/* */}
          </div>
        ))}
      </div>
    </>
  );
};

export default NavBar;
