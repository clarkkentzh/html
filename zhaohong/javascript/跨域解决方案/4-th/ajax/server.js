var fs = require("fs");
var http = require("http");
var url = require("url");

var data = "{'name': 'zhaohong', 'age': 24 }";

http.createServer(function(request, response){
    var path = url.parse(request.url).path;
    if (path == "/test"){

      //设置允许客户端的跨域ajax请求
      response.setHeader("Access-Control-Allow-Origin", "*" );
      response.writeHead(200, {"Content-type": "text/plain"});
      response.end(data);
    }
}).listen(3000);

console.log("监听 127.0.0.1:3000 ....");
