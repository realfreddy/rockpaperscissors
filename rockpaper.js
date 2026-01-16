function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    return "rock";
  }
  if (computerChoice === 1) {
    return "paper";
  }
  if (computerChoice === 2) {
    return "scissors";
  }
}

function getHumanChoice() {
  let humanChoice = prompt("Pick rock, paper, or scissors: ").toLowerCase();
  if (humanChoice === "rock") {
    return "rock";
  }
  if (humanChoice === "paper") {
    return "paper";
  }
  if (humanChoice === "scissors") {
    return "scissors";
  }
}
function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("You tied!");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log("You won!, rock beats scissors");
      humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log("You won!, paper beats rock");
      humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log("You won!, scissors beats paper");
      humanScore++;
    } else {
      console.log("You lost!");
      computerScore++;
    }
  }
  for(let i = 0 ; i < 5;i++){
  let humanSelection = getHumanChoice();
  let computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
}
console.log(`You have ${humanScore} points`);
console.log(`The computer has ${computerScore} points`);
}
playGame();
