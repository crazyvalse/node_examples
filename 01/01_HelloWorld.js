/**
 * Created by codingnuts on 2017/11/24.
 */

var http = require("http");

var server = http.createServer(function (req, res) {
	//req 请求， res 响应
	res.writeHead(200, {"Content-type": "text/html;charset=UTF-8"});
	res.end("yo, 这是Hello World");
});

server.listen(3000, "127.0.0.1");


//node 01_HelloWorld
//http://127.0.0.1:3000