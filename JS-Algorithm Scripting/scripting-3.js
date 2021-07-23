// Sum All Numbers in a Range
function sumAll(arr) {
  let sum =0;
  let min = Math.min(arr[0], arr[1])
  let max = Math.max(arr[0], arr[1])
  for(let i = min;i<=max;i++){
    sum=sum+i;
  }
  return sum;
}
sumAll([10, 5]);

//Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both
function diffArray(arr1, arr2) {
  return arr1
  .concat(arr2)
  .filter(num => !arr1.includes(num) || !arr2.includes(num));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

//You will be provided with an initial array (the first argument in the destroyer function),
//followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
function destroyer(arr) {
  let valsToRemove = Object.values(arguments).slice(1);
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < valsToRemove.length; j++) {
        if(arr[i] === valsToRemove[j]){
          delete(arr[i])
        }
    }
  }
  return arr.filter(num => num!=null);
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);

/*
Make a function that looks through an array of objects (first argument) and returns an array of all objects
that have matching name and value pairs (second argument).Each name and value pair of the source object has to be present
in the object from the collection if it is to be included in the returned array.
*/
function whatIsInAName(collection, source) {
  let srcKeys = Object.keys(source);
  return collection.filter(function(obj){
    for (var i = 0; i < srcKeys.length; i++) {
      if (!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]])
           return false;
      }
      return true;
  });
}
whatIsInAName([
  { first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null },
  { first: "Tybalt", last: "Capulet" }],{ last: "Capulet" });
