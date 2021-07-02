//Key-Value Pairs to JavaScript Objects
const tekkenCharacter = {
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true
};
tekkenCharacter.origin = 'South Korea';//dot notation
tekkenCharacter['hair color'] = 'dyed orange';//Bracket notation
const eyes = 'eye color';
tekkenCharacter[eyes] = 'brown';
console.log(tekkenCharacter);

//Modify an Object Nested Within an Object
let nestedObject = {
  id: 28802695164,
  date: 'December 31, 2016',
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13,
      busy: 8
    }
  }
};
nestedObject.data.onlineStatus.busy = 10;

//delete Keyword to Remove Object Properties
delete nestedObject.data.totalUsers;
//Check if an Object has a Property
nestedObject.hasOwnProperty('data.totalUsers')//false

//Iterate Through the Keys of an Object with a for...in Statement
for (let user in nestedObject) {
  console.log(user);
}

//Generate an Array of All Object Keys with Object.keys()
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};
function getArrayOfUsers(obj) {
  return Object.keys(obj);
}
console.log(getArrayOfUsers(users));//[ 'Alan', 'Jeff', 'Sarah', 'Ryan' ]
