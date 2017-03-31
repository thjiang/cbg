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
	console.log(req);
    data = {
        result: {
            success: true,
            data: {
                a: 1
            }
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

	console.log('应用实例，访问地址为 http://%s:%s', host, port);
});
