const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resultDiv = document.getElementById('result');

// 바위, 보, 가위 순서 (바위=0, 보=1, 가위=2)
const choices = ['바위', '보', '가위'];

rockButton.addEventListener('click', () => play('바위'));
paperButton.addEventListener('click', () => play('보'));
scissorsButton.addEventListener('click', () => play('가위'));

function play(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let status = "";
    let reason = "";

    if (playerChoice === computerChoice) {
        status = "비겼습니다!";
        reason = `나: ${playerChoice}, 컴퓨터: ${computerChoice}로 서로 같습니다.`;
    } else if (
        (playerChoice === '바위' && computerChoice === '가위') ||
        (playerChoice === '보' && computerChoice === '바위') ||
        (playerChoice === '가위' && computerChoice === '보')
    ) {
        status = "이겼습니다! 🎉";
        reason = `${playerChoice}(이)가 ${computerChoice}(을)를 이깁니다.`;
    } else {
        status = "졌습니다... 😢";
        reason = `${computerChoice}(이)가 ${playerChoice}(을)를 이깁니다.`;
    }

    resultDiv.innerHTML = `
        <div style="font-size: 1.2em; margin-bottom: 10px;">${status}</div>
        <div style="font-size: 0.8em; color: #666;">${reason}</div>
    `;
}
