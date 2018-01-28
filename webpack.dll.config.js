const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        bundle: [
            'iview',
            'vue',
            'vue-router'
        ]
    },
    output: {
        path: path.join(__dirname, 'build/static/dll'),
        filename: '[name].dll.js',
        library: '[name]_library'
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, 'build/static/dll', '[name]-manifest.json'),
            name: '[name]_library',
            context: __dirname
        })
    ]
};
