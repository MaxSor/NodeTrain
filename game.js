console.log('Loading game module');
var game = {
	teams: [],
	currentRound: 0,
	nextround: function() {
		console.log('Next Round!');
		this.currentRound += 1;
	}
};

module.exports = game;