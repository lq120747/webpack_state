const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
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
  mode:'development',
  //开发服务器devServer:用来自动化（自动编译，自动打开浏览器，自动刷新浏览器）
  //特点：只会在内存中编译打包，不会有任何输出
  //启动devServer指令为: npx webpack-dev-server
  devServer:{
    //项目构建后路径
    static:{
      directory:path.join(__dirname,'build')
    },
    // contentBase: resolve(__dirname,'build'), //该方法已经废弃
    //启动gzip压缩
    compress:true,
    //端口号：3000
    port:3000,
    //自动打开浏览器
    // open:true
  }
}