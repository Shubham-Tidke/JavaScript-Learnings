//Type conversion
let temp = '1991';
console.log(temp,Number(temp))
//'=='operator excludes the datatype
console.log(temp==Number(temp),temp===Number(temp))
temp = 123;
console.log(String(temp))

//Type Coercion : JS convert type internally
console.log("number: "+temp) // temp converted to String using '+'
console.log(typeof('10'+'20'-5)) // Strings converted to Number
console.log('23'*'5')
console.log('23'+'5')//Strings won't get converted to Number

//Truthy and Falsy values
//Falsy : 0,'',undefined,null,NaN
console.log(Boolean(0))
console.log(Boolean(''))
console.log(Boolean(undefined))
console.log(Boolean(null))
console.log(Boolean(NaN))

//If-else
if(temp == '123'){
    console.log('IF-ELSE loose version')
}
if(temp === 123)
console.log('IF-ELSE tight version')
if(temp!== 345){
    console.log('Tight check')
}
if(temp!= '123'){
    console.log('losse check')
}
else console.log('Else run due to loose check!')

//Ternary Operator
    temp >=500 ? console.log("above 500"):console.log("below 500")
    //normal if-else doesnot work in literals
    console.log(`temp has value ${temp>=500 ? 'above 500':'below 500'}`)
//Switch
const day = 'Wednesday'
switch (day) {
    case 'Tuesday':
        console.log("In Tuesday")
        break;
    case 'Wednesday':
        console.log("In Wednesday")
        break;

    default:
        console.log("Invalid Day")
        break;
}