import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
  
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

  // Add headers for security and CORS
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://whale-app-j37an.ondigitalocean.app',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ]
  },

  experimental: {
    serverActions: {
      allowedOrigins: ['whale-app-j37an.ondigitalocean.app'],
    }
  }
}

export default nextConfig