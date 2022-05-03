/* Create global array variable for possible game selections*/

const choices = ['rock','paper','scissors'];

/* Function (computerPlay) to choose a computer choice that randomly chooses from 'rock', 'paper', or 'scissors' and assign that choice to computerSelection variable*/

function computerPlay() {
    // generate random index between 0 and 2
    const randomIndex = Math.floor(Math.random() * choices.length);

    //Use randomIndex to assign an object from our choices array to computerSelection variable
    return choices[randomIndex];
}

//set placeholders for scores
playerScore = 0;
computerScore = 0;

/* Function (playRound) to play a single round. It should run the computerPlay function above to generate the computer's choice, plus prompt the user to enter a choice*/
/* It should then compare the choices and determine/display the result */

function playRound(playerSelection, computerSelection) {
    
    //if player chooses rock, check what the computer chose
    if (playerSelection === 'rock') {

        //possible outcomes based on computer choices
        if (computerSelection === 'paper') {
            computerScore += 1
            return `${computerSelection} beats ${playerSelection}; the computer wins!`
        }
        else if (computerSelection === 'scissors') {
            playerScore += 1
            return `${playerSelection} beats ${computerSelection}; you win!`
        }
        else if (computerSelection === 'rock') {
            return `Both players chose ${playerSelection}; it's a tie!`
        }
    }

    //if player chooses paper, check what the computer chose
    else if (playerSelection === 'paper') {

        //possible outcomes based on computer choices
        if (computerSelection === 'scissors') {
            computerScore += 1
            return(`${computerSelection} beats ${playerSelection}; the computer wins!`)
        }
        else if (computerSelection === 'rock') {
            playerScore += 1
            return(`${playerSelection} beats ${computerSelection}; you win!`)
        }
        else if (computerSelection === 'paper') {
            return(`Both players chose ${playerSelection}; it's a tie!`)
        } 
    }

    //if player chooses scissors, check what the computer chose
    else if (playerSelection === 'scissors') {

        //possible outcomes based on computer choices
        if (computerSelection === 'rock') {
            computerScore += 1
            return(`${computerSelection} beats ${playerSelection}; the computer wins!`)
        }
        else if (computerSelection === 'paper') {
            playerScore += 1
            return(`${playerSelection} beats ${computerSelection}; you win!`)
        }
        else if (computerSelection === 'scissors') {
            return(`Both players chose ${playerSelection}; it's a tie!`)
        } 
    }

}

/* Function (game) that calls our playRound function for a 5 round game. It will keep score and declare a winner at the end */

function game() {

    for (let i = 1; i < 6; i++) {
        const playerSelection = prompt('Choose your play: rock, paper, or scissors: ').toLowerCase();
        const computerSelection = computerPlay();
    
        console.log(playRound(playerSelection,computerSelection)); 
    }

    if (playerScore > computerScore) {
        console.log(`You scored ${playerScore} points, the computer scored ${computerScore} points: You win!`)
    }
    else if (computerScore > playerScore) {
        console.log(`You scored ${playerScore} points, the computer scored ${computerScore} points: the computer win!`)
    }
    else {
        console.log(`You scored ${playerScore} points, the computer scored ${computerScore} points: it's a tie!`)
    }

}