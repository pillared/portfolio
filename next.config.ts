import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // basePath: "/portfolio",
  // assetPrefix: "/portfolio/",
  output: "export",
  images: {
    unoptimized: true,
    domains: [
      "raw.githubusercontent.com",
      "avatars.githubusercontent.com",
      "servicenow.com",
      "commkit.gsu.edu",
    ],
  },
};

module.exports = nextConfig;
