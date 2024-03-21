/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/career-gpt",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

module.exports = nextConfig;