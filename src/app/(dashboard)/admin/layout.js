"use client";
import store from "@/library/zustand/store";
import {
  AppstoreOutlined,
  CodeSandboxOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
  TeamOutlined,
  TrademarkOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Layout, Menu, theme } from "antd";
import Image from "next/image";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const DashboardLayout = (props) => {
  const { userState } = store();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  let location = usePathname();

  const [collapsed, setCollapsed] = useState(false);
  const isLoginPage = location === "/admin/login";
  const pathName = usePathname();

  function getItem(key, label, icon, children) {
    return {
      key,
      icon,
      label,
      children,
    };
  }
  const items = [
    getItem("Products", "Products", <CodeSandboxOutlined />, [
      getItem(
        "/admin/products",
        null,
        <Link href="/admin/products">Products List</Link>
      ),
      getItem(
        "/admin/products/0",
        null,
        <Link href="/admin/products/0">Add Products</Link>
      ),
    ]),
    getItem("Categories", "Categories", <AppstoreOutlined />, [
      getItem(
        "/admin/categories",
        null,
        <Link href="/admin/categories">Categories List</Link>
      ),
      getItem(
        "/admin/categories/0",
        null,
        <Link href="/admin/categories/0">Add Categories</Link>
      ),
    ]),
    getItem("Orders", "Orders", <ShoppingCartOutlined />, [
      getItem(
        "/admin/orders",
        null,
        <Link href="/admin/orders">Orders List</Link>
      ),
      getItem(
        "/admin/orders/0",
        null,
        <Link href="/admin/orders/0?previousPage=1&previousLimit=10">
          Add Order
        </Link>
      ),
    ]),
    getItem("Customer", "Customer", <UserOutlined />, [
      getItem(
        "/admin/customers",
        null,
        <Link href="/admin/customers">Customers List</Link>
      ),
      getItem(
        "/admin/customers/0",
        null,
        <Link href="/admin/customers/0?previousPage=1&previousLimit=10">
          Add Customers
        </Link>
      ),
    ]),
    getItem("Consts", "Consts", <AppstoreOutlined />, [
      getItem(
        "/admin/consts",
        null,
        <Link href="/admin/consts">Consts List</Link>
      ),
      getItem(
        "/admin/consts/0",
        null,
        <Link href="/admin/consts/0?previousPage=1&previousLimit=10">
          Add Consts
        </Link>
      ),
    ]),
    getItem("User", "User", <TeamOutlined />, [
      getItem(
        "/admin/users",
        null,
        <Link href="/admin/users">Users List</Link>
      ),
      getItem(
        "/admin/users/0",
        null,
        <Link href="/admin/users/0?previousPage=1&previousLimit=10">
          Add Users
        </Link>
      ),
    ]),
    getItem("Roles", "Roles", <TrademarkOutlined />, [
      getItem(
        "/admin/roles",
        null,
        <Link href="/admin/roles">Roles List</Link>
      ),
      getItem(
        "/admin/roles/0",
        null,
        <Link href="/admin/roles/0?previousPage=1&previousLimit=10">
          Add Roles
        </Link>
      ),
    ]),

    {
      type: "divider",
    },
    getItem("Navigation Three", "Setting", <SettingOutlined />, [
      getItem("Option 9", "9"),
      getItem("Option 10", "10"),
      getItem("Option 11", "11"),
      getItem("Option 12", "12"),
    ]),
  ];

  useEffect(() => {
    const token = userState.token;

    if (pathName === "/admin/login" && token) {
      redirect("/admin");
    } else if (pathName === "/admin/login" && !token) {
    } else if (pathName !== "/admin/login" && !token) {
      redirect("/admin/login");
    } else if (
      pathName.startsWith("/admin") &&
      userState?.roles.some((item) => item.code == "customer")
    ) {
      redirect("/");
    } else {
    }
  }, []);
  return !isLoginPage ? (
    <Layout hasSider style={{ minHeight: "100vh" }}>
      <Layout.Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={210}
      >
        <div>
          <Link
            href="/admin"
            target="_blank"
            className="sidebar-logo p-3 flex justify-center items-center gap-2 text-red-600 hover:text-red-400"
          >
            <Image src="/Logo-ZADEZ.png" alt="logo" width={35} height={35} />
            {!collapsed && (
              <div className="font-semibold">ADMIN&nbsp;DASHBOARD</div>
            )}
          </Link>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          // defaultSelectedKeys={["news"]}
          selectedKeys={[location]}
          items={items}
        />
      </Layout.Sider>
      <Layout>
        <Layout.Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingRight: "20px",
              gap: "6px",
            }}
          >
            {props.user?.image ? (
              <Image
                src={props.user.image}
                width={30}
                height={30}
                style={{ width: "30px", height: "30px" }}
                className="mr-2"
                alt={props.user.display}
              />
            ) : (
              <Avatar icon={<UserOutlined />} />
            )}
            <Button
              type="dashed"
              icon={<LogoutOutlined />}
              onClick={() => props.logout()}
            >
              Logout
            </Button>
          </div>
        </Layout.Header>
        <Layout.Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {props.children}
        </Layout.Content>
      </Layout>
    </Layout>
  ) : (
    <>{props.children}</>
  );
};

export default DashboardLayout;
