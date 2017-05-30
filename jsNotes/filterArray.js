/*
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
*/

var array = [1,2, NaN, null, ""];

var x = array.filter( (element) => {
	return !!element;
});

console.log(x);
