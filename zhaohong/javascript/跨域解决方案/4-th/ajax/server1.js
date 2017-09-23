
var fs = require("fs");
var http = require("http");
var url = require("url");

http.createServer(function(req, res){
	var queryObj = url.parse(req.url, true).query;
	var obj = JSON.stringify({name: 'zhaohong'});

	res.write(queryObj.callback + "(" + obj + ")");
	res.end();

}).listen(3000);

console.log("监听 127.0.0.1:3000 ...");
