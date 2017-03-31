const express = require('express');

const app = express();

const allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:9091');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
};

app.use(allowCrossDomain);

let data;

app.get('/', function (req, res) {
	res.send('Hello World');
});

app.get('/roleList', function (req, res) {
	console.log(req.query.id);
    data = {
        result: {
            success: true,
            data: [{
                year: '2016-07-07',
                title: '王二虎',
                genres: ['剧情', '爱情', req.query.id],
                images: {
                    small: 'https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p513344864.jpg',
                    large: 'https://img3.doubanio.com/view/movie_poster_cover/spst/public/p513344864.jpg',
                    medium: 'https://img3.doubanio.com/view/movie_poster_cover/spst/public/p513344864.jpg'
                },
                rating: {
                    'max': 10,
                    'average': 9.5,
                    'stars': '50',
                    'min': 0
                }
            }, {
                year: '2016-07-08',
                title: '王三虎',
                genres: ['剧情', '爱情'],
                images: {
                    small: 'https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p513344864.jpg',
                    large: 'https://img3.doubanio.com/view/movie_poster_cover/spst/public/p513344864.jpg',
                    medium: 'https://img3.doubanio.com/view/movie_poster_cover/spst/public/p513344864.jpg'
                },
                rating: {
                    'max': 10,
                    'average': 9.5,
                    'stars': '50',
                    'min': 0
                }
            }]
        },
        status: {
            code: 0,
            message: 'OK'
        }
    };

    res.send(data);
});

const server = app.listen(8081, function () {
	const host = server.address().address;
	const port = server.address().port;

	console.log('Listening at http://%s:%s', host, port);
});
