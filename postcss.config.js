module.exports = {
    plugins: [
        require('cssnano')({
            autoprefixer: {
                add: true,
                browsers: ['> 3%', 'last 2 versions']
            }
        })
    ]
};