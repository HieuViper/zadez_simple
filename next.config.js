/** @type {import('next').NextConfig} */

// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });

const nextConfig = {
  output: "standalone",
  reactStrictMode: false,
  experimental: {
    serverComponentsExternalPackages: ["sequelize"],
    // serverActions: true,
  },
  env: {
    ROOT: __dirname,
  },
  images: {
    // loader: "custom",
    // loaderFile: "./ImageLoaderProduction.js",
    formats: ["image/avif", "image/webp"],
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
      {
        source: "/zadez-gp-803b",
        destination: "/gp-803",
      },
      {
        source: "/tin-tuc",
        destination: "/blogs",
      },
      {
        source: "/tin-tuc/:slug",
        destination: "/blogs/:slug",
      },
      {
        source: "/danh-muc/:slug",
        destination: "/products-by-categories/:slug",
      },
      {
        source: "/tim-kiem",
        destination: "/search",
      }
    ];
  },
};

// module.exports = withBundleAnalyzer({
//   nextConfig,
// });

module.exports = nextConfig;
