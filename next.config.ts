import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },
  experimental: {
    globalNotFound: true,
    serverActions: {
      bodySizeLimit: '45mb',
    },
  },
}

export default nextConfig
