/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000'],
      bodySizeLimit: '2mb',
    },
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
}

module.exports = nextConfig 