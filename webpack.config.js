const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const HappyPack = require('happypack');

module.exports = env => {
    let cdnpath = "http://localhost:2048/build";
    let publicPath = '/build/';

    if (env.NODE_ENV === 'prod') {
        cdnpath = publicPath = "https://c.icewish.top/const/cbg";
    }

    return {
        entry: './src/main',
        output: {
            // filename: '[name].[hash:8].js',
            filename: '[name].js',
            path: path.join(__dirname, 'build'),
            publicPath: publicPath
        },
        module: {
            rules: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader?cacheDirectory=true'
            }, {
                test: /\.css$/,
                use: [
                    env.NODE_ENV === 'dev' ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'
                ]
            }, {
                test: /\.less$/,
                // loader: 'style-loader!css-loader!postcss-loader!less-loader'
                use: [
                    env.NODE_ENV === 'dev' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'less-loader'
                ]
            }]
        },
        plugins: [
            new webpack.DllReferencePlugin({
                context: __dirname,
                manifest: require('./build/dll/bundle-manifest.json')
            }),
            new HtmlWebpackPlugin({
                inject: false,
                title: '天下贰藏宝阁高级查询',
                template: 'index.ejs',
                cdnpath: cdnpath
            }),
            new MiniCssExtractPlugin({
                filename: "index.css",
                chunkFilename: "[id].css"
            })
            // new HappyPack({
            //     id: 'jsx',
            //     loaders: ['babel-loader?cacheDirectory=true']
            // })
        ],
        mode: env.NODE_ENV === 'prod' ? 'production' : 'development',
        devServer: {
            open: true,
            openPage: 'build/',
            inline: true,
            quiet: false,
            // progress: true,
            disableHostCheck: true, // 解决 Invalid Host Header，禁用 host header 正确性检测
            port: 2048
        }
    }
};