var Word = require('./word');
var inquirer = require('inquirer');

var correctGuess
var newWord
var wordList
var wordToGuess
var display = ""

function initialize() {
  newWord = new Word();
  wordList = ["bulldog", "beagle", "Greyhound"]
  wordToGuess = wordList[Math.floor(Math.random() * wordList.length)];
  for (let letter of wordToGuess) {
    newWord.addLetter(letter);
  }
   console.log("Word to Guess: ", newWord.letters)
}

function prompt(){
  inquirer.prompt([
    {
      type: 'input',
      name: 'guess',
      message: 'Guess a letter! '
    }
  ]).then(answers => {
    var userGuess = answers.guess
    console.log(`You guessed ${userGuess}!`)
    correctGuess = newWord.checkGuess(userGuess);
    console.log(`Was this guess correct? ${correctGuess}`);
    display = newWord.getLetters();
    console.log(`Word to Guess: ${display}`);
    console.log(`Is the word guessed? ${newWord.isWordGuessed()}` )
    if (newWord.isWordGuessed() === false) {
      prompt()
    } else {
      console.log("You win!");
    }
  })
}

function playGame(){
  initialize();
  prompt();
}

playGame();




// Display Word
// Get letter from user
// Determine if guess matches 
//// Correct case
//// Incorrect case
//// Update display to show new word
// nice to haves:
// Ingore case
// Allow words with spaces
// Get word from API or database
// Allow certain number of guesses
// Update readme
