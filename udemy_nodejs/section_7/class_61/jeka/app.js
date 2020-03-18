var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // to deal with file assynchronously, and put the file inside an stream, we use a read stream and use pipe to put it on response
    var html = fs.createReadStream(__dirname + '/index.htm').pipe(res);

}).listen(1337, '127.0.0.1');