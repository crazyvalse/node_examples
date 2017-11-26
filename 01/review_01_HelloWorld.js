/**
 * Created by codingnuts on 2017/11/26.
 */

//create http instance
const http = require('http');

//create server instance
http.createServer(function (request, response) {
	response.writeHead(200, {
		"Content-Type": "text/html",
		"charset": "UTF8"
	});
	response.write("<h1>Hello World 666</h1>");
	response.end();

}).listen(3000, 'localhost');