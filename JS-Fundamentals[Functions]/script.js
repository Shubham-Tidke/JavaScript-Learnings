//Using Strict mode
'use strict';

//Functions
function func_name(){
    console.log("first function!")
}
func_name();
//function declaration
console.log(add(10,20))//function declaration can be called before declaring
function add(first,second){
    return first+second;
}
//function expression[anonymuous function]
const fun = function(a,b)
{
    return a*b
}
const answer = fun(10,20)
console.log(answer)
//Arrow function
const multiplication = (a,b)=>a*b
console.log(multiplication(10,20))
//function calling other function
const solution = (a)=>{
    a = multiplication(a,a)
    return a*a
}
console.log(solution(5))
