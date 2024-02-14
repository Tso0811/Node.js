const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
const qs = require('querystring'); //+

var template = fs.readFileSync(__dirname + '/forum.ejs', 'utf-8');
var posts = []; //+

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        //表單提交
        req.data = "";
        req.on("readable", function () {
    
            var chr = req.read();
            if (chr)
                req.data += chr;
        });
        req.on("end", function () {
            //表單處理
            var query = qs.parse(req.data);
            posts.push(query.content);
            showForm(posts, res);
        });
    } else {
        //表單顯示
        showForm(posts, res);
    }
});

const hostname = '127.0.0.1';
const port = 3000;
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

function showForm(p_posts, res) {
    var data = ejs.render(template, {
        title: 'hello ejs',
        posts: p_posts
    });
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.end(data);
}