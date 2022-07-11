const path = require("path")
const { VueLoaderPlugin } = require('vue-loader')

const Webpack = require('webpack')
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.s[ca]ss$/,
        // 注意 当需要使用多个loader的时候，写成数组的形式，同时也需要注意使用的顺序，有的时候loader之间也是有先后关系的，比如说scss和
        // scss-loader。引入顺序从逆序，也就是说从数组的最后一个慢慢执行到最前面
        use: ["style-loader", "css-loader", "scss-loader"]
      },
      {
        test: /\.m?js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(jpe?g|png|webp|gif)/,
        type: "asset/resource"
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new Webpack.DefinePlugin({ __VUE_OPTIONS_API__: true, __VUE_PROD_DEVTOOLS__: true }),
  ]
}