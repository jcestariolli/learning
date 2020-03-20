var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://test_jeka:<password_goes_here>@jekalearning-9ahk8.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

// Constructs the Schema
var Schema = mongoose.Schema;

// Models the schema
var personSchema = new Schema({
	firstname: String,
	lastname: String,
	address: String
});

// Creates the schema inside the db
var Person = mongoose.model('Person', personSchema);

// CReates new Instances of this document (for mongo) and object (for js)
var john = Person({
  firstname: 'John',
  lastname: 'Doe',
  address: '555 Main St.'
});

// save the user
john.save(function(err) {
  if (err) throw err;

  console.log('person saved!');
});

var jane = Person({
  firstname: 'Jane',
  lastname: 'Doe',
  address: '555 Main St.'
});

// save the user
jane.save(function(err) {
  if (err) throw err;

  console.log('person saved!');
});



// OLD CODE
var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	next();
});
//ACorMaisQuente1 test_jeka
htmlController(app);

apiController(app);

app.listen(port);