function getPlayerChoice(str) {
  let userInput = str.toLowerCase();
  if (userInput === "rock" || userInput === "paper" || userInput === "scissor") {
    return userInput;} 
  else {
    alert("Invalid user input!");
    return null;
  }
};

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random()*3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissor";
  }
};

function playRound(playerSelection,computerSelection) {
  const array = [playerSelection,computerSelection];
  const caseWinner1 = ["rock","scissor"];
  const caseWinner2 = ["paper","rock"];
  const caseWinner3 = ["scissor","paper"];
  let result;

  if (playerSelection === computerSelection) {
    result = "Draw, please play again"
  }
  else if (JSON.stringify(array) === JSON.stringify(caseWinner1) || 
    JSON.stringify(array) === JSON.stringify(caseWinner2) || 
    JSON.stringify(array) === JSON.stringify(caseWinner3)) {
    result = "You win! " + playerSelection.charAt(0).toUpperCase() 
      + playerSelection.slice(1) + " beats " + computerSelection + "!"
  }
  else {
    result = "You lose! " + computerSelection.charAt(0).toUpperCase() 
      + computerSelection.slice(1) + " beats " + playerSelection + "!"
  }
  return result;
}

let playerSelection = getPlayerChoice("scissor");
console.log(playerSelection);

let computerSelection = getComputerChoice();
console.log(computerSelection);

console.log(playRound(playerSelection,computerSelection));