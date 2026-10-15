const boardEl = document.getElementById('board');
const statusEl = document.getElementById('status');

let board = Array(9).fill('');
let currentPlayer = 'X';
let gameOver = false;

const WIN_PATTERNS = [
  [0,1,2], [3,4,5], [6,7,8], 
  [0,3,6], [1,4,7], [2,5,8], 
  [0,4,8], [2,4,6]           
];

function createBoard() {
  boardEl.innerHTML = '';
  board.forEach((_, i) => {
    const cell = document.createElement('button');
    cell.classList.add('cell');
    cell.dataset.index = i;
    cell.addEventListener('click', handleClick);
    boardEl.appendChild(cell);
  });
}

function handleClick(e) {
  const index = e.target.dataset.index;
  if (board[index] || gameOver) return;

  board[index] = currentPlayer;
  e.target.textContent = currentPlayer;
  e.target.classList.add(currentPlayer.toLowerCase());
  e.target.disabled = true;

  if (checkWinner(currentPlayer)) {
    statusEl.textContent = `${currentPlayer} is Winner`;
    gameOver = true;
    return;
  }

  if (board.every(cell => cell)) {
    statusEl.textContent = 'Equal!';
    gameOver = true;
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  statusEl.textContent = `turn: ${currentPlayer}`;
}

function checkWinner(player) {
  return WIN_PATTERNS.some(pattern =>
    pattern.every(i => board[i] === player)
  );
}

createBoard();