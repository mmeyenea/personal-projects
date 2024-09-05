const numberButtonsDiv = document.getElementById('number-buttons');
const enterButton = document.getElementById('enter-btn');
const playerDisplay = document.getElementById('player-display');
const computerDisplay = document.getElementById('computer-display');
const resultDiv = document.getElementById('result');

let playerGuess = null;


for (let i = 0; i <= 9; i++) {
    const button = document.createElement('button');
    button.textContent = i;
    button.className = 'button';
    button.onclick = function() {
        selectNumber(i);
    };
    numberButtonsDiv.appendChild(button);
}

function selectNumber(number) {
    playerGuess = number;
    enterButton.disabled = false;  
    resultDiv.textContent = `You selected: ${number}`;
}
enterButton.onclick = function() {
    const computerGuess = Math.floor(Math.random() * 10); 
    displayChoices(playerGuess, computerGuess);
    checkResult(playerGuess, computerGuess);
};

function displayChoices(player, computer) {
    playerDisplay.textContent = player;
    computerDisplay.textContent = computer;
}

function checkResult(player, computer) {
    if (player === computer) {
        resultDiv.textContent = 'It\'s a tie! You win!';
    } else {
        resultDiv.textContent = 'You lose!';
    }

    enterButton.disabled = true;  
}
