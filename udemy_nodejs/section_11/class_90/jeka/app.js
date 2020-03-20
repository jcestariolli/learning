var express = require('express');
var app = express();

var port = process.env.PORT || 3000;
// this will be running on the server
var people = [
	{
		name: 'John Doe'
	},
	{
		name: 'Jane Doe'
	},
	{
		name: 'Jim Doe'
	}
];

app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	// when it will render ejs file, the variable will be available
	res.render('index', {serverPeople : people});
	
});

app.listen(port);