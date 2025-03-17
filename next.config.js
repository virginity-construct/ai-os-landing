/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  // Indicate that API routes should be ignored during static export
  trailingSlash: true,
}

module.exports = nextConfig
