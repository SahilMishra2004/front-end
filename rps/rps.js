const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerdisplay");
const computerDisplay = document.getElementById("computerdisplay");
const resultDisplay = document.getElementById("result");
const playerscoreDisplay=document.getElementById("playerscore");
const computerscoreDisplay=document.getElementById("computerscore");
playerscore=0;
computerscore=0;

function playgames(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = '';
    if (playerChoice === computerChoice) {
        result = "It's a Tie!";
    } else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "You win" : "You lose";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You win" : "You lose";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "You win" : "You lose";
                break;
        }
    }
    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;
    resultDisplay.classList.remove("greentext","redtext");
    switch(result){
        case "You win":
            resultDisplay.classList.add("greentext");
            playerscore++;
            playerscoreDisplay.textContent=playerscore;
            break;
        case "You lose":
            resultDisplay.classList.add("redtext");
            computerscore++;
            computerscoreDisplay.textContent=computerscore;
            break;
    }
}
 