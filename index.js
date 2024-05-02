//javaScript
const choices = ['rock', 'paper', 'scissors'];

const playerDisplay = document.getElementById('PlayerDisplay');
const ComputerDisplay = document.getElementById('ComputerDisplay');
const ResultDisplay = document.getElementById('ResultDisplay');
const PlayerScoreDisplay = document.getElementById("playerScore");
const ComputerScoreDisplay = document.getElementById("ComputerScore");
let playerScore =0; 
let ComputerScore =0; 

//player choice
function games(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result ="";
    if(playerChoice === computerChoice){
        result = "IT'S A TIE!";
    }
    else{
        switch(playerChoice){
            case "rock":
              result = (computerChoice === 'scissors') ? "YOU WIN!" : "YOU LOSE!";
              break;
            case "paper":
              result = (computerChoice === 'rock') ? "YOU WIN!" : "YOU LOSE!";
              break;
            case "scissors":
              result = (computerChoice === 'paper') ? "YOU WIN!" : "YOU LOSE!";
              break;
        }
    }
    playerDisplay.textContent = `Player:  ${playerChoice}`;
    ComputerDisplay.textContent = `Computer: ${computerChoice}`;  
    ResultDisplay.textContent = result;
    ResultDisplay.classList.remove("greenText", "redText", "tieText");
    //result
    switch(result){
        case"YOU WIN!":
            ResultDisplay.classList.add("greenText");
            playerScore++;
            PlayerScoreDisplay.textContent = playerScore;
            break;
        case"YOU LOSE!":
            ResultDisplay.classList.add("redText");
            ComputerScore++;
            ComputerScoreDisplay.textContent = ComputerScore;
            break;
        case"IT'S A TIE!":
            ResultDisplay.classList.add("tieText");
            break;
    }
}
