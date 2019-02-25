const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

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
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.vue$/,
        use: [
          'vue-loader',
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
}