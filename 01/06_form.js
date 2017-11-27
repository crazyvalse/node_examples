/**
 * Created by codingnuts on 2017/11/26.
 */
const Http = require("http");
const Url = require("url");

Http.createServer(function (request, response) {
	if(request.url=="/favicon.ico") return;

	console.info(__filename)
	console.info(__dirname)

	console.info(request.url);
	const query = Url.parse(request.url, true).query;
	console.info(query);
	console.info(query.username);
	console.info(query.passWord);   //不区分大小写
	response.end();
}).listen(3000, "localhost");

