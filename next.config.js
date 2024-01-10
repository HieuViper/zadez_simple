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
  // async rewrites() {
  //   return [
  //     {
  //       source: '/gioi-thieu-ve-zadez',
  //       destination: '/about',
  //     },
  //     {
  //       source: '/quyen-loi-doi-tac-zpartner',
  //       destination: '/partner',
  //     },
  //     {
  //       source: '/trung-tam-bao-hanh-zadez',
  //       destination: '/warranty',
  //     },
  //     {
  //       source: '/san-pham-moi',
  //       destination: '/newproduct',
  //     },
  //     {
  //       source: '/categories/co-hoi-nghe-nghiep',
  //       destination: 'https://tuyendung.zadez.vn/',
  //     },
  //     {
  //       source: '/categories',
  //       destination: '/danh-muc-san-pham',
  //     },
  //   ]
  // },
};

module.exports = nextConfig;
