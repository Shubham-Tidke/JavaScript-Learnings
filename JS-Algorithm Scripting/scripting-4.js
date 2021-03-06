/*
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
Base pairs are a pair of AT and CG. Match the missing element to the provided character.
*/
function pairElement(str) {
  var pairs = [];
var getPaired = function(char){
  switch (char) {
      case "A":
        pairs.push(["A", "T"]);
        break;
      case "T":
        pairs.push(["T", "A"]);
        break;
      case "C":
        pairs.push(["C", "G"]);
        break;
      case "G":
        pairs.push(["G", "C"]);
        break;
    }
}
for(var i = 0 ; i < str.length;i++){
    getPaired(str[i]);
  }
  return pairs;
}
pairElement("GCG"); //[["G", "C"], ["C","G"], ["G", "C"]]

/*
      Missing letters
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.

*/
//charCodeAt : char to ascii
//fromCharCode : ASCII to char
function fearNotLetter(str) {
  let currCharCode = str.charCodeAt(0);//ASCII of first char of string
  let missing  = undefined;
  str.split("")
     .forEach(char=>{ //check ascii for each char ,if any ascii doesnot matches,return that
       if(char.charCodeAt(0)===currCharCode)
        currCharCode++;
       else{
         missing = String.fromCharCode(currCharCode)
       }
     })
  return missing;
}

fearNotLetter("abce");


/*
Write a function that takes two or more arrays and returns a new array of unique values
in the order of the original provided arrays.In other words, all values present from all arrays
should be included in their original order, but with no duplicates in the final array.
The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
*/
function uniteUnique(arr) {
  var args = [...arguments];
  var result = [];
  for (var i = 0; i < args.length; i++) {
    for (var j = 0; j< args[i].length; j++) {
        if(!result.includes(args[i][j]))
          result.push(args[i][j]);
    }
  }
  return result;
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

//another solution[ES2019]
function uniteUnique(...arr) {
  return [...new Set(arr.flat())];
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

//Sum All Odd Fibonacci Numbers
function sumFibs(num) {
  let arr= new Array(num+2);
  arr[0] = 0;
  arr[1] = 1;
  for (var i = 2; i < arr.length; i++) {
    arr[i] = arr[i-1]+arr[i-2];
  }
  let fiboSum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]<=num && arr[i] %2 === 1) {
      fiboSum+=arr[i];
    }
  }
  return fiboSum;
}

sumFibs(4);

//Sum of All Primes
function sumPrimes(num) {
  let sum = 0;
  for (var i = 2; i <= num; i++) {
    if(isPrime(i)){
      sum+=i;
      console.log(i);
    }

  }
  return sum;
}
function isPrime(num){
  for (var i = 2; i < num; i++) {
      if(num%i == 0)
        return false;
  }
  return true;
}

sumPrimes(10);


//Smallest Common Multiple
/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both,
as well as by all sequential numbers in the range between these parameters.
*/
function smallestCommons(arr) {
  const [min,mix] = arr.sort((a,b)=> a-b);
  const numberDivisors = max - min + 1;
  let upperBound = 1 ;
  for (let i = min; i <= max; i++) {
    upperBound *= i;
  }
  for (let multiple = max; multiple <= upperBound; multiple += max) {
    // Check if every value in range divides 'multiple'
    let divisorCount = 0;
    for (let i = min; i <= max; i++) {
      // Count divisors
      if (multiple % i === 0) {
        divisorCount += 1;
      }
    }
    if (divisorCount === numberDivisors) {
      return multiple;
    }
  }
}
smallestCommons([1,5]);

/*
Given the array arr, iterate through and remove each element starting from the first element (the 0 index)
until the function func returns true when the iterated element is passed through it.
Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
*/
function dropElements(arr, func) {
  let originalLen = arr.length;
  for (let i = 0; i < originalLen; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
