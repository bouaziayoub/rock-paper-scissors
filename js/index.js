const choices = document.querySelectorAll(".choice");
const score = document.getElementById("score");
const result = document.querySelector(".result p");
const reset = document.getElementById("reset");
const scoreboard = {
  player: 0,
  computer: 0,
};

// Play game
function play(e) {
  reset.style.display = "inline";
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  showWinner(winner, computerChoice);
}

// Get computer's choice
function getComputerChoice() {
  const rand = Math.random();
  if (rand < 0.34) {
    return "r";
  } else if (rand <= 0.67) {
    return "p";
  } else {
    return "s";
  }
}

// Get game winner
function getWinner(p, c) {
  if (p === c) {
    return "draw";
  } else if (p === "r") {
    if (c === "p") {
      return "computer";
    } else {
      return "player";
    }
  } else if (p === "p") {
    if (c === "s") {
      return "computer";
    } else {
      return "player";
    }
  } else if (p === "s") {
    if (c === "r") {
      return "computer";
    } else {
      return "player";
    }
  }
}

// Show winner
function showWinner(winner, computerChoice) {
  if (winner === "player") {
    // Inc player score
    scoreboard.player++;
    // Show modal result
    result.innerHTML = "You Win";
  } else if (winner === "computer") {
    // Inc computer score
    scoreboard.computer++;
    // Show modal result
    result.innerHTML = "You Lose";
  } else {
    // Show modal result
    result.innerHTML = "It's a draw";
  }
  // Show score
  score.innerHTML = `You ${scoreboard.player} - ${scoreboard.computer} Computer`;
}

// Reset all
function resetAll() {
  scoreboard.player = 0;
  scoreboard.computer = 0;
  score.innerHTML = `You ${scoreboard.player} - ${scoreboard.computer} Computer`;
  result.innerHTML = "Pick an option";
  reset.style.display = "none";
}

// Event listeners
choices.forEach((choice) => choice.addEventListener("click", play));
reset.addEventListener("click", resetAll);
