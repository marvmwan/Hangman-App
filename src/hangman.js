class Hangman {
    constructor(word,numGuesses) {
        this.word = word.toLowerCase().split(''),
        this.numGuesses = numGuesses,
        this.guessedLetters = [],
        this.status = 'playing'  
    }
    makeGuess(guessedLetter){
        guessedLetter = guessedLetter.toLowerCase()

        const isUnique = !this.guessedLetters.includes(guessedLetter)
        const isBadGuess = !this.word.includes(guessedLetter)

        if (isUnique){
            this.guessedLetters = [...this.guessedLetters, guessedLetter]
            if (isBadGuess){
                this.numGuesses --
            }
        }
    
        this.checkStatus()
    }
    get puzzle() {
        let puzzle = ''

        this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter)){
            puzzle += letter
        } else if (letter === ' ') {
            puzzle += ' '
        } else {
            puzzle += 'x'
        }
        })

        return puzzle
    }
    checkStatus(){
        const puzzle = this.puzzle
        if (this.numGuesses > 0 && puzzle.includes('x')){
            this.status = 'playing'
        } else if (this.numGuesses >= 0 && !puzzle.includes('x')){
            this.status = 'finished'
        } else {
            this.status = 'failed'
        }    
    }
    get statusMessage(){
        if (this.status === 'playing'){
            return `Guesses left: ${this.numGuesses}`
        } else if (this.status === 'finished'){
            return 'Great Work! You guessed the word.'
        } else if (this. status === 'failed'){
            return `Nice try! The word was "${this.word.join('')}".`
        }    
    }
}
export {Hangman as default}