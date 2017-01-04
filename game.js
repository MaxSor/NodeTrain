const Game = require('./gamemodel');

require('./csvparse').initialize(function(err, data) {
	if (err) {
		console.log('Dictionary was not loaded');
		console.log(err);
	} else game.dict = data;

});

// records = csvparse();


var game = new Game();

var team1 = game.addTeam('Alpha');
var team2 = game.addTeam('Beta');
game.addTeamPlayer(team1, 'Max');
game.addTeamPlayer(team1, 'Karina');

game.addTeamPlayer(team2, 'Boris');
game.addTeamPlayer(team2, 'Natasha');
game.addTeamPlayer(team2, 'Kostya');

var teams = game.teams;

setTimeout(function() {
	console.log(game.dict);
	console.log(teams[1].name);
	team2.score +=1;
	console.log(teams[1].score);
	console.log(teams[1]);
	console.log('teams count:' + teams.length);
	for (var i = 1; i < 7; i++) {
		let playerNum = teams[1].playerNumForRound(i);
		console.log(`team2 player for round ${i} is ${playerNum} ${teams[1].players[playerNum]}`);
	}
	console.log(game.randomWorld[0]);
	console.log(game.randomWorld[0]);
	console.log(game.randomWorld[0]);
	console.log(game.randomWorld[0]);
	console.log(game.randomWorld[0]);
	// console.log(dict[2]);
	// console.log(teams);
	// console.log(game.dict);
}, 500);