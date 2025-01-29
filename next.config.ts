import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env:{
    NEXT_SUPABASE_URL: process.env.SUPABASE_PROJECT_URL,
    NEXT_SUPABASE_KEY: process.env.SUPABASE_API_KEY
  }
};

export default nextConfig;
