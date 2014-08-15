//fileFilter.js
var fs = require('fs');
var path = require('path');

module.exports = function(dirPath, extensionFilter, callback) {

	extensionFilter = '.' + extensionFilter.toLowerCase();
	
	fs.readdir(dirPath, function(err, files){
		
		if (err) return callback(err);

		var filteredFiles = files.filter(function(file){
			return path.extname(file).toLowerCase() === '.' + extensionFilter.toLowerCase();
		});

		return callback(err, filteredFiles);
	
	});

}