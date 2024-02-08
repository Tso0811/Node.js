const http = require("http");
http.createServer(function (req,res){
    req.statusCode = 200 ;
    res.setHeader("Content-Type","text/html ; charset=utf-8");
    res.end("你好");

}).listen(8000);