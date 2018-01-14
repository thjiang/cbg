var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var devConfig = require("./webpack.dev.config");
var config = require("./config");

var compiler = webpack(devConfig);

var server = new webpackDevServer(compiler, {
    hot: true,
    // noInfo: true,
    publicPath: config.dev.outputPublicPath,
    disableHostCheck: true, // 解决 Webpack "Invalid Host Header"
    stats: {
        colors: true
    }
});

server.listen(config.dev.port, "0.0.0.0");

var url = `http://www.dev.com:${config.dev.port}/`;

// 需先安装 opn 模块 npm i opn -D
var opn = require('opn');

// 打包完毕后启动浏览器
server.middleware.waitUntilValid(function() {
    console.log(`> Listening at ${url}`);
    opn(`${url}`);
});
