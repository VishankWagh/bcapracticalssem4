let http = require('http');
let fs = require('fs');
// let port = 8049;
http.createServer(function (req, res){
    fs.readFile('resume.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(3000);