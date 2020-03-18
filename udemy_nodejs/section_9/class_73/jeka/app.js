// the express module returns a function
var express = require('express');

// with this call, the return is also a function, and an object. So we can invoke it or access its properties
var app = express();

// this means this port will be the environment variable, or a default value (3000)
var port = process.env.PORT || 3000;

// this will respond to http requests where method or verb is GET
// the first parameter is the url, and the second is the function to be fired when the parameters matches
app.get('/',function(req, res){
    res.send('<html><head></head><body><h1>Helllo World, from Jeka</h1></body></html>');
});

// working with json
app.get('/api', function(req, res){
    res.json({
        firstname: 'Jeka',
        lastname: 'Cestariolli'
    });
});

// The parameter is the port
// is recommended to use environment variables
app.listen(port);