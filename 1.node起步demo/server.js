/**
 * node sever demo
 * 命令行界面输入 node server.js这个文件就跑起来了
 */
//引入node的http模块
var http = require('http');
//createServer()方法创建了一个对象，这个对象有一个listen方法是设置端口号的
http.createServer(function (request, response) {

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // 发送响应数据 "Hello World"
    response.end('Hello World\n');
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');