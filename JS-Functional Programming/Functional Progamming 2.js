//map Method to Extract Data from an Array
/*
he map method iterates over each item in an array and returns a new array
containing the results of calling the callback function on each element. It does this without mutating the original array.
*/
var watchList = [
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  }
];
var ratings = var ratings = watchList.map((movie)=>({
  title:movie.Title,
  rating:movie.imdbRating
}))
console.log(JSON.stringify(ratings));

//filter Method to Extract Data from an Array
//The new array should only include objects where imdbRating is greater than or equal to 8.0.
var filteredList = watchList
.filter(movie=>movie.imdbRating >= 8)
.map(movie=>({
  title:movie.Title,
  rating:movie.imdbRating
}));

//Return Part of an Array Using the slice Method
//the " splice " method mutates the original array, The " slice " method does not mutate the original array, but returns a new one.
var arr = ["Cat", "Dog", "Tiger", "Zebra"];
var newArray = arr.slice(1, 3);//["Dog", "Tiger"]

//Combine Two Arrays Using the concat Method
//It returns a new array and does not mutate either of the original arrays
//push adds an item to the end of the same array it is called on, which mutates that array.
function nonMutatingConcat(original, attach) {
    return first.concat(second)
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);

//Use the reduce Method to Analyze Data
//The reduce method allows for more general forms of array processing
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);
console.log(sumOfAges); //64

//Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
//The function should return a new array
// containing the squares of only the positive integers (decimal numbers are not integers)
const squareList = arr => {
  return arr
  .filter(num => num > 0 && num%parseInt(num) === 0)
  .map(num=>num*num);
};
console.log(squareList([-3, 4.8, 5, 3, -3.2]));

//Sort an Array Alphabetically using the sort Method
function alphabeticalOrder(arr) {
  return arr.sort();
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

//Return a Sorted Array Without Changing the Original Array
//sort method mutates the array in place
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  return arr
  .slice(0,arr.length)//slice returns a new array
  .sort(function(a,b){return a-b})
}
nonMutatingSort(globalArray);


//Split a String into an Array
var str = "Hello World";
var bySpace = str.split(" "); //["Hello", "World"]

var otherString = "How9are7you2today";
var byDigits = otherString.split(/\d/); //["How", "are", "you", "today"]

//Combine an Array into a String Using the join Method
var arr = ["Hello", "World"];
var str = arr.join(" ");//Hello World

//String to sentence
function sentensify(str) {
  return str.split(/\W/).join(" ")
}
sentensify("May-the-force-be-with-you");//May the force be with you

//Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL
//The output is a string with the spaces between words replaced by a hyphen (-)
function urlSlug(title) {
  return title.trim().toLowerCase().split(/\s+/).join("-")
}
urlSlug("Winter Is Coming");


//every Method to Check that Every Element in an Array Meets a Criteria
var numbers = [1, 5, 8, 0, 10, 11];
numbers.every(function(currentValue) {
  return currentValue < 10;
});//The every method would return false here.

//some Method to Check that Any Elements in an Array Meet a Criteria
var numbers = [10, 50, 8, 220, 110, 11];
numbers.some(function(currentValue) {
  return currentValue < 10;
});//The some method would return true.
