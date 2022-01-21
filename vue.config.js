/* eslint-disable */
const ENV = process.env.VUE_APP_ENV // 自定义环境变量
const webpack = require('webpack')
const path = require('path')
const pxtorem = require('postcss-pxtorem')

let externals = {}

if (ENV !== 'development') {
  externals = {
    // 排除第三方库，然后再html中通过cdn的方式引用
    vue: 'Vue',
    'vue-router': 'VueRouter',
    axios: 'axios'
  }
}

module.exports = {
  publicPath: process.env.VUE_APP_PUBLIC_PATH, // 获取静态资源的地址
  productionSourceMap: false,
  filenameHashing: true,
  // outputDir: distPath,
  devServer: {
    historyApiFallback: true,
    hot: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    proxy: {
      '/api': {
        target: 'http://xx.x.x.xx:8080', // 开发环境代理的地址
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          pxtorem({ // px 转 rem
            rootValue: 192, // 基数
            propList: ['*']
          })
        ]
      }
    }
  },
  configureWebpack: {
    externals,
    plugins: [
      new webpack.ProvidePlugin({
        Loading: [path.resolve(__dirname, './src/components/Loading/index.ts'), 'default'],
        Message: [path.resolve(__dirname, './src/components/Message/index.ts'), 'default'],
        Request: [path.resolve(__dirname, './src/services/api/index.ts'), 'default']
      })
    ]
  },
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].ENV = ENV // ENV 变量注入 html 文件
      args[0].title = '我的网页' // 网页标题
      return args
    })
  }
}
