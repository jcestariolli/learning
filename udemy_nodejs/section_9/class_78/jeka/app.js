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
app.get('/person/:id', function(req, res) {
	res.render('person', { ID: req.params.id , QueryString: req.query.qrstr});
});

// POST for the same route
// urlencodedParser will be the middleware to be called before the code gets here
app.post('/person', urlencodedParser, function(req, res) {
	res.send('Thank you person!');
	// body parser automatically attachs the parameters inside the req object and attach the properties that came on the post method
	console.log(req.body.firstname);
	console.log(req.body.lastname);
});

app.post('/personjson', jsonParser, function(req, res) {
	res.send('Thank you for the JSON data!');
	console.log(req.body.firstname);
	console.log(req.body.lastname);
});


app.get('/api', function(req, res) {
	res.json({ firstname: 'John', lastname: 'Doe' });
});


// Application start
app.listen(port);