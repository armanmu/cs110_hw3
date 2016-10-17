const http = require ('http');

const server = http.createServer(function(req, res) {

    if(req.url === '/hello') {

        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('hello world\n');
    }

    if(req.url === '/hey') {

        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('ardyoq_ovqer_en\n');
    }

    if(req.url === '/university') {

        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('AUA\n');
    }

    if(req.url === '/foo') {

        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('zoo\n');
    }

    if(req.url === '/code') {

        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('javascript\n');
    }


    else {
        res.writeHead(404, {'Content-Type' : 'text/plain'});
        res.end('Bad Gateway!')
    }

});

    server.listen(3001);