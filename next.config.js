/** @type {import('next').NextConfig} */
const { withPlaiceholder } = require("@plaiceholder/next");

module.exports = withPlaiceholder ({
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['cdn.sanity.io'],
  }
});
