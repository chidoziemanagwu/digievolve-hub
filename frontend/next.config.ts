import type { NextConfig } from "next";

const nextConfig = {
  images: {
    domains: ['placehold.co'], // Add your image domains
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;