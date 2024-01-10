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
    ];
  },
};

module.exports = nextConfig;
