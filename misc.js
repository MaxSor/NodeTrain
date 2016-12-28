console.log('starting misc.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes');
const game = require('./game');

console.log(game);
game.nextround();
console.log(game);

// console.log(game);

// var userInfo = os.platform();
// var userInfo = os.userInfo();

// // console.log(userInfo);

// var res = notes.addNote();
// var res = notes.add(2,3);

// fs.appendFile('hello.txt', JSON.stringify(userInfo,null, 4), [], (err) => {
// 	if (err) {
// 		console.log('error writing file!');
// 	}
// 	console.log('Done');
// });





