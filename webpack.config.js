const path = require('path'); //引入node的path模块
const HtmlWebpackPlugin = require('html-webpack-plugin') //将html打包
const ExtractTextPlugin = require('extract-text-webpack-plugin') //打包的css拆分,将一部分抽离出来  
const CleanWebpackPlugin = require('clean-webpack-plugin')
// const CopyWebpackPlugin = require('copy-webpack-plugin')
// console.log(path.resolve(__dirname,'dist')); //物理地址拼接
module.exports = {
    entry: './src/main.js', //入口文件  在vue-cli main.js
    output: { //webpack如何输出
        path: path.resolve(__dirname, 'dist'), //定位，输出文件的目标路径
        filename: '[name].js'
    },
    devtool: 'inline-source-map',
    module: { //模块的相关配置
        rules: [ //根据文件的后缀提供一个loader,解析规则
            {
                test: /\.js$/, //es6 => es5 
                include: [
                    path.resolve(__dirname, 'src')
                ],
                // exclude:[], 不匹配选项（优先级高于test和include）
                use: 'babel-loader'
            },
            // {
            //     test: /\.js$/,
            //     enforce: 'post',
            //     exclude: /node_modules|\.test\.js$/,
            //     use: {
            //         loader: 'istanbul-instrumenter-loader',
            //         options: { esModules: true }
            //     },
            //     // include: path.resolve('src/components/')
            // },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'less-loader'
                    ]
                })
            },
            { //图片loader
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'file-loader' //根据文件地址加载文件
                }]
            }
        ]
    },
    resolve: { //解析模块的可选项
        // modules: [ ]//模块的查找目录 配置其他的css等文件
        extensions: [".js", ".json", ".jsx", ".less", ".css"], //用到文件的扩展名
        alias: { //模快别名列表
            '@': path.resolve(__dirname, 'src'),
            'components': path.resolve(__dirname, 'src/components'),
            'test_components': path.resolve(__dirname, 'test/module')
        }
    },
    plugins: [ //插进的引用, 压缩，分离美化
        new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin('[name].css'), //[name] 默认  也可以自定义name  声明使用
        new HtmlWebpackPlugin({ //将模板的头部和尾部添加css和js模板,dist 目录发布到服务器上，项目包。可以直接上线
            file: 'index.html', //打造单页面运用 最后运行的不是这个
            template: 'public/index.html' //vue-cli放在跟目录下
        }),
        // new CopyWebpackPlugin([ //src下其他的文件直接复制到dist目录下
        //     {
        //         from: 'src/assets/favicon.ico',
        //         to: 'favicon.ico'
        //     }
        // ]),
        // new webpack.ProvidePlugin({ //引用框架 jquery  lodash工具库是很多组件会复用的，省去了import
        //     '_': 'lodash' //引用webpack
        // })
    ]
}