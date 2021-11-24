const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
  entry:'./src/js/index.js',
  output:{
    filename:'js/built.js',
    path: resolve(__dirname,'build')
  },
  module:{
    rules:[
      {
        //打包css
        test:/\.css$/,
        use:['style-loader','css-loader']
      },
      {
        test:/\.less$/,
        use:['style-loader','css-loader','less-loader']
      },
      //处理图片资源
      {
         // 处理图片资源
        test: /\.(jpg|png|gif)$/,
        // 下载 url-loader file-loader
        loader: 'url-loader',
        options: {
            publicPath: './img', // 相对打包后的index.html的图片位置
            outputPath: 'img/', // 输出到build的目录img下
            // 图片小于 10kb,会被 base64处理
            // 优点：减少请求数量（减轻服务器压力）
            // 缺点：图片体积会更大（文件请求速度更慢）
            limit: 10 * 1024,
            // 问题：url-loader默认使用es6模块化解析，而html-loader引入图片是commonjs，解析时会出现问题：[object Module]
            // 解决：关闭url-loader的es6模块化，使用commonjs解析
            esModule: false,
            // 给图片重命名
            // [hash:6] 取图片的hash的前6位
            // [ext] 取文件原来的扩展名
            name: '[name].[hash:6][ext]'
        },
        type: 'javascript/auto', //在webpack5中使用旧版功能
      },
      //打包其他资源
      {
        exclude:/\.(css|js|html|less|jpg|png|gif)$/,
        loader:'file-loader',
        options: {
          outputPath:'meta/',
          esModule: false,
        },
        type: 'javascript/auto', //在webpack5中使用旧版功能
      },
      //打包html中的img资源
      {
        test:/\.html$/,
        loader:'html-loader'
      }
    ],
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./src/index.html'
    })
  ],
  mode:'development',
  //开发服务器
  devServer:{
    static:{
      directory:path.join(__dirname,'build')
    },
    compress:true,
    port:3000,
    open:true,
  }
}