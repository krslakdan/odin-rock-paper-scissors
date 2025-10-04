let humanScore=0;
let computerScore=0;



function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3) + 1;
  if (choice == 1) {
    return "Rock"
  } else if (choice == 2) {
    return "Paper"
  } else return "Scissors"
}

function getHumanChoice(){
    let input=prompt("Choose between rock, paper or scissors");
    if(input==="Rock" || input==="rock"  || input==="Paper" || input==="paper" || input==="Scissors" || input==="scissors")
        return input;
    else
        alert("Choose between rock, paper or scissors!");
}


console.log(getComputerChoice());
console.log(getHumanChoice());
