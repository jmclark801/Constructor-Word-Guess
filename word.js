var Letter = require('./letter.js');
var correctGuess = false;

function Word() {
  this.letters = [];
  this.displayLetters = [];
  this.wordLength = this.letters.length;

  this.addLetter = function (letterToAdd) {
    this.letters.push(new Letter(letterToAdd));
  }

  this.getLetters = function () {
    this.displayLetters = [];
    this.letters.forEach(letter => {
      this.displayLetters.push(letter.displayResult());
    });
    return this.displayLetters.join('');
  }

  this.checkGuess = function (guess) {
    this.letters.forEach(letter => {
      if (letter.handleGuess(guess)) {
        correctGuess = true;
        letter.handleGuess(guess);
      } else {
        correctGuess = false;
      }
      return correctGuess;
    });
  }

  this.isWordGuessed = function(){
    if (this.displayLetters.includes('_')) {
      return false;
    } else {
      return true;
    }
  }
}

module.exports = Word;
