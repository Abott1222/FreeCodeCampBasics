
//first class functions (ones that you pass into other functions)

//optional callback to fire when done
function add(first,second,callback) {
	console.log(first+second)
	if(callback) {
		callback();
	}
}


function logDone() {
	console.log("done from function");
}


add(1,2, function() {
	console.log("done");
});

add(4,5);


add(5,10,logDone);


console.log("Testing something");
console.log(1 in [1,2,3,4]);
