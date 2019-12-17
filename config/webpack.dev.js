const path=require("path");
const webpack=require("webpack");
module.exports={
    entry:{
        index:'./src/main.js'
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
                test:/\.js$/,
                use:["babel-loader",{
                    loader:"eslint-loader",
                    options:{
                        fix:true
                    },
                    force:"pre"//强制执行在前面
                }],
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
                test:/\.css$/,
                use:[
                {
                    loader:"style-loader"
                },
                {
                    loader:"css-loader"
                }
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
        new webpack.HotModuleReplacementPlugin()
    ]
}