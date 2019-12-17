# webpack+babel
总结：多种方式：
1. babel-preset-env(指定较少种类)+babel-polyfill（体积大，不适合做框架）
2. 就是以下使用的过个插件
* 配置ES6转ES5
    使用插件`babel-preset-es2015`,用于环境变量自动转换
* 配置ES7转ES5
    使用插件`babel-preset-stage-2`,用于转换async await
* 配置支持JSX
    使用插件`babel-preset-react`,用于转换JSX
* 配置支持装饰器
    使用`babel-plugin-transform-decorators-legacy`配置转换装饰器，方便配置mobx。
* 配置支持promise
    使用`babel-plugin-transform-runtime`进行对promise语法进行打包
* webpack+babel
使用`babel-loader`加载所有的js文件，然后通过`babel-core`进行babel打包
**webpack.dev.js**:
```
 {
                test:/\.js$/,
                use:[
                {
                    loader:"babel-loader"
                }
            ],
                exclude:/node_modules/
 }
```
**.babelrc**
```
{
    "presets": [
      "es2015",
      "react",
      "stage-2"
    ],
    "plugins": [
        "transform-decorators-legacy","transform-runtime"]
  }
```