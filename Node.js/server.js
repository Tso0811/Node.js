const http = require("http");
const dateTime = require("./myFirstModule");
http.createServer(function (req,res){
    res.statusCode = 200 ;  //
    res.setHeader("Content-Type","text/html ; charset=utf-8");
    res.end(dateTime.dateTime());
}).listen(8000);    