const path = require('path');
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin");
const uglify = require('uglifyjs-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');//css分离

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: 'babel-loader',
                    // options: {
                    //     presets: ['es2015', 'react'],
                    // }
                },
                exclude: /node_modules/
            }, {
                test: /(\.css)$/,
                use: extractTextPlugin.extract(
                    {
                        fallback: "style-loader",
                        use: [
                            { loader: "css-loader" },
                            { loader: "postcss-loader" },
                        ]
                    }
                )
            }, {
                test: /\.(png|jpg|gif|jpeg)/,  //是匹配图片文件后缀名称
                use: [{
                    loader: 'url-loader', //是指定使用的loader和loader的配置参数
                    options: {
                        limit: 500,  //是把小于500B的文件打成Base64的格式，写入JS
                        outputPath: 'images/', //打包后的图片放到images文件夹下
                    }
                }]
            }, {
                test: /\.(htm|html)$/i,
                use: ['html-withimg-loader']
            }, {
                test: /\.less$/,
                use: extractTextPlugin.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "less-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            }, {
                test: /\.scss$/,
                use: extractTextPlugin.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin(
            {
                minify: { //是对html文件进行压缩
                    removeAttributeQuotes: true  //removeAttrubuteQuotes是却掉属性的双引号。
                },
                hash: true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
                template: './src/index.html' //是要打包的html模版路径和文件名称。

            }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new uglify(),
        new extractTextPlugin('css/index.css')
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 8033,
        host: '127.0.0.1',
        hot: true
    }
};