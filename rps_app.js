/* Create global array variable for possible game selections*/

const choices = ['rock','paper','scissors'];

/* Function (computerPlay) to choose a computer choice that randomly chooses from 'rock', 'paper', or 'scissors' and assign that choice to computerSelection variable*/

function computerPlay() {
    // generate random index between 0 and 2
    const randomIndex = Math.floor(Math.random() * choices.length);

    //Use randomIndex to assign an object from our choices array to computerSelection variable
    const computerSelection = choices[randomIndex];

    //print computerSelection for testing purposes
    console.log(computerSelection)
}

/* Function (playRound) to play a single round. It should run the computerPlay function above to generate the computer's choice, plus prompt the user to enter a choice*/
/* It should then compare the choices and determine/display the result */

/* Function (game) that calls our playRound function for a 5 round game. It will keep score and declare a winner at the end */