function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3) + 1;
  if (choice == 1) {
    console.log("Rock");
  } else if (choice == 2) {
    console.log("Paper");
  } else console.log("Scissors");
}

getComputerChoice();
