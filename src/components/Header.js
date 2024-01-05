"use client";
import { useSWRData } from "@/library/api";
import store from "@/library/zustand/store";
import {
  CloseOutlined,
  MenuOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Badge, Dropdown, Menu } from "antd";
import { stagger, useAnimate } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Cart from "./Cart";
import logo from "/public/images/logo-zadez.png";
const Header = () => {
  const { userState, toggleModal } = store();
  const {
    data: categories,
    isLoading,
    error,
    mutate,
  } = useSWRData(`/api/categories`, { limit: 1000 });
  const cartData = [
    {
      product_code: "999",
      main_image: "/images/categories/audio.webp",
      price: 9,
      discount_price: 1,
      status: "in",
      name: "aGaming",
      color: "green",
      product_languages: [
        {
          id: 1,
          name: "Macbook Bro`",
          short:
            "Tai nghe không dây cao cấp với công nghệ ENC - Environmental Noise Cancellation hiện đại, trọng lượng siêu nhẹ 176 gram mang đến cảm giác đeo thoải mái trong thời gian dài. Kết nối Bluetooth 5.2 và chế độ EQ Bass cho chất lượng âm thanh tuyệt hảo. Hãy trải nghiệm ngay !",
          description: "description",
          productId: 128,
          languageCode: "vi",
        },
      ],
    },
    {
      product_code: "999",
      main_image: "/images/categories/audio.webp",
      price: 99,
      discount_price: 1,
      status: "in",
      name: "bGaming",
      color: "green",
      product_languages: [
        {
          id: 1,
          name: "Macbook Bro`",
          short:
            "Tai nghe không dây cao cấp với công nghệ ENC - Environmental Noise Cancellation hiện đại, trọng lượng siêu nhẹ 176 gram mang đến cảm giác đeo thoải mái trong thời gian dài. Kết nối Bluetooth 5.2 và chế độ EQ Bass cho chất lượng âm thanh tuyệt hảo. Hãy trải nghiệm ngay !",
          description: "description",
          productId: 128,
          languageCode: "vi",
        },
      ],
    },
    {
      product_code: "999",
      main_image: "/images/categories/audio.webp",
      price: 999,
      discount_price: 1,
      status: "in",
      name: "cGaming",
      color: "green",
      product_languages: [
        {
          id: 1,
          name: "Macbook Bro`",
          short:
            "Tai nghe không dây cao cấp với công nghệ ENC - Environmental Noise Cancellation hiện đại, trọng lượng siêu nhẹ 176 gram mang đến cảm giác đeo thoải mái trong thời gian dài. Kết nối Bluetooth 5.2 và chế độ EQ Bass cho chất lượng âm thanh tuyệt hảo. Hãy trải nghiệm ngay !",
          description: "description",
          productId: 128,
          languageCode: "vi",
        },
      ],
    },
    {
      product_code: "999",
      main_image: "/images/categories/audio.webp",
      price: 9999,
      discount_price: 1,
      status: "in",
      name: "dGaming",
      color: "green",
      product_languages: [
        {
          id: 1,
          name: "Macbook Bro`",
          short:
            "Tai nghe không dây cao cấp với công nghệ ENC - Environmental Noise Cancellation hiện đại, trọng lượng siêu nhẹ 176 gram mang đến cảm giác đeo thoải mái trong thời gian dài. Kết nối Bluetooth 5.2 và chế độ EQ Bass cho chất lượng âm thanh tuyệt hảo. Hãy trải nghiệm ngay !",
          description: "description",
          productId: 128,
          languageCode: "vi",
        },
      ],
    },
    {
      product_code: "999",
      main_image: "/images/categories/audio.webp",
      price: 999999,
      discount_price: 1,
      status: "in",
      name: "eGaming",
      color: "green",
      product_languages: [
        {
          id: 1,
          name: "Macbook Bro`",
          short:
            "Tai nghe không dây cao cấp với công nghệ ENC - Environmental Noise Cancellation hiện đại, trọng lượng siêu nhẹ 176 gram mang đến cảm giác đeo thoải mái trong thời gian dài. Kết nối Bluetooth 5.2 và chế độ EQ Bass cho chất lượng âm thanh tuyệt hảo. Hãy trải nghiệm ngay !",
          description: "description",
          productId: 128,
          languageCode: "vi",
        },
      ],
    },
  ];

  // handle open modal login
  const handleOpenModalLogin = () => {
    if (!userState) {
      toggleModal(true);
    }
  };

  // dropdown items profile
  const items = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: "0",
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "3rd menu item",
      key: "3",
    },
  ];

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
    return categoryTree;
  }
  const sortedCat = categories?.data.sort(
    (a, b) => (a.order || 0) - (b.order || 0)
  );
  const dataTree = categories && buildCategoryTree(sortedCat);

  const { SubMenu } = Menu;
  const MenuHeader = ({ menuData, mode }) => {
    const menuItems = (data) => {
      return data?.map((item) => {
        if (item.children) {
          return (
            <SubMenu key={item.id} title={item.name}>
              {/* <a href={`/${item.type}/${item.category_code}/${item.id}`}> */}
              {menuItems(item.children)}
              {/* </a> */}
            </SubMenu>
          );
        }
        return (
          <Menu.Item key={item.id}>
            <a
              href={`${item.type && `/${item.type}`}/${item.category_code}-${
                item.id
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
    <header className="h-32 shadow-sm">
      {/* <Head>
                <script src="https://sp.zalo.me/plugins/sdk.js"></script>
            </Head> */}
      {/* {isOpenMenu && <div onClick={() => setIsOpenMenu(false)} className="fixed inset-0 top-32 bg-gray-200 bg-opacity-75 transition-opacity z-50  overflow-hidden"></div>} */}
      <div className=" text-gray-600  border-b-[#e5e7eb] top-0 ">
        <div className="h-32 border border-b-[#e5e7eb]">
          <div className="h-32 mx-10 flex lg:grid lg:grid-cols-12  justify-center items-center">
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
                  width={100}
                  height={100}
                  alt="Zadez"
                  className="object-contain"
                />
              </a>
            </div>
            <div className="col-span-8 hidden lg:block">
              <MenuHeader menuData={dataTree} mode="horizontal" />
            </div>
            <div className="col-span-2 lg:flex justify-center gap-4 hidden">
              <Badge count={99}>
                <ShoppingCartOutlined
                  style={{ fontSize: "30px" }}
                  onClick={showDrawer}
                />
              </Badge>
              <Dropdown
                menu={{
                  items,
                }}
                trigger={["click"]}
                disabled={userState.token ? false : true}
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
      <Cart data={cartData} onClose={onCloseCart} open={openCart} />
    </header>
  );
};

export default Header;
