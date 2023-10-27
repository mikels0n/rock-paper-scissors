let playerScore = 0;
let computerScore = 0;
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const result = document.querySelector(".result")

const win = document.createElement('div');
win.classList.add('win');
win.textContent = "You WON!";

const lost = document.createElement('div');
lost.classList.add('lost');
lost.textContent = "You LOST...";

const draw = document.createElement('div');
draw.classList.add('draw');
draw.textContent = "DRAW";


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
        return(2)
    }

    // Player won
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        return(3);
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        return(3);
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return(3);
    }

    // Computer won
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        return(1);
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        return(1);
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        return(1);
    }
}

rock.addEventListener('click', () => {
    let varResult = playRound("rock", getComputerChoice());
     
    switch (varResult) {
        case 3:
            result.appendChild(win);
            break;
        case 1:
            result.appendChild(lost);
            break;
        case 2:
            result.appendChild(draw);
            break;
    }
})


console.log(game());
