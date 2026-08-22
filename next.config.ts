import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  outputFileTracingRoot: process.cwd(),
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
