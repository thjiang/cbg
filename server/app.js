const express = require('express');
const request = require('request');
// const http = require("http");
// const url = require("url");
// const superagent = require("superagent");
// const cheerio = require("cheerio");
// const async = require("async");
// const eventproxy = require('eventproxy');

const app = express();

const allowCrossDomain = function (req, res, next) {
	const allows = [
        "http://localhost:9091",
        "https://thjiang.github.io",
        "https://www.thjiang.com",
        "http://www.thjiang.com",
        "https://cbg.thjiang.com",
        "http://cbg.thjiang.com"
    ];
	if (allows.indexOf(req.headers.origin) > -1) {
		res.header("Access-Control-Allow-Origin", req.headers.origin);
	}
	// res.header('Access-Control-Allow-Origin', 'http://localhost:9091');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	res.header('Access-Control-Allow-Credentials', 'true');
	next();
};

app.use(allowCrossDomain);

let data;
let checkedData;

app.get('/', function (req, res) {
	res.send('Hello World');
});

app.get('/roleList', function (req, res) {
	console.log(req.query.id);

	request('http://tx3.cbg.163.com/cgi-bin/search.py?act=overall_search_role&order_by=&page=1&other_arg=&school=8&price_min=666600&price_max=777700&equip_level_min=78&equip_level_max=79&', function (error, response, body) {
		if (!error && response.statusCode === 200) {
			const cbgData = JSON.parse(body);
			if (cbgData.status === 0 && cbgData.msg) {
				checkedData = new Array(cbgData.msg.length); // 整理过的数据，准备发送给前端
				for (let i = 0; i < cbgData.msg.length; i++) {
					checkedData[i] = {};
					checkedData[i].avatar = 'http://res.tx3.cbg.163.com/images/role/smallface/61.jpg'; // 暂定
					checkedData[i].school = cbgData.msg[i].school;
					checkedData[i].nickname = unescape(cbgData.msg[i].equip_name.replace(/\u/g, "%u"));
					checkedData[i].server = unescape(cbgData.msg[i].server_name.replace(/\u/g, "%u"));
					checkedData[i].equipscore = cbgData.msg[i].equ_xiuwei;
					checkedData[i].score = cbgData.msg[i].xiuwei;
					checkedData[i].lefttime = (cbgData.msg[i].expire_time * 1000) - new Date().getTime();
					// checkedData[i].jiahu = cbgData.msg[i].equip_jia_hu;
					// checkedData[i].lianhu = cbgData.msg[i].equip_lian_hu;
					// checkedData[i].level = cbgData.msg[i].equip_level;
					// checkedData[i].tian_hun_level = cbgData.msg[i].tian_hun_level;
					checkedData[i].price = (cbgData.msg[i].price / 100).toFixed(2) * 1;
					// 取到的价格格式为 778900，需要截取2位小数
					checkedData[i].cbglink = 'http://tx3.cbg.163.com/cgi-bin/equipquery.py?act=overall_search_show_detail&equip_id=' + cbgData.msg[i].equipid + '&serverid=' + cbgData.msg[i].serverid;
					checkedData[i].yxblink = 'http://bang.tx3.163.com/bang/search#name=' + encodeURI(unescape(cbgData.msg[i].equip_name.replace(/\u/g, "%u")));
				}

				data = {
					result: {
						success: true,
						data: checkedData
					},
					status: {
						code: 0,
						message: 'OK'
					}
				};

				res.send(data);
			}
			// console.log(body);
		}
	});
});

const server = app.listen(8081, function () {
	const host = server.address().address;
	const port = server.address().port;

	console.log('Listening at http://%s:%s', host, port);
});

// mock data
// [{
// 	"avatar": "http://res.tx3.cbg.163.com/images/role/smallface/61.jpg",
// 	"school": "天机",
// 	"nickname": "三千多个天机",
// 	"server": "天下无双",
// 	"equipscore": "103582",
// 	"score": "634524",
// 	"lefttime": "1491040879893",
// 	"price": "124000",
// 	"yxblink": "http://bang.tx3.163.com/bang/role/39_17647",
// 	"cbglink": "http://tx3.cbg.163.com/cgi-bin/equipquery.py?act=overall_search_show_detail&serverid=171&equip_id=75154"
// }, {
// 	"avatar": "http://res.tx3.cbg.163.com/images/role/smallface/12.jpg",
// 	"school": "荒火",
// 	"nickname": "三千多个荒火",
// 	"server": "天府之国",
// 	"equipscore": "103582",
// 	"score": "634524",
// 	"lefttime": "1491059879893",
// 	"price": "124000",
// 	"yxblink": "http://bang.tx3.163.com/bang/role/39_17647",
// 	"cbglink": "http://tx3.cbg.163.com/cgi-bin/equipquery.py?act=overall_search_show_detail&serverid=171&equip_id=75154"
// }, {
// 	"avatar": "http://res.tx3.cbg.163.com/images/role/smallface/12.jpg",
// 	"school": "云麓",
// 	"nickname": "三千多个云麓",
// 	"server": "长相思",
// 	"equipscore": "103582",
// 	"score": "634524",
// 	"lefttime": "1491041879893",
// 	"price": "124000",
// 	"yxblink": "http://bang.tx3.163.com/bang/role/39_17647",
// 	"cbglink": "http://tx3.cbg.163.com/cgi-bin/equipquery.py?act=overall_search_show_detail&serverid=171&equip_id=75154"
// }, {
// 	"avatar": "http://res.tx3.cbg.163.com/images/role/smallface/12.jpg",
// 	"school": "弈剑",
// 	"nickname": "三千多个弈剑",
// 	"server": "莫问今朝",
// 	"equipscore": "103582",
// 	"score": "634524",
// 	"lefttime": "1491054879893",
// 	"price": "124000",
// 	"yxblink": "http://bang.tx3.163.com/bang/role/39_17647",
// 	"cbglink": "http://tx3.cbg.163.com/cgi-bin/equipquery.py?act=overall_search_show_detail&serverid=171&equip_id=75154"
// }]
