const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  context: path.resolve(__dirname, '../'),
  mode: 'production',
  // 输出路径
  output: {
    path: path.resolve(__dirname, '../assets'),
    filename: "[name].js",
  },
  // loader配置
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.s?[ca]ss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
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
        loader: 'vue-loader',
        options: {
          extractCSS: isProduction,
        },
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
}