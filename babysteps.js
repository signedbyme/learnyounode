//console.log( process.argv );

var numbers = process.argv.slice(2, process.argv.length + 1);

var total = numbers.reduce(function(previousValue, currentValue, index, array){
	 return Number(previousValue) + Number(currentValue);
});
//console.log('numbers', numbers);
console.log(total);