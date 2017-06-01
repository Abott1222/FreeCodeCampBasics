/* object and functions */


let person1 = {
	name: "Alex",
	/* old syntax sayHello: function() {} .. */
	sayHello() {
		/* note this is a string literal example created using backticks */
		return `Hello my name is ${this.name}`;
	}
}

console.log(person1.sayHello());


/* exploring class syntax to define constructor */

class Person {
	constructor(name) {
		this.name = name;
	}
	/* define setter and getter methods */
	get name() { return this._name;}

	set name(newName) {this._name = newName;}

	sayHello() {
		console.log(`Hello my name is ${this.name}`);
	}
};

const Alex = new Person("Alex");
Alex.sayHello();

/*call setter */
Alex.name = "Alexander";

let newName = Alex.name;

console.log(`testing updated name: ${Alex.name}`);

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  for(var i=0; i<arr.length; i++) {
  	console.log(num >= arr[i] && num <= arr[i-1]);
    if(num >= arr[i] && num <= arr[i]) {
    	console.log("In now.. " + num + " " + arr[i]);
    	if (i===0) return 0;
    	else return i-1;
    }
  }
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35));









