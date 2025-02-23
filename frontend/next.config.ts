import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
  
  // Ensure static assets are copied
  experimental: {
    outputFileTracingRoot: undefined, // Includes all files
    serverActions: {
      allowedOrigins: ['whale-app-j37an.ondigitalocean.app'],
    }
  },

  // Configure images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      },
      {
        protocol: 'https',
        hostname: 'whale-app-j37an.ondigitalocean.app',
      }
    ],
  },

  // Production optimizations
  poweredByHeader: false,
  compress: true,

  // Ensure public directory is copied
  typescript: {
    ignoreBuildErrors: false,
  },
}

export default nextConfig