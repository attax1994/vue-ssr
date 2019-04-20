const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

const isProd = process.env.NODE_ENV === 'production'
const baseConfig = isProd ? require('./webpack.prod.config.js') : require('./webpack.dev.config.js')

module.exports = merge(baseConfig, {
  entry: path.resolve(__dirname, '../src/entry-client.js'),
  output: {
    path: isProd ? path.resolve(__dirname, '../assets/prod/client') : path.resolve(__dirname, '../assets/dev/client'),
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    // 此插件在输出目录中
    // 生成 `vue-ssr-client-manifest.json`。
    new VueSSRClientPlugin(),
  ],
})