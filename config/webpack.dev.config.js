const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')

module.exports = merge(baseConfig, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.s?[ca]ss$/,
        exclude: /node_modules/,
        use: [
          'vue-style-loader',
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
        use: 'vue-loader',
      },
    ],
  },
})