const http = require("http");
const url = require("url");
const superagent = require("superagent");
const cheerio = require("cheerio");
const async = require("async");
const eventproxy = require('eventproxy');
const request = require('request');

request('https://api.douban.com/v2/movie/top250?count=10', function (error, response, body) {
    if (!error && response.statusCode === 200) {
        console.log(body);
    }
});
// request('http://tx3.cbg.163.com/cgi-bin/search.py?act=overall_search_role&order_by=&page=1&other_arg=&school=6&sex=1&price_min=456700&price_max=678900&equip_level_min=67&equip_level_max=80&xiuwei_min=54000&xiuwei_max=58000&', function (error, response, body) {
//     if (!error && response.statusCode === 200) {
//         console.log(body);
//     }
// });
