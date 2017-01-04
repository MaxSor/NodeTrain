
console.log('Loading csvparse');
const fs = require('fs');
const csvparse = require('csv-parse');

// var dictfile = fs.readFileSync('./dict2.csv', {encoding:'utf8'});
// csvparse(dictfile, {delimiter: ';'}, (err, out)=>{
// 	console.log(out);
// })
// var dict = [];
// fs.readFile('./dict21.csv', {
// 	encoding: 'utf8'
// }, (err, data) => {
// 	if (err) return(err);
// 	csvparse(data, {
// 		delimiter: ';'
// 	}, (err, out) => {
// 		dict = out;
// 		// console.log(dict);
// 	});
// });

// module.exports = dict;
module.exports = {
	initialize: function(callback) {
		fs.readFile('./dict2.csv', {
			encoding: 'utf8'
		}, (err, data) => {
			if (err) {
				callback(err);
				return;
			}
			csvparse(data, {
				delimiter: ';'
			}, (err, out) => {
				callback(err, out);
			});
		});
	}
};



// csvparse