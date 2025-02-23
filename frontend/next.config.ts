import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      },
    ],
  },
  // Configure server runtime
  serverRuntimeConfig: {
    port: process.env.PORT || 10000,
  },
  // Enable experimental features if needed
  experimental: {
    // Correctly configure server actions
    serverActions: {
      allowedOrigins: ['*'],
      bodySizeLimit: '2mb'
    }
  }
}

export default nextConfig