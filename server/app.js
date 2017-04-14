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
                "avatar": "http://res.tx3.cbg.163.com/images/role/smallface/61.jpg",
                "school": "天机",
                "nickname": "三千多个天机啊呀呀",
                "server": "天下无双",
                "equipscore": "103582",
                "score": "634524",
                "lefttime": "1491040879893",
                "price": "124000",
                "yxblink": "http://bang.tx3.163.com/bang/role/39_17647",
                "cbglink": "http://tx3.cbg.163.com/cgi-bin/equipquery.py?act=overall_search_show_detail&serverid=171&equip_id=75154"
            }, {
                "avatar": "http://res.tx3.cbg.163.com/images/role/smallface/12.jpg",
                "school": "荒火",
                "nickname": "三千多个荒火",
                "server": "天府之国",
                "equipscore": "103582",
                "score": "634524",
                "lefttime": "1491059879893",
                "price": "124000",
                "yxblink": "http://bang.tx3.163.com/bang/role/39_17647",
                "cbglink": "http://tx3.cbg.163.com/cgi-bin/equipquery.py?act=overall_search_show_detail&serverid=171&equip_id=75154"
            }, {
                "avatar": "http://res.tx3.cbg.163.com/images/role/smallface/12.jpg",
                "school": "云麓",
                "nickname": "三千多个云麓",
                "server": "长相思",
                "equipscore": "103582",
                "score": "634524",
                "lefttime": "1491041879893",
                "price": "124000",
                "yxblink": "http://bang.tx3.163.com/bang/role/39_17647",
                "cbglink": "http://tx3.cbg.163.com/cgi-bin/equipquery.py?act=overall_search_show_detail&serverid=171&equip_id=75154"
            }, {
                "avatar": "http://res.tx3.cbg.163.com/images/role/smallface/12.jpg",
                "school": "弈剑",
                "nickname": "三千多个弈剑",
                "server": "莫问今朝",
                "equipscore": "103582",
                "score": "634524",
                "lefttime": "1491054879893",
                "price": "124000",
                "yxblink": "http://bang.tx3.163.com/bang/role/39_17647",
                "cbglink": "http://tx3.cbg.163.com/cgi-bin/equipquery.py?act=overall_search_show_detail&serverid=171&equip_id=75154"
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
