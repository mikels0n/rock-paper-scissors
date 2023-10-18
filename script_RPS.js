function getComputerChoice() {
    let rndNumber = Math.floor(Math.random()*3);
    switch (rndNumber) {
        case 0:
            return("Rock");
        case 1:
            return("Paper");
        case 2:
            return("Scissors");
    }
}

