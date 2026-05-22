import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [{ key: "x-middleware-enabled", value: "true" }],
      },
    ];
  },
};

export default nextConfig;
