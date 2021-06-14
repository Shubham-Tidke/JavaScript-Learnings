'use strict';
const score1 = document.querySelector('#score--0');
const score2 = document.getElementById('score--1');
const activePlayer1 = document.querySelector('.player--0');//for changing backgroundColor of active player
const activePlayer2 = document.querySelector('.player--1');//for changing backgroundColor of active player
const currentScore1 = document.getElementById('current--0');//active score of player 1
const currentScore2 = document.getElementById('current--1');//active score of player 2
const dice  = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
dice.classList.add('hidden'); //hiding the dice at start of the game
score1.textContent = 0;
score2.textContent = 0;
let currentDiceScore = 0; //value of dice on each roll
let finalScores =[0,0]; //storing final scores of players in an array
let activePlayer = 0; //at start player 0 starts

const switchPlayer = function(){
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  //switching the active player when 1 appears on dice
  activePlayer= activePlayer === 1 ? 0 : 1;
  currentDiceScore = 0;
  activePlayer1.classList.toggle('player--active');
  activePlayer2.classList.toggle('player--active');
}
btnRoll.addEventListener('click',function(){
  const rollDice = Math.trunc(Math.random()*6)+1; //generating new value on dice
  //display Dice
  dice.classList.remove('hidden');
  dice.src = `dice-${rollDice}.png`;//loading dice image wrt the random value generated
  //if( dice appears 1,score flushes and another player will roll the dice )
  if(rollDice!==1){
    currentDiceScore+=rollDice;
    //dynamically updating dice score of active player
    document.getElementById(`current--${activePlayer}`).textContent = currentDiceScore;
  }
  else{
    switchPlayer();
  }
})
btnHold.addEventListener('click',function(){
  //add current score to final score of players
  finalScores[activePlayer]+=currentDiceScore;
  document.getElementById(`score--${activePlayer}`).textContent = finalScores[activePlayer];
  if(finalScores[activePlayer] >=20){
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    dice.classList.add('hidden');
    btnRoll.classList.add('hidden');
    btnHold.classList.add('hidden');
  }else
  switchPlayer();//switch active player after current player chose to hold
})
btnNew.addEventListener('click',function(){
  currentDiceScore = 0;
  //dice.classList.remove('hidden');
  btnRoll.classList.remove('hidden');
  btnHold.classList.remove('hidden');
  currentScore1.textContent = 0;
  currentScore2.textContent = 0;
  document.getElementById(`score--0`).textContent = 0;
  document.getElementById(`score--1`).textContent = 0;
  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--winner');
  document.querySelector(`.player--0`).classList.add('player--active');
  document.querySelector(`.player--1`).classList.remove('player--active');
  finalScores[0] = 0;
  finalScores[1] = 0;

})
