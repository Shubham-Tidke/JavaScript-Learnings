//one-dimensional array
let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length);// 7

//multi-dimensional array [can also contains complex objects]
let complexArray = [
  [{one: 1,two: 2},{three: 3,four: 4 }],
  [
    {
      a: "a",
      b: "b"
    },
    {
      c: "c",
      d: "d"
    }
  ]
];

//Using Bracket Notation
let ourArray = ["a", "b", "c"];
console.log(ourArray[0]); // a

let myArray = ["a", "b", "c", "d"];
myArray[1]='z'
console.log(myArray); //["a", "z", "c", "d"]

//push() and unshift()
let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];

romanNumerals.unshift('XIX', 'XX');//['XIX', 'XX', 'XXI', 'XXII']
romanNumerals.push(twentyThree);//['XIX', 'XX', 'XXI', 'XXII', 'XXIII']

function mixedNumbers(arr) {
  arr.unshift("three")
  arr.unshift(2);
  arr.unshift("I")
  arr.push(7)
  arr.push("VIII");
  arr.push(9)
  return arr;
}
console.log(mixedNumbers(['IV', 5, 'six'])); //[ 'I', 2, 'three', 'IV', 5, 'six', 7, 'VIII', 9 ]

//pop() and shift()
let greetings = ['whats up?', 'hello', 'see ya!'];
greetings.pop(); //['whats up?', 'hello'].
greetings.shift(); //['hello'].

function popShift(arr) {
  let popped = arr.pop();; // Change this line
  let shifted = arr.shift(); // Change this line
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete'])); //[ 'challenge', 'complete' ]

//Remove Items Using splice()
//to remove any number of consecutive elements from anywhere in an array.
let array = ['today', 'was', 'not', 'so', 'great'];
array.splice(2, 2);//['today', 'was', 'great']

//Copy Array Items Using slice()
let array = ['I', 'am', 'feeling', 'really', 'happy'];
let newArray = array.splice(3, 2);
//newArray = ['really', 'happy']

//Add Items Using splice()
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers);

//Copy an Array with the Spread Operator
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];//[true, true, undefined, false, null]

//Combine Arrays with the Spread Operator
let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];
let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
//['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander'].

function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence =['learning',...fragment,'is','fun']; // Change this line
  return sentence;
}
console.log(spreadOut());//[ 'learning', 'to', 'code', 'is', 'fun' ]

//indexOf()
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates'); //-1
fruits.indexOf('oranges');//2
fruits.indexOf('pears');//4

function quickCheck(arr, elem) {
  return arr.indexOf(elem)=== -1 ? false:true
}
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms')); //false

//Iterate Through All an Array's Items Using For Loops
function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
greaterThanTen([2, 12, 8, 14, 80, 0, 1]);

//multi-dimensional arrays
let nestedArray = [
  ['deep'],
  [    ['deeper'], ['deeper']   ],
  [   [  ['deepest'], ['deepest']  ],
  [   [    ['deepest-est?']  ]  ]  ]
];
console.log(nestedArray[2][1][0][0][0]);//deepest-est?
