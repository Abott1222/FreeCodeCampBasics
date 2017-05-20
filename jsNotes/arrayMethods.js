var myArr = [1,2,3,4,5,6,7,8,9,10];


//for the first run of the callback:
// initial/current is the first param
// 2nd elemen is nexy

//for 2nd->n loops:
//***current is what was **returned**
//next is the next elem
myArr.reduce(function(current ,next) {
	console.log("initial number is " + current);
	console.log("next is " + next);
	console.log("curr+next: " + parseInt(current+next));
	// in our case we are reducing the entire array by adding the next element to the running total
	return current+next;
});




//Calls a defined callback function on each element of an array, and returns an array that contains the results.
var result = myArr.map(function(value,index) {
	return Math.sqrt(value).toFixed(0);

});

result.forEach((item,index) => {
	console.log(item);
});


//FILTER
//Creates a new array with every element in an array that pass a test
//[2,4,6,8,10]
var filteredEvensArr = myArr.filter((num) =>{
	return (num % 2 === 0);
});

console.log("Filtered array: ");
filteredEvensArr.forEach((item,index) => {
	console.log(item);
});



//the rest operator ...args
function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); // 6


