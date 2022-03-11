import Hangman from './hangman'
import getPuzzleData from './requests'

const render = () => {
    puzzleEl.innerHTML = game.puzzle
    numGuessesEl.innerHTML = game.statusMessage
}

const startGame = async () => {
    const puzzle = await getPuzzleData(2)
    game = new Hangman(puzzle, Math.floor(puzzle.length/2))
    render()
}

window.addEventListener('keypress', function (e){
    if (game.status !== 'playing'){
        return
    }
    game.makeGuess(e.key)
    render()
})

document.querySelector('#reset-btn').addEventListener('click', startGame)

const puzzleEl = document.querySelector('#puzzle')
const numGuessesEl = document.querySelector('#guesses-left')
let game

startGame()