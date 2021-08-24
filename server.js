const http = require("http");
const fs = require("fs");
const path = require("path");

http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), "UTF-8", function (err, html) {
            res.writeHead(200, { "Content-Type": "text/html" });
            console.log(`Your request method is: ${req.method} and your requested url is ${req.url}.`);
            res.end(html);
        });
    } else if (req.url.match(".css")) {
        var cssPath = path.join(__dirname, 'public', req.url);
        var fileStream = fs.createReadStream(cssPath, "UTF-8");
        res.writeHead(200, { "Content-Type": "text/css" });
        console.log(`Your request method is: ${req.method} and your requested url is ${req.url}.`);
        fileStream.pipe(res);
    } else if (req.url.match(".png")) {
        var imagePath = path.join(__dirname, 'public', req.url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, { "Content-Type": "image/png" });
        console.log(`Your request method is: ${req.method} and your requested url is ${req.url}.`);
        fileStream.pipe(res);
    } else if (req.url.match(".js")) {
        var jsPath = path.join(__dirname, 'public', req.url);
        var fileStream = fs.createReadStream(jsPath, "UTF-8");
        res.writeHead(200, { "Content-Type": "text/javascript" });
        console.log(`Your request method is: ${req.method} and your requested url is ${req.url}.`);
        fileStream.pipe(res);
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        console.log(`Your request method is: ${req.method} and your requested url is ${req.url}.`);
        res.end(`404 Not Found`);
    }
}).listen(3000);
