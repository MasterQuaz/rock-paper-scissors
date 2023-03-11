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

let input = prompt("Make your choice, if you dare...", "Rock, Paper, Scissors...shoot!");
let playerSelection = input.toLowerCase();


if (computerSelection == "Rock" && playerSelection == "rock" || computerSelection == "Paper" && playerSelection == "paper" || computerSelection == "Scissors" && playerSelection == "scissors") {
    outcome = `We both chose ${computerSelection}, it is a tie!`
}
else if (computerSelection == "Rock" && playerSelection == "scissors") {
    outcome = "You lose! Rock breaks Scissors."
}
else if (computerSelection == "Paper" && playerSelection == "rock") {
    outcome = "You lose! Paper covers Rock."
}
else if (computerSelection == "Scissors" && playerSelection == "paper") {
    outcome = "You lose! Scissors cuts Paper."
}
else if (computerSelection == "Rock" && playerSelection == "paper") {
    outcome = "You win! Paper covers Rock"
}
else if (computerSelection == "Paper" && playerSelection == "scissors") {
    outcome = "You win! Scissors cuts Paper."
}
else if (computerSelection == "Scissors" && playerSelection == "rock") {
    outcome = "You win! Rock breaks Scissors."
}
else {
    outcome = "Trying to cheat huh? I caught you, you lose!"
}

console.log(computerSelection);
console.log(playerSelection);

alert(outcome)