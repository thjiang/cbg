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
        "http://cbg.thjiang.com",
		"https://www.zhounan.win",
        "http://www.zhounan.win",
        "https://cbg.zhounan.win",
        "http://cbg.zhounan.win"
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
const schoolArray = ['荒火', '天机', '翎羽', '魍魉', '太虚', '云麓', '冰心', '弈剑', '鬼墨', '龙巫', '幽篁'];
let requestUrl = 'http://tx3.cbg.163.com/cgi-bin/search.py?act=overall_search_role&order_by=&page=1&other_arg=&';

app.get('/', function (req, res) {
	res.send('Hello World');
});

app.get('/roleList', function (req, res) {
	console.log(req.query.params);

	const query = JSON.parse(req.query.params);
	let page, school, sex, price_min, price_max, equip_level_min, equip_level_max,
	xiuwei_min, xiuwei_max, equ_xiuwei_min, equ_xiuwei_max, juexing_level, guizong_level,
	equip_jia_hu_min, equip_jia_hu_max, equip_lian_hu_min, equip_lian_hu_max;

	query.page ? page = query.page : page = "";
	query.school ? school = query.school : school = 1;
	query.sex ? sex = query.sex : sex = "";
	query.price_min ? price_min = query.price_min : price_min = "";
	query.price_max ? price_max = query.price_max : price_max = "";
	query.equip_level_min ? equip_level_min = query.equip_level_min : equip_level_min = "";
	query.equip_level_max ? equip_level_max = query.equip_level_max : equip_level_max = "";
	query.xiuwei_min ? xiuwei_min = query.xiuwei_min : xiuwei_min = "";
	query.xiuwei_max ? xiuwei_max = query.xiuwei_max : xiuwei_max = "";
	query.equ_xiuwei_min ? equ_xiuwei_min = query.equ_xiuwei_min : equ_xiuwei_min = "";
	query.equ_xiuwei_max ? equ_xiuwei_max = query.equ_xiuwei_max : equ_xiuwei_max = "";
	query.juexing_level ? juexing_level = query.juexing_level : juexing_level = "";
	query.guizong_level ? guizong_level = query.guizong_level : guizong_level = "";
	query.equip_jia_hu_min ? equip_jia_hu_min = query.equip_jia_hu_min : equip_jia_hu_min = "";
	query.equip_jia_hu_max ? equip_jia_hu_max = query.equip_jia_hu_max : equip_jia_hu_max = "";
	query.equip_lian_hu_min ? equip_lian_hu_min = query.equip_lian_hu_min : equip_lian_hu_min = "";
	query.equip_lian_hu_max ? equip_lian_hu_max = query.equip_lian_hu_max : equip_lian_hu_max = "";

	requestUrl = 'http://tx3.cbg.163.com/cgi-bin/search.py?act=overall_search_role&order_by=&page=1&other_arg=&school='
	+ school + '&sex=' + sex + '&price_min=' + price_min + '&price_max='
	+ price_max + '&equip_level_min=' + equip_level_min + '&equip_level_max=' + equip_level_max + '&xiuwei_min='
	+ xiuwei_min + '&xiuwei_max=' + xiuwei_max + '&equ_xiuwei_min=' + equ_xiuwei_min + '&equ_xiuwei_max='
	+ equ_xiuwei_max + '&juexing_level=' + juexing_level + '&guizong_level=' + guizong_level;

	console.log(requestUrl);
	request(requestUrl, function (error, response, body) {
		if (!error && response.statusCode === 200) {
			const cbgData = JSON.parse(body);
			if (cbgData.status === 0 && cbgData.msg) {
				checkedData = new Array(cbgData.msg.length); // 整理过的数据，准备发送给前端
				for (let i = 0; i < cbgData.msg.length; i++) {
					checkedData[i] = {};
					// 头像图片地址格式由2个数字组成：门派+性别，如云麓男，61，弈剑女82
					checkedData[i].avatar = 'http://res.tx3.cbg.163.com/images/role/smallface/' + cbgData.msg[i].school + cbgData.msg[i].sex + '.jpg';
					checkedData[i].school = schoolArray[cbgData.msg[i].school - 1];
					checkedData[i].nickname = unescape(cbgData.msg[i].equip_name.replace(/\u/g, "%u"));
					checkedData[i].server = unescape(cbgData.msg[i].server_name.replace(/\u/g, "%u"));
					checkedData[i].equipscore = cbgData.msg[i].equ_xiuwei;
					checkedData[i].score = cbgData.msg[i].xiuwei;
					checkedData[i].deadline = cbgData.msg[i].expire_time * 1000;
					checkedData[i].jiahu = cbgData.msg[i].equip_jia_hu;
					checkedData[i].lianhu = cbgData.msg[i].equip_lian_hu;
					checkedData[i].level = cbgData.msg[i].equip_level;
					checkedData[i].tian_hun_level = cbgData.msg[i].tian_hun_level;
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
		} else {
			data = {
				result: {
					success: false,
					data: []
				},
				status: {
					code: 1,
					message: '获取藏宝阁数据失败'
				}
			};

			res.send(data);
		}
	});
});

const server = app.listen(8081, function () {
	const host = server.address().address;
	const port = server.address().port;

	console.log('Listening at http://%s:%s', host, port);
});
