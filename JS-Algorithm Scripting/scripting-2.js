// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'.
// This means that given an element x, the 'truth test' is passed if func(x) is true.
// If no element passes the test, return undefined.
function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
  if(arr[i]%2 === 0)
    return arr[i]
  }
  return undefined;
}
findElement([1, 2, 3, 4], num => num % 2 === 0);


//Title Case a Sentence
function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
}
titleCase("I'm a little tea pot");

// You are given two arrays and an index.
// Copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
  let arr = arr2.slice();//copy arr2
  arr.splice(n,0,...arr1)//overwrite elements from nth index with arr1
  return arr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);//4,1,2,3,5,6

/*
Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
Hint: Try converting each value to a Boolean.
*/
function bouncer(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) newArray.push(arr[i]);
  }
  return newArray;
}
bouncer([7, "ate", "", false, 9]);

/*
Return the lowest index at which a value (second argument) should be inserted into an array (first argument)
 once it has been sorted. The returned value should be a number.
*/
function getIndexToIns(arr, num) {
arr.sort(function(a, b){return a-b});//sorting arr
let i = 0;
  while(arr[i]<num)
    i++
return i;
}
getIndexToIns([400, 60], 50);

/*
Return true if the string in the first element of the array contains
all of the letters of the string in the second element of the array.
*/
function mutation(arr) {
 let test=arr[1].toLowerCase();
  let target=arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}
mutation(["hello", "Helloey"]);

/*
Write a function that splits an array (first argument) into
groups the length of size (second argument) and returns them as a two-dimensional array.
*/
function chunkArrayInGroups(arr, size) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);
