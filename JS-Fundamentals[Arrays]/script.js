//Arrays
'use strict'
const arr = ['a','b','c'];
console.log(arr)
const newArr = [1,'a',1.1];
console.log(newArr)
console.log(newArr.length)
//deleting first element from array
arr.shift()
console.log(arr)
//adding at start in array
arr.unshift('z')
console.log(arr)
//deleting last element of arr
arr.pop()
//adding element in last of arr
arr.push('d')
console.log(arr)
const array = [2019,2012,1998,1996]
const Avg = ()=>{
    let sum = array[0]+array[2]+array[3]
    sum /=array.length
    return sum
}
console.log(Avg())

//Objects : unstructured data structure
const Obj = {
    firstKey : 'firstValue',
    secondKey: 12,
    thirdKey: false,
    fourthKey: ['fourth1','fourth2'],
    fifthKey: function(){
        return this.secondKey*this.secondKey
    }
};
let input = prompt('Which key do you want?[first/second/third/fourth]')
input+='Key';
console.log(Obj[input]);
console.log(Obj.firstKey);
console.log(Obj['fourthKey'])
console.log(Obj.fifthKey(5))

//Loops

for(let i = 0 ; i<arr.length;i++){
    console.log(arr[i])
}
let i = 0;
while(i < newArr.length){
    console.log(newArr[i])
    i++
}

for(let i=0;i<10;i++){
    console.log(i+1)
}