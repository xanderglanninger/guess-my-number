'use strict';

// function that will generate and return a random number
const randomfunc = function () {
  return Math.floor(Math.random() * 20) + 1;
};
// function that will display the selected message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// declare variables
let score = 20;
let highscore = 0;
let random = randomfunc();
console.log(random);

// Again button: this wiull reset everything
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = '20';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  random = randomfunc();
  console.log(random);
});

// Click event
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // Checks if the score is equal to zero to determine if the player looses the game
  if (score <= 0) {
    displayMessage('You loose');
    document.querySelector('.number').textContent = random;
  } else {
    // Checks for a blank space in the 'guest' field
    if (!guess) {
      displayMessage('You must enter a number');
      // Checks of the number entered matches the random number
    } else if (guess === random) {
      displayMessage('CONGRATULATIONS!!! 🎉');
      document.querySelector('.number').textContent = random;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      // Checks if current score is greater than the highscore
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (guess !== random) {
      // Uses a turnary opperator to check if the number entered is greater or smaller than the random number
      displayMessage(guess > random ? 'Too High!!!' : 'Too Low!!!');
      score -= 1;
      document.querySelector('.score').textContent = score;
    }
  }
});
