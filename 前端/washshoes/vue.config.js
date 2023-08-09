const {
  defineConfig
} = require('@vue/cli-service')
const webpack = require('webpack') //添加webpack

module.exports = defineConfig({
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        jquery: "jquery",
        "window.jQuery": "jquery"
      })
    ],
  },
  transpileDependencies: true
})