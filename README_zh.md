# infoRecord
一个Node.js的小型日志记录器

---
### 这东西是干嘛用的?

有些时候你需要测试一些未知的请求或者分析一些请求。这个库能帮助你把抓到的请求写到个文件里。
它能够帮助前端开发者查看自己的代码到底post了些什么给后端，方便前后端对接。
甚至可以拿它来做个抓包工具。

### 怎么用?

肯定是先安装
``` 
npm install info-record
```

##### 调用方法
默认情况下，会把时间记录下来，然后在终端打印信息方便调试
``` javascript
var data = "data"
var filepath = 'log/api1.log'
infoRecord(data, filepath);
```

你也可以关掉它
``` javascript
var data = "data"
var filepath = 'log/api1.log'
var options = {
    time: 'false',
    consoleLog: 'false'
}
infoRecord(data, filepath, options);
```

也可以只关掉一个
``` javascript
var data = "data"
var filepath = 'log/api1.log'
var options = {
    time: 'true',
    consoleLog: 'false'
}
infoRecord(data, filepath, options);
```

##### 打个比方
然后，挑一个简单的框架，写个中间件来调用
拿Express举个栗子

``` javascript
var infoRecord = require('info-record')

/* some code */

app.post('/api', function (req, res, next) {
  var data = req.body;
  var filepath = 'log/api1.txt'
  var options = {
    time: 'false',
    consoleLog: 'true'
  }
  infoRecord(data, filepath, options);
  res.send('yes');
});

app.post('/api2', function (req, res, next) {
  var data = req.body;
  var filepath = 'log/api2.txt'
  var options = {
    time: 'true',
    consoleLog: 'true'
  }
  var backString = infoRecord(data, filepath, options);
  res.send(backString);
});
```

输出后长这个样
``` 
2017-10-29T17:18:58+08:00 :
{"message":"Not Found","documentation_url":"https://developer.github.com/v3"}

2017-10-29T17:18:59+08:00 :
{"message":"Not Found","documentation_url":"https://developer.github.com/v3"}
```

---

欢迎反馈bug和提建议
感谢老铁！

---

### License

[MIT](http://opensource.org/licenses/MIT)