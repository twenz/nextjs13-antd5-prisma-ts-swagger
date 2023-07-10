/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['antd'],
  env: {
    DATABASE_URL: process.env.POSTGRES_LAWYERAPP_URL,
    URL: process.env.URL,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL
  },
};

module.exports = nextConfig;
