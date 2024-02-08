const http = require("http");
const fs = require("fs");
http.createServer(function(req,res){
    fs.readFile(__dirname + '/index.html', 'utf-8', function(err,data) {
        if (err){
            res.statusCode = 404 ;
            res.setHeader ("Content-Type" , "text/plain");
            res.end("Not Found");
        }
        else{
            res.statusCode = 200 ;
            res.setHeader ("Content-Type" , "text/html");
            res.end(data);
        }
    });
}).listen(5000) ;