const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = merge(baseConfig, {
  mode: 'production',

  /*module: {
    rules: [
      {
        test: /\.s?[ca]ss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                require('autoprefixer'),
              ],
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              extractCSS: true,
            },
          },
        ],
      },
    ],
  },*/

  // 将vue的版本更换为生产环境版本
  /*resolve: {
    alias: {
      vue: 'vue/dist/vue.min.js',
    },
    extensions: ['.js', '.vue'],
  },*/

  /*plugins: [
    new MiniCssExtractPlugin({/!**!/
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
  ],*/
})