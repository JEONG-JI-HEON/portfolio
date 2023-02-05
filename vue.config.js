const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: true,
  publicPath: "",
  outputDir: "docs",
  chainWebpack: (config) => {
    config.module.rules.delete("eslint");
  },
});
