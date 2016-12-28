console.log('Starting notes.js');

//console.log(module);
module.exports.addNote = () => {
	console.log('addNote');
	return 'New note';
};

module.exports.add = (a, b) => {
	console.log(a+b);
	return a + b ;
};