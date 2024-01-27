const array = ["Rock", "Paper", "Scissors"];
const playerSelection = "rock";
const computerSelection = getComputerChoice();

function getComputerChoice() {
    const random = Math.floor(Math.random()*3);
    const choice = array[random];
    return choice;
}