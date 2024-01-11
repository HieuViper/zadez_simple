'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useScrollPosition } from '@/library/useScrollPosition';
const NavBar = ({ data }) => {
    const scrollPosition = useScrollPosition();
    return (
        <>
            <div className="md:flex hidden uppercase items-center justify-center gap-2">
                {data?.map((item, i) => (
                    <div key={i} className=''>
                        <div className="px-3 text-left group ">
                            <h1
                                className="py-2 flex justify-between items-center md:pr-0 pr-5 text-base lg:text-xs 2xl:text-base md:cursor-pointer group-hover:text-red-500 text-black"

                            >
                                {item.name}
                                {item?.children && <span className="text-xs md:mt-1 md:ml-2  md:block hidden transition-all transform group-hover:rotate-180 group-hover:-mt-2">
                                    <Image
                                        height={12}
                                        width={12}
                                        src='/images/dropdown.svg'
                                        alt="dropdown"
                                    />
                                </span>}
                            </h1>
                            {item?.children && (
                                <div className={`absolute ${scrollPosition > 0 ? 'top-9' : 'top-14'} hidden group-hover:md:block hover:md:block bg-white mt-5 py-2 pl-2 gap-10  rounded-xl shadow-lg  ease-in-out transition-all duration-500`}>
                                    {item?.children && item?.children.map((item, i) => (
                                        <div key={i} className=' md:cursor-pointer group/item '>
                                            <Link href={`${item.type && `/${item.type}`}/${item.category_code}-${item.id}`} style={{ textDecoration: "none", color: "black" }}>
                                                <div className='col-span-1 flex items-center justify-between group-hover/item:text-red-500 '>
                                                    <div className='flex items-center justify-center flex-wrap'>
                                                        {item?.image && <Image src={item.image} width={50} height={50} className='p-2' alt={item.name} />}
                                                        <h2 className="text-xs 2xl:text-base font-semibold mr-2">{item.name}</h2>
                                                    </div>
                                                    {item.children &&
                                                        <span className="md:block hidden transition-all transform group-hover/item:-rotate-90 mx-4  ">
                                                            <Image
                                                                height={12}
                                                                width={12}
                                                                src='/images/dropdown.svg'
                                                                alt="dropdown"
                                                            />
                                                        </span>
                                                    }
                                                </div>
                                            </Link>
                                            {item.children && <div className="absolute -mt-10 -right-[264px] m-2 w-60  hidden  group-hover/item:md:block hover:md:block bg-white p-2 gap-10  rounded-xl shadow-lg">
                                                {item?.children && item?.children.map((item, i) => (
                                                    <Link key={i} href={`${item.type && `/${item.type}`}/${item.category_code}-${item.id}`} className='col-span-1' style={{ textDecoration: "none", color: "black" }}>
                                                        <div className='flex items-center  hover:text-red-500 '>
                                                            {item?.image &&
                                                                <Image src={item.image} width={50} height={50} className='p-2' alt={item.name} />}
                                                            <h2 className="text-xs 2xl:text-base font-semibold">{item.name}</h2>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>}
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
    )
}

export default NavBar
