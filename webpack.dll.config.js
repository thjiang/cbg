const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        bundle: [
            'react',
            'react-dom'
        ]
    },
    output: {
        path: path.join(__dirname, 'build/dll'),
        filename: '[name].dll.js',
        library: '[name]_library'
    },
    // mode: env.NODE_ENV === 'prod' ? 'production' : 'development',
    mode: 'production',
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, 'build/dll', '[name]-manifest.json'),
            name: '[name]_library',
            context: __dirname
        })
    ]
};
