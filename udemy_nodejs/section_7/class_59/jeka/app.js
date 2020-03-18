var http = require('http');


// creates a new server, requires a callback function to deal with request and response objects
// the response object will be a stream where we can stream our response
http.createServer(function (req, res) {

    // response beggins with head
    res.writeHead(200, {
        // we use quotes to prevent possible errors
        'Content-Type': 'text/plain'
    });
    // that means that this is the last thing Im sending
    res.end('Hello World\n');

// here we define the IP and port to be used
// here we get the port and localhost
}).listen(1337, '127.0.0.1');

// run the program with 
// $ node section_7/class_59/app.js
// SO we can try to access http://localhost:1337/ in browser

// THe node program doesnt stop this way, it just keep listening
