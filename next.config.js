/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  basePath: process.env.NODE_ENV === "production" ? "/Art-Pack-Calculator" : "",
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/Art-Pack-Calculator/" : "",
};

module.exports = nextConfig;
