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
                  <span className="py-2 flex justify-between items-center md:pr-0 pr-5 text-sm lg:text-xs 2xl:text-base font-medium md:cursor-pointer group-hover:text-red-500 text-black duration-300 transition">
                    {item.name}
                  </span>
                </Link>
              ) : (
                <span className=" py-2 flex justify-between items-center md:pr-0 pr-5 text-sm lg:text-xs 2xl:text-base font-medium md:cursor-pointer group-hover:text-red-500 text-black duration-300 transition">
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
              )}
              {item?.children && (
                <div
                  className={`absolute top-12 hidden group-hover:md:block hover:md:block bg-white mt-5 py-2 pl-2 gap-10  rounded-xl shadow-lg  ease-in-out transition-all duration-500`}
                >
                  {item?.children &&
                    item?.children.map((item, i) => (
                      <div key={i} className=" md:cursor-pointer group/item ">
                        <Link
                          href={`${
                            item.products.length > 0 ? `/danh-muc-san-pham` : ""
                          }/${item.category_code}${
                            item.products.length > 0 ? -`${item.id}` : ""
                          }`}
                          style={{ textDecoration: "none", color: "black" }}
                          prefetch={false}
                        >
                          <div className="col-span-1 flex items-center justify-between group-hover/item:text-red-500 duration-300 transition mx-2">
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
                          <div className="absolute -mt-8 -right-[264px] m-2 w-60  hidden  group-hover/item:md:block hover:md:block bg-white p-2 gap-10  rounded-xl shadow-lg max-h-96 overflow-y-auto">
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
                                  <div className="flex items-center  hover:text-red-500 duration-300 transition">
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
