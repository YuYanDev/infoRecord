# infoRecord
A small batch logger for Node.js

---
[中文文档](README_zh.md)

---
### What the software is doing?

Sometimes you need to test some unknown requests or analyze some known requests.This package can help you to record these requests into a file.

It allows front-end developers to easily know what data POST.
Even you can use it to create a capturing tool.

### How to use it?

First install it
``` 
npm install info-record
```

##### Call the way
By default, time and terminal output are recorded for easy debugging.
``` javascript
var data = "data"
var filepath = 'log/api1.log'
infoRecord(data, filepath);
```

Such as closing time recording and terminal output.
``` javascript
var data = "data"
var filepath = 'log/api1.log'
var options = {
    time: 'false',
    consoleLog: 'false'
}
infoRecord(data, filepath, options);
```

Such as closing time recording .
``` javascript
var data = "data"
var filepath = 'log/api1.log'
var options = {
    time: 'true',
    consoleLog: 'false'
}
infoRecord(data, filepath, options);
```

##### Example
Then you can call it in the middle of the web framework. 
Example code for Express

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

Example output:
``` 
2017-10-29T17:18:58+08:00 :
{"message":"Not Found","documentation_url":"https://developer.github.com/v3"}

2017-10-29T17:18:59+08:00 :
{"message":"Not Found","documentation_url":"https://developer.github.com/v3"}
```

---

Welcome to the issue feedback bug and provide advice.
Thank you!

---

### License

[MIT](http://opensource.org/licenses/MIT)