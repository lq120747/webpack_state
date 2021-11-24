const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry:'./src/index.js',
  output:{
    filename:'built.js',
    path:resolve(__dirname,'build')
  },
  module:{
    rules:[
      {
        //打包css
        test:/\.css$/,
        use:['style-loader','css-loader']
      },
      // {
      //   //打包其他资源（除了js|css|html资源以外的资源）
      //   //排除js|css|html资源
      //   // exclude:/\.(css|js|html)$/,
      //   test:/\.ttf$/,
      //   loader:'file-loader',
      //   // option: {
      //   //   esModule:false
      //   // }
      // }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./src/index.html'
    })
  ],
  mode:'development'
}