// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// ..mongoose.connect('mongodb://nodetrain:sor@ds019488.mlab.com:19488/nodetrain', {authMechanism: 'ScramSHA1'}); // connect to our database
mongoose.connect('mongodb://localhost:27017/myproject', (err) => {
	if (err) {
		console.log('Error: Start Mongo daemon: sudo service mongod start');
	}
}); // connect to our database

var Bear = require('./models/bear');

// var MongoClient = require('mongodb').MongoClient;
// var assert = require('assert');

//Connection URL
// var url = 'mongodb://mSorro:123123@ds019488.mlab.com:19488/nodetrain';

// // Use connect method to connect to the server
// MongoClient.connect(url, function(err, db) {
// 	assert.equal(null, err);
// 	console.log("Connected successfully to server");

// 	db.close();
// });

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(bodyParser.json());

var options = {
	dotfiles: 'ignore',
	etag: false,
	extensions: ['htm', 'html'],
	index: false,
	maxAge: '1d',
	redirect: false,
	setHeaders: function(res, path, stat) {
		res.set('x-timestamp', Date.now());
	}
};



app.use((req, res, next) => {
	console.log('app using it');
	next();
});

// app.get('/*', function(req, res, next) {
// 	res.setHeader('Last-Modified', (new Date()).toUTCString());
// 	next();
// });

var port = process.argv[2] || 8080;

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();



// middleware to use for all requests
router.use(function(req, res, next) {
	// do logging
	console.log(req.method, req.url, req.headers);
	next(); // make sure we go to the next routes and don't stop here
});


// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	console.log(req.headers);
	res.json({
		message: 'hooray! welcome to our api!'
	});
});

// router.param('bear_id', function(req, res, next, name) {
// 	// do validation on name here
// 	// blah blah validation
// 	// log something so we know its working
// 	console.log('doing name validations on ' + name);

// 	// once validation is done save the new item in the req
// 	req.name = name;
// 	console.log('after req.name  set');
// 	// go to the next thing
// 	next();
// });

router.route('/bears')

// create a bear (accessed at POST http://localhost:8080/api/bears)
.post(function(req, res) {

	var bear = new Bear(); // create a new instance of the Bear model
	bear.name = req.body.name; // set the bears name (comes from the request)
	console.log('after name');
	// save the bear and check for errors
	bear.save(function(err) {
		if (err)
			res.send(err);

		res.json({
			message: 'Bear created!',
			bear: bear
		});
	});

})

.get(function(req, res) {
	console.log('enter get');
	Bear.find(function(err, bears) {
		if (err) {
			console.log('before err in Bear.find');
			res.send(err);
		} else {
			console.log(req.fresh);
			console.log('before res.json');
			res.json(bears);
		}
	});
});



router.route('/bears/:bear_id')

// get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
.get(function(req, res) {
	Bear.findById(req.params.bear_id, function(err, bear) {
		// if (err) {
		// 	console.log('before err in Bear.findById');
		// 	res.send('Hello');
		// 	//return;
		// } else {
		// 	console.log('before jsonbear');
		// 	res.json(bear);
		// 	console.log('after jsonbear');
		// }
		if (err) {
			res.send(err);
		} else {
			res.json(bear);
			console.log('check!');
		}
	});
})

.put((req, res) => {
	Bear.findById(req.params.bear_id, function(err, bear) {
		if (err)
			res.send(err);

		bear.name = req.body.name;
		bear.save(function(err) {
			if (err)
				res.send(err);

			res.json({
				message: 'Bear updated!',
				bear: bear
			});
		});
	});
})

.delete((req, res) => {
	Bear.remove({
		_id: req.params.bear_id
	}, function(err, bear) {
		if (err)
			res.send(err);

		res.json({
			message: 'Successfully deleted',
			bear: bear
		});
	});
});



// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);
app.use(express.static('public', options));

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});

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