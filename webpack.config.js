const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: __dirname + '/src/index.js',
    output: {
        path: __dirname + '/dist', // webpack 本地打包路径
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist'),
        // 线上发布路径，和path最好保持一致，html页面引入script路径
        publicPath: '/dist/'
    },
    devServer: {
        port: 9000
    },
    module: {
        rules: [{
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.less$/,
            loader: 'style!css!less?sourceMap'
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            // 可以单独在当前目录下配置.babelrc，也可以在这里配置
            query: {
                presets: ['env'],
                plugins: ['istanbul']
            },
            // 排除 node_modules 下不需要转换的文件，可以加快编译
            exclude: /node_modules/
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192'
        }, {
            test: /\.tpl$/,
            loader: 'mustache'
        }]
    }
}