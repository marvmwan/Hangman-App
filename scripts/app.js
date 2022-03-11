// HTTP (Hypertext Transfer Protocol)
// Request - What dxo we want to do
// Response - What was actually done

//Prototypial Hieritance is involved in all types of objects
//Primative Value --> string, boolean, number, null, undefined

// Object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function: myFunction --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Obejct.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null

// Arrays, Boolean, Numbers, and Funtions are types of object

// Functions
// ------------------------
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


// getPuzzleData(2).then((puzzle) => {
//     console.log(puzzle)
// }).catch((error) => {
//     console.log(error)
// })


// getCurrentCountry().then((country) => {
//     console.log(country.name)
// }).catch((error) => {
//     console.log(error)
// })