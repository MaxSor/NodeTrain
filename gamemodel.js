console.log('Loading game module');

var game = {
	teams: [], //[team]
	currentRound: 0,
	nextround: function() {
		console.log('Next Round!');
		this.currentRound += 1;
	}
};

class Game {

	constructor(maxpoints) {
		this._currentRound = 0;
		this._maxpoints = maxpoints || 25;
		this._teams = [];
		this._scores = [];
	}

	set dict(dictionary) {
		this._dict = dictionary;
	}

	get dict() {
		return this._dict;
	}

	get currentRound() {
		console.log(`Current round is ${this._currentRound}`);
		return this._currentRound;
	}

	get teams() {
		//console.log('get teams: ' + JSON.stringify(this._teams, null, 2));
		return this._teams;
	}

	//TODO: Сделать фикс для неповторяющихся слов
	get randomWorld() {
		function getRandomInt(min, max) {
			return Math.floor(Math.random() * (max - min + 1) + min);
		}

		let world = this.dict[getRandomInt(0, this.dict.length)];
		if (this._usedWorlds.length == this._dict.length) {
			return world;
		} else {
			console.log('rnd');
		}

		return this.dict[getRandomInt(0, this.dict.length)];
	}

	set usedWorlds(world) {
		this._usedWorlds.push(world);
	}

	get usedWorlds() {
		return this._usedWorlds;
	}

	addTeam(teamName) {
		let team = {};
		team.name = teamName;
		team.score = 0;
		team.players = [];

		//Returns player num for round
		team.playerNumForRound = function(turnnum) {
			var plen = team.players.length;
			var num = turnnum % plen;
			if (num == 0) {
				return (plen - 1); //last player
			} else {
				return (num - 1); //other players
			}
		};

		this._teams.push(team);
		console.log(`Team ${team.name} was added`);
		return team;
		// this._teams[team].score = 0; 
	}

	addTeamPlayer(team, playerName) {
		team.players.push(playerName);
		console.log(`In team ${team.name} was added player ${playerName}`);

		// this._teams[team].score = 0; 
	}

	turnwinner(team) {
		//console.log(this._teams);
		team.score += 1;
		console.log('roundwinner' + JSON.stringify(team, null, 4));
		//this._teams[team].score +=1;
	}

	nextround() {
		//TODO: check scores
		console.log('Next Round!');
		game._currentRound += 1;
	}

	// loadDict(){
	// 	return dict;
	// }

	start() {

	}


	// scores(){

	// 	let scores = [];
	// 	for (let i in this._teams) {
	// 		let score = {};
	// 		score[i] = i.score;
	// 		scores.push(score);
	// 	}
	// 	let  scoresstring = JSON.stringify (scores, null, 4);
	// 	console.log(`Current Score is ${scoresstring} `);
	// 	return scores;
	// }


}



module.exports = Game;