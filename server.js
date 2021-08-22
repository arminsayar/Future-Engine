const http = require('http');
const fs = require('fs');
const path = require('path');

let ImageExt = path.extname(path.join(__dirname, 'images', 'google.png'));



let server = http.createServer((req, res) => {
    let ImageDir = path.join(__dirname, 'images', req.url);
    if (req.url === "/") {
        fs.readFile("./index.html", "UTF-8", function (err, html) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(html);
        });
    } else if (req.url.match("\.css$")) {
        var cssPath = path.join(__dirname, './', req.url);
        var fileStream = fs.createReadStream(cssPath, "UTF-8");
        res.writeHead(200, { "Content-Type": "text/css" });
        fileStream.pipe(res);

    } else if (req.url.match("\.png$")) {
        var imagePath = path.join(__dirname, './', req.url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, { "Content-Type": "image/png" });
        fileStream.pipe(res);
    } else if (req.url.match("\.js$")) {
        var jsPath = path.join(__dirname, './', req.url);
        var fileStream = fs.createReadStream(jsPath, "UTF-8");
        res.writeHead(200, { "Content-Type": "text/javascript" });
        fileStream.pipe(res);
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end(`404 Not Found`);
    }

}).listen(3000);
