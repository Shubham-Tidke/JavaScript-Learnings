//Promise is a constructor function, so you need to use the new keyword to create one.
// It takes a function, as its argument, with two parameters - resolve and reject
const myPromise = new Promise((resolve, reject) => {
  console.log("first-promise");
});console.log(myPromise);//shows pending state
/*
A promise has three states: pending, fulfilled, and rejected,
if nothing is provided in resolve or reject,Promise stays in  pending state
*/
const myPromise = new Promise((resolve, reject) => {
  if(1===1) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});console.log(myPromise);//shows promise resolved


//handling server requests using promise
const makeServerRequest = new Promise((resolve,reject)=>{
  let serverResponse = false;
  if(serverResponse){
    resolve("Response received!");
  }
  else {
    reject("Response not found!");
  }
});
//consuming requests
makeServerRequest.then(result=>{
  console.log(result);
});
makeServerRequest.catch(error=>{
  console.log(error);
});
