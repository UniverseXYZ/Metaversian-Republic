const withImages = require('next-images');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    disableStaticImages: true,
  },
}

module.exports = withImages(nextConfig);
