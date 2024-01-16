/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    serverComponentsExternalPackages: ["sequelize"],
    // serverActions: true,
  },
  env: {
    ROOT: __dirname,
  },
  pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
  async rewrites() {
    return [
      {
        source: "/san-pham/:id",
        destination: "/products/:id",
      },
      {
        source: "/gio-hang",
        destination: "/cart",
      },
      {
        source: "/thanh-toan",
        destination: "/checkout",
      },
      {
        source: "/quen-mat-khau",
        destination: "/forgot-password",
      },
      {
        source: "/gioi-thieu-ve-zadez",
        destination: "/about",
      },
      {
        source: "/quyen-loi-doi-tac-zpartner",
        destination: "/partner",
      },
      {
        source: "/lien-he",
        destination: "/contact",
      },
      // {
      //   source: '/san-pham-moi',
      //   destination: '/newproduct',
      // },
      {
        source: "/co-hoi-nghe-nghiep",
        destination: "https://tuyendung.zadez.vn/",
      },
      {
        source: "/danh-muc-san-pham",
        destination: "/categories",
      },
      {
        source: "/danh-muc-san-pham/:slug",
        destination: "/categories/:slug",
      },
    ];
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "http",
  //       hostname: "localhost",
  //       port: "3000",
  //       pathname: "/**",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "<YOUR SITE URL>.com",
  //       port: "",
  //       pathname: "/**",
  //     },
  //   ],
  // },
};

module.exports = nextConfig;
