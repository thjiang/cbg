## 环境启动

```javascript
# 前端 webpack-dev-server 启动
npm run wds

# Node.js 本地调试
// node-inspector --web-port = 8888
node --inspect server/app.js // 不再使用node-inspector，加入 `--inspect` 参数启动app，浏览器可直接调试

# 使用supervisor自动监听文件变化，自动重启
supervisor server/app.js
supervisor --inspect server/app.js

# 线上环境PM2启动
pm2 start server/app.js --name 'cbg' --watch
```

## 参数/接口

### 服务端查询参数

```javascript
http://tx3.cbg.163.com/cgi-bin/search.py?
act=overall_search_role&order_by=&page=1&other_arg=&school=6&sex=1&
price_min=456700&price_max=678900&equip_level_min=67&
equip_level_max=80&xiuwei_min=54000&xiuwei_max=58000&
special_clothes_logic=or&special_rider_logic=and&
special_clothes=121705,121706,210037,210038,210039,210040,210073,210074|210000,210001,210002,210003,210004,210005&
special_rider=21968|21818&
```

### CBG返回数据对照

见 `src/doc.json`

完整版见 `src/data.json`

`src/data0.json` 中含 `large_equip_desc` 字段
