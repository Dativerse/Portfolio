/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable strict mode for development if needed
  reactStrictMode: true,

  // Transpile @react-pdf/renderer to avoid ESM/CJS issues
  transpilePackages: ['@react-pdf/renderer'],

  // Configure Turbopack resolve alias for canvas (used by @react-pdf/renderer)
  turbopack: {
    resolveAlias: {
      canvas: './lib/canvas-stub.js',
    },
  },

  // Keep webpack config for production builds
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  },
}

module.exports = nextConfig
