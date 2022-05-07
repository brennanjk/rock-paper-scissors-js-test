// Create global array variable for possible game selections

const choices = ['rock','paper','scissors'];

// Function (computerPlay) to choose a computer choice that randomly chooses from 'rock', 'paper', or 'scissors' and assign that choice to computerSelection variable

function computerPlay() {
    // generate random index between 0 and 2
    const randomIndex = Math.floor(Math.random() * choices.length);

    //Use randomIndex to assign an object from our choices array to computerSelection variable
    return choices[randomIndex];
}

//set placeholders for scores
playerScore = 0;
computerScore = 0;

const buttons = document.querySelector('div.player-choice');
const rock_button = document.querySelector('#rock');
const paper_button = document.querySelector('#paper');
const scissors_button = document.querySelector('#scissors');
const results = document.querySelector('#results')
const p_score = document.querySelector('#player-score');
const c_score = document.querySelector('#computer-score')
const end_game = document.querySelector('div.end-game')

rock_button.addEventListener('click', () => {
    playRound('rock',computerPlay());
});

paper_button.addEventListener('click', () => {
    playRound('paper',computerPlay());
})

scissors_button.addEventListener('click', () => {
    playRound('scissors',computerPlay());
})

p_score.textContent = playerScore;
c_score.textContent = computerScore;

// Function (playRound) to play a single round. It should run the computerPlay function above to generate the computer's choice, plus prompt the user to enter a choice
// It should then compare the choices and determine/display the result 

const playRound = (playerSelection, computerSelection) => {
    
    //if player chooses rock, check what the computer chose
    if (playerSelection === 'rock') {
        
        //possible outcomes based on computer choices
        if (computerSelection === 'paper') {
            computerScore += 1
            results.textContent = `${computerSelection} beats ${playerSelection}; round goes to the computer!`
        }
        else if (computerSelection === 'scissors') {
            playerScore += 1
            results.textContent = `${playerSelection} beats ${computerSelection}; you win this round!`
        }
        else if (computerSelection === 'rock') {
            results.textContent = `Both players chose ${playerSelection}; it's a tie!`
        }
    }

    //if player chooses paper, check what the computer chose
    else if (playerSelection === 'paper') {

        //possible outcomes based on computer choices
        if (computerSelection === 'scissors') {
            computerScore += 1
            results.textContent = `${computerSelection} beats ${playerSelection}; the computer wins this round!`
        }
        else if (computerSelection === 'rock') {
            playerScore += 1
            results.textContent = `${playerSelection} beats ${computerSelection}; round player!`
        }
        else if (computerSelection === 'paper') {
            results.textContent = `Both players chose ${playerSelection}; it's a tie!`
        }
        
    }

    //if player chooses scissors, check what the computer chose
    else if (playerSelection === 'scissors') {

        //possible outcomes based on computer choices
        if (computerSelection === 'rock') {
            computerScore += 1
            results.textContent = `${computerSelection} beats ${playerSelection}; the computer takes this round!`
        }
        else if (computerSelection === 'paper') {
            playerScore += 1
            results.textContent = `${playerSelection} beats ${computerSelection}; you win this one!`
        }
        else if (computerSelection === 'scissors') {
            results.textContent = `Both players chose ${playerSelection}; it's a tie!`
        } 
    }
    p_score.textContent = playerScore;
    c_score.textContent = computerScore;
    score_check();
}

function score_check() {

    if (playerScore === 5 || computerScore === 5) {

        buttons.removeChild(rock_button);
        buttons.removeChild(paper_button);
        buttons.removeChild(scissors_button);       
        const p1 = document.createElement('p');
        p1.textContent = `You scored ${playerScore} points - the computer scored ${computerScore} points...`;
        end_game.appendChild(p1);
        const p2 = document.createElement('p');

        if (playerScore === 5) {
            p2.textContent = `YOU HAVE WON THE GAME!`
            end_game.appendChild(p2);
        }
        else if (computerScore === 5) {
            p2.textContent = `THE COMPUTER HAS WON THE GAME!`
            end_game.appendChild(p2);
        }
        const play_button = document.createElement('button');
        play_button.classList.add("button");
        play_button.textContent = "Play Again?";
        end_game.appendChild(play_button);

        play_button.addEventListener('click', () => {
            buttons.appendChild(rock_button);
            buttons.appendChild(paper_button);
            buttons.appendChild(scissors_button);
            end_game.removeChild(p1);
            end_game.removeChild(p2);
            end_game.removeChild(play_button);
            playerScore = 0;
            computerScore = 0;
            p_score.textContent = playerScore;
            c_score.textContent = computerScore;
            })
    }      
}