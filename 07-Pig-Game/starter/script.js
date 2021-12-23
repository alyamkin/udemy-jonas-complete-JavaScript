'use strict';

// dom elements
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const imgDice = document.querySelector('.dice');
const score0El = document.querySelector(`#score--0`);
const score1El = document.querySelector(`#score--1`);
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const current0El = document.querySelector(`#current--0`);
const current1El = document.querySelector(`#current--1`);

let activePlayer;
let currentScore;
const scores = [0, 0];
let playing;

// utility functions
const initialize = () => {
  activePlayer = 0;
  currentScore = 0;
  scores[0] = 0;
  scores[1] = 0;
  playing = true;
  current0El.textContent = 0;
  current1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  imgDice.classList.add('hidden');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
};
const getRandom = (start, end) => {
  const range = end - start;
  return Math.floor(Math.random() * (range + 1)) + start;
};

const switchActivePlayerClass = () => {
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

const switchActivePlayer = () => {
  // 1) reset current
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  // 2) switch player
  activePlayer = activePlayer === 0 ? 1 : 0;
  switchActivePlayerClass();
};

// event listeners roll dice
btnRoll.addEventListener('click', () => {
  if (playing) {
    const dice = getRandom(1, 6);
    // 1) update image
    imgDice.src = `dice-${dice}.png`;
    imgDice.classList.remove('hidden');
    // 2) check for rolled 1
    if (dice === 1) {
      switchActivePlayer();
    } else {
      currentScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    }
  }
});

// event listener hold
btnHold.addEventListener('click', () => {
  if (playing) {
    // 1) update score
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2) check winner
    if (scores[activePlayer] >= 100) {
      playing = false;
      imgDice.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
    } else {
      // 3) switch user
      switchActivePlayer();
    }
  }
});

// event listener new game
btnNew.addEventListener('click', initialize);

initialize();
