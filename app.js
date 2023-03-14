var http = require('http');
var url = require('url');
var qs = require('querystring');

var app = http.createServer(function(request, response) {
    response.writeHead(404);
    response.end('Not yet');
});
app.listen(3000);