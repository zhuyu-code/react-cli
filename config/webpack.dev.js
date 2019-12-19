const path=require("path");
const webpack=require("webpack");
const{ CleanWebpackPlugin } =require("clean-webpack-plugin");
const miniCssExtractPlugin=require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require("html-webpack-plugin");
const uglifyJsWebpackPlugin=require('uglifyjs-webpack-plugin')
module.exports={
    entry:{
        main:'./src/main.js'
    },
    mode:"development",
    output:{
        filename:"[name]-bundle.js",
        path: path.resolve(__dirname,"../dist"),
        publicPath:"/"
    },
    devServer:{
        contentBase:"dist",
        hot:true,
        open:true,
        overlay:true
      },
    devtool:"source-map",
    module:{
        rules:[
            //加载所有的js
            {
                test:/\.(js|jsx)$/,
                use:["babel-loader",
                // {
                //     loader:"eslint-loader",
                //     options:{
                //         fix:true
                //     },
                // }
            ],
                exclude:/node_modules/
            },
            //将less编译成css
           {
            test: /\.less$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader" // compiles Less to CSS
            }]
        },
             //加载所有的css
             {
                test: /\.css$/,
                use: [
                    {
                        loader:miniCssExtractPlugin.loader
                    },
                    'css-loader'
                ]
            },
            //加载html和image
            {
                test: /\.html$/,
                use: [{
                loader: "file-loader",
                options: {
                name: "[name].html"
                } 
                },
                {
                //用来区别打包的js和html分开
                loader: "extract-loader"
                },
                {
                loader: "html-loader",   
                options: {
                attrs: ["img:src"]   
                }
                }
                ]
                },
            //加载所有的图片
            {
                test:/\.(jpg|git|png)$/,
                use:[
                  {
                    loader:"file-loader",
                    options:{
                      name:"images/[name].[ext]"
                    }
                  }
                ]
              }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HTMLWebpackPlugin({
            template:"./src/index.html"
          }),
        new miniCssExtractPlugin({
            filename:'[name].css'   //输出的css文件名，放置在dist目录下
        }) 
    ],
    optimization: {
        splitChunks: {
          chunks: 'all',
          name:"zhuyu",
          minSize: 30000,
        //   minRemainingSize: 0,
          maxSize: 0,
          minChunks: 1,
          maxAsyncRequests: 6,
          maxInitialRequests: 4,
          automaticNameDelimiter: '~',
          automaticNameMaxLength: 30,
          cacheGroups: {
            vendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: -10
            },
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true
            }
          }
        },
        minimizer:[
            new uglifyJsWebpackPlugin({
                cache:true,  //是否缓存
                parallel:true,  //是否并发打包，同时打包多个文件
                sourceMap:true  //打包后的代码与源码的映射，方便调试
            })
        ]
      }
}