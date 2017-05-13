//first class functions (ones that you pass into other functions)

//optional callback to fire when done
function add(first,second,callback) {
	console.log(first+second)
	callback();
}


add(1,2, function() {
	console.log("done")
});

add(4,5);