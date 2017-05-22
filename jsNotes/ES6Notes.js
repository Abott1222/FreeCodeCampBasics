function testRestOperator(...args) {
	args.forEach((val,index) => {
		if (typeof val == "object") {
			console.log("going into object further");
			val.forEach((val2, index2) => {
				console.log("element " + val2 + " inside array");
			});
		} else {
			console.log("val is " + val);
		}
	});
}

//note a,b,c are properties of object! Name is important
function destructuringAssignmentTest(myObj) {
	const {a,b,c} = myObj;
	console.log("b is " + b);

	//also
	const { a : z, b : y, c : x} = myObj
	console.log("z is " + z);
}

var myArr = [1,2,3,4];

testRestOperator(myArr, 100, 200, 300);

var myObject = {
	a: 1,
	b: 2,
	c: 3
};

var stringInterpolation = `
 A is ${myObject.a} ... Then B is ${myObject.b}...
 ....
and b is... drumrolll...

${myObject.c}
`;

console.log("The result of the string interpolation is: ");
console.log(stringInterpolation);


var multiline = `
Hello world!
I am ready!
`;



destructuringAssignmentTest(myObject);