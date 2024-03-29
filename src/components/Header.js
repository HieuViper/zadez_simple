"use client";
import { useSWRData } from "@/library/api";
import store from "@/library/zustand/store";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Dropdown, message } from "antd";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ModalSearch from "./SearchProducts";
const BadgeCart = dynamic(() => import("../components/BadgeCart"));
const Cart = dynamic(() => import("./Cart"));
const NavBar = dynamic(() => import("./NavBar"));
const SideBar = dynamic(() => import("./SideBar"));

const Header = () => {
  const { userState, cartState, toggleModal, resetUserState } = store();
  const site = "https://zadez.vn";
  const pathname = usePathname();
  const canonicalURL = site + pathname;
  const { data: categories } = useSWRData(`/api/categories/get-all`);
  // const scrollPosition = useScrollPosition();
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
      label: (
        <Link href="/profile" prefetch={false}>
          Thông tin cá nhân
        </Link>
      ),
      key: "1",
    },
    {
      label: (
        <Link href="/order-history" prefetch={false}>
          Lịch sử đơn hàng
        </Link>
      ),
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
    categoryTree.forEach((item) => {
      if (item.children && item.children.length > 0) {
        item.children = item.children.sort(
          (a, b) => (a.order || Infinity) - (b.order || Infinity)
        );
      }
      if (item.products && item.products.length > 0) {
        item.products.sort(
          (a, b) => (a.order || Infinity) - (b.order || Infinity)
        );
      }
    });
    return categoryTree;
  }
  const dataTree = categories && buildCategoryTree(categories.data);

  const [openCart, setOpenCart] = useState(false);
  const showDrawer = () => {
    setOpenCart(true);
  };
  const onCloseCart = () => {
    setOpenCart(false);
  };

  return (
    <header
      className={`shadow-sm lg:py-3 py-2 w-full bg-[#fafafa]  fixed top-0 z-30 transition-all duration-500`}
    >
      {/* <Head>
                <script src="https://sp.zalo.me/plugins/sdk.js"></script>
            </Head> */}
      {/* {isOpenMenu && <div onClick={() => setIsOpenMenu(false)} className="fixed inset-0 top-32 bg-gray-200 bg-opacity-75 transition-opacity z-50  overflow-hidden"></div>} */}
      <div className=" text-gray-600  border-b-[#e5e7eb] top-0 ">
        <div className="border border-b-[#e5e7eb]">
          <div className="flex justify-around  px-6 items-center">
            <div
              className={`top-8 block lg:hidden absolute  left-5 px-3 py-2 border rounded hover:text-teal-200 border-gray-300 cursor-pointer duration-300 transition-all`}
            >
              <SideBar data={dataTree} />
            </div>
            <div className="">
              <a
                className="flex justify-center font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer"
                href="/"
              >
                <Image
                  src={"/Logo-ZADEZ.webp"}
                  width={60}
                  height={60}
                  className="hover:opacity-80 cursor-pointer duration-300 transition-all "
                  alt="Zadez"
                />
              </a>
            </div>
            <div className=" hidden lg:block">
              <NavBar data={dataTree} />
            </div>
            <div className=" lg:flex justify-center items-center gap-4 hidden">
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
                  style={{ fontSize: "24px" }}
                  onClick={handleOpenModalLogin}
                />
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
      <Cart
        onClose={onCloseCart}
        open={openCart}
        setOpenCart={setOpenCart}
        placement="right"
        className="no-scrollbar"
      />
    </header>
    // <>header</>
  );
};

export default Header;
