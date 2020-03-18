var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    
    // this methods gives us a Buffer
    // to work w-with the placeholders, the template, we need to convert to string
    // sd er dprcify the encoding, the methods returns string
    var html = fs.readFileSync(__dirname + '/index.htm','utf8');
 
    var message = 'Hello world from template'
    html = html.replace('{message}', message); // replaces the placeholder
    res.end(html);
    
}).listen(1337, '127.0.0.1');