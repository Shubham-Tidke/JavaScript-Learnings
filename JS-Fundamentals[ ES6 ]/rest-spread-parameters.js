/*Rest parameter.
 With the rest parameter, you can create functions that take a variable number of arguments.
These arguments are stored in an array that can be accessed later from inside the function.
map(),reduce can be used with rest parameter
*/
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); //args.length = 3
console.log(howMany("string", null, [1, 2, 3], { }));//args.length = 4
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0); //return a+b
}
console.log(sum(10+20+30));//60
console.log(sum(10+20+30+40+50));//150
/*Spread parameter.
 Spread parameter allows us to expand arrays and other expressions in places where
  multiple parameters or elements are expected.
*/
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);
//using Spread operator
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
//copying array using spread operator
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1]; // Change this line
let arr3 = [...arr2,'JUNE']
console.log(arr2);//['JAN', 'FEB', 'MAR', 'APR', 'MAY']
console.log(arr3);//['JAN', 'FEB', 'MAR', 'APR', 'MAY','JUNE']

//Destructuring Assignment to Extract Values from Objects
// used for neatly assigning values taken directly from an object.
//ES5
const user = { name: 'John Doe', age: 34 };
const name = user.name;
const age = user.age;
//ES6
const { name, age } = user;

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};const{today,tomorrow}=HIGH_TEMPERATURES;

//Destructuring Assignment to Assign Variables from Objects
/*Destructuring allows you to assign a new variable name when extracting values.
You can do this by putting the new name after a colon when assigning the value.*/
//ES5
const user = { name: 'John Doe', age: 34 };
const userName = user.name;
const userAge = user.age;
//ES6
const { name: userName, age: userAge } = user;

//Destructuring Assignment with the Rest Parameter to Reassign Array Elements
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);//[1,2]
console.log(arr);//[3,4,5,7]
