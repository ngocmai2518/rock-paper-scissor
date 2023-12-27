let input = prompt("Rock, Paper, Scissor?");

function getPlayerChoice(input) {
  let userInput = input.toLowerCase();
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
  const caseWinner = [["rock","scissor"],["paper","rock"],["scissor","paper"]];

  function caseWinnerCheck(caseWinner,array) {
    for (let i=0; i <= caseWinner.length - array.length; i++) {
      if (caseWinner[i].every((value, index) => value === array[index])) {
        return true;
      }
    }
      return false;
  };

  if (playerSelection === computerSelection) {
    result = "Draw, please play again"
  }
  else if (caseWinnerCheck(caseWinner,array)) {
    result = "You win! " + playerSelection.charAt(0).toUpperCase() 
      + playerSelection.slice(1) + " beats " + computerSelection + "!"
  }
  else {
    result = "You lose! " + computerSelection.charAt(0).toUpperCase() 
      + computerSelection.slice(1) + " beats " + playerSelection + "!"
  }
  return result;
};

let playerSelection = getPlayerChoice(input);
console.log("You: " + playerSelection);

let computerSelection = getComputerChoice();
console.log("Computer: " + computerSelection);

console.log(playRound(playerSelection,computerSelection));