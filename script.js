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
  [6, 7, 8], // linhas
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // colunas
  [0, 4, 8],
  [2, 4, 6],  // diagonais
];

