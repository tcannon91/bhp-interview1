module.exports = {
  cache: {
    cacheId: "bright-test",
    runtimeCaching: [
      {
        handler: "fastest",
        urlPattern: "/$"
      }
    ],
    staticFileGlobs: ["dist/**/*"]
  },
  manifest: {
    background: "#FFFFFF",
    title: "bright-test",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
