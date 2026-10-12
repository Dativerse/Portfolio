/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },

  // Disable strict mode for development if needed
  reactStrictMode: true,
}

module.exports = nextConfig
