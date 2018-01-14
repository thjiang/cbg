var path = require('path');
var webpack = require('webpack');
var utils = require('./utils');

function resolve(relPath) {
    return path.resolve(__dirname, relPath);
}

module.exports = {
    entry: {
        app: resolve('../src/main.js')
    },
    output: {
		filename: 'js/[name].js',
        chunkFilename: "js/[name].[chunkhash].js"
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: "babel-loader",
                include: [resolve('../src')]
            },
            {
                test: /\.vue$/,
                use: {
                    loader: "vue-loader",
                    options: utils.vueLoaderOptions()
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 8192,
                        name: 'images/[name].[hash:7].[ext]'
                    }
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 8192,
                        name: 'fonts/[name].[hash:7].[ext]'
                    }
                }]
            }
        ]
    }
}
