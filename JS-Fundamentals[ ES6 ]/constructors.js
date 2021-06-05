//class Syntax to Define a Constructor Function
//Class syntax is just a syntax and not a fully fledged class like in CPP JAVA

//ES5 version
var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');

//ES6 version
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus  = new SpaceShuttle('Mars');

class vegetables {
  constructor(name) {
    this.name = name;
  }
}
const veg = new vegetables('carrot');
console.log(veg.name);//carrot

//getters and setters to Control Access to an Object

class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer);//anonymous
novel.writer = 'newAuthor';
console.log(novel.writer);//newAuthor

//fahrenheit to celsius
class Thermostat {
  constructor(fahrenheit) {
    this.fahrenheit = fahrenheit;
  }
  get temperature(){
    return (5/9*(this.fahrenheit-32));
  }
  set temperature(celsius){
    this.fahrenheit = celsius*9/5+32;
  }
}
const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; //getting value
console.log(temp);// 24.44 in Celsius
thermos.temperature = 26;//setting value
temp = thermos.temperature;
console.log(temp);// 26 in Celsius
