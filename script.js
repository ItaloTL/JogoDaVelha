const board = document.getElementById("board");
const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const restartBtn = document.getElementById("restartBtn");

let currentPlayer = "X";
let player2 = "O";
let gameActive = true;
let gameState = Array(9).fill("");

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], 
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], 
  [0, 4, 8],
  [2, 4, 6],  
];

cells.forEach((cell, index) => {
  cell.addEventListener("click", () => handleCellClick(index));
});

restartBtn.addEventListener("click", restartGame);

function handleCellClick(index) {
  if (!gameActive || gameState[index] !== "") return;
  
  gameState[index] = currentPlayer;
  cells[index].textContent = currentPlayer;
  
  if (checkWin()) {
    gameActive = false;
    statusText.textContent = `${currentPlayer} venceu!`;
    return;
  }
  
  if (checkDraw()) {
    gameActive = false;
    statusText.textContent = "Empate!";
    return;
  }
  
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  statusText.textContent = `Vez do jogador ${currentPlayer}`;
}

function checkWin() {
  return winningCombinations.some(combination => {
    return combination.every(index => {
      return gameState[index] === currentPlayer;
    });
  });
}

function checkDraw() {
  return gameState.every(cell => cell !== "");
}

function restartGame() {
  currentPlayer = "X";
  gameActive = true;
  gameState = Array(9).fill("");
  cells.forEach(cell => cell.textContent = "");
  statusText.textContent = "Vez do jogador X";
}

statusText.textContent = "Vez do jogador X";