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