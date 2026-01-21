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
const humanScoreDisplay = document.querySelector(".humanscore");
const computerScoreDisplay = document.querySelector(".computerscore");
const resultMessage = document.querySelector(".result-message");

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

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    resultMessage.textContent = "Tie!";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    resultMessage.textContent = "You won! Rock beats scissors";
    humanScore++;
    humanScoreDisplay.textContent = `You: ${humanScore}`;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    resultMessage.textContent = "You won! Paper beats rock";
    humanScore++;
    humanScoreDisplay.textContent = `You: ${humanScore}`;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    resultMessage.textContent = "You won! Scissors beats paper";
    humanScore++;
    humanScoreDisplay.textContent = `You: ${humanScore}`;
  } else {
    resultMessage.textContent = "You lost!";
    computerScore++;
    computerScoreDisplay.textContent = `Computer: ${computerScore}`;
  }


  if (humanScore === 5 || computerScore === 5) {
    if (humanScore > computerScore) {
      resultMessage.textContent = "You won the game!";
    } else {
      resultMessage.textContent = "The computer won the game!";
    }
  }
}
