'use srict';

//selecting elements 
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let inactivePlayer = 1 ;
let playing = true;

//starting point
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    inactivePlayer = inactivePlayer === 1 ? 0 : 1;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');

};

//funtionality
btnRoll.addEventListener('click', function() {
    if(playing ===true){
    //Rolling
    const dice = Math.trunc(Math.random() * 6) + 1;
    
    //Display
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //Adding
    if(dice  !== 1 ){
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }
    else {
        switchPlayer();
    }
}
});
 btnHold.addEventListener('click',function () {
     if (playing ===true){
   // Add current score to  player score
   scores[activePlayer] += currentScore;
   document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
   //Final score 50
   if(scores[activePlayer] >=100){
       playing = false;
       diceEl.classList.add('hidden');
       document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
       document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
       document.querySelector(`#current--${activePlayer}`).textContent = "YOU WIN 🤩";
       document.querySelector(`#current--${inactivePlayer}`).textContent = "YOU LOSE 😞";
       document.querySelector('.current-label').textContent = "";
       document.querySelector('.current-label-1').textContent = "";
      }
   //switching
   else{
   switchPlayer();
     }
    }
 });
 btnNew.addEventListener('click', function () {
  if(scores[0] > 0 || scores[1] > 0 || currentScorre > 0){ 
      playing = true;
      scores[0] = 0;
      scores[1] = 0;
      currentScore = 0;
    document.querySelector('.current-label').textContent = "current";
    document.querySelector('.current-label-1').textContent = "current";
    document.querySelector(`#current--${activePlayer}`).textContent = "0";
    document.querySelector(`#current--${inactivePlayer}`).textContent = "0";
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
    document.querySelector('#score--0').textContent = "0";
    document.querySelector('#score--1').textContent = "0";
  }
 });



