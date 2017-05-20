var myArr = [1,2,3,4,5,6,7,8,9,10];


//for the first run of the callback:
// initial/current is the first param
// 2nd elemen is nexy

//for 2nd->n loops:
//current is what was **returned**
//next is the next elem
myArr.reduce(function(current ,next) {
	console.log("initial number is " + current);
	console.log("next is " + next);
	console.log("curr+next: " + parseInt(current+next));
	// in our case we are reducing the entire array by adding the next element to the running total
	return current+next;
});



