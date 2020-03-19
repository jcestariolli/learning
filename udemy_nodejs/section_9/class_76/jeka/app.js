var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

// EJS always look inside the path inside where application is running for a folder called views
app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	next();
});

// instead of sending html, we use the method render
app.get('/', function(req, res) {
	// inside folder view, it looks for a file called index.ejs
	res.render('index'); 
	//We can also send objects to the render method
});

app.get('/person/:id', function(req, res) {
	// instead of sending html, we use the method render
	res.render('person', { ID: req.params.id });
});

app.get('/api', function(req, res) {
	res.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(port);