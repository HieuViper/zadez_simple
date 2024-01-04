"use client";
import {
  CloseOutlined,
  MenuOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Badge, Button, Divider, Drawer, Dropdown, Menu, Tag } from "antd";
import { stagger, useAnimate } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import store from "../library/zustand/store";
import logo from "/public/images/logo-zadez.png";
const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: "4",
    danger: true,
    label: "a danger item",
  },
];
const cartData = [
  {
    product_code: "999",
    main_image:
      "https://zadez.us/cdn/shop/products/G-151M_500x.png?v=1638523572",
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
    main_image:
      "https://zadez.us/cdn/shop/products/G-151M_500x.png?v=1638523572",
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
    main_image:
      "https://zadez.us/cdn/shop/products/G-151M_500x.png?v=1638523572",
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
    main_image:
      "https://zadez.us/cdn/shop/products/G-151M_500x.png?v=1638523572",
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
    main_image:
      "https://zadez.us/cdn/shop/products/G-151M_500x.png?v=1638523572",
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

const catTest = [
  {
    id: 1,
    name: "Trang chủ",
    category_code: "gioi-thieu-zadez",
    image: "",
    parent: null,
    type: "categories",
    order: 1,
    description: "1",
  },
  {
    id: 2,
    name: "test2",
    category_code: "test2",
    image: "",
    parent: 1,
    type: "categories",
    order: 2,
    description: "2",
  },
  {
    id: 3,
    name: "test3",
    category_code: "test3",
    image: "",
    parent: 2,
    type: "products",
    order: 3,
    description: "3",
  },
  {
    id: 4,
    name: "Sản phẩm",
    category_code: "test4",
    image: "",
    parent: null,
    type: "categories",
    order: 4,
    description: "4",
  },
  {
    id: 5,
    name: "Zadez",
    category_code: "test5",
    image: "",
    parent: 4,
    type: "categories",
    order: 5,
    description: "5",
  },
  {
    id: 6,
    name: "Phụ kiện gaming",
    color: "green",
    category_code: "gioi-thieu-zadez",
    image: "",
    parent: null,
    type: "categories",
    order: 1,
    description: "1",
  },
  {
    id: 7,
    name: "Phụ kiện máy tính",
    category_code: "gioi-thieu-zadez",
    image: "",
    parent: null,
    type: "categories",
    order: 1,
    description: "1",
  },
  {
    id: 8,
    name: "Phụ kiện công nghệ",
    category_code: "gioi-thieu-zadez",
    image: "",
    parent: null,
    type: "categories",
    order: 1,
    description: "1",
  },
  {
    id: 9,
    name: "Cơ hội nghề nghiệp",
    category_code: "gioi-thieu-zadez",
    image: "",
    parent: null,
    type: "categories",
    order: 1,
    description: "1",
  },
  {
    id: 10,
    name: "Cơ hội nghề nghiệp",
    category_code: "gioi-thieu-zadez",
    image: "",
    parent: 9,
    type: "categories",
    order: 1,
    description: "1",
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
const dataTree = buildCategoryTree(catTest);
const Header = () => {
  const { userState, toggleModal } = store();

  const handleShowModalLogin = () => {
    // console.log("click");
    if (!userState.token) {
      toggleModal(true);
    }
  };

  const { SubMenu } = Menu;
  const MenuHeader = ({ menuData, mode }) => {
    const menuItems = (data) => {
      return data.map((item) => {
        if (item.children) {
          return (
            <SubMenu key={item.id} title={item.name}>
              {/* <Link href={`/${item.type}/${item.category_code}/${item.id}`}> */}
              {menuItems(item.children)}
              {/* </Link> */}
            </SubMenu>
          );
        }
        return (
          <Menu.Item key={item.id}>
            <Link href={`/${item.type}/${item.category_code}-${item.id}`}>
              <div>{item.name}</div>
            </Link>
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

  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);
  function useMenuAnimation(isOpen) {
    const [scope, animate] = useAnimate();

    useEffect(() => {
      const menuAnimations = isOpen
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
          { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
          { at: "<" },
        ],
        ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
        [
          "path.bottom",
          { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
          { at: "<" },
        ],
        ...menuAnimations,
      ]);
    }, [isOpen]);

    return scope;
  }

  if (isOpen && typeof document !== "undefined") {
    document.body.style.overflow = "hidden";
  } else if (typeof document !== "undefined") {
    document.body.style.overflow = "auto";
  }
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <header className=" h-32">
      <div className=" text-gray-600  border-b-[#e5e7eb] top-0 ">
        <div className="h-32 border border-b-[#e5e7eb]">
          <div className="h-32 mx-10 flex lg:grid lg:grid-cols-12  justify-center items-center">
            <div
              className=" block lg:hidden absolute top-16 left-5 px-3 py-2 border rounded hover:text-teal-200 border-gray-300 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <MenuOutlined />
            </div>
            <div className="col-span-3">
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
            <div className="col-span-7 hidden lg:block">
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
                disabled={!userState.token ? true : false}
              >
                <UserOutlined
                  style={{ fontSize: "30px" }}
                  onClick={handleShowModalLogin}
                />
              </Dropdown>
            </div>
          </div>
          <div ref={scope} className="block lg:hidden rounded-b-lg z-50">
            <nav className="shadow-lg absolute top-32 left-0  w-80 -translate-x-full will-change-transform bg-white rounded-b-lg ">
              <CloseOutlined
                className="absolute top-1 right-1 px-3 py-2 hover:border hover:rounded-full hover:cursor-pointer"
                onClick={() => setIsOpen(false)}
              />

              <ul className="flex flex-col justify-center gap-4 p-4 ">
                <MenuHeader menuData={dataTree} mode="inline" />
                <div className="flex justify-center gap-4 pt-4">
                  <ShoppingCartOutlined
                    style={{ fontSize: "30px" }}
                    onClick={showDrawer}
                  />
                  <UserOutlined
                    style={{ fontSize: "30px" }}
                    className="cursor-pointer"
                  />
                </div>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* CART */}
      <>
        <Drawer
          title="Giỏ hàng"
          placement="right"
          onClose={onClose}
          open={open}
        >
          {cartData &&
            cartData.map((item, i) => (
              <div key={i}>
                <div className="grid grid-cols-4 gap-2 px-2 py-1 ">
                  <div className="col-span-1">
                    <img
                      src={item.main_image}
                      alt={item.name}
                      className="w-20 object-contain"
                    />
                  </div>
                  <div className="col-span-3 ">
                    <h3 className="text-xs font-light">{item.name}</h3>
                    <Tag color={item.color}>{item.color}</Tag>
                    <div className="my-1">x1</div>
                    <div className="flex justify-end">
                      <div>
                        {item.discount_price ? item.discount_price : item.price}
                        VNĐ
                      </div>
                    </div>
                  </div>
                </div>
                <Divider style={{ margin: 0 }} />
              </div>
            ))}
          <div>
            <div className="flex justify-between">
              <div className="text-sm font-light">Tạm tính</div>
              <div className="text-sm font-light">500 VNĐ</div>
            </div>
            <div className="flex justify-between">
              <div className="text-sm font-light">Giảm giá</div>
              <div className="text-sm font-light">500 VNĐ</div>
            </div>
            <div className="flex justify-between">
              <div className="text-sm font-light">Phí vận chuyển</div>
              <div className="text-sm font-light">500 VNĐ</div>
            </div>
            <Divider />
            <div className="flex justify-between">
              <div className="text-base font-medium">Tổng cộng</div>
              <div className="text-base font-medium">500 VNĐ</div>
            </div>
          </div>
          <div className="py-5 w-full ">
            <Button type="primary" size="large" block>
              Thanh toán
            </Button>
          </div>
        </Drawer>
      </>
    </header>
  );
};

export default Header;
