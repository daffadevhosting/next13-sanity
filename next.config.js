/** @type {import('next').NextConfig} */
const { withPlaiceholder } = require("@plaiceholder/next");

module.exports = withPlaiceholder ({
  reactStrictMode: true,
  experimental: { appDir: true },
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true }
    return config
  },
  images: {
    domains: ['cdn.sanity.io'],
  }
});
