let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let rndNumber = Math.floor(Math.random()*3);
    switch (rndNumber) {
        case 0:
            return("rock");
        case 1:
            return("paper");
        case 2:
            return("scissors");
    }
}

function playRound(playerSelection,computerSelection) {
    // Draw
    if (playerSelection == computerSelection) {
        return("Draw!\nYou: " + playerScore + " vs. Computer: " + computerScore)
    }

    // Player won
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        return(playerSelection + " beats " + computerSelection + ", you won!\nYou: " + ++playerScore + " vs. Computer: " + computerScore);
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        return(playerSelection + " beats " + computerSelection + ", you won!\nYou: " + ++playerScore + " vs. Computer: " + computerScore);
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return(playerSelection + " beats " + computerSelection + ", you won!\nYou: " + ++playerScore + " vs. Computer: " + computerScore);
    }

    // Computer won
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        return(computerSelection + " beats " + playerSelection + ", you lost!\nYou: " + playerScore + " vs. Computer: " + ++computerScore);
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        return(computerSelection + " beats " + playerSelection + ", you lost!\nYou: " + playerScore + " vs. Computer: " + ++computerScore);
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        return(computerSelection + " beats " + playerSelection + ", you lost!\nYou: " + playerScore + " vs. Computer: " + ++computerScore);
    }
}

function game() {
    for (let round = 1; round <= 5; round++) {
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
        console.log(playRound(playerSelection,computerSelection));
    }
    return("Thx for the game!");
}

console.log(game());
