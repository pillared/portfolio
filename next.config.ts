import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "raw.githubusercontent.com",
      "avatars.githubusercontent.com",
      "servicenow.com",
      "commkit.gsu.edu",
    ],
  },
};

export default nextConfig;
