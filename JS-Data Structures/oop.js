//Basic JavaScript Object
let duck = {
  name: "Aflac",
  numLegs: 2
};
console.log(duck.name);//Aflac

//dot notation
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs:function(){return "This dog has "+dog.numLegs+" legs"}
};
dog.sayLegs();//This dog has 4 legs.

//this Keyword
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};
dog.sayLegs();

//Constructor Function
function Dog(){
  this.name = "doggy",
  this.color = "red",
  this.numLegs = 4
}

//Constructor to Create Objects
function Bird() {
  this.name = "Albert";
  this.color  = "blue";
  this.numLegs = 2;
}
let blueBird = new Bird();

//Extend Constructors to Receive Arguments
function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

// Verify an Object's Constructor with instanceof
let Bird = function(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}
let crow = new Bird("Alexis", "black");
crow instanceof Bird; // returns true as crow is instance of Bird

let canary = {
  name: "Mildred",
  color: "Yellow" ,
  numLegs: 2
};
canary instanceof Bird; //returns false as canary is not created using Constructor

//Prototype Properties to Reduce Duplicate Code
let Dog = function(name){
  this.name = name; //own Property
}
Dog.prototype.numLegs = 4;//assigns Property to all objects of Dog [prototype Property]
let Beagle = new Dog('abc');
console.log(Beagle.numLegs);

//Change the Prototype to a New Object
/*
A more efficient way is to set the prototype to a new object that already contains the properties.
 This way, the properties are added all at once:
*/
Bird.prototype = {
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

//Inheritance
function Animal() { };

Animal.prototype = { //supertype[parent]
  constructor: Animal,
  describe: function() {
    console.log("My name is " + this.name);
  }
};
Bird.prototype = {
  constructor: Bird
};
Dog.prototype = {
  constructor: Dog
};

//Inherit Behaviors from a Supertype
function Animal() { }

Animal.prototype = {  //supertype
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
let duck = Object.create(Animal.prototype);
duck instanceof Animal //true
let beagle= Object.create(Animal.prototype);
beagle.eat();//nom nom nom

//setting new prototype using existing prototype
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
function Bird(){}
Bird.prototype = Object.create(Animal.prototype);
let crow = new Bird();
crow.eat();

// Add Methods After Inheritance
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
Bird.prototype.fly = function() {
  console.log("I'm flying!");
};

let beagle = new Bird();
beagle.fly();

//Override Inherited Methods
function Animal() { }
Animal.prototype.eat = function() {
  return "nom nom nom";
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.eat = function() {
  return "peck peck peck";
};

//Use a Mixin to Add Common Behavior Between Unrelated Objects
/*
there are cases when inheritance is not the best solution.
Inheritance does not work well for unrelated objects like Bird and Airplane.
They can both fly, but a Bird is not a type of Airplane and vice versa.
For unrelated objects, it's better to use mixins. A mixin allows other objects to use a collection of functions.
*/
//common Property
let flyMix = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};

let bird = {
  name: "Donald",
  numLegs: 2
};

let plane = {
  model: "777",
  numPassengers: 524
};

flyMix(bird); // bird using flyMixin
flyMix(plane);//plane using flyMixin
bird.fly();
plane.fly();
