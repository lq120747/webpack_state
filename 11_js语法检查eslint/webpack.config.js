const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin');
module.exports = {
  entry:'./src/index.js',
  output:{
    filename:'js/built.js',
    path:resolve(__dirname,'build')
  },
  module:{
    rules:[
      /*
        语法检查：eslint-loader eslint
         注意：只检查自己写的源代码，第三方的库是不用检查的
         设置检查规则：
         package.json中eslintConfig中设置
          airbnb --> eslint-config-airbnb-base eslint-plugin-import eslint
      */
    //  {  //eslint-loader 已废弃，为运行成功 用eslint-webpack-plugin代替
    //    test:/\.js$/,
    //    exclude:/node_modules/,
    //    loader:'eslint-loader',
    //    options:{
    //       fix:true
    //    }
    //  }

    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./src/index.html'
    }),
    //#使用 配置项都可以在eslint-webpack-plugin的github上找到
    new ESLintPlugin({
        fix: true,
        extensions: ['js', 'json', 'coffee'],
        exclude: '/node_modules/'
    }),
  ],
  mode:'development'
}