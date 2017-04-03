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
