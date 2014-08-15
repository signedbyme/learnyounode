var fs = require('fs');
var filePath = process.argv[2];
var fileContent = fs.readFileSync(filePath);
var lines = fileContent.toString().split('\n').length - 1;
//console.log( fileContent.toString() );
//console.log( lines );
console.log( lines );