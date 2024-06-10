function getComputerChoice() {
    const choiceNumber = Math.floor(Math.random() * 10);
    return choiceNumber < 4 ? "rock"
        : choiceNumber >= 4 && choiceNumber <= 7 ? "paper"
        : "scissors";
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    

    const results = document.querySelector("#results");
    results.textContent = `Your choice was: ${humanChoice}! \nComputer's choice was: ${computerChoice}!`

    let scoreGoesTo = "";

    scoreGoesTo = humanChoice === computerChoice ? "nobody"
    : humanChoice === "rock" && computerChoice === "paper" ? "computer"
    : humanChoice === "rock" && computerChoice === "scissors" ? "human"
    : humanChoice === "paper" && computerChoice === "rock" ? "human"
    : humanChoice === "paper" && computerChoice === "scissors" ? "computer"
    : humanChoice === "scissors" && computerChoice === "paper" ? "human"
    : humanChoice === "scissors" && computerChoice === "rock" ? "computer"
    : console.warn("Logical error");

    const roundWinnerText = document.createElement("p");

    if (scoreGoesTo === "nobody") {
        roundWinnerText.textContent += "\nDraw!"
    } else if (scoreGoesTo === "human") {
        roundWinnerText.textContent += "\nYou win!"
        humanScore++;
    } else if (scoreGoesTo === "computer") {
        roundWinnerText.textContent += "\nYou lose!"
        computerScore++;
    }

    if (humanScore === 5) {
        alert("Congratulations! You have won 5 rounds!");
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        alert("You have lost 5 rounds! Better luck next time!");
        humanScore = 0;
        computerScore = 0;
    }

    const scoresDisplay = document.querySelector("#scores");
    scoresDisplay.textContent = `Scores - You: ${humanScore} / Computer: ${computerScore}`
    results.appendChild(roundWinnerText);

}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
})

paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
})

scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
})