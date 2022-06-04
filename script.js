var options = ["rock", "paper", "scissors"];
var playerScore = 0;
var computerScore = 0;

var playerSelection = prompt("Do you choose rock, paper or scissors?").toLocaleLowerCase();
if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors")
    console.log(`you chose ${playerSelection}`);
else
    console.log("Try again");


const computerSelection = options[Math.floor(Math.random()*options.length)];
console.log(`Computer chose ${computerSelection}`);

function playRound(){
    console.log(playerSelection + " " + computerSelection);
    if(playerSelection === "rock" && computerSelection === "rock"){
    console.log("It`s a tie!");
    } else if(playerSelection === "scissors" && computerSelection === "scissors"){
        console.log("It`s a tie!");
    } else if (playerSelection === "paper" && computerSelection === "paper"){
        console.log("It`s a tie!");
    }else if (playerSelection === "rock" && computerSelection === "scissors"){
        console.log("You win!");
        playerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "paper"){
        console.log("You win!");
        playerScore++;
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        console.log("You win!");
        playerScore++;
    } else if (playerSelection === "rock" && computerSelection === "paper"){
        console.log("You lose!");
        computerScore++;
    } else if (playerSelection === "paper" && computerSelection === "sicssors"){
        console.log("You lose!");
        computerScore++;
    } else {
        console.log("You lose!");
        computerScore++;
    }
        
        console.log(`playes score is ${playerScore}`);
        console.log(`computer score is ${computerScore}`);
    }

playRound();


for (var i = 0; i < 5; i++){
        
        

    if (i == 5) {
        alert(`GAME OVER ${userScore} VS ${computerScore}`);
    } else {
        playerSelection = prompt("Pick a move");
    }

    console.log(playRound(playerSelection, computerSelection));
    console.log(`user score = ${userScore}`);
    console.log(`computer score = ${computerScore}`);
}

    
