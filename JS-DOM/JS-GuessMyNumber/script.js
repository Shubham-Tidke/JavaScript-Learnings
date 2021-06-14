'use strict';

//DOM and DOM manipulation are part of WEB APIs which can be accessed by JS
let CorrectNumber = Math.trunc(Math.random()*20)+1; //generating random num between 1-20
let score = 20;
let highscore = Number(document.querySelector('.highscore').textContent);


document.querySelector('.check').addEventListener('click',function(){
//getting the user input using check class of button and guess class of input field with 'addEventListener'event
  const userInput = Number(document.querySelector('.guess').value);
  if(!userInput){
    document.querySelector('.message').textContent = 'invalid guess!!'
  }
  else if(userInput!=CorrectNumber){
  document.querySelector('.message').textContent =  userInput > CorrectNumber ?'Too high!!':'Too low!!'
      score --;
      if(score <=0){
        document.querySelector('.message').textContent = 'Loser,Try Again!!'
        document.querySelector('.score').textContent = 0;
      }else
      document.querySelector('.score').textContent =score ;
  }
  else if(userInput === CorrectNumber){
    document.querySelector('.message').textContent = 'GG,💯Correct guess!!'
    document.querySelector('.number').textContent = CorrectNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    if(score > highscore)
    document.querySelector('.highscore').textContent = score;
  }
})
document.querySelector('.again').addEventListener('click',function(){
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value ="";
  CorrectNumber = Math.trunc(Math.random()*20)+1;
})
