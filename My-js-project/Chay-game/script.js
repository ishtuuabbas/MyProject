'use strict';
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const scoreEl0 = document.querySelector('#score--0');
const scoreEl1 = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore,  currentPlayer, playing;

// starting condition 
const init = function(){
    scores = [0,0];
    currentScore = 0;
    currentPlayer = 0;
    playing = true;
    
    scoreEl0.textContent = 0;
    scoreEl1.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
};
init();

const switchPlayer = function(){
    document.getElementById(`current--${currentPlayer}`).textContent = 0;
    currentScore = 0;
    currentPlayer = currentPlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

// Rolling dice functionality 
btnRoll.addEventListener('click', function(){
    if (playing) {
    // 1. Generate a random dice roll 
    const dice = Math.trunc(Math.random() * 6) + 1;


    // 2. Dispaly dice 
    diceEl.classList.remove('hidden')
    diceEl.src = `dice-${dice}.png`;

    // 3. checked for rolled 1 
    if (dice != 1){
        // add dice to current score 
        currentScore += dice;
        document.getElementById(`current--${currentPlayer}`).textContent = currentScore;
    } else {
        // switch to next player 
        switchPlayer();
    }
}
});

btnHold.addEventListener('click', function(){
    if (playing){
    // 1. add current score to active player's score 
    scores[currentPlayer] += currentScore;
    document.getElementById(`score--${currentPlayer}`).textContent = scores[currentPlayer];
    // 2. check whether the player has score 50 
    if (scores[currentPlayer] >= 20) {
        playing = false;
        diceEl.classList.add('hidden')
        document.querySelector(`.player--${currentPlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${currentPlayer}`).classList.remove('player--active');

    }
    switchPlayer(); 
}
});

btnNew.addEventListener('click', init);


