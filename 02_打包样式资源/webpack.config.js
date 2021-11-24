/*
  webpack.config.js webpack的配置文件
   作用：指示webpack干那些活（当运行webpack指令时，会加载里面的配置）

   所有构建工具都是基于nodejs平台运行的~模块化默认采用commonjs
*/

const { resolve } = require('path')
module.exports = {
  //webpack配置
  //入口起点
  entry:'./src/index.js',
  //输出
  output:{
    //输出文件名
    filename:'built.js',
    //输出路径
    //__dirname nodejs的变量，代表当前文件的目录绝对路径
    path: resolve(__dirname, 'build')
  },
  // loader的配置
  module: {
    rules: [
      //详细loader配置
      {
        //匹配哪些文件
        test:/\.css$/,
        //使用哪些loader进行处理
        use:[
          'style-loader',
          'css-loader'
        ]
      },
      {
        test:/\.less$/,
        use:[
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
  plugins: [
    //详细plugins配置
  ],
  //模式
  mode: 'development'
  // mode: 'production'
}