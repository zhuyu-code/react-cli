# 配置eslint
1. 首先安装eslint

`npm install eslint`

2. 初始化.eslintrc.js

`npx eslint --init` 

3. 运行eslint

`npx eslint src`

4. 结合webpack，安装eslint-loader

`npm install eslint-loader`

5. 加载js的时候先行eslint-loader
```
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
```
6.配置热更新的时候，在devServer里面配置overlay:true进行页面热更新，也就是错误不支持检查在命令行窗口里面。
7.可以通过vscode安装eslint插件帮助标记标错
8.由于使用eslint-loader加载的时候会造成性能速度降低，使用git钩子提交进行检测
1. Q: Webpack Module build failed: SyntaxError: ‘import’ and 'export' may appear only with 'sourceType: module'

   解决：A:  在 .eslintrc 配置对象里面 加上如下配置

   ```javascript
   "parserOptions":{"sourceType":"module"}
   ```

2. Parsing error: Unexpected token =eslint

   解决： 在eslintjs里面配置：

   ```javascript
   "parser": "babel-eslint",
   ```

3. React-Router browserHistory浏览器刷新出现页面404解决方案

   解决：[通过修改webpack-dev-server运行方式](https://www.thinktxt.com/react/2017/02/26/react-router-browserHistory-refresh-404-solution.html)

   ```javascript
   "dev": "webpack-dev-server  --history-api-fallback "
   ```
# 配置jest
按照官网能够test就行
***
## 参考资料
[git hooks配置](https://www.jianshu.com/p/dc55ddd6c5c2)