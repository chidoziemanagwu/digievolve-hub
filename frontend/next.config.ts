// next.config.ts
const nextConfig = {
  images: {
    domains: ['your-image-domain.com'], // Add your image domains
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;