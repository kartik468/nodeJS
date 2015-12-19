var http = require('http');

var server = http.createServer(callback);
server.listen(8022);
function callback(req, res) {
    console.log("connected");
    res.writeHead(200);
    res.end('Hello Http');
}
