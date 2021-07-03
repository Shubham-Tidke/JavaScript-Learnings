
//reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}
reverseString("hello");

//Factorialize a Number
function factorialize(num) {
  if(num === 1)
  return 1;
  for(let i =num-1 ;i>0;i--)
  {num= num*i;}
  return num;
}
factorialize(5);

//Find the Longest Word in a String
function findLongestWordLength(str) {
  let length = 0;
  let arr = str.split(" ");
  for(let i = 0;i<arr.length;i++)
    length = (length<arr[i].length ? arr[i].length:length)
  return length;
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");

//Return Largest Numbers in Arrays
function largestOfFour(arr) {
  let results = [];
 for (let i = 0; i < arr.length; i++) {
   let largestNumber = arr[i][0];
   for (let j = 1; j < arr[i].length; j++) {
     if (arr[i][j] > largestNumber) {
       largestNumber = arr[i][j];
     }
   }
   results[i] = largestNumber;
 }
 return results;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//Confirm the Ending
function confirmEnding(str, target) {
  return str.endsWith(target);
}
confirmEnding("Bastian", "n");
//without .endsWith()
function confirmEnding(str, target) {
  for (var i = 0; i < target.length; i++) {
      if(str.charAt(str.length-target.length+i)!==target.charAt(i))
      return false;
  }
  return true;
}

confirmEnding("Connor", "n");

//Truncate a String
function truncateString(str, num) {
  let s=""
for (var i = 0; i < num; i++) {
      s+=str.charAt(i);
  }
  s = s.length < str.length ?s+"...":s;
  return s;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
