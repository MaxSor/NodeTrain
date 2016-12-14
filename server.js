

// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
mongoose.connect('mongodb://mSorro:123123@ds019488.mlab.com:19488/nodetrain'); // connect to our database

var Bear     = require('./app/models/bear');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(bodyParser.json());

var port = process.argv[2] || 8080;

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	console.log(req.headers);
	res.json({
		message: 'hooray! welcome to our api!'
	});
});



// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// app.get('/old', (req, res) => {
// 	res.send(`Hello World! ${port}`);
// });

// app.get('/blocks', (req, res) => {
// 	let blocks = ['Fixed', 'Movable', 'Rotating'];
// 	res.send(blocks);
// 	//res.redirect('/li');
// });

// app.get('/li', (req, res) => {
// 	let blocks = '<ul><li>Fixed</li><li>Movable</li><li>Rotating</li></ul>';
// 	res.send(blocks);
// });


// START THE SERVER
// =============================================================================
app.listen(port, () => {
	console.log(`listening on port ${port}`);
});


// console.log(port);

// var http = require('http');

// http.createServer((req, res) => {
// //	console.log(req.headers);
// 	res.writeHead(200, {
// 		'Content-Type': 'text/plain'
// 	});
// 	var headersforhtml = req.headers.toString();
// 	console.log(headersforhtml);
// 	res.end(`<div> ${headersforhtml} </div>`);
// }).listen(port);