function game() {
    let playerScore = 0;
    let computerScore = 0;

    function playRound(playerSelection, computerSelection) {
        playerSelection = playerSelection.toLowerCase();
        console.log('Your Choice: ' + playerSelection + ', Computer Choice: ' + computerSelection)
        if (playerSelection == 'rock' && computerSelection == 'scissors') {
            return 'Player'
        } else if (playerSelection == 'rock' && computerSelection == 'paper') {
            return 'Computer'
        } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
            return 'Computer'
        } else if (playerSelection == 'paper' && computerSelection == 'rock') {
            return 'Player'
        } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
            return 'Computer'
        } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
            return 'Player'
        } else if (playerSelection ==  computerSelection) {
            return 'Draw!'
        }
      }
    
      function getComputerChoice() {
        var choices = ['rock', 'paper', 'scissors'];
        var computerChoice = choices[Math.floor(Math.random() * choices.length)];
        return computerChoice;
      }
    
    for (i = 0; i < 5; i++) {
        const playerSelection = prompt("Please enter your choice from Rock, Papers or Scissors: ");
        const computerSelection = getComputerChoice();
        let winner = playRound(playerSelection, computerSelection);
        if (winner === 'Player') {
            console.log('You won this round');
            playerScore++;
        } else if (winner === 'Computer'){
            console.log('Computer won this round')
            computerScore++;
        }
    }

    console.log('------------------------------------')

    if (playerScore > computerScore) {
        console.log("Congratulations! You win the game!");
    } else if (playerScore < computerScore) {
        console.log("Sorry! Computer wins the game!");
      } else {
        console.log("It's a tie game!");
      }
  }

game();
