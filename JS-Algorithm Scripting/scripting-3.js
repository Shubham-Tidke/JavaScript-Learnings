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

//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {
  return str
  .split(/\s|_|(?=[A-Z])/)
  .join("-")
  .toLowerCase();
}
spinalCase('thisIsSpinalTap');

/*
Pig Latin is a way of altering English Words. The rules are as follows:
- If a word begins with a consonant, take the first consonant or consonant cluster,
 move it to the end of the word, and add ay to it.
- If a word begins with a vowel, just add way at the end.
*/
function translatePigLatin(str) {
  let consonantRegex = /^[^aeiou]+/
  let consonant = str.match(consonantRegex);
  return consonant!==null ?
   str.replace(consonantRegex,"")
      .concat(consonant)
      .concat("ay")
      :str.concat("way");
}
translatePigLatin("algorithm");//algorithmway
translatePigLatin("consonant");//onsonantcay

/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.
First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).
Note: Preserve the case of the first character in the original word when you are replacing it.
For example if you mean to replace the word Book with the word dog, it should be replaced as Dog
myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return the string He is Sitting on the couch
*/
function myReplace(str, before, after) {
let index = str.indexOf(before)
if(str[index]=== str[index].toUpperCase())
    after=after.charAt(0).toUpperCase()+after.slice(1)
else
    after=after.charAt(0).toLowerCase()+after.slice(1)
  return str.replace(before,after);
}
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
