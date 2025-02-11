const choices = ["rock", "paper", "scissors", "lizard", "spock"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 5)];
    let result = "";

// Adding what happens if the player chose the same as the computer //
    if(playerChoice === computerChoice){
        result = "IT'S A TIE!";
    }

// Adding winning or losing when rock is chosen //

    else if (playerChoice === "rock" ) {
        if (computerChoice === "scissors") {
            result = "YOU WIN!";
        }
        if (computerChoice === "paper") {
            result = "YOU LOSE!";
        }
        if (computerChoice === "lizard" ) {
            result = "YOU WIN!";
        }
        if (computerChoice === "spock") {
            result = "YOU LOSE!";
        }
    }
    
// Adding winning or losing when scissors is chosen //
    else if (playerChoice === "paper" ) {
        if (computerChoice === "rock") {
            result = "YOU WIN!";
        }
        if (computerChoice === "scissors") {
            result = "YOU LOSE!";
        }
        if (computerChoice === "spock" ) {
            result = "YOU WIN!";
        }
        if (computerChoice === "lizard") {
            result = "YOU LOSE!";
        }
    }

// Adding winning or losing when paper is chosen //
   
    else if (playerChoice === "scissors" ) {
        if (computerChoice === "paper") {
            result = "YOU WIN!";
        }
        if (computerChoice === "rock") {
            result = "YOU LOSE!";
        }
        if (computerChoice === "lizard" ) {
            result = "YOU WIN!";
        }
        if (computerChoice === "spock") {
            result = "YOU LOSE!";
        }
    }

// Adding winning or losing when lizard is chosen //
    else if (playerChoice === "lizard" ) {
        if (computerChoice === "paper") {
            result = "YOU WIN!";
        }
        if (computerChoice === "scissors") {
            result = "YOU LOSE!";
        }
        if (computerChoice === "spock" ) {
            result = "YOU WIN!";
        }
        if (computerChoice === "rock") {
            result = "YOU LOSE!";
        }
    }

// Adding winning or losing when spock is chosen //
    else if (playerChoice === "spock" ) {
        if (computerChoice === "scissors") {
            result = "YOU WIN!";
        }
        if (computerChoice === "paper") {
            result = "YOU LOSE!";
        }
        if (computerChoice === "rock" ) {
            result = "YOU WIN!";
        }
        if (computerChoice === "lizard") {
            result = "YOU LOSE!";
        }
    }
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    //Adding colour into the winning or losing text messages and score //

    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
}