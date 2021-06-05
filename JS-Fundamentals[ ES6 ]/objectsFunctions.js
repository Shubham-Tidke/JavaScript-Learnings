//object.freeze prevents object mutation
let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad";
obj.newProp = "Test";
console.log(obj);
//obj.review and obj.newProp assignments will result in errors

//Anonymous Functions
const myFunc = function() {
  const myVar = "value";
  return myVar;
}
// arrow function-1
const myFunc = () => {
  const myVar = "value";
  return myVar;
}
// arrow function-2
const magic = ()=> new Date();
//Arrow Functions with Parameters-1
const doubler = item => item * 2;
//Arrow Functions with Parameters-2
const multiplier = (item, multi) => item * multi;
multiplier(4, 2);
//default Parameters: ES6 introduces default parameters for functions to create more flexible functions.
/*It means that you can set default values to a function parameters and when you call the function,
if you don’t define the parameters value, then the function will execute with the value that you set as default.
*/
const greeting = (name = "Anonymous") => "Hello " + name;
console.log(greeting("John"));//Hello John
console.log(greeting());//Hello Anonymous
