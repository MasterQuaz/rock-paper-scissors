let playerName = prompt("I challenge you to 5 rounds of Rock, Paper, Scissors! But first...what is your name?");
let playerScore = 0;
let computerScore = 0;


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
    outcome = `${playerName} loses! Rock breaks Scissors.`;
    computerScore++;
}
else if (computerSelection == "Paper" && playerSelection == "rock") {
    outcome = `${playerName} loses! Paper covers Rock.`;
    computerScore++;
}
else if (computerSelection == "Scissors" && playerSelection == "paper") {
    outcome = `${playerName} loses! Scissors cuts Paper.`;
    computerScore++;
}
else if (computerSelection == "Rock" && playerSelection == "paper") {
    outcome = `${playerName} wins! Paper covers Rock`;
    playerScore++;
}
else if (computerSelection == "Paper" && playerSelection == "scissors") {
    outcome = `${playerName} wins! Scissors cuts Paper.`;
    playerScore++;
}
else if (computerSelection == "Scissors" && playerSelection == "rock") {
    outcome = `${playerName} wins! Rock breaks Scissors.`;
    playerScore++;
}
else if (playerSelection = "chicken") {
    outcome = `Tell me, ${playerName}, are you scared?`
}
else {
    outcome = `Trying to cheat huh? I caught you, ${playerName} loses!`
}

console.log(playerSelection);
console.log(computerSelection);
console.log(outcome);
}


for (let i = 1; i <= 5; i++) {
    playRound(i);
    alert(`Round ${i}:  ${outcome}`);
}

function victor () {
    if (playerScore === computerScore) {
        finalOutcome = "Wow, after 5 rounds we tie. Good game!"
    }
    else if (playerScore > computerScore) {
        finalOutcome = `${playerName} won ${playerScore} rounds while I won ${computerScore} rounds. ${playerName} is the victor!`
    }
    else if (playerScore < computerScore) {
        finalOutcome = `${playerName} won ${playerScore} rounds while I won ${computerScore} rounds. I am the victor, ${playerName} loses!`
    }
}


victor ();
alert (finalOutcome);
console.log(finalOutcome);