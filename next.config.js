const { i18n } = require('./next-i18next.config.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  i18n,
  images: {
    domains: ['cdn.builder.io', 'images.pexels.com', 'cdn-icons-png.flaticon.com'],
  },
  experimental: {
    largePageDataBytes: 128 * 1000, // 128KB
  },
}

module.exports = nextConfig
