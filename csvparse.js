const fs = require('fs');
const csvparse = require('csv-parse');

// var dictfile = fs.readFileSync('./dict2.csv', {encoding:'utf8'});
// csvparse(dictfile, {delimiter: ';'}, (err, out)=>{
// 	console.log(out);
// })

fs.readFile('./dict2.csv', {encoding:'utf8'}, (err, data) =>{
	csvparse(data, {delimiter: ';'}, (err, out)=>{
	console.log(out);
})
});
// csvparse