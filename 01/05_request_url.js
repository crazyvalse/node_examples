/**
 * Created by codingnuts on 2017/11/26.
 */

const http = require("http");
const url = require("url");

/**
 * 1. requst.url
 * 2. query
 * 3. path
 * 4. query string - key value
 */
http.createServer(function (request, response) {
	//console.info(typeof request.url); //string
	// - The url.parse() method takes a URL string, parses it, and returns a URL object.
	//console.info(url.parse(request.url));

	// - If true, the query property will always be set to an object returned by the querystring module's parse() method.
	// - If false, the query property on the returned URL object will be an unparsed, undecoded string. Defaults to false.
	console.info(url.parse(request.url, true));


	response.writeHead(200, {
		"Content-Type": "text/html",
		"charset": "UTF8"
	});
	response.end("666");
}).listen(3000, "localhost");

//http://localhost:3000/codingnuts/pages/index.do?t=123213123123&username=isaac&password=123

/*
Url {
	protocol: null,
		slashes: null,
		auth: null,
		host: null,
		port: null,
		hostname: null,
		hash: null,
		search: '?t=123213123123&username=isaac&password=123',
		query: 't=123213123123&username=isaac&password=123',
		pathname: '/codingnuts/pages/index.do',
		path: '/codingnuts/pages/index.do?t=123213123123&username=isaac&password=123',
		href: '/codingnuts/pages/index.do?t=123213123123&username=isaac&password=123' }*/
