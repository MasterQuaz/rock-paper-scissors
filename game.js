let playerName = prompt("I challenge you to 5 rounds of Rock, Paper, Scissors! But first...what is your name?");



function playRound(playerSelection, computerSelection) {

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

function getPlayerChoice () {
let input = prompt(`Alright ${playerName}, make your choice, if you dare...`, "Rock, Paper, Scissors...shoot!");
if (input === null) {
    playerSelection = "chicken";
}
else if (input !== null) {
playerSelection = input.toLowerCase();
}
}

getPlayerChoice();


if (computerSelection == "Rock" && playerSelection == "rock" || computerSelection == "Paper" && playerSelection == "paper" || computerSelection == "Scissors" && playerSelection == "scissors") {
    outcome = `We both chose ${computerSelection}, it is a tie!`
}
else if (computerSelection == "Rock" && playerSelection == "scissors") {
    outcome = `${playerName} loses! Rock breaks Scissors.`
}
else if (computerSelection == "Paper" && playerSelection == "rock") {
    outcome = `${playerName} loses! Paper covers Rock.`
}
else if (computerSelection == "Scissors" && playerSelection == "paper") {
    outcome = `${playerName} loses! Scissors cuts Paper.`
}
else if (computerSelection == "Rock" && playerSelection == "paper") {
    outcome = `${playerName} wins! Paper covers Rock`
}
else if (computerSelection == "Paper" && playerSelection == "scissors") {
    outcome = `${playerName} wins! Scissors cuts Paper.`
}
else if (computerSelection == "Scissors" && playerSelection == "rock") {
    outcome = `${playerName} win! Rock breaks Scissors.`
}
else if (playerSelection = "chicken") {
    outcome = `Tell me, ${playerName}, are you scared?`
}
else {
    outcome = `Trying to cheat huh? I caught you, ${playerName} loses!`
}


console.log(computerSelection);
console.log(playerSelection);
console.log(outcome)
}


for (let i = 1; i <= 5; i++) {
    playRound(i);
    alert(`Round ${i}:  ${outcome}`);
}


