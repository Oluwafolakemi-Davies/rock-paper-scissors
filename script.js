let humanScore = 0;
let computerScore = 0;
let gameOver = false;

const roundMsg = document.querySelector("#round-msg");
const scoreMsg = document.querySelector("#score-msg");
const finalWinner = document.querySelector("#final-winner");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanSelection) {
    if (gameOver) return;

    const computerSelection = getComputerChoice();
    let result = "";

    
    if (humanSelection === computerSelection) {
        result = `It's a tie! Both chose ${humanSelection}`;
    } else if (
        (humanSelection === "rock" && computerSelection === "scissors") ||
        (humanSelection === "paper" && computerSelection === "rock") ||
        (humanSelection === "scissors" && computerSelection === "paper")
    ) {
        humanScore++;
        result = `You win! ${humanSelection} beats ${computerSelection}`;
    } else {
        computerScore++;
        result = `You lose! ${computerSelection} beats ${humanSelection}`;
    }

    roundMsg.textContent = result;
    scoreMsg.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;

   
    checkWinner();
}

function checkWinner() {
    if (humanScore === 5 || computerScore === 5) {
        gameOver = true;
        if (humanScore === 5) {
            finalWinner.textContent = "CONGRATULATIONS! You reached 5 points first!" ;
            finalWinner.style.color = "green";
        } else {
            finalWinner.textContent = "GAME OVER! The Computer reached 5 points first. ";
            finalWinner.style.color = "red";
        }
    }
}

document.querySelector("#rock").addEventListener("click", () => playRound("rock"));
document.querySelector("#paper").addEventListener("click", () => playRound("paper"));
document.querySelector("#scissors").addEventListener("click", () => playRound("scissors"));