var options = ["rock", "paper", "scissors"];

function computerPlay() {
    const computerSelection = options[Math.floor(Math.random()*options.length)];
    console.log(`Computer chose ${computerSelection}`);
}




function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "paper") {
            computerScore++;
            return lose;
        } else if (computerSelection === "rock") {
            return tie;
        } else {
            userScore++;
            return win;
        }
    }

    if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "paper") {
            userScore++;
            return win;
        } else if (computerSelection === "rock") {
            computerScore++;
            return lose;
        } else {
            return tie;
        }
    }

    if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "paper") {
            return tie;
        } else if (computerSelection === "rock") {
            userScore++;
            return win;
        } else {
            computerScore++;
            return lose;
        }
    }
}


let userScore = parseInt(0);
let computerScore = parseInt(0);
let win = "You win"
let lose = "You lose"
let tie = "It is a tie"

var i = 0;
const play = () => {
    let playerSelection = prompt("Pick a move rock, paper or scissprs");
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    console.log(`user score = ${userScore}`);
    console.log(`computer score = ${computerScore}`);
    i++;
    if (i !== 5) {
        play();
    } else {
        alert(`GAME OVER! user score = ${userScore} VS computer score = ${computerScore}`);
    }
}

play();