const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resultDiv = document.getElementById('result');

const choices = ['rock', 'paper', 'scissors'];

rockButton.addEventListener('click', () => {
    play('rock');
});

paperButton.addEventListener('click', () => {
    play('paper');
});

scissorsButton.addEventListener('click', () => {
    play('scissors');
});

function play(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result;

    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = `You win! ${playerChoice} beats ${computerChoice}`;
    } else {
        result = `You lose! ${computerChoice} beats ${playerChoice}`;
    }

    resultDiv.textContent = result;
}
