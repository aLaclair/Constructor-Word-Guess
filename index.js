var Word = require('./Word')

var inquirer = require('inquirer')

const wordArr = ['horror', 'knife', 'murder', 'blood', 'demon', 'ghost', 'ghoul', 'darkness', 'psycho', 'doll', 'haunt']

let guessedLetters = []

!function game() {

    // setup and variable declaration

    console.log('------------------------------------')
    let guesses = 10
    let word = wordArr[Math.floor(Math.random() * wordArr.length)]
    let gameWord = new Word(word)

    // inquirer prompt that will handle the game
    !function prompt() {
        
        console.log(gameWord.wordString()) // displays the word as either the character or an underscore

        inquirer.prompt([
            
            {
                name: 'guess',
                message: 'Guess a letter',
            }

        ]) .then(function(response) {
            let letter = response.guess.toLowerCase() // user input will be casted to lowercase to check against word
            let guess = response.guess.split('') // an array of all letters guessed to check for one character
            let regex = RegExp(/^[a-zA-Z]+$/)


            if(guess.length > 1) { //if more than one character is input then run again, no guesses are used
                console.log('One letter at a time please')
                functional(response)
            } else if (guess.length === 0) { // if enter is pressed, run prompt again
                functional(response)
            }
            else if(!regex.test(letter)) {
                console.log('Please enter a letter')
                functional(response)
            }
            else {
                if (gameWord.word.includes(letter)) { // if the letter is in the word, display correct and run prompt again
                    console.log('Correct!')
                    functional(response)
                } 
                else { // else guess is incorrect and one guess is subtracted
                    console.log('Incorrect!')
                    guesses--
                    console.log(`${guesses} guesses remaining`)
                    if (guesses > 0) { 
                        functional(response)
                    } else { //if no guesses are remaining then clear the console and start the game again
                        console.clear()
                        console.log('You suck again')
                        game()
                    }
                }
        }})

        // function declaration for main game functionality
        function functional(response) {
            if (gameWord.display.join('') !== word) {
                gameWord.guess(response.guess)
                gameWord.display.splice(0,gameWord.display.length)
                prompt()
            } else {
                console.clear()
                console.log('Great Job! Next Word!')
                guesses = 10
                game()
            }
        }
    }()
    
}()
