var Letter = require('./letter.js');

function Word() {
  this.letters = [];
  this.displayLetters = [];
  this.wordLength = this.letters.length;

  this.addLetter = function (letterToAdd) {
    this.letters.push(new Letter(letterToAdd));
  }

  this.getLetters = function () {
    this.letters.forEach(letter => {
      console.log("I'm logging letters");
      this.displayLetters.push(letter.displayResult());
    });
    return this.displayLetters.join('');
  }
}

module.exports = Word;

// function Student(name, favSubject, gpa){
//   this.name = name,
//   this.favSubject = favSubject,
//   this.gpa = gpa
// // }

// // module.exports = Student;

// function Classroom() {
//   this.students = [];
//   this.numberOfStudents = this.students.length;
//   this.professorName = "";
//   this.roomNumber = "";
//   this.addStudent = function (name, favSubject, gpa) {
//     this.students.push(new Student(name, favSubject, gpa));
//   };
// }

// var science101 = new Classroom();
// science101.addStudent("Jim", "JS", "2.9")
// console.log(science101.students);