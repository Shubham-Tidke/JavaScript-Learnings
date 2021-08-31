//Palindrome Checker
function palindrome(str) {
  var re = /[W_]/g //removing unwanted character
  var newstr = str.toLowerCase().replace(re,'')//lowercase and remove unwanted character using regex
  var reverse = newstr.split('').reverse().join('')//reversing the newstr
  return reverse === newstr;
}
palindrome("eye");
