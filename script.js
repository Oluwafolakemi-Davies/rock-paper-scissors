function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    let choice = prompt("Please enter rock, paper, or scissors:");
    return choice ? choice.toLowerCase() : ""; 
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        const humanSelection = humanChoice.toLowerCase();
        const computerSelection = computerChoice.toLowerCase();

        if (humanSelection === computerSelection) {
            console.log(`It's a tie! Both chose ${humanSelection}`);
        } else if (
            (humanSelection === "rock" && computerSelection === "scissors") ||
            (humanSelection === "paper" && computerSelection === "rock") ||
            (humanSelection === "scissors" && computerSelection === "paper")
        ) {
            humanScore++;
            console.log(`You win! ${humanSelection} beats ${computerSelection}`);
        } else {
            computerScore++;
            console.log(`You lose! ${computerSelection} beats ${humanSelection}`);
        }
    }

    for (let i = 0; i < 5; i++) {
        console.log(`--- Round ${i + 1} ---`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Score -> Human: ${humanScore}, Computer: ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log("FINAL RESULT: You won the game! 🎉");
    } else if (computerScore > humanScore) {
        console.log("FINAL RESULT: The computer won the game. 🤖");
    } else {
        console.log("FINAL RESULT: The game is a draw! 🤝");
    }
}

playGame();