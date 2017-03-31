const restify = require('restify');

const server = restify.createServer({
	name: 'myapp'
});

server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.CORS());
server.use(restify.jsonp());

let data;

function respond(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');

    data = {
        result: {
            success: true,
            data: {
                a: 1
            }
        },
        statue: {
            code: 0,
            message: 'OK'
        }
    };

    res.send({
        data
    });
}

function respondDetail(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log(req.params.taskid);
}

server.get('/taskList', respond);
server.head('/taskList', respond);

server.get('/:taskid', respondDetail);

server.listen(3900, function () {
	console.log('%s listening at %s', server.name, server.url);
});
