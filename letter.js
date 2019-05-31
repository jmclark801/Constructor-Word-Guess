function Letter(letter) {
  this.letter = letter,
    this.guessed = false,
    this.displayResult = function () {
      if (this.guessed === false) {
        return "_";
      } else {
        return this.letter
      }
    }
  this.handleGuess = function (guess) {
    if (guess.toLowerCase() === this.letter) {
      this.guessed = true;
      return true;
    } 
  }
}

module.exports = Letter;