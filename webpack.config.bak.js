const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    output: {
        path: path.resolve('./build/'),
        publicPath: '/build/',
        filename: '[name].js'
    },
    entry: {
        index: path.join(__dirname, 'src', 'main')
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.less$/,
            loader: 'style-loader!css-loader!less-loader'
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader?limit=8192&name=image/[name].[ext]'
        }, {
            test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
            loader: 'file-loader'
        }, {
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
			test: /\.js$/,
            loader: 'babel-loader',
            // query: { presets: ['es2015'] },
            exclude: /node_modules/
		}]
	},
    plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./build/bundle-manifest.json')
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.tpl.html',
            inject: true
        })
    ],
	devServer: {
		hot: false,
        inline: true,
        quiet: false,
        port: 9091,
        // noInfo: true,
        publicPath: '/build/',
        disableHostCheck: true, // 解决 Webpack "Invalid Host Header"
        stats: {
            colors: true
        }
	}
};