'use strict';

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const lostTheGame = function () {
  displayMessage('You lost the game!');
  document.querySelector('.score').textContent = 0;
  document.querySelector('body').style.backgroundColor = '#e21d1d';
};

const testInvalide = function () {
  if (score > 1) {
    displayMessage(`Invalide input!`);
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
  } else {
    lostTheGame();
  }
};
const testWin = function () {
  displayMessage(`🎉Correct Number!`);
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';
  document.querySelector('.number').textContent = secretNumber;

  if (score > finalScore) {
    finalScore = score;
    document.querySelector('.highscore').textContent = finalScore;
  }
};

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let finalScore = 0;
let checkFinalScore = 0;

// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (guess !== secretNumber) {
    if (guess > 20) {
      testInvalide();
    } else if (score > 1) {
      displayMessage(guess > secretNumber ? `Too high!` : `Too low!`);
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      lostTheGame();
    }
  } else if (guess === secretNumber) {
    testWin();
  }
});

document.querySelector('.again').addEventListener('click', function () {
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = '20';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  // document.querySelector('.number').textContent = secretNumber;
});
