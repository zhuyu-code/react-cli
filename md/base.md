# webpack基本打包
* 使用`babel-loader`和`eslint-loader`加载js，jsx
 //加载所有的js
            {
                test:/\.(js|jsx)$/,
                use:["babel-loader",
                {
                    loader:"eslint-loader",
                    options:{
                        fix:true//自动固定简单的错误
                    },
                    //force:"pre"//强制执行在前面
                }
            ],
                exclude:/node_modules/
            },
* 打包css
使用`css-loader`和`style-loader`
```
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
```
* 打包less
使用`less-loader`加载插件，当然首先得支持`less`的使用
```
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
        }
```
* 打包html
使用`html-loader`,`extract-loader`,`file-loader`加载,使用html-webpack-plugin也是可以的。
```
 
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
```
* 打包image
使用`file-loader`加载
```
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
```
* 使用插件打包css，因为css-loader和style-loader是将css内嵌入js中不能独立打包，miniCssExtractPlugin可以分离，使用
```
  new miniCssExtractPlugin({
            filename:'[name].css'   //输出的css文件名，放置在dist目录下
        }) 
```
* 使用htmlwebpackplugin打包html,可以完全使用模板打包。
```
 new HTMLWebpackPlugin({
            template:"./src/index.html"
          }),
```