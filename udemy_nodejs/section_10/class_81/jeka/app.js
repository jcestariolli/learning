var express = require('express');
var mysql = require('mysql');

var app = express();

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

// creates the connection with the configured database
app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	var con = mysql.createConnection({
		host: "localhost",
		user: "test",
		password: "test",
		database: "jeka_schema"
	});

	// execute the query in database
	con.query('select person_address.ID, person.firstname, person.lastname, address.address from person inner join person_address on person.ID = person_address .person_ID inner join address on address.ID = person_address.address_ID',
		function(err, rows) {
			if(err) throw err;
			console.log(rows);
		}
	);
	console.log();
	next();
});

htmlController(app);
apiController(app);

app.listen(port);