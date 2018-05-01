const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
                loader: 'babel-loader'
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
                title: 'React Demo',
                template: 'index.ejs',
                cdnpath: cdnpath
            }),
            new MiniCssExtractPlugin({
                filename: "index.css",
                chunkFilename: "[id].css"
            })
        ],
        mode: env.NODE_ENV === 'prod' ? 'production' : 'development',
        devServer: {
            open: true,
            openPage: 'build/',
            inline: true,
            quiet: false,
            progress: true,
            disableHostCheck: true, // 解决 Invalid Host Header，禁用 host header 正确性检测
            stats: {
                chunks: false
            },
            port: 2048
        }
    }
};