let wins = 0 // number of wins starts at 0
let losses = 0 // number of losses starts at 0
let guessesLeft = 9 // number of remaining guesses starts at 9
// alphabet array
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
// function to choose a random letter
let chooseLetter = _ => alphabet[Math.floor(Math.random() * alphabet.length)]
// variable that is equal to running the function to choose a random letter
let compLetter = chooseLetter()

// I created a clear-all function even though I didn't end up putting a clear button on the page
function gameClearAll () {
    document.querySelector('#wins').textContent = (wins) // displays the starting value for wins
    document.querySelector('#losses').textContent = (losses) // displays the starting value for losses
    document.querySelector('#guessesLeft').textContent = (guessesLeft) // displays the starting value for guesses left
    compLetter = chooseLetter() // runs the function to choose a random letter
    console.log(compLetter) // logs the random letter to the console so I can see what it is
}
// this is a function to restart the game once the player wins or runs out of guesses
function restart () {
    guessesLeft = 9 // number of guesses reset to 9
    compLetter = chooseLetter() // runs the function to choose another random letter
    console.log(compLetter) // logs the new random letter to the console so I can see what it is
    document.querySelector('#guessesLeft').textContent = (guessesLeft) // displays number of guesses on the screen
    document.querySelector('#playerGuess').textContent = ('') // clears the guesses so far field
}

gameClearAll() // this is run when the page is re-loaded

// this is the function for displaying the players key selection on the page - I could not figure out how to show all the guesses
// currently each guess replaces the previous guess
document.onkeyup = e => {
    document.querySelector('#playerGuess').innerHTML = (e.key)

    // the logic starts here
    // I used a pretty simple if/else statement
       
    if (e.key === compLetter) { // if the letter pressed by the player matches the letter chosen by the computer
        wins++ // increase the number of wins by 1
        document.querySelector('#wins').textContent = (wins) // show the new value for wins on the screen
        restart() // run the restart function - line 20
    } else if (guessesLeft > 1) { // otherwise, if the number of guesses left is more than 1
        guessesLeft-- // reduce the number of guesses left by 1
        document.querySelector('#guessesLeft').textContent = (guessesLeft) // show the new value for guesses left on the screen
    } else { // if the number of guesses left is less than 1
        losses++ // increase the number of losses by 1
        document.querySelector('#losses').textContent = (losses) // display new value for losses on the screen
        restart() // run the restart function - line 20
    }
}