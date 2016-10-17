// Routing

const http = require('http');

const httpServer = http.createServer(function(req, res) {

    if(req.url === '/hello') {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('Hello World\n');
    } else {
        res.writeHead(404, {'Content-Type' : 'text/plain'});
        res.end("Nope!");
    }
});

httpServer.listen(3001); 