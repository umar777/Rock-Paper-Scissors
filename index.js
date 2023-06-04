let playerScore = 0;
let computerScore = 0;

const result = document.querySelector("#result");

if (playerScore === 3 || computerScore === 3) {
    result.innerHTML = 'YOU WON THE GAME!!!'
}

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

let player = "";

btnRock.addEventListener('click', (e) => {
    player = 'rock';
    playRound(player, getComputerChoice())
})

btnPaper.addEventListener('click', (e) => {
    player = 'paper';
    playRound(player, getComputerChoice())
})

btnScissors.addEventListener('click', (e) => {
    player = 'scissors';
    playRound(player, getComputerChoice())
})

const score = document.querySelector("#score");
const selection = document.querySelector("#selection")
const points = document.querySelector("#points")

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    selection.innerHTML = 'Your Choice: ' + playerSelection + ', Computer Choice: ' + computerSelection
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        score.innerHTML= "You won this round!";
        playerScore++;
        points.innerHTML = 'Your Score: ' + playerScore + ' Computer Score: ' + computerScore;
        return 'Player'
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        score.innerHTML= "Computer won this round!";
        computerScore++;
        points.innerHTML = 'Your Score: ' + playerScore + ' Computer Score: ' + computerScore;
        return 'Computer'
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        score.innerHTML= "Computer won this round!";
        computerScore++;
        points.innerHTML = 'Your Score: ' + playerScore + ' Computer Score: ' + computerScore;
        return 'Computer'
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        score.innerHTML= "You won this round!";
        playerScore++;
        points.innerHTML = 'Your Score: ' + playerScore + ' Computer Score: ' + computerScore;
        return 'Player'
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        score.innerHTML= "Computer won this round!";
        computerScore++;
        points.innerHTML = 'Your Score: ' + playerScore + ' Computer Score: ' + computerScore;
        return 'Computer'
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        score.innerHTML= "You won this round!";
        playerScore++;
        points.innerHTML = 'Your Score: ' + playerScore + ' Computer Score: ' + computerScore;
        return 'Player'
    } else if (playerSelection ==  computerSelection) {
        score.innerHTML= "It is a Draw!";
        return 'Draw!'
    }
  }

  function getComputerChoice() {
    var choices = ['rock', 'paper', 'scissors'];
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
  }