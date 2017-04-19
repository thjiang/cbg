const path = require('path');
const webpack = require('webpack');
// const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
// const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
		index: path.join(__dirname, 'src', 'main'),
        vendors: ['vue']
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/dist/'
	},
	module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style-loader!css-loader!autoprefixer-loader'
        }, {
            test: /\.less$/,
            loader: 'style-loader!css-loader!less-loader'
        }, {
            test: /\.html$/,
            loader: 'file-loader?name=../pages/[name].[ext]'
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
		new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: 'vendor.bundle.js' })
	],
	resolve: {
		extensions: ['.js', '.vue'],
		alias: {
			vue: 'vue/dist/vue.js'
		}
	},
	devServer: {
		hot: false,
        inline: true,
        quiet: false,
        port: 9091
	}
};
