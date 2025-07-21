const board = document.getElementById("board");
const { getKnightMoves } = require("./knight");

function createBoard() {
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const square = document.createElement("div");
      square.className =
        "square " + ((row + col) % 2 === 0 ? "white" : "black");
      square.dataset.row = row;
      square.dataset.col = col;

      square.addEventListener("mouseenter", handleHover);
      square.addEventListener("mouseleave", clearHighlights);

      board.appendChild(square);
    }
  }
}

function handleHover(e) {
  const row = parseInt(e.target.dataset.row);
  const col = parseInt(e.target.dataset.col);

  e.target.classList.add("hovered");

  const moves = getKnightMoves(row, col);
  moves.forEach(([r, c]) => {
    const selector = `.square[data-row="${r}"][data-col="${c}"]`;
    const square = document.querySelector(selector);
    square.classList.add("knight-move");
  });
}

function clearHighlights() {
  document.querySelectorAll(".square").forEach((square) => {
    square.classList.remove("hovered", "knight-move");
  });
}

createBoard();
