//--Match Anything with Wildcard Period--
//The wildcard is also called dot and period
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr); //true : "hum/hug"

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; //accepts string ending with "un"
let result = unRegex.test(exampleStr);

//---Match Single Character with Multiple Possibilities--
/* [] are used to match strings with specific mentioned Characters
eg. for /b[aie]g/ accepts big,bag,beg and rejects bug.
*/
let str1 = "big butbeip"
let str2 = "beg"
let str3 = "bug"
let regex =/b[aie]g/;
let result1 =str1.match(regex);
console.log(str1.match(regex));
let result2 =regex.test(str2);
let result3 =regex.test(str3);
console.log(`${result1},${result2},${result3}`);//true,true,false

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelStr= /[aeiou]/ig;
let result = quoteSample.match(vowelStr)
console.log(quoteSample.match(vowelStr)); //prints all vowels

//---Match Letters of the Alphabet--
/*using[],if need to match large no. of Characters,it would be difficult
so to Match large no. of Characters in-built feature [a-z] used, here matches chars from a to z*/
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex);//cat
batStr.match(bgRegex);//bat
matStr.match(bgRegex);//null
//this can be used to match numbers as well
let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
jennyStr.match(myRegex);//prints a-z Characters and 0-9 numbers

//--match Letters except mentioned Letters
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let consonants= /[^aeiou]/ig;
quoteSample.match(consonants);//prints all consonants in string

//--Match Characters that Occur One or More Times--
/*
  using '+',Characters which are occuring More than once consecutively can be printed
*/
let jennyStr = "JenNy86753nn09";
let myRegex = /[n+]/ig;
jennyStr.match(myRegex);//["N","n","n","n"]

let jennyStr = "JenNy86753nn09";
let myRegex = /n+/ig;
jennyStr.match(myRegex);//["nN","nn"]

//Match Characters that Occur Zero or More Times
/*
  + logs Characters that occurs one or more time, * logs Characters that occurs zero or more
*/
let jennyStr = "JenNy86753enne09";
let myRegex = /e*n*/ig;
jennyStr.match(myRegex);//["enN","enn","e"]

//Write a greedy regex that finds one or more criminals within a group of other people.
// A criminal is represented by the capital letter C.
let reCriminals = /[C]+/;

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);
console.log(result);
/*
Match Ending String Patterns : You can search the end of strings using the dollar sign character $ at the end of the regex.
*/
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);//true
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);//false

//---Match All Letters and Numbers--
/*
  Using character classes, you were able to search for all letters of the alphabet with [a-z].
  The closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_].
*/
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);//true
shortHand.test(numbers);//true
longHand.test(varNames);//true
shortHand.test(varNames);//true

//--- Match Everything But Letters and Numbers ---
/*
You can search for the opposite of the \w with \W.
*/
let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand); //[%] Everything except alphanumeric value
sentence.match(shortHand);//[!]

// --- Match All Numbers ---
/*
he shortcut to look for digit characters is \d  This is equal to the character class [0-9]
*/
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;
console.log(result); // 4[numbers]

// --- Match All Non-Numbers ---
/*
  The shortcut to look for non-digit characters is \D. This is equal to the character class [^0-9]
*/
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;
console.log(result);//17


/*
  Regex exercise
  rules that users have to follow when creating their username.
  1.  Usernames can only use alpha-numeric characters.
  2.  The only numbers in the username have to be at the end.
   There can be zero or more of them at the end. Username cannot start with the number.
  3.  Username letters can be lowercase and uppercase.
  4.  Usernames have to be at least two characters long.
  A two-character username can only use alphabet letters as characters.
*/
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
console.log(userCheck.test(username)); //true as username passes all cases
