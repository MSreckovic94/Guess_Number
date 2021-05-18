'use strict';

const testTooHigh = function () {
  if (score > 1) {
    document.querySelector('.message').textContent = 'Too high!';
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = 'You lost the game!';
    document.querySelector('.score').textContent = 0;
  }
};
const testTooLow = function () {
  if (score > 1) {
    document.querySelector('.message').textContent = 'Too low!';
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = 'You lost the game!';
    document.querySelector('.score').textContent = 0;
  }
};
const testInvalide = function () {
  if (score > 1) {
    document.querySelector('.message').textContent = 'Invalide imput!';
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = 'You lost the game!';
    document.querySelector('.score').textContent = 0;
  }
};
const testWin = function () {
  document.querySelector('.message').textContent = '🎉Correct Number!';
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

  if (!guess) {
    testInvalide();
  } else if (guess > 20) {
    testInvalide();
  } else if (guess > secretNumber) {
    testTooHigh();
  } else if (guess < secretNumber) {
    testTooLow();
  } else if (guess === secretNumber) {
    testWin();
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = '20';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  // document.querySelector('.number').textContent = secretNumber;
});
