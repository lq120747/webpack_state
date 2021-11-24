const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { loader } = require('mini-css-extract-plugin')
process.env.NODE_ENV = 'development'
module.exports = {
  entry:'./src/js/index.js',
  output:{
    filename:'js/built.js',
    path:resolve(__dirname,'build')
  },
  module:{
    rules:[{
      //打包css
      test:/\.css$/,
      use:[
        // 'style-loader',
        MiniCssExtractPlugin.loader,
        'css-loader',
        /*
          css兼容性处理:postcss -->postcss-loader postcss-preset-env
          帮postcss找到package.json中browserslist里面的配置， 通过配置加载指定的css兼容样式
          "browserslist":{
            //开发环境 --> 设置node环境变量：process.env.NODE_ENV = development
            "development":[
              "last 1 chrome version",
              "last 1 firefox version",
              "last 1 safari version"
            ],
            //生产环境：默认是生产环境
            "production":[ //兼容大部分浏览器
              ">0.2%",
              "not dead",
              "not op_mini all"
            ]
          }
        */
       /*//使用loader的默认配置
       //'postcss-loader'
       //修改loader的配置
       {
         loader:'postcss-loader',
         options:{
           ident:'postcss',
           plugins:()=>{
             //postcss的插件
             require('postcss-preset-env')()
           }
         }
       }*/ //-->该方法未成功,方法已经改变用法

       /*
        第一种方法
        用法改变了。你需要在webpack.config.js文件所在目录下创建一个同级的postcss.config.js文件然后写入一下内容
        module.exports = {
          plugins: [
            //使用postcss插件
            require(postcss-preset-env)
          ]
        }
        最后将webpack文件中的其他配置去掉，改用默认配置
        postcss-loader
       */
       //'postcss-loader'
       //第二种方法
       {
         loader:'postcss-loader',
         ident:'postcss',
         options:{
           postcssOptions:{
              plugins: [
                //使用postcss插件
                require('postcss-preset-env')
              ]
           }
         }
       }
      ]
    }]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename:'css/built.css'
    })
  ],
  mode:'development'
}