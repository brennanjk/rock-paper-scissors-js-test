/* Create global array variable for possible game selections*/

const choices = ['rock','paper','scissors'];

/* Function (computerPlay) to choose a computer choice that randomly chooses from 'rock', 'paper', or 'scissors' and assign that choice to computerSelection variable*/

function computerPlay() {
    // generate random index between 0 and 2
    const randomIndex = Math.floor(Math.random() * choices.length);

    //Use randomIndex to assign an object from our choices array to computerSelection variable
    return choices[randomIndex];
}

/* Function (playRound) to play a single round. It should run the computerPlay function above to generate the computer's choice, plus prompt the user to enter a choice*/
/* It should then compare the choices and determine/display the result */

function playRound(playerSelection, computerSelection) {
    
    //if player chooses rock, check what the computer chose
    if (playerSelection === 'rock') {

        //possible outcomes based on computer choices
        if (computerSelection === 'paper') {
            console.log(`${computerSelection} beats ${playerSelection}; the computer wins!`)
        }
        else if (computerSelection === 'scissors') {
            console.log(`${playerSelection} beats ${computerSelection}; you win!`)
        }
        else if (computerSelection === 'rock') {
            console.log(`Both players chose ${playerSelection}; it's a tie!`)
        }
    }

    //if player chooses paper, check what the computer chose
    else if (playerSelection === 'paper') {

        //possible outcomes based on computer choices
        if (computerSelection === 'scissors') {
            console.log(`${computerSelection} beats ${playerSelection}; the computer wins!`)
        }
        else if (computerSelection === 'rock') {
            console.log(`${playerSelection} beats ${computerSelection}; you win!`)
        }
        else if (computerSelection === 'paper') {
            console.log(`Both players chose ${playerSelection}; it's a tie!`)
        } 
    }

    //if player chooses scissors, check what the computer chose
    else if (playerSelection === 'scissors') {

        //possible outcomes based on computer choices
        if (computerSelection === 'rock') {
            console.log(`${computerSelection} beats ${playerSelection}; the computer wins!`)
        }
        else if (computerSelection === 'paper') {
            console.log(`${playerSelection} beats ${computerSelection}; you win!`)
        }
        else if (computerSelection === 'scissors') {
            console.log(`Both players chose ${playerSelection}; it's a tie!`)
        } 
    }

}

/* Function (game) that calls our playRound function for a 5 round game. It will keep score and declare a winner at the end */