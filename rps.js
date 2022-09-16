function getComputerChoice() {
  let choice = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  switch (choice) {
    case 1:
      return "Rock";
      break;
    case 2:
      return "Paper";
      break;
    case 3:
      return "Scissors";
      break;
    default:
      return "Well";
      break;
  }
}

function getPlayerChoice() {
  let choice = "";
  while (choice !== "Rock" && choice !== "Paper" && choice !== "Scissors") {
    choice = prompt('Please choose "Rock", "Paper" or "Scissors": ');
    choice = choice.toLowerCase();
    choice = choice.substring(0, 1).toUpperCase() + choice.substring(1);
  }
  return choice;
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    console.log("Draw! You are both losers!");
  } else {
    switch (playerChoice) {
      case "Rock":
        if (computerChoice === "Paper") {
          console.log(`You lost! ${computerChoice} beats ${playerChoice}!`);
        } else {
          console.log(`You win! ${playerChoice} beats ${computerChoice}!`);
        }
        break;
      case "Paper":
        if (computerChoice === "Scissors") {
          console.log(`You lost! ${computerChoice} beats ${playerChoice}!`);
        } else {
          console.log(`You win! ${playerChoice} beats ${computerChoice}!`);
        }
        break;
      case "Scissors":
        if (computerChoice === "Rock") {
          console.log(`You lost! ${computerChoice} beats ${playerChoice}!`);
        } else {
          console.log(`You win! ${playerChoice} beats ${computerChoice}!`);
        }
        break;
      default:
        break;
    }
  }
}

function game() {
  for (let index = 0; index < 5; index++) {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();
    playRound(playerChoice, computerChoice);
  }
}

game();
