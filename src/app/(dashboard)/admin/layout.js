"use client";
import auth from "@/auth/auth";
import { RootStyleRegistry } from "@/library/RootStyleRegistry";
import store from "@/library/zustand/store";
import {
  AppstoreOutlined,
  CodeSandboxOutlined,
  HolderOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ProfileOutlined,
  ShoppingCartOutlined,
  TeamOutlined,
  TrademarkOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  ConfigProvider,
  Dropdown,
  Layout,
  Menu,
  Popconfirm,
  theme,
} from "antd";
import Image from "next/image";
import Link from "next/link";
import { redirect, usePathname, useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

const DashboardLayout = (props) => {
  const router = useRouter();
  const { userState, resetUserState } = store();
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
    getItem("Articles", "Articles", <ProfileOutlined />, [
      getItem(
        "/admin/articles",
        null,
        <Link href="/admin/articles">Articles List</Link>
      ),
      getItem(
        "/admin/articles/0",
        null,
        <Link href="/admin/articles/0?previousPage=1&previousLimit=10">
          Add Articles
        </Link>
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
        <Link href="/admin/categories/0?previousPage=1&previousLimit=10">
          Add Categories
        </Link>
      ),
    ]),

    getItem("Consts", "Consts", <HolderOutlined />, [
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

    getItem("Products", "Products", <CodeSandboxOutlined />, [
      getItem(
        "/admin/products",
        null,
        <Link href="/admin/products">Products List</Link>
      ),
      getItem(
        "/admin/products/0",
        null,
        <Link href="/admin/products/0?previousPage=1&previousLimit=10">
          Add Products
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
  ];

  useEffect(() => {
    const token = userState.token;
    const signIn = auth.checkAuth(token, ["admin", "system", "sa"]);
    if (!signIn) {
      redirect("/admin/login");
    }

    if (pathName === "/admin/login" && token && signIn) {
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
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#AF131C",
        },
      }}
    >
      <RootStyleRegistry>
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
                <Image
                  src="/Logo-ZADEZ.png"
                  alt="logo"
                  width={35}
                  height={35}
                />
                {!collapsed && (
                  <div className="font-semibold">ADMIN&nbsp;DASHBOARD</div>
                )}
              </Link>
            </div>
            <Menu
              theme="dark"
              mode="inline"
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
              <div className="flex items-center pr-5 gap-2">
                <DropdownAvatar userState={userState} />

                <Popconfirm
                  title="Logout Action"
                  description="Are you sure to logout?"
                  onConfirm={() => {
                    resetUserState();
                    router.push("/admin/login");
                  }}
                  onCancel={() => {}}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button type="dashed" icon={<LogoutOutlined />}>
                    Logout
                  </Button>
                </Popconfirm>
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
              <Suspense fallback={<div>Loading...</div>}>
                {props.children}
              </Suspense>
            </Layout.Content>
          </Layout>
        </Layout>
      </RootStyleRegistry>
    </ConfigProvider>
  ) : (
    <>{props.children}</>
  );
};

export default DashboardLayout;

const DropdownAvatar = ({ userState }) => {
  const items = [
    {
      key: "1",
      label: `Welcome, ${userState.fullName}`,
    },
    {
      key: "2",
      danger: true,
      label: (
        <span>
          Role:{" "}
          <strong>{userState.roles.map((item) => item.name).join(", ")}</strong>
        </span>
      ),
    },
  ];
  return (
    <Dropdown menu={{ items }}>
      <Avatar icon={<UserOutlined />} />
    </Dropdown>
  );
};
