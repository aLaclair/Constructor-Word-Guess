function Letter(input) {
    this.input = input
    this.alreadyGuessed = false
    this.guessed = function() {
        if (this.alreadyGuessed) {
            console.log(input)
            return input
        } else {
            console.log('_')
            return '_'
        }
    }
    this.correct = function() {
        if (input === correct) {
            console.log('Correct')
            this.alreadyGuessed = true
        }
        else {
            console.log('Incorrect')
        }
    }
}

module.exports = Letter