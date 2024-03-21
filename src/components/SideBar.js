'use client'
import React, { useState } from 'react'
import {
    MenuOutlined, DownOutlined,
    UpOutlined, UserOutlined, LogoutOutlined
} from "@ant-design/icons";
import { Button, Drawer, Dropdown } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import store from '@/library/zustand/store';
import Cart from './Cart';
import ModalSearch from './SearchProducts';
const BadgeCart = dynamic(() => import("../components/BadgeCart"), {
    ssr: false,
});

const SideBar = ({ data }) => {
    const { userState, cartState, toggleModal, resetUserState } = store();
    const [open, setOpen] = useState(false);
    const [openCart, setOpenCart] = useState(false);
    const showDrawer = () => {
        setOpenCart(true);
    };
    const onCloseCart = () => {
        setOpenCart(false);
    };
    const showSideBar = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const handleOpenModalLogin = () => {
        if (!userState?.token) {
            toggleModal(true);
        }
    };
    const handleCloseAllDrawer = (boolean) => {
        setOpenCart(boolean)
        setOpen(boolean)
    }

    // dropdown items profile
    const items = [
        {
            label: (
                <span>
                    Xin chào, <b>{userState?.fullName}</b>
                </span>
            ),
            key: "0",
        },
        {
            label: "Hồ sơ cá nhân",
            key: "1",
        },
        {
            label: "Quản lý đơn đã đặt",
            key: "2",
        },
        {
            type: "divider",
        },
        {
            label: (
                <Button
                    onClick={() => {
                        resetUserState();
                        window.location.reload();
                        message.success("Đăng xuất thành công!");
                    }}
                    icon={<LogoutOutlined />}
                >
                    Đăng xuất
                </Button>
            ),
            key: "3",
        },
    ];

    return (
        <div>
            <MenuOutlined onClick={showSideBar} />
            <Drawer title="Zadez Việt Nam" onClose={onClose} open={open} placement="left" >
                <div className=" flex justify-center items-center gap-4 mb-2 ">
                <ModalSearch/>
                    <BadgeCart cartState={cartState} showDrawer={showDrawer} />
                    <Dropdown
                        menu={{
                            items,
                        }}
                        trigger={["click"]}
                        disabled={userState?.token ? false : true}
                    >
                        <UserOutlined
                            style={{ fontSize: "26px" }}
                            onClick={handleOpenModalLogin}
                        />
                    </Dropdown>
                </div>
                <Accordion data={data} />
                <Cart onClose={onCloseCart} open={openCart} setOpenCart={handleCloseAllDrawer} placement='left' className="no-scrollbar" />
            </Drawer>
        </div>
    )
}

export default SideBar

const Accordion = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [activeIndex2, setActiveIndex2] = useState(null);
    const handleShowCategories = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };
    const handleShowProducts = (index) => {
        setActiveIndex2(index === activeIndex2 ? null : index);
    };

    return (
        <div>
            {data?.map((item, index) => (
                <div key={index} className="">
                    <div
                        className=" py-2 cursor-pointer"
                    >
                        <div className="flex justify-between items-center shadow-sm rounded-md ">
                            <Link
                                href={`/${item.category_code}`}
                                style={{ textDecoration: "none", color: "black" }}
                                className='w-full'
                            > <span className="text-lg font-semibold ">{item.name}</span>
                            </Link>
                            {item?.children && (
                                <span onClick={() => handleShowCategories(index)} className='p-2'>
                                    {activeIndex === index ? <DownOutlined /> : <UpOutlined />}
                                </span>
                            )}
                        </div>
                    </div>

                    {activeIndex === index && (
                        <div className="border-b-gray-700 ">
                            {item?.children &&
                                item?.children.map((item, i) => (
                                    <div key={i} className="flex flex-col md:cursor-pointer group/item ">
                                        <div className='flex justify-between items-center shadow-sm rounded-md py-2'>
                                            <Link
                                                href={`${item.products.length > 0 ? `/danh-muc-san-pham` : ""
                                                    }/${item.category_code}${item.products.length > 0 ? -`${item.id}` : ""
                                                    }`}
                                                style={{ textDecoration: "none", color: "black" }}
                                                className='w-full'
                                            >
                                                <div className="col-span-1 flex items-center justify-between group-hover/item:text-red-500 duration-300 transition mx-2  ml-4">
                                                    <div className="flex items-center justify-center ml-8">
                                                        {/* {item?.image && (
                                                            <Image
                                                                src={item.image}
                                                                width={40}
                                                                height={40}
                                                                className="p-1"
                                                                alt={item.name}
                                                            />
                                                        )} */}
                                                        <span className="text-base font-medium my-1 mr-2">
                                                            {item.name}
                                                        </span>
                                                    </div>
                                                </div>
                                            </Link>
                                            {item?.products.length > 0 && (
                                                <span onClick={() => handleShowProducts(i)} className='p-2'>
                                                    {activeIndex2 === i ? <DownOutlined /> : <UpOutlined />}
                                                </span>
                                            )}
                                        </div>
                                        {activeIndex2 === i && (<div className='duration-200 transition-all'>
                                            {item?.products.length > 0 && (
                                                <div className="">
                                                    {item?.products.length > 0 &&
                                                        item?.products.map((item, i) => (
                                                            <Link
                                                                key={i}
                                                                href={`/san-pham/${item.product_code}`}
                                                                className=""
                                                                style={{
                                                                    textDecoration: "none",
                                                                    color: "black",
                                                                }}
                                                            >
                                                                <div className="flex items-center my-4 hover:text-red-500 duration-300 transition ml-20 shadow-sm rounded-md">
                                                                    {/* {item?.main_image && (
                                                                        <Image
                                                                            src={item.main_image}
                                                                            width={40}
                                                                            height={40}
                                                                            className="p-1"
                                                                            alt={item.name}
                                                                        />
                                                                    )} */}
                                                                    <span className="text-xs 2xl:text-base font-medium my-1">
                                                                        {item.name}
                                                                    </span>
                                                                </div>
                                                            </Link>
                                                        ))}
                                                </div>
                                            )}
                                        </div>)}
                                    </div>
                                ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};
