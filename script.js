let humanScore = 0;
let computerScore = 0;

function playGame() {
for(let i=0; i<5; i++)
    playRound(getComputerChoice(),getHumanChoice());
}

function playRound(computerChoice, humanChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (computerChoice === humanChoice) {
        console.log("It's a tie! Both chose " + humanChoice);
        return;
    }
    if (computerChoice === "rock" && humanChoice === "scissors") {
        console.log("Computer wins! Rock beats scissors");
        computerScore++;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        console.log("Computer wins! Paper beats rock");
        computerScore++;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        console.log("Computer wins! Scissors beats paper");
        computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("Player wins! Rock beats scissors");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("Player wins! Paper beats rock");
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("Player wins! Scissors beats paper");
        humanScore++;
    } else {
        console.log("Invalid choice by player!");
    }
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice == 1) {
        return "rock"
    } else if (choice == 2) {
        return "paper"
    } else return "scissors"
}

function getHumanChoice() {
    return prompt("Choose between rock, paper or scissors");
}

playGame();
