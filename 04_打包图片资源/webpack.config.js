const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry:'./src/index.js',
  output:{
    filename:'built.js',
    path: resolve(__dirname,'build')
  },
  module:{
    rules:[
      {
        test:/\.less$/,
        use:[
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      // {
      //   //处理不了html中的img图片
      //   //处理图片资源
      //   test:/\.(jpg|png|gif)$/,
      //   //使用一个loader
      //   loader:'url-loader',
      //   options:{
      //     limit:8 * 1024,
      //     // esModule: false,
      //     // name:'[hash:10].[ext]'
      //   }
      // },
      {
        //处理html文件中img图片
        test:/\.html$/,
        loader:'html-loader',
        // options:{
        //   esModule: false
        // }
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./src/index.html'
    })
  ],
  mode:'development'
}