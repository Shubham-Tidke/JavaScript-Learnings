/*
Regular expressions are used in programming languages to match parts of strings.
 You create patterns to help you do that matching.
*/
//.test() method
let testStr = "freeCodeCamp";
let testRegex = /Code/;
let wrongRegex = /code/;
testRegex.test(testStr);//finds 'Code' in String testStr [returns output:true]
wrongRegex.test(testStr);//return false;

//Match a Literal String with Different Possibilities
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird/; // checking for multiple string using "|" operator
petRegex.test(petString);

//Ignore Case While Matching
/*to ignore the case [uppercase/lowercase] 'i' flag is used*/
let testStr = "freeCodeCamp";
let testRegex = /code/i; // the flag 'i' ignores casing
testRegex.test(testStr);

//Extract Matches
//after checking the patterns,to Extract the Matches .match() is used
let string = "HElloabcHelloabcheLlo"
let regex = /Hello/i
string.match(regex);//logs ["HEllo"] as it is a first match and casing is ignored!
 //.match syntax is the "opposite" of the .test method

 //Find More Than the First Match
 //to extract all the matches from the string, 'g'flag is used.
 let string = "HElloabcHellOabchello"
 let regex = /Hello/gi
 string.match(regex); // logs [ HEllo,HellO,hello] as casing is also ignored usng i flag
