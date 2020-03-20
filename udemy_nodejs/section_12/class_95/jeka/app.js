var express = require('express');
var mongoose = require('mongoose');
var config = require('./config'); // Our config
// to seed the database
var setupController = require('./controllers/setupController'); // Our config

// Creates the app
var app = express();

// Configures the port
var port = process.env.port || 3000;

// Define the dir public as the path assets to static access them
app.use('/assets', express.static(__dirname + '/public'));

// Define the view engine 
app.set('view engine', 'ejs')

// Configuring the DB
mongoose.connect(config.getDbConnectionString());
setupController(app);


// Listen to that port
app.listen(port);

