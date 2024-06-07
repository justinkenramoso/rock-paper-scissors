function getComputerChoice() {
    const choiceNumber = Math.floor(Math.random() * 10);
    return choiceNumber < 4 ? "rock"
        : choiceNumber >= 4 && choiceNumber <= 7 ? "paper"
        : "scissors";
}

function getHumanChoice() {

    let choice = "";
    let choiceIsValid = false;

    while (!choiceIsValid) {

        let input = prompt("Your choice? (rock,paper, or scissors)");
        input = input.toLowerCase();
        if (input === "rock" || input === "paper" || input === "scissors") {
            choiceIsValid = true;
            choice = input;
        } else {
            alert("Invalid input. Please choose from \'rock\',\'paper\', or \'scissors\'. ")
        }
    }

    return choice;

}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    alert(`Your choice was: ${humanChoice}! \nComputer's choice was: ${computerChoice}!`);

    let scoreGoesTo = "";

    scoreGoesTo = humanChoice === computerChoice ? "nobody"
    : humanChoice === "rock" && computerChoice === "paper" ? "computer"
    : humanChoice === "rock" && computerChoice === "scissors" ? "human"
    : humanChoice === "paper" && computerChoice === "rock" ? "human"
    : humanChoice === "paper" && computerChoice === "scissors" ? "computer"
    : humanChoice === "scissors" && computerChoice === "paper" ? "human"
    : humanChoice === "scissors" && computerChoice === "rock" ? "computer"
    : console.warn("Logical error");

    if (scoreGoesTo === "nobody") {
        alert("Draw!")
    } else if (scoreGoesTo === "human") {
        alert("You win!")
        humanScore++;
    } else if (scoreGoesTo === "computer") {
        alert("You lose!")
        computerScore++;
    }
}



function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    alert(`Your total score: ${humanScore} \nComputer total score: ${computerScore}`);

    let message = "";
    message = humanScore === computerScore ? "It's a tie!"
    : humanScore > computerScore ? "You win! congratulations!"
    : humanScore < computerScore ? "You lose! better luck next time!"
    : "Error!"

    alert(message);

}

playGame();