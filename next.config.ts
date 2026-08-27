import type { NextConfig } from "next";

const llmsTxtHeader = {
  key: "Link",
  value: '</llms.txt>; rel="describedby"; type="text/markdown"',
};

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  trailingSlash: false,
  images: {
    deviceSizes: [360, 414, 640, 750, 828, 1080, 1200, 1672],
    imageSizes: [32, 48, 64, 96, 128, 160, 256],
    minimumCacheTTL: 2678400,
  },
  headers() {
    return [
      {
        source: "/",
        headers: [llmsTxtHeader],
      },
      {
        source: "/privacy",
        headers: [llmsTxtHeader],
      },
      {
        source: "/bai-viet/:path*",
        headers: [llmsTxtHeader],
      },
    ];
  },
};

export default nextConfig;
