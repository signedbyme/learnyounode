//myfirstasyncio.js
var fs = require('fs');
var filePath = process.argv[2];

fs.readFile(filePath, 'utf8', countLines);

function countLines(err, data){
	var lines;

	if (err){
		throw err;
	} else {
		lines = data.toString().split('\n').length - 1;	
		console.log( lines );
	}
}