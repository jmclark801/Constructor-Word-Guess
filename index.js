var Word = require('./word')

var newWord = new Word();
newWord.addLetter('a');
newWord.addLetter('b');

var display = newWord.getLetters();
console.log("the following letters will be displayed", display);
console.log("Letters array contains: ", newWord.letters)