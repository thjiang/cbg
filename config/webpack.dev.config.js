var webpack = require('webpack');
var merge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var baseWebpackConfig = require('./webpack.base.config');
var utils = require('./utils');
var config = require('./config');

Object.keys(baseWebpackConfig.entry).forEach(function(name) {
    baseWebpackConfig.entry[name] = [
        `webpack-dev-server/client?http://localhost:${config.dev.port}/`,
        "webpack/hot/dev-server"
    ].concat(baseWebpackConfig.entry[name])
});

module.exports = merge(baseWebpackConfig, {
    output: {
        path: config.dev.outputPath,
        publicPath: config.dev.outputPublicPath
    },
    module: {
        rules: utils.styleLoaders()
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
		new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module) {
                return module.context && module.context.indexOf("node_modules") !== -1;
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            chunks: ['vendor']
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.tpl.html',
            inject: true
        })
    ]
})
