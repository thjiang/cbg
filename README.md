### 启动开发环境

```bash
# 前端webpack-dev-server启动
npm run wds

# 本地调试器启动
node-inspector --web-port = 8888
# node-debug --no-preload server/app.js

# 使用supervisor自动监听文件变化，自动重启
supervisor server/app.js

# 线上环境forever启动
forever start -w server/app.js

```


### CBG查询参数

```javascript
http://tx3.cbg.163.com/cgi-bin/search.py?act=overall_search_role&order_by=&page=1&other_arg=&school=6&sex=1&price_min=456700&price_max=678900&equip_level_min=67&equip_level_max=80&xiuwei_min=54000&xiuwei_max=58000&
```
