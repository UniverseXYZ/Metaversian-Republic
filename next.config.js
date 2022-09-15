const withImages = require("next-images");
const withPlugins = require("next-compose-plugins");
const withVideos = require("next-videos");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    disableStaticImages: true,
  },
};

module.exports = withPlugins(
  [
    withVideos,
    [
      withImages,
      {
        fileExtensions: ["jpg", "jpeg", "png", "gif", "ico", "webp", "jp2", "avif"],
      },
    ],
  ],
  {
    trailingSlash: true,
    reactStrictMode: false,
    images: {
      disableStaticImages: true,
      domains: ["ipfs.io", "storage.googleapis.com"],
    },
    webpack(config, options) {
      config.module.rules.push({
        test: /\.mp3$/,
        use: {
          loader: "file-loader",
        },
      });

      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack", "url-loader"],
      });
      return config;
    },
    env: {
      INFURAID: process.env.INFURAID,
      THE_GRAPH_V1_URL: process.env.THE_GRAPH_V1_URL,
      THE_GRAPH_V2_URL: process.env.THE_GRAPH_V2_URL,
      ZOMBIE_GAME_CLOUDFUNCTION_INVOKER: process.env.ZOMBIE_GAME_CLOUDFUNCTION_INVOKER,
      GET_ID_URL: process.env.GET_ID_URL,
      THE_GRAPH_DEVIANTS_URL: process.env.THE_GRAPH_DEVIANTS_URL,
      DEVIANTS_CONTRACT_ADDRESS: process.env.DEVIANTS_CONTRACT_ADDRESS,
      THE_GRAPH_FACES_URL: process.env.THE_GRAPH_FACES_URL
    },
  }
);
