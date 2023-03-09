/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "r.kelkoo.com",
      },
    ],
  },
};

module.exports = nextConfig;
