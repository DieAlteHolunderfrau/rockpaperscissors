let currentScorePlayer = 0;
let currentScoreAI = 0;


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
  let result = document.querySelector('#resultDiv');
  if (playerChoice === computerChoice) {
    result.textContent = 'Draw! You are both losers!';
    console.log("Draw! You are both losers!");
  } else {
    switch (playerChoice) {
      case "Rock":
        if (computerChoice === "Paper") {
          currentScoreAI++;
          result.textContent = `You lost! ${computerChoice} beats ${playerChoice}!`;
        } else {
          currentScorePlayer++;
          result.textContent = `You win! ${playerChoice} beats ${computerChoice}!`;
        }
        break;
      case "Paper":
        if (computerChoice === "Scissors") {
          currentScoreAI++;
          result.textContent = `You lost! ${computerChoice} beats ${playerChoice}!`;
        } else {
          currentScorePlayer++;
          result.textContent = `You win! ${playerChoice} beats ${computerChoice}!`;
        }
        break;
      case "Scissors":
        if (computerChoice === "Rock") {
          currentScoreAI++;
          result.textContent = `You lost! ${computerChoice} beats ${playerChoice}!`;
        } else {
          currentScorePlayer++;
          result.textContent = `You win! ${playerChoice} beats ${computerChoice}!`;
        }
        break;
      default:
        break;
    }
  }
  const scorePlayer = document.querySelector('#scorePlayer');
  scorePlayer.textContent = currentScorePlayer.toString();
  const scoreAI = document.querySelector('#scoreAI');
  scoreAI.textContent = currentScoreAI.toString();
  if (currentScorePlayer === 5) {
    result.textContent = 'You Won! What an achievement!'
  } else if (currentScoreAI === 5) {
    result.textContent = 'You Lost! What a debacle!'
  }
}

function game() {
  // for (let index = 0; index < 5; index++) {
  const container = document.querySelector("#gameArea");
  container.classList.add("#content");
  const playButtons = document.createElement('ul');
  playButtons.classList.add("playButtons");
  const li1 = document.createElement('li'); 
  const li2 = document.createElement('li'); 
  const li3 = document.createElement('li');
  const buttonRock = document.createElement("button");
  const buttonPaper = document.createElement("button");
  const buttonScissors = document.createElement("button");
  buttonRock.classList.add("button");
  buttonRock.textContent = "Rock";
  buttonPaper.classList.add("button");
  buttonPaper.textContent = "Paper";
  buttonScissors.classList.add("button");
  buttonScissors.textContent = "Scissors";
  const scoreboard = document.createElement('div');
  scoreboard.classList.add('scoreboard');
  const scorePlayer = document.createElement('div');
  scorePlayer.id = 'scorePlayer';
  scorePlayer.classList.add('score');
  const scoreAI = document.createElement('div');
  scoreAI.id = 'scoreAI';
  scoreAI.classList.add('score');

  const result = document.createElement('div');
  result.id = 'resultDiv';
  result.classList.add('result');

  li1.appendChild(buttonRock);
  li2.appendChild(buttonPaper);
  li3.appendChild(buttonScissors);
  playButtons.appendChild(li1);
  playButtons.appendChild(li2);
  playButtons.appendChild(li3);
  scoreboard.appendChild(scorePlayer);
  scoreboard.appendChild(scoreAI);
  container.appendChild(playButtons);
  container.appendChild(scoreboard);
  container.appendChild(result);

  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      playRound(button.textContent, getComputerChoice());
    });
  });

  // let computerChoice = getComputerChoice();
  // let playerChoice = getPlayerChoice();
  // playRound(playerChoice, computerChoice);
  // }
}

game();
