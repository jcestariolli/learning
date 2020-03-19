var express = require('express');
var bodyParser = require('body-parser');


var app = express();
var port = process.env.PORT || 3000;
// copied from body-parser page 
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');


// Routing
app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	next();
});

app.get('/', function(req, res) {
	res.render('index');
});

// express provides an engine to process query string
app.get('/api/person/:id', function(req, res) {
	res.render('person', { ID: req.params.id , QueryString: req.query.qrstr});
});

app.post('/api/person', jsonParser, function(req, res) {
	// save to database
});

app.delete('/api/person/:id', function(req, res) {
	// delete from database
});


// Application start
app.listen(port);