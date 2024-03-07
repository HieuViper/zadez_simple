"use client";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
    "/profile",
    <Link href="/profile" prefetch={false}>
      <UserOutlined />
    </Link>
  ),
  getItem(
    "Lịch sử đơn hàng",
    "/order-history",
    <Link href="/order-history" prefetch={false}>
      <ShoppingCartOutlined />
    </Link>
  ),
];

const LayoutUser = ({ children }) => {
  const location = usePathname();
  return (
    <div className="grid grid-cols-12 mt-10">
      <div className="col-span-3">
        <Menu
          style={{
            width: 256,
            padding: 8,
          }}
          // defaultSelectedKeys={["1"]}
          selectedKeys={[location]}
          mode="inline"
          items={items}
        />
      </div>
      <div className="col-span-9">{children}</div>
    </div>
  );
};

export default LayoutUser;
