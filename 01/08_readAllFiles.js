/**
 * Created by codingnuts on 2017/11/27.
 */
const http = require("http");
const fs = require("fs");

http.createServer(function (req, res) {
	if (req.url == "/favicon.ico") {
		return;
	}

	fs.readdir('/Users/codingnuts/Documents/WorkSpace/5_WebStorm/Github/node/node_examples/01', function (err, files) {
		if (err) throw err;
		var folderList = [];

		(function iterator (i) {
			if (i == files.length) {
				console.info(folderList);
				return;
			}

			fs.stat("./" + files[i], function (err, stats) {
				if (err) throw err;
				if( stats.isFile()){
					folderList.push(files[i]);
				}

				iterator(++ i);
			});
		})(0);
	});
	res.end();
}).listen(3000, "localhost");