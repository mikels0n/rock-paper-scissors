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

const computerSelection = getComputerChoice();
const playerSelection = prompt("Rock, paper or scissors?").toLowerCase();

function playRound(playerSelection,computerSelection) {

    // Draw
    if (playerSelection == computerSelection) {
        return("Draw!")
    }

    // Player won
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        return(playerSelection + " beats " + computerSelection + ", you won!")
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        return(playerSelection + " beats " + computerSelection + ", you won!")
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return(playerSelection + " beats " + computerSelection + ", you won!")
    }

    // Computer won
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        return(computerSelection + " beats " + playerSelection + ", you lost!")
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        return(computerSelection + " beats " + playerSelection + ", you lost!")
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        return(computerSelection + " beats " + playerSelection + ", you lost!")
    }
}

