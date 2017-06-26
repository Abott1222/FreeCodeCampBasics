function Animal(name) {
	this.name = name;
}

Animal.prototype.greeting = "Hello!";

Animal.prototype = {
	//constructor: Animal,
	eat: function() {
		console.log("nom nom nom nom");
	}
}


function Bird(legs) {
  this.numLegs = legs;
}

Bird.prototype = Object.create(Animal.prototype);

let canary = new Bird();
canary.eat();



/*
let canary = new Bird();
let ownProps = [];
// Add your code below this line

for( let property in canary) {
	console.log(property);
}

*/

function Animal1() { }
Animal1.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() {
	var id = 5; //private variable

	/*
				WRONG
	function getId() {
		return id;
	}
	*/

	this.getId = function() {
		return id;
	}

}

// Add your code below this line
Dog.prototype = Object.create(Animal1.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.sayHello = function() {console.log("Woof!");};
Dog.prototype.eat = function() {console.log("Overloaded Eat!");};

function Cat() { }

// Add your code below this line
Cat.prototype = Object.create(Animal1.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.sayHello = function() {console.log("Meow!");};
Cat.prototype.eat = function() {console.log("Overloaded Eat!");};

//add common functionality to unrelated objects with a mixin
let glideMixin = function(obj) {
	//why isnt this obj.prototype.glide??
  obj.prototype.glide = function() {
    console.log("Gliding, wooosh!");
  };
};

glideMixin(Dog);
glideMixin(Cat);



// Add your code above this line

let beagle = new Dog();

beagle.eat(); // Should print "nom nom nom"
beagle.sayHello(); // Should print "Woof!"
beagle.glide();
beagle.getId();


