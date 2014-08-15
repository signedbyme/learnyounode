var fileFilter = require('./fileFilter');
var dirPath = process.argv[2];
var extensionFilter = process.argv[3];

fileFilter(dirPath, extensionFilter, function(err, files) {
  
	if (err) {
		throw err;
	} else {
		files.forEach(function (file) {
   			console.log(file);
  		})
 	}

});