// needs: bodyparser, 
// note: alwas run node from the main root like $node src/app.js
var fs = require ( 'fs' )
var express = require ( 'express' )
var app = express()
var jsonREADER = require ( '../resources/json-file-reader') // include my fs.readFile module for json
var bodyParser = require('body-parser'); // include body parser 

app.use(express.static('./public/css'));
app.use(express.static('./public/js'));

app.use(bodyParser.urlencoded({ extended:true }))

app.set('views', './src/views'); // to set jade as the view engine for all files in directory: views 
app.set('view engine', 'jade');

var pg = require('pg'); // require postgres


var connectionString = "postgres://sven:mypassword@192.168.99.100:32779/hats";


// gets the in indexjade
app.get('/', function (req, res) {

// postgres://[user]:[password]@[server]/[name_database]
var connectionString = "postgres://sven:lovesmaartje@localhost/class_example";
pg.connect(connectionString, function (err, client, done) {

	client.query('select * from messages', function (err, result) {
		console.log(result.rows);

		done();
		pg.end(); // the client will idle for another 30 seconds, temporarily preventing the app from closing, unless this function is called
	});
});
})


app.post('/', function (req, res) {
	res.send('Got a POST request');
	pg.connect(connectionString, function (err, client, done) {
// $1 is de process.argv	
// make sure the database has a name and if you change the name of a database, all data gets removed
client.query('select * from messages where user_id= (select id from users where name = $1 )', [ process.argv[2] ], function (err, result) {
	if (err) {
		throw err
	}
	console.log(result.rows);

	done();
		pg.end(); // the client will idle for another 30 seconds, temporarily preventing the app from closing, unless this function is called
	});
});  
});
