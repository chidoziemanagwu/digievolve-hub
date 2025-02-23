/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  
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
    unoptimized: process.env.NODE_ENV === 'development',
  },

  webpack: (config, { isServer }) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      "punycode": false
    };
    
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          maxInitialRequests: 25,
          minSize: 20000
        }
      };
    }
    
    return config;
  },

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
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains'
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ],
      },
    ]
  },

  experimental: {
    serverActions: {
      allowedOrigins: ['whale-app-j37an.ondigitalocean.app'],
    },
    typedRoutes: true,
  }
};

export default nextConfig;