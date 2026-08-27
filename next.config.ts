import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  trailingSlash: false,
  images: {
    deviceSizes: [360, 414, 640, 750, 828, 1080, 1200, 1672],
    imageSizes: [32, 48, 64, 96, 128, 160, 256],
    minimumCacheTTL: 2678400,
  },
};

export default nextConfig;
