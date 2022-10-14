/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.sanity.io", "res.cloudinary.com"],
  },
};

const withVideos = require("next-videos");

const STUDIO_REWRITE = {
  source: "/studio/:path*",
  destination:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3333/studio/:path*"
      : "/studio/index.html",
};

((module.exports = nextConfig), withVideos),
  {
    rewrites: () => [STUDIO_REWRITE],
  };
