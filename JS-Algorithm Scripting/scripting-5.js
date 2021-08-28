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
  var arr = new Array();
  str.split(" ");
  return arr;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100"+
          " 00100000 01100010 01101111 01101110 01100110 01101001 "+
          "01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
