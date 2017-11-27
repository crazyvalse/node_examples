/**
 * Created by codingnuts on 2017/11/26.
 * 1. create a folder
 * 2. remove a folder
 * 3. stat - check
 * 4. readdir
 * 5. show all the files
 */

const http = require("http");
const fs = require("fs");

http.createServer(function (req, res) {
	if(req.url == "/favicon.ico"){
		return;
	}

	//  - 1. create a folder
	//fs.mkdir("/Users/c"odingnuts/Documents/WorkSpace/5_WebStorm/Github/node/node_examples/01/testFolder");
	//  - 2. remove a folder
	//fs.rmdir("/Users/codingnuts/Documents/WorkSpace/5_WebStorm/Github/node/node_examples/01/testFolder");

	//  - 3. stat
	/*fs.stat("./test", function (err, stats) {
		if (err) throw err;

		console.info(stats.isDirectory());
		console.info(stats.isFile());
	});*/

	//  - 4. readdir
	/*fs.readdir('/Users/codingnuts/Documents/WorkSpace/5_WebStorm/Github/node/node_examples/01', function (err, files) {
		if (err) throw err;
		console.info(files);
	});*/

	res.end();
}).listen(3000, "localhost");





