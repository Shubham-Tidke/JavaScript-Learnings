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
