// ----13.What are object prototypes. ----
/*
prototype is blueprint of object,which allows properties and methods  which does not exist on current object
*/
let arr = []
arr.push(10);//push method works here even when it is not defined here,due to use of prototypes
//Array objects inherit properties from Array prototype
console.log(arr);

//---- 14.What are callbacks?  ----
/*
functions can be passed to another function as an argument,these functions are callbacks
*/
function dividebyTwo(val){
  return val/2;
}
function sum(a,b){
  return dividebyTwo(a+b);//cllig function from function
}
sum(10,20);

//----15.What is the use of a constructor function in javascript----
//used to create objects
//when we want to create some objects with similar properties,constructor can be used
function cons(name,age){
  this.name = name,
  this.age = age
}
let obj1 = new cons("shubham",10)
console.log(obj1);

//----16.What is DOM?----
//Document Object Model,programming interface for HTMl document
//When browser tries to render a HTML document,it creates an object based on HTML document

//----17. What are arrow functions----
//functions introduced in ES6 with less syntax,this is anonymous function with => syntax without return keyword
//ARROW FUNCTIONS DOES NOT BIND THIS keyword,WHEN this keyword IS USED,ARROW FUNCTION RETURNS WINDOW OBJECT

let obj1 = {
  check:function(){
    return this;
  }
}
let obj2 = {
  check:()=>{
    return this;
  }
}
obj1.check(); //returns check
obj2.check(); //window object


//---18.Differences between declaring variables using var, let and const. ----
/*
before ES6 : only VAR keyword
after ES6 : LET,VAR,Const
variables decalred in Global scope with let/var are accessable and mutable from anywhere
**variables that are declard in Globalscope using var are added to Global Object,i.e accessible with WINDOW.varibale
**variables that are declard in Globalscope using let are NOT added in Global Object,hence give error when accessed with WINDOW

**let and var acts similar in functional scope [not accessible outside the scope]
** const is immutable
*/
const a = 5
a+=5;
console.log(a);

//----19.What is the rest parameter and spread operator----
//improved way of handling parameters of a function
//rest converts any number of objest in array
function add(...args){
  let sum = 0;
  for (var i = 0; i < args.length; i++) {
    sum+=args[i]
  }
  return sum;
}
add(10,20,40,50);

//spread operator used to copy array[spreads the array]
//REST : TAKES VARIABLES ,TURNS INTO ARRAY,USED IN FUNCTION DECLARATION
//SPREAD : TAKES ARRAY/OBJECTS AND SPREAD IT,USED IN FUNCTION CALL

let arr=[1,2,3]
let newArr=[...arr,4]

//----20.What is the use of promises in javascript----
/*
Promises are basically used to handle asynchronuous code for operations like server requests
Callbacs are used the same way but for multiple callbacks we would need Promise

4 states of Promise
1.Pending 2.Fulfilled 3.Rejected 4.Settled

PROMISE IS CONSUMED USING THEN AND CATCH
*/
function sum(...args){
  return new Promise((resolve,reject)=>{
    if(args.length>2){
      reject("more than 3")
    }
    else {
      resolve(args[0]+args[1])
    }
  })
}
sum(10,20,30,40)//returns promise
.then((num)=>{console.log(num)})
.catch((error)=>console.log(error))
