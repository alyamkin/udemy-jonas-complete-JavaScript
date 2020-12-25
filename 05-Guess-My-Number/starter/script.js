'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
const numberElem = document.querySelector('.number');
const scoreElem = document.querySelector('.score');
const guessNumElem = document.querySelector('.guess');
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // When there is no input
  if (!guess) {
    displayMessage(`No number!`);

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage(`Correct Number!`);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage(`You lost the game!`);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  displayMessage(`Start guessing...`);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});

// My solution
/*
const messageElem = document.querySelector('.message');
const highScoreElem = document.querySelector('.highscore');
const numberElem = document.querySelector('.number');
const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');
const scoreElem = document.querySelector('.score');
const guessNumElem = document.querySelector('.guess');
const bodyElem = document.querySelector('body');

let randomNum = 0;

const randomGenerator = function (max) {
  const random = Math.floor(Math.random() * max) + 1;
  return random;
};

const generateInitialNum = function () {
  randomNum = randomGenerator(20);
};

const checkGuessNum = function () {
  const guessNum = Number(guessNumElem.value);
  let currentScore = scoreElem.textContent;

  if (guessNum > randomNum) {
    updateScore(`Too high!`);
  } else if (guessNum < randomNum) {
    updateScore(`Too low!`);
  } else {
    updateFinalScore(`Correct number!`, guessNum, currentScore);
  }
};

const updateScore = function (message) {
  let scoreValue = scoreElem.textContent;
  messageElem.textContent = `${message}`;
  scoreElem.textContent = scoreValue - 1;
};

const updateFinalScore = function (message, guessNum, currentScore) {
  const highScoreValue = highScoreElem.textContent;
  messageElem.textContent = `${message}`;
  numberElem.textContent = `${guessNum}`;

  if (Number(highScoreValue) < Number(currentScore)) {
    highScoreElem.textContent = currentScore;
  }

  bodyElem.classList.add('background-green');
};

const resetGame = function () {
  guessNumElem.value = 0;
  scoreElem.textContent = '20';
  numberElem.textContent = '?';
  generateInitialNum();
  bodyElem.classList.remove('background-green');
};

btnCheck.addEventListener('click', checkGuessNum);
btnAgain.addEventListener('click', resetGame);

generateInitialNum();
*/
