/**
 * Created by codingnuts on 2017/11/24.
 */
var http = require("http");
// operate files
var fs = require('fs');


//create server
var server = http.createServer(function (req, res) {

	if(req.url == "/cube"){
		//read file
		fs.readFile("./example.html", function (err, data) {
			// res: response; req: request
			res.writeHead(200, {"Content-type": "text/html;charset=UTF-8"});
			res.end(data);
		});
	}else if(req.url == "/fang"){
		//read file
		fs.readFile("./example.html", function (err, data) {
			// res: response; req: request
			res.writeHead(200, {"Content-type": "text/html;charset=UTF-8"});
			res.end(data);
		});
	}else{
		//read file
		fs.readFile("./404.html", function (err, data) {
			// res: response; req: request
			res.writeHead(200, {"Content-type": "text/html;charset=UTF-8"});
			res.end(data);
		});
	}


});

server.listen(3000, "127.0.0.1");

// node 02_staticRender.js