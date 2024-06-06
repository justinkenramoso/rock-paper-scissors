function getComputerChoice() {
    const choiceNumber = Math.floor(Math.random() * 10);
    return choiceNumber < 4 ? "rock"
        : choiceNumber >= 4 && choiceNumber <= 7 ? "paper"
        : "scissors";
}

function getHumanChoice() {
    return prompt("Your choice? (rock,paper, or scissors)");
}

console.log(getHumanChoice());
