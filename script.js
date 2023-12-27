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
  let roundResult;
  let score;
  function caseWinnerCheck(caseWinner,array) {
    for (let i=0; i <= caseWinner.length - array.length; i++) {
      if (caseWinner[i].every((value, index) => value === array[index])) {
        return true;
      }
    }
      return false;
  };

  if (playerSelection === computerSelection) {
    roundResult = "It's a tie";
    score = "The score is " + playerScore + ":" + computerScore;
  }
  else if (caseWinnerCheck(caseWinner,array)) {
    ++playerScore;
    roundResult = "You win! " + playerSelection.charAt(0).toUpperCase() 
      + playerSelection.slice(1) + " beats " + computerSelection + "!";
    score = "The score is " + playerScore + ":" + computerScore;
  }
  else {
    ++computerScore;
    roundResult = "You lose! " + computerSelection.charAt(0).toUpperCase() 
      + computerSelection.slice(1) + " beats " + playerSelection + "!";
    score = "The score is " + playerScore + ":" + computerScore;
  }
  return {
    roundResult,
    score
  }
};

let playerScore = 0;
let computerScore = 0;


for (let i=1; i <= 5; i++) {
  let input = prompt("Rock, Paper, Scissor?");
  let playerSelection = getPlayerChoice(input);
  console.log("You choose " + playerSelection);
  let computerSelection = getComputerChoice();
  console.log("Computer choose " + computerSelection);
  let roundResult = playRound(playerSelection, computerSelection);
  console.log(roundResult.roundResult);
  console.log(roundResult.score);
};

let gameResult;
if (playerScore > computerScore) {
  gameResult =  "You win the game";
} 
else {
  gameResult = "Computer win the game"
};

console.log(gameResult);