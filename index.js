function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    console.log('Your Choice: ' + playerSelection + ', Computer Choice: ' + computerSelection)
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'You Win!'
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return 'You Lose!'
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return 'You Lose!'
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return 'You Win!'
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return 'You Lose!'
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'You Win!'
    } else if (playerSelection ==  computerSelection) {
        return 'Draw!'
    }
  }

  function getComputerChoice() {
    var choices = ['rock', 'paper', 'scissors'];
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
  }

  const playerSelection = prompt("Please enter your choice from Rock, Papers or Scissors: ");
  const computerSelection = getComputerChoice();

  console.log(playRound(playerSelection, computerSelection));

