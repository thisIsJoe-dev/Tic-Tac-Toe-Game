const boardEl = document.getElementById('board');

let board = Array(9).fill('');
let currentPlayer = 'X';

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
  if (board[index]) return;

  board[index] = currentPlayer;
  e.target.textContent = currentPlayer;
  e.target.classList.add(currentPlayer.toLowerCase());
  e.target.disabled = true;

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

createBoard();