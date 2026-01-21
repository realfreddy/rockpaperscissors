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
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", startRound);
});

let humanScore = 0;
let computerScore = 0;

function startRound(event) {
  if (humanScore === 5 || computerScore === 5) {
    return;
  }
  const humanChoice = event.currentTarget.id;
  let computerSelection = getComputerChoice();
  playRound(humanChoice, computerSelection);
}
 const humanScoreDisplay = document.querySelector(".humanscore")
 const computerScoreDisplay = document.querySelector(".computerscore")

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("You tied!");
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You won!, rock beats scissors");
    humanScore++;
    humanScoreDisplay.textContent = `You: ${humanScore}`;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You won!, paper beats rock");
    humanScore++;
    humanScoreDisplay.textContent = `You: ${humanScore}`;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You won!, scissors beats paper");
    humanScore++;
    humanScoreDisplay.textContent = `You: ${humanScore}`;
  } else {
    console.log("You lost!");
    computerScore++;
    computerScoreDisplay.textContent = `Computer: ${computerScore}`;
  }

  /* console.log(`You have ${humanScore} points`);
  console.log(`The computer has ${computerScore} points`); */
}
