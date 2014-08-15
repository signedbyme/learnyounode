//filteredls.js
var fs = require('fs');
var path = require('path');
var dirPath = process.argv[2];
var extensionFilter = '.' + process.argv[3].toLowerCase();
var filteredFiles;

fs.readdir(dirPath, filterFilesByFileExt);

function filterFilesByFileExt(err, files){
	
	files.forEach( function(file){
		var fileExt = path.extname(file).toLowerCase();
		if( fileExt === extensionFilter ){
			console.log(file);
		}
	});

}