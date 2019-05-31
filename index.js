var Word = require('./word');
var inquirer = require('inquirer');

var correctGuess
var newWord
var wordList
var wordToGuess
var display = ""

function initialize() {
  newWord = new Word();
  wordList = ["bulldog", "beagle", "greyhound"]
  wordToGuess = wordList[Math.floor(Math.random() * wordList.length)];
  for (let letter of wordToGuess) {
    newWord.addLetter(letter);
  }
}

function playAgain(){
  console.log("This feature needs to be implemented still")
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
    console.log(`\nYou guessed ${userGuess}!\n`)

    correctGuess = newWord.checkGuess(userGuess);
    display = newWord.getLetters();
    console.log(`Word to Guess: ${display}\n`);
    if (newWord.isWordGuessed() === false) {
      prompt()
    } else {
      console.log(`\n\n*****   YOU WIN !!!   *****\n\n`);
      playAgain()
    }
  })
  
}

function playGame(){
  console.log(`\n\nWelcome to the Word Guess Game!\n\n*******************************\n`)
  initialize();
  display = newWord.getLetters();
  console.log(`\nWord to Guess: ${display}\n`);
  prompt();
}

playGame();

// Allow user to play again
// Determine if guess matches 
//// Correct case
//// Incorrect case
// nice to haves:
// Allow words with spaces
// Get word from API or database
// Allow certain number of guesses
