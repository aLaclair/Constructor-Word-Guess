var Letter = require('./Letter')

function Word(word) {

    this.word = word.split('')
    this.letterArr = []
    this.display = []

    for (let i = 0; i < this.word.length; i++) {
        let letter = new Letter(this.word[i])
        this.letterArr.push(letter)
    }

   this.wordString = function() {
    for (let i = 0; i < this.letterArr.length; i++) {
        this.display.push(this.letterArr[i].ifGuessed())
    }
    return this.display.join(' ')
   }

   this.guess = function(char) {
       for (let i = 0; i < this.letterArr.length; i++) {
           this.letterArr[i].guess(char)
       }
   }
}

module.exports = Word