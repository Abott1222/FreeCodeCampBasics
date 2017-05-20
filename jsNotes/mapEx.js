//Calls a defined callback function on each element of an array, and returns an array that contains the results.
var result = myArr.map(function(value,index) {
	return Math.sqrt(value).toFixed(0);

});

result.forEach((item,index) => {
	console.log(item);
});