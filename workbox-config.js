module.exports = {
  globDirectory: "./public/",
  globPatterns: ["**/*.{html,css,js}"],
  swDest: "./public/sw.js",
  clientsClaim: true,
  skipWaiting: true,
};
