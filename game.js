function getComputerChoice () {
    const myNumber = Math.round(Math.random() * 100);

if (myNumber < 34) {
    computerSelection = "Rock"
}
else if (myNumber < 67) {
    computerSelection = "Paper"
}
else {
    computerSelection = "Scissors"
}

}

getComputerChoice();

