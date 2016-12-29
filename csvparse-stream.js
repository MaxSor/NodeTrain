const csvparse = require('csv-parse');

const fs = require('fs');
const stream = require('stream');

var dictfile = fs.createReadStream('./dict2.csv');
var csvparser = csvparse({
	delimiter: ';',
	
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