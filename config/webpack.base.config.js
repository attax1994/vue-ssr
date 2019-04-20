const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  context: path.resolve(__dirname, '../'),

  // 输出路径
  output: {
    path: path.resolve(__dirname, '../assets'),
    filename: "[name].js",
  },
   plugins: [
    new VueLoaderPlugin(),
  ],
}
