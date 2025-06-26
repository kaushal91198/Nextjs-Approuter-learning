// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // reactStrictMode: true,
  // other supported options...
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
