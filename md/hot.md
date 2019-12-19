## 热更新
官网提供两种方式
1. webpack-dev-server+HotModuleReplacementPlugin
配置插件+设置devServer属性hot为true就可以实现了。
2. node中middleware+HotModuleReplacementPlugin制作
3. 安装react-hot-loader
* 安装原因：在使用state的情况下，每次组件HMR后就会强行让组件自动刷新，也就是unmount组件后重新建立组件，那么state就丢失数据了，当然使用mobx，redux不用担心这点。
* 使用方法：直接将最外层包裹就行，不用再继续操作每一层了.
* 配置公共打包,splitChunks
```
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
        }
```
***
## 参考文档
[express使用中间件middleware进行操作](https://segmentfault.com/a/1190000011151106)