var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {

    res.writeHead(200, { 
        'Content-Type': 'application/json' 
    });

    var obj = {
        firstname: 'John',
        lastname: 'Doe'
    };
    // we cant output the obj as it is - that means - serialize the object
    res.end(JSON.stringify(obj));

}).listen(1337, '127.0.0.1'); 