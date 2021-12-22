'use strict';

const getRandomNumber = (min, max) => {
  const range = max - min;
  return Math.floor(Math.random() * (range + 1)) + min;
};

// random number
let randomNumber;
let score;
let highScore = 0;

const initializer = () => {
  randomNumber = getRandomNumber(1, 20);
  scoreEl.textContent = 20;
  highScoreEl.textContent = highScore;
  displayMessage(`Start guessing...`);
  outputNumberEl.textContent = `?`;
  guessedNumberEl.value = '';
  score = 20;
  bodyEl.style.backgroundColor = '#222';
  outputNumberEl.style.width = '15rem';
};

// DOM elements
const guessedNumberEl = document.querySelector('.guess');
const scoreEl = document.querySelector('.score');
const highScoreEl = document.querySelector('.highscore');
const outputNumberEl = document.querySelector('.number');
const btnCheckEl = document.querySelector('.check');
const btnAgainEl = document.querySelector('.again');
const messageEl = document.querySelector('.message');
const bodyEl = document.querySelector('body');

const displayMessage = message => {
  messageEl.textContent = message;
};

// event listeners check button

btnCheckEl.addEventListener('click', () => {
  //Get number
  const guessedNumber = Number(guessedNumberEl.value);

  if (!guessedNumber) {
    displayMessage('🛑 No Number');
    return;
  }

  if (score === 0) {
    return;
  }

  //Compare with random number
  if (guessedNumber !== randomNumber) {
    displayMessage(guessedNumber < randomNumber ? 'Too low!' : 'Too High');
    score--;
  } else {
    displayMessage('Correct number!');
    outputNumberEl.textContent = randomNumber;
    bodyEl.style.backgroundColor = '#60b347';
    outputNumberEl.style.width = '30rem';
    highScore = highScore < score ? score : highScore;
    highScoreEl.textContent = highScore;
  }
  //Update counters and labels
  scoreEl.textContent = score;

  if (score === 0) {
    displayMessage('Game over...');
  }
});

btnAgainEl.addEventListener('click', () => {
  initializer();
});

initializer();
