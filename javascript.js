function getComputerChoice() {
    var array = ["rock", "paper", "scissors"];
    var random = Math.floor(Math.random()*3);
    var choice = array[random];
    return choice;
}

function playRound(playerSelection, computerSelection){
    if(playerSelection.toLowerCase() == computerSelection){
        return("Tie game!")
    } else if (computerSelection == "scissors") {
        score++;
        return("You win! Rock beats Scissors")
    } else if(computerSelection == "paper"){
        return("You lose! Paper beats Rock")
    }
}

function game(){
    playRound(playerSelection, computerSelection);
    computerSelection = getComputerChoice();
    playerSelection = prompt("Pick rock, paper, or scissors.")
    console.log("The computer picked " + computerSelection + ". Your score is " + score);

    playRound(playerSelection, computerSelection);
    computerSelection = getComputerChoice();
    playerSelection = prompt("Pick rock, paper, or scissors.")
    console.log("The computer picked " + computerSelection + ". Your score is " + score);

    playRound(playerSelection, computerSelection);
    computerSelection = getComputerChoice();
    playerSelection = prompt("Pick rock, paper, or scissors.")
    console.log("The computer picked " + computerSelection + ". Your score is " + score);

    playRound(playerSelection, computerSelection);
    computerSelection = getComputerChoice();
    playerSelection = prompt("Pick rock, paper, or scissors.")
    console.log("The computer picked " + computerSelection + ". Your score is " + score);
    playRound(playerSelection, computerSelection);
    console.log("The computer picked " + computerSelection + ". Your score is " + score);

    if(score>=3){
        console.log("You are the winner! You won " + score + " out of 5 games.")
    } else {
        console.log("You lost. You won " + score + " out of 5 games.")
    }
}

let score = 0
let playerSelection = prompt("Pick rock, paper, or scissors.")
let computerSelection = getComputerChoice();
console.log(game());