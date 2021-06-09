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
let myRegex = /en*/ig;
jennyStr.match(myRegex);//["nN","nn"]
