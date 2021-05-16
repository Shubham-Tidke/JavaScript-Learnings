//using variables and data types
console.log("JS supports dynamic typing : no need to provide data type of varaible ")
let nameX = "shubham - String data type"
console.log(nameX)
let integer = 10
console.log(integer+" - Number data type")
let char = 'c'
console.log(char+" - Character")
let bool = true
console.log(bool+" -  boolean data type")
let check = 12;
console.log(check+" - "+typeof check)
check = "changed to string"
console.log(check+" - "+typeof check)
console.log(typeof 'nameX')

//using let var const
let abc = "initial value"
console.log(abc)
abc = "let allows value update"
console.log(abc)
const xyz = "value created using const"
console.log(xyz)
//xyz = "const value can't be updated "
console.log(xyz)
var  value = "first value using VAR"
value = "VAR is function scoped"

//Operators
//Arithmatic + - / % * ** 
const now = 2;
const then = 5;
console.log(then+now,then-now,then*now,then/now,then%now,now**then)
//Assignment operator '= += -= *= /= ++ --'
let temp = 1234;
console.log(temp+=100,temp-=100,temp*=100,temp/=100,temp++,temp--)
//comparison operators > >= < <= ==
console.log(now<then,now>then,now==then,now<=then,now>=then,now===then)
console.log('difference between == & ===')
console.log(now == '1234',now === '1234')

//String and template literals
let string = "String created using normal initialization for : "+temp
console.log(string)

console.log(`String using template literals ${temp}`)
//if-else
if(string==0)
console.log(`${string} is  null`)
console.log("not null")