var path = require('path');

module.exports = {
    dev: {
        outputPath: path.resolve(__dirname, '../static'),
        outputPublicPath: '/',
        port: 9091
    },
    prod: {
        outputPath: path.resolve(__dirname, '../static'),
        outputPublicPath: '/static/'
    }
}
