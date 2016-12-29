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

	get currentRound() {
		console.log(`Current round is ${this._currentRound}`)
		return this._currentRound;
	}

	get teams() {
		console.log(`get teams: ` + JSON.stringify(this._teams, null, 2));
		return this._teams;
	}

	addTeam(teamName) {
		let team = {}
		team.name = teamName;
		team.score = 0;
		team.players = [];
		this._teams.push(team);
		console.log(`Team ${team.name} was added`)
		return team;
		// this._teams[team].score = 0; 
	}

	addTeamPlayer(team, playerName) {
		team.players.push(playerName);
		console.log(`In team ${team.name} was added player ${playerName}`)

		// this._teams[team].score = 0; 
	}

	roundwinner(team) {
		//console.log(this._teams);
		team.score += 1;
		console.log('roundwinner' + JSON.stringify(team, null, 4));
		//this._teams[team].score +=1;
	}

	nextround() {
		console.log('Next Round!');
		game._currentRound += 1;
	}

	loadDict(){
		return dict;
	}

	start(){

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