/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "acctcomputing.com" },
      { hostname: "images.unsplash.com" },
    ],
  },
};

module.exports = nextConfig;
