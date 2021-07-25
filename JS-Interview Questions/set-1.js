// ---- 1.What are the possible ways to create objects in JavaScript ----
let obj = new object();

let obj1 = Object.create(null);

let obj2 = {};

function func(name){
  var obj = {}
  obj.name = name
  return obj
}
let obj = new func("abc")

class abc {
  constructor(name) {
    this.name = name;
  }
}
let object = new abc("abc")

// ---- 2.What are the different data types present in javascript? ----

typeof "string" //String
typeof true // boolean
typeof 10 //number
typeof null // Object - non primitive datatype
typeof undefined //undefined
// DATATYPE WHICH IS NOT PRIMITIVE DATATYPE IS  OF OBJECT DATATYPE IN JS

// ---- 3.Explain Hoisting in javascript ----
/*
Hoisting is basically default behavioir of JS where all the variables and functions
get moved to top irrespective of where they declared
 ** HOISTING CAN BE AVOIDED BY USING  let or const INSTEAD OF var / "USE STRICT" ALSO AVOIDS HOISTING **
*/
a = 10
console.log(a)
var a

hoistedFunction();  // Outputs " Hello world! " even when the function is declared after calling
function hoistedFunction(){
  console.log(" Hello world! ");
}

// ---- 4.Difference between “ == “ and “ === “ operators ----
/*
both are comparison operators but "==" compares only values whereas "===" compares values and types
*/
65=="65" //true
65==="65" //false

// ---- 5.Explain Implicit Type Coercion in javascript.----

/*
automatic conversion of value from one datatype to other is Implicit Type Coercion
eg. if function is expecting a String and number is passed while calling,JS try to Convert
number to String
for + string Coercion takes place and for other operators number Coercion takes place

EXPLICIT COERCIOIN
let x = 5
x+ Number("10") //15
*/
function add(num){
  return num*2;
}
add("4")


// ----6. What is NaN property in JavaScript? ----
/*
NaN property represents “Not-a-Number” value.
It indicates a value which is not a legal number.
typeof of a NaN will return a Number .

isNaN() function converts the given value to a Number type, and then equates to NaN.
*/
isNaN("Hello")  // Returns true
isNaN(345)   // Returns false
isNaN('1')  // Returns false, since '1' is converted to Number type which results in 0 ( a number)
isNaN(true) // Returns false, since true converted to Number type results in 1 ( a number)
isNaN(false) // Returns false
isNaN(undefined) // Returns true


// ----7. Explain passed by value and passed by reference. ----
let obj1 = { name:"shubham"};//pass by value
let obj2 = obj1;//pass by reference

// ----8. Explain Higher Order Functions in javascript. ----
/*
Functions that operate on other functions,either by paasing them as an argument or
returning them are higher order functions;
*/
function add(){
  return function(){return 5+2;}
}
let x = add();
x();

// ----9. Explain “this” keyword. ----
/*
'this' keyword refers to the object that the function a property of
*/
let obj = {
  name:"shubham",
  getName(){
    console.log(this.name);
  }
}
obj.getName(); //shubham

let obj = {
    name:  "vivek",
    getName: function(){
    console.log(this.name);
  }
}
let getName = obj.getName;
let obj2 = {name:"akshay", getName };
obj2.getName(); //akshay

// ----10.Explain call(), apply() and, bind() methods. ----
/*
call() = inbuilt function of JS which invokes/calls the method using the object
call allows object use other object's functions
*/
  let obj =
  {
    name:"shubham",
    getname:function abc(){return "hi "+this.name}
  }
  abc.call(obj)

  let obj1 = {name:"akshay"}
  abc.call(obj1) //using function of obj
/*
apply method is same as call,the difference is ,apply takes argument as an array
*/
let obj={
  name:"shubham"
}
function abc(msg,num){
  return "hi "+this.name+msg+num
}
abc.call(obj," how are you") //call accepts argument separately
abc.apply(obj,[" hope you are good",7]) //apply accepts argument as array

/*
bind() returns a new function which binds values of 'this' keyword and owner object
*/
let obj = {name:"shubham"}
let func={
  abc:function(msg1,msg2){
    return this.name+msg1+msg2;
  }
}
let newfunc = func.abc.bind(obj," hello"," hi")
newfunc();//binds obj and abc method and returns new function

//---- 11.What is currying in JavaScript? ----
// it is transforming a function with argument n, to n functions of one or less arguments
function add(a){
  return function(b){
    return a+b;
  }
}
add(2)(3);

//---- 12. Explain Scope and Scope Chain in javascript. ----
/*
Global Scope : varaible / function can be accessed from anywhere inside code
Local Scope : Also known as Function scope, variables/functions  accessible within funciton
Block Scope : it is related to let and const ,variables declard in block accessible in block
*/
