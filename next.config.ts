import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_PROJECT_URL: process.env.PROJECT_URL,
    NEXT_PUBLIC_ANON_KEY: process.env.ANON_KEY,
  },
};

export default nextConfig;
