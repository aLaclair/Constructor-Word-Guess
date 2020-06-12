function Letter(input) {
    this.input = input
    this.guessBool = false
    this.ifGuessed = function() {
        if (this.guessBool) {
            return input
        } else {
            return '-'
        }
    }
    this.guess = function(char) {
        if (char.toLowerCase() === input) {
            this.guessBool = true
        }
    }
}

module.exports = Letter