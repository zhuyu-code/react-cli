# webpack+babel
## 理解
1. `transform-es2015-arrow-funtions`
使用指定的插件比如`transform-es2015-arrow-funtions`可以将ES6编译成ES5
2. `@babel/polyfill`
优点：由于第一种每次需要下载指定的插件太麻烦，使用`@babel/polyfill`第三方插件库帮我所有的都编译成功，安装后放在入口文件即可全部使用  
缺点：全部都要执行第三方库，编译速度慢，打包体积大
3. `@babel/preset-env`
优点： 通过环境变量的方式会自动下载23种常用的转化,但是promise，Object.assign还是不能转化，就使用@babel/polyfill和@babel-preset-env配合
4. 开发依赖`@babel/plugin-transform-runtime`，实际依赖 `@babel/runtime-corejs3`
用于polyfill的全局污染和支持实例化API
****
## 实操
1. babel7以下
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
2.babel7以上（采用@babel行式巨TM坑）
* babel-cli-----------@babel/cli（babel-cli依赖了babel-core，@babel/core没有以来@babel/core，假如用cli本地测试就会报出安装@babel/core）
* 最终配置
```
{
    "presets": [
        [
            "@babel/preset-env",
           {
            "targets": {
                "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
            }
           }
        ],
    ],
    "plugins": [
        ["@babel/plugin-transform-runtime", {
            "corejs": 3
        }]
    ]
}
```