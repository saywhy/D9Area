const webpack = require("webpack");
const path = require('path')
// const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = ['js', 'css'];

function resolve(dir) {
    return path.join(__dirname, dir)
}
// require("babel-polyfill");
module.exports = {
    publicPath: './', //打包后的位置(如果不设置这个静态资源会报404)
    // publicPath: process.env.NODE_ENV === 'production' ? 'http://47.92.237.225:8080/dist' : './',
    outputDir: 'dist', //打包后的目录名称
    assetsDir: 'static', //静态资源目录名称
    productionSourceMap: false, //去掉打包的时候生成的map文件
    lintOnSave: true,
    filenameHashing: false,
    devServer: {
        overlay: { // 让浏览器 overlay 同时显示警告和错误
            warnings: true,
            errors: true
        },
        open: true, //配置自动启动浏览器
        host: 'localhost', //不清楚主机和目的网络
        port: 8080, // 源地址端口，自行修改
        hotOnly: false,
        // proxy: {
        // '/ser': {
        //     target: 'http://127.0.0.1:8080/', //跨域的域名
        //     ws: true, // 代理 websockets
        //     changeOrigin: true, //是否开启跨域
        //     pathRewrite: {
        //         '^/ser': '/' // 重写地址
        //     }
        // }
        // },
        proxy: { //配置多个跨域
            "/api": {
                // target: "http://33310y89m5.wicp.vip/",
                target: "http://47.94.20.54:8080/",
                // ws: true,//websocket支持
                secure: false,
                pathRewrite: {
                    "^/api": "/"
                }
            },

        },
    },

    chainWebpack: (config) => {
        // 移除 prefetch 插件(针对生产环境首屏请求数进行优化)
        config.plugins.delete('prefetch')
        // 移除 preload 插件(针对生产环境首屏请求数进行优化)   preload 插件的用途：https://cli.vuejs.org/zh/guide/html-and-static-assets.html#preload
        config.plugins.delete('preload')
        // 第1个参数：别名，第2个参数：路径  （设置路径别名）
        config.resolve.alias
            .set('@pages', resolve('./src/page'))
            .set('@router', resolve('./src/router'))
            .set('@store', resolve('./src/store'))
            .set('@utils', resolve('./src/utils'))
        // 压缩图片
        // 需要 npm i -D image-webpack-loader
        config.module
            .rule("images")
            .use("image-webpack-loader")
            .loader("image-webpack-loader")
            .options({
                mozjpeg: {
                    progressive: true,
                    quality: 65
                },
                optipng: {
                    enabled: false
                },
                pngquant: {
                    quality: [0.65, 0.9],
                    speed: 4
                },
                gifsicle: {
                    interlaced: false
                },
                //   webp: {
                //       quality: 75
                //   }
            });
    },

    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require("autoprefixer")({
                        // 配置使用 autoprefixer
                        overrideBrowserslist: ["last 15 versions"]
                    }),
                    require("postcss-pxtorem")({
                        rootValue: 14, // 换算的基数
                        // 忽略转换正则匹配项。插件会转化所有的样式的px。比如引入了三方UI，也会被转化。目前我使用 selectorBlackList字段，来过滤
                        //如果个别地方不想转化px。可以简单的使用大写的 PX 或 Px 。
                        selectorBlackList: [],
                        propList: ["*"],
                        exclude: /node_modules/,
                        mediaQuery: false,
                        // minPixelValue: 12 // 这种小于13的都不会转换，也不好
                    })
                ]
            }
        }
    },




    // 配置打包 js、css文件为.gz格式，优化加载速度  （参考：https://blog.csdn.net/qq_31677507/article/details/102742196）
    // configureWebpack: config => {
    //     if (process.env.NODE_ENV === 'production') {
    //         return {
    //             plugins: [new CompressionPlugin({
    //                 test: /\.js$|\.css/, // 匹配文件
    //                 threshold: 10240, // 超过10kB的数据进行压缩
    //                 deleteOriginalAssets: false // 是否删除原文件 （原文件也建议发布到服务器以支持不兼容gzip的浏览器）
    //             })],
    //             performance: { // 生产环境构建代码文件超出以下配置大小会在命令行中显示警告
    //                 hints: 'warning',
    //                 // 入口起点的最大体积 整数类型（以字节为单位,默认值是：250000 (bytes)）
    //                 maxEntrypointSize: 5000000,
    //                 // 生成文件的最大体积 整数类型（以字节为单位,默认值是：250000 (bytes)）
    //                 maxAssetSize: 3000000
    //                 // // 只给出 js 文件的性能提示
    //                 // assetFilter: function (assetFilename) {
    //                 //   return assetFilename.endsWith('.js')
    //                 // }
    //             }
    //         }
    //     }
    // }

}