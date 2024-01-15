"use client";
import { useSWRData } from "@/library/api";
import store from "@/library/zustand/store";
import {
  CloseOutlined,
  LogoutOutlined,
  MenuOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Menu, message } from "antd";
import { stagger, useAnimate } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";
import Cart from "./Cart";
import NavBar from "./NavBar";
import logo from "/public/images/logo-zadez.png";
const BadgeCart = dynamic(() => import("../components/BadgeCart"), {
  ssr: false,
});

import { useScrollPosition } from "@/library/useScrollPosition";
const Header = () => {
  const { userState, cartState, toggleModal, resetUserState } = store();

  const {
    data: categories,
    isLoading,
    error,
    mutate,
  } = useSWRData(`/api/categories`, { limit: 1000 });
  const scrollPosition = useScrollPosition();
  // handle open modal login
  const handleOpenModalLogin = () => {
    if (!userState?.token) {
      toggleModal(true);
    }
  };

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

  // BUILD TREE DATA
  function buildCategoryTree(categories, parent = null) {
    const categoryTree = [];

    for (const category of categories) {
      if (category.parent === parent) {
        const children = buildCategoryTree(categories, category.id);
        if (children.length > 0) {
          category.children = children;
        }
        categoryTree.push(category);
      }
    }
    // return categoryTree;
    categoryTree.sort((a, b) => (a.order || Infinity) - (b.order || Infinity));
    categoryTree.forEach(item => {
      if (item.children && item.children.length > 0) {
        item.children = item.children.sort((a, b) => (a.order || Infinity) - (b.order || Infinity));
      }
      if (item.products && item.products.length > 0) {
        item.products.sort((a, b) => (a.order || Infinity) - (b.order || Infinity));
      }
    });
    return categoryTree;
  }
  const dataTree = categories && buildCategoryTree(categories?.data);

  // SUB MENU
  const { SubMenu } = Menu;
  const MenuHeader = ({ menuData, mode }) => {
    const menuItems = (data) => {
      return data?.map((item) => {
        if (item.children) {
          return (
            <SubMenu key={item.id} title={item.name}>
              <a href={`/${item.type}/${item.category_code}-${item.id}`}>
                {menuItems(item.children)}
              </a>
            </SubMenu>
          );
        }
        return (
          <Menu.Item key={item.id}>
            <a
              href={`${item.type && `/${item.type}`}/${item.category_code}-${item.id
                }`}
            >
              <div>{item.name}</div>
            </a>
          </Menu.Item>
        );
      });
    };

    return (
      <Menu mode={mode} className="text-lg font-light">
        {menuItems(menuData)}
      </Menu>
    );
  };

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const scope = useMenuAnimation(isOpenMenu);
  function useMenuAnimation(isOpenMenu) {
    const [scope, animate] = useAnimate();
    useEffect(() => {
      const menuAnimations = isOpenMenu
        ? [
          [
            "nav",
            { transform: "translateX(0%)" },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.2 },
          ],
          [
            "li",
            { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
            { delay: stagger(0.01), at: "-0.1" },
          ],
        ]
        : [
          [
            "li",
            { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
            { delay: stagger(0.01, { from: "last" }), at: "<" },
          ],
          ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }],
        ];

      animate([
        [
          "path.top",
          { d: isOpenMenu ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
          { at: "<" },
        ],
        ["path.middle", { opacity: isOpenMenu ? 0 : 1 }, { at: "<" }],
        [
          "path.bottom",
          { d: isOpenMenu ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
          { at: "<" },
        ],
        ...menuAnimations,
      ]);
    }, [isOpenMenu]);

    return scope;
  }

  if (isOpenMenu && typeof document !== "undefined") {
    document.body.style.overflow = "hidden";
  } else if (typeof document !== "undefined") {
    document.body.style.overflow = "auto";
  }
  const [openCart, setOpenCart] = useState(false);
  const showDrawer = () => {
    setOpenCart(true);
  };
  const onCloseCart = () => {
    setOpenCart(false);
  };
  return (
    <header
      className={`${scrollPosition > 0 ? "shadow-md py-2" : "shadow-sm lg:py-4 py-2"
        }  w-full bg-[#fafafa]  px-2 fixed top-0 z-30 transition-all duration-500`}
    >
      {/* <Head>
                <script src="https://sp.zalo.me/plugins/sdk.js"></script>
            </Head> */}
      {/* {isOpenMenu && <div onClick={() => setIsOpenMenu(false)} className="fixed inset-0 top-32 bg-gray-200 bg-opacity-75 transition-opacity z-50  overflow-hidden"></div>} */}
      <div className=" text-gray-600  border-b-[#e5e7eb] top-0 ">
        <div className="border border-b-[#e5e7eb]">
          <div className="flex lg:grid lg:grid-cols-12  justify-center items-center">
            <div
              className=" block lg:hidden absolute top-16 left-5 px-3 py-2 border rounded hover:text-teal-200 border-gray-300 cursor-pointer"
              onClick={() => setIsOpenMenu(!isOpenMenu)}
            >
              <MenuOutlined />
            </div>
            <div className="col-span-2">
              <a
                className="flex justify-center font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer"
                href="/"
              >
                <Image
                  src={logo}
                  width={scrollPosition > 0 ? 80 : 100}
                  height={scrollPosition > 0 ? 60 : 80}
                  className="hover:opacity-80 cursor-pointer duration-300 transition-all "
                  alt="Zadez"
                />
              </a>
            </div>
            <div className="col-span-8 hidden lg:block">
              {/* <MenuHeader menuData={dataTree} mode="horizontal" /> */}
              <NavBar data={dataTree} />
            </div>
            <div className="col-span-2 lg:flex justify-center gap-4 hidden">
              <BadgeCart cartState={cartState} showDrawer={showDrawer} />
              <Dropdown
                menu={{
                  items,
                }}
                trigger={["click"]}
                disabled={userState?.token ? false : true}
              >
                <UserOutlined
                  style={{ fontSize: "30px" }}
                  onClick={handleOpenModalLogin}
                />
              </Dropdown>
            </div>
          </div>
          <div ref={scope} className="block lg:hidden rounded-b-lg z-50">
            <nav className="shadow-lg absolute top-32 left-0  w-80 -translate-x-full will-change-transform bg-white rounded-b-lg ">
              <CloseOutlined
                className="absolute top-1 right-1 px-3 py-2 hover:border hover:rounded-full hover:cursor-pointer"
                onClick={() => setIsOpenMenu(false)}
              />

              <ul className="flex flex-col justify-center gap-4 p-4 ">
                <MenuHeader menuData={dataTree} mode="inline" />
                <div className="flex justify-center gap-4 pt-4">
                  <ShoppingCartOutlined
                    style={{ fontSize: "30px" }}
                    onClick={showDrawer}
                  />
                  <UserOutlined style={{ fontSize: "30px" }} />
                </div>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <Cart onClose={onCloseCart} open={openCart} className="no-scrollbar" />
    </header>
  );
};

export default Header;
