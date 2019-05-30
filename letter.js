function Letter(letter) {
  this.letter = letter,
    this.guessed = false,
    this.displayResult = function () {
      console.log("In displayResult function of Letter object");
      if (this.guessed === false) {
        return "_";
      } else {
        return this.letter
      }
    }
  this.handleGuess = function (guess) {
    if (guess === this.letter) {
      this.guessed = true;
    }
  }
}

module.exports = Letter;