"use client";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import Link from "next/link";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem(
    "Thông tin cá nhân",
    "1",
    <Link href="/profile" prefetch={false}>
      <UserOutlined />
    </Link>
  ),
  getItem(
    "Lịch sử đặt hàng",
    "2",
    <Link href="/order-history" prefetch={false}>
      <ShoppingCartOutlined />
    </Link>
  ),
];

const LayoutUser = ({ children }) => {
  return (
    <div className="grid grid-cols-12 mt-10">
      <div className="col-span-3">
        <Menu
          style={{
            width: 256,
            padding: 8,
          }}
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </div>
      <div className="col-span-9">{children}</div>
    </div>
  );
};

export default LayoutUser;
