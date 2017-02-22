var path = require('path');
var webpack = require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

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
            loader: 'style!css!autoprefixer'
        }, {
            test: /\.less$/,
            loader: 'style!css!less'
        }, {
            test: /\.html$/,
            loader: "file-loader?name=../pages/[name].[ext]"
		}, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            query: {
                limit: 8192,
                name: `image/[name].[ext]`
            }
        }, {
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
			test: /\.js$/,
			loader: ['babel-loader?presets[]=es2015,presets[]=stage-0'],
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
}
