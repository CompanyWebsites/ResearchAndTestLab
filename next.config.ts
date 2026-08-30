import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.29.21:3000", "192.168.29.21"],
  async redirects() {
    return [{ source: "/what-we-do", destination: "/our-work", permanent: true }];
  },
};

export default nextConfig;
