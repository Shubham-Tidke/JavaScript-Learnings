//Flatten a nested array. You must account for varying levels of nesting.
function steamrollArray(arr) {
  const flatArray = [];
  for (var i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])){
        //recursive call to function to check more nested arrays
        flatArray.push(...steamrollArray(arr[i]));
    }
    else{
      flatArray.push(arr[i]);
    }
  }
  return flatArray;
}
steamrollArray([1, [2], [3, [[4]]]]);

//Binary Agents
//Return an English translated sentence of the passed binary string.The binary string will be space separated.
function binaryAgent(str) {
  var arr = str.split(" ")
            .map(binary=> String.fromCharCode(parseInt(binary,2)))
            .join('');

  return arr;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100"+
          " 00100000 01100010 01101111 01101110 01100110 01101001 "+
          "01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");


//you are given an array collection of objects.
// The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false
function truthCheck(collection, pre) {
  return collection.every(function(element){
    return element.hasOwnProperty(pre) && Boolean(element[pre])
    //check if property "pre"exists for every element and it is truthy
  });
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"},
            {"user": "Dipsy", "sex": "male"},
            {"user": "Laa-Laa", "sex": "female"},
            {"user": "Po", "sex": "female"}], "sex");

/*
Create a function that sums two arguments together. If only one argument is provided,
then return a function that expects one argument and returns the sum.
For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
*/
function addTogether() {
  const[first,second] = arguments;
  if(typeof(first)!== "number")
    return undefined;

  if(second === undefined)
    return (second)=>addTogether(first,second);

  if(typeof(second)!== "number")
  return undefined;

  return first+second;
}
addTogether(2,3);


/*
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)

*/
var Person = function(firstAndLast) {
  var fullname = firstAndLast;
  this.getFirstName= function(){
      return fullname.split(" ")[0];
  };
  this.getLastName = function(){
    return fullname.split(" ")[1];
  };
  this.getFullName = function() {
    return fullname;
  };
  this.setFirstName = function(name){
    fullname = name +" "+ this.getLastName();
  }
  this.setLastName = function(name){
    fullname = this.getFirstName()+" "+name;
  }
  this.setFullName = function(name){
    fullname = name;
  }
  return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();
