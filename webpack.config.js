const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; // webpack 性能分析
// const ExtractTextPlugin = require("extract-text-webpack-plugin");

// const git = require('git-rev-sync');

// const version = getVersion();
const version = '0.0.1';
const env = process.env.NODE_ENV.trim();

console.log("当前环境：" + env);
console.log("当前分支： publish/" + version);

// var cdnpath = "http://localhost:9091/build/static";
let cdnpath = "http://localhost:9091/build";
let publicPath = '/build/';
let filename = 'pages/index.html';

if (env === "daily") {
    cdnpath = "https://assets.daily.geilicdn.com/m/zhanhui-admin/" + version;
    publicPath = cdnpath + '/';
    filename = path.join(__dirname, 'build/pages/index.html');
} else if (env === "pre") {
    cdnpath = "https://assets.pre.geilicdn.com/m/zhanhui-admin/" + version;
    publicPath = cdnpath + '/';
    filename = path.join(__dirname, 'build/pages/index.html');
} else if (env === "prod") {
    cdnpath = "https://assets.geilicdn.com/m/zhanhui-admin/" + version;
    publicPath = cdnpath + '/';
    filename = path.join(__dirname, 'build/pages/index.html');
}

function getVersion() {
    let ver = git.branch();
    ver = ver.indexOf('publish/') > -1 ? ver.replace(/publish\//, '') : '0.0.0';
    return ver;
}

module.exports = {
    entry: {
		index: path.join(__dirname, 'src', 'main'),
        // vendors: ['vue']
	},
	output: {
		path: path.join(__dirname, 'build/static'),
		filename: 'main.js',
        publicPath: publicPath
	},
    // externals: {
    //     'vue': 'Vue',
    //     'VueRouter': 'VueRouter'
    // },
	module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style-loader!css-loader!postcss-loader'
        }, {
            test: /\.less$/,
            loader: 'style-loader!css-loader!less-loader'
        }, {
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
            loader: 'file-loader',
            query: {
                name: '[name].[ext]'
            }
        }, {
			test: /\.js$/,
            loader: 'babel-loader?cacheDirectory=true',
            exclude: /node_modules/
		}]
	},
	plugins: [
		// new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendors', filename: 'vendor.bundle.js'
        // }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./dll/bundle-manifest.json')
        }),
        new HtmlWebpackPlugin({
            inject: false,
            title: '天下贰藏宝阁高级查询',
            filename: filename,
            template: 'index.ejs',
            cdnpath: cdnpath
        })
	],
	resolve: {
        modules: [path.resolve(__dirname, 'node_modules')]
	},
	devServer: {
		hot: false,
        inline: true,
        quiet: false,
        disableHostCheck: true, // 解决 Invalid Host Header，禁用 host header 正确性检测
        stats: {
            chunks: false
        },
        port: 9091
	}

    // http://h5.dev.weidian.com/build/pages/#!/activity/1
};
