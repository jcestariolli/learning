var express = require('express');
// Creates the app
var app = express();

// Configures the port
var port = process.env.port || 3000;

// Define the dir public as the path assets to static access them
app.use('/assets', express.static(__dirname + '/public'));

// Define the view engine 
app.set('view engine', 'ejs')

// Listen to that port
app.listen(port);