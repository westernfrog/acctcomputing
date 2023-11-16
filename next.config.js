/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "acctcomputing.com" }],
  },
};

module.exports = nextConfig;
