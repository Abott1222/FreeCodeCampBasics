const forecast = {
	Monday: {min: 63, max:75},
	Tuesday: {min: 60, max:80},
	Wednesday: {min: 60, max:80},
	Thursday: {min: 60, max:80},
	Friday: {min: 60, max:80},
	Saturday: {min: 60, max:80},
	Sunday: {min: 60, max:80},
};

//Destructuring Assignment
//instead of maxMonday = ...
//note if it doesnt find anything it will spit out this error: TypeError: Cannot match against 'undefined' or 'null'.
const {Monday: { max: maxMonday}} = forecast;

console.log(maxMonday);


//Destructuring with assignment
/*
Why is this the output?
1
2
1
2
1
2

*/
let myArray = [1,2,3,4,5,6];

while(myArray.length > 0) {
	[a,b, ...arr] = myArray;
	console.log(1);
	console.log(2);

	myArray = arr;
}
//check if str ends with target without using endsWith
//else if(typeof target[targetI] != "undefined") return true;
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

  var strI = str.length-1;
  var targetI = target.length-1;
  console.log("str is " + str);
  console.log("target is " + target);
  while(targetI>0) {
  	console.log("targetI is " + targetI);
  	console.log("letter from str is " + str[strI]);
  	console.log("letter from target is " + target[targetI]);
    if(str[strI] != target[targetI]) {
      return false;
    } 
    strI--;
    targetI--;
  }
  
  
}
confirmEnding("Bastian", "n");


/* Capitalize first letter */


function titleCase(str) {
  var strArray = str.split(" ");
  var result = "";
  for(var i=0; i<strArray.length; i++) {
    if (i===strArray.length-1) result += (strArray[i][0].toUpperCase() + strArray[i].slice(1).toLowerCase());
    else result += (strArray[i][0].toUpperCase() + strArray[i].slice(1).toLowerCase() + " ");
  }
  return result;
}

titleCase("I'm a little tea pot");



/*We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first. */

function sumAll(arr) {
  var sum = 0;
  var max = arr[0]> arr[1] ? arr[0] : arr[1];
  var min = arr[0]> arr[1] ? arr[1] : arr[0];
  for(var i=min; i<=max; i++) sum += i;
  return sum;
}

sumAll([1, 4]);