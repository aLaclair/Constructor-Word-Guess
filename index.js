var Word = require('./Word')

var inquirer = require('inquirer')

const wordArr = ['horror', 'knife', 'murder', 'blood', 'demon']

let guessedLetters = []

!function game() {
    console.log('------------------------------------')
    let guesses = 10
    let word = wordArr[Math.floor(Math.random() * wordArr.length)]
    let gameWord = new Word(word)
    !function prompt() {
        console.log(gameWord.wordString())
        inquirer.prompt([
            {
                name: 'guess',
                message: 'Guess a letter'
            }
        ]) .then(function(response) {
            if (gameWord.word.includes(response.guess.toLowerCase())) {
                console.log('Correct!')
                if (gameWord.display.join('') !== word) {
                    gameWord.guess(response.guess)
                    gameWord.display.splice(0,gameWord.display.length)
                    prompt()
                } else {
                    console.log('Great Job! Next Word!')
                    guesses = 10
                    game()
                }
                // console.log(gameWord.display.join(''))
            } else {
                console.log('Incorrect!')
                guesses--
                console.log(`${guesses} guesses remaining`)
                if (guesses > 0) {
                    if (gameWord.display.join('') !== word) {
                        gameWord.guess(response.guess)
                        gameWord.display.splice(0,gameWord.display.length)
                        prompt()
                    } else {
                        console.log('Great Job! Next Word!')
                        guesses = 10
                        game()
                    }
                } else {
                    console.log('You suck again')
                    game()
                }
            }
        })
    }()
    
}()
