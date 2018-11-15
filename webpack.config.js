const path = require('path')
// css抽离为一个文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
// 压缩copyHtml
const HtmlWebPackPlugin = require("html-webpack-plugin")
// 先清理dist
const CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = (env, argv) => {
    const devMode = argv.mode !== 'production'
    return {
        entry: [
            "babel-polyfill",
            path.join(__dirname, './src/index.js')
        ],
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: 'build.js'
        },
        module: {
            rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }, {
                test: /\.html$/,
                use: [{
                    loader: "html-loader",
                    options: {
                        minimize: true
                    }
                }]
            }, {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }, {
                test: /\.less$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'less-loader',
                ]
            }, {
                test: /\.tpl$/,
                loader: 'mustache'
            }, {
                test: /\.css$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            }]
        },
        plugins: [
            // ...,
            new MiniCssExtractPlugin({
                filename: "[name].css",
                chunkFilename: "[id].css"
            }),
            new HtmlWebPackPlugin({
                template: "./public/index.html"
            }),
            new CleanWebpackPlugin(['dist'])
        ]
    }
}