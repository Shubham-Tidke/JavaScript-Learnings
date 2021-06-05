//var declaration can be overwritten
var camper = 'James';
var camper = 'David';
console.log(camper);
//let declaration can not overwritten
let name = 'shubham';
//let name = 'Kiran'; gives error!
console.console.log(name);
//"use strict"enables Strict Mode, which catches common coding mistakes and "unsafe" actions.
'use strict'
x = 123;//gives error for not declaring x

let catName;
let quote;
function catTalk() {
  "use strict";
  catName = "Oliver";
  quote = catName + " says Meow!";
}
catTalk();
//var keyword has no scope boundries
var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
//output:3 expected :2
//let keyword is limited scope according to its declaration
let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
console.log(i);
//output:3 and error: i is not defined
//const keyword cannot be reassigned
const FAV_PET = "Cats";
FAV_PET = "Dogs";
//output:error
const s = [5, 6, 7];
s = [1, 2, 3];
s[2] = 45;
console.log(s);
//output:error as const will not allow to reassign
