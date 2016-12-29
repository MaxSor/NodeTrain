const Game = require('./gamemodel');
const csvparse = require('csv-parse');

const fs = require('fs');
const stream = require('stream');

var dictfile = fs.createReadStream('./dict2.csv');
var csvparser = csvparse({
	delimeter: ';'
});

var Transform = require('stream').Transform;
var dict = [];

// All Transform streams are also Duplex Streams
const myTransform = new Transform({
	writableObjectMode: true,
	
	transform(chunk, encoding, callback) {
		data = chunk.toString();
		this.push(data);
		dict.push(data);
		callback();
		//  console.log(chunk);
	}
});
myTransform.setEncoding('utf8');
// dictfile.pipe(csvparser).pipe(myTransform)
//dictfile.pipe(myTransform).pipe(process.stdout);
dictfile.pipe(csvparser).pipe(myTransform)
// .pipe(process.stdout);

setTimeout(function(){
    console.log('dict is : ' + dict);
  }, 1500);


// records = csvparse();


var game = new Game();
var team1 = game.addTeam('Alpha');
var team2 = game.addTeam('Beta');
game.addTeamPlayer(team1, 'Max');
game.addTeamPlayer(team1, 'Karina');

game.addTeamPlayer(team2, 'Boris');
game.addTeamPlayer(team2, 'Natasha');

var teams = game.teams;