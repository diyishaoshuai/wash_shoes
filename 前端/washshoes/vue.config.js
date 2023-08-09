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
  transpileDependencies: true,
  // 开发环境配置
  devServer:{
    port:8081,
    https:false,
    open:true,
    proxy:{
      [process.env.VUE_APP_BASE_API]:{
        // 目标服务器地址
        target:process.env.VUE_APP_SERVICE_API,
        // 开启代理服务器
        changeOrigin: true,
        pathRewrite:{
          // 将地址前缀替换为空
          ['^'+process.env.VUE_APP_BASE_API]:''
        }
      }
    }
  }
})