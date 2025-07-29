import React, { useState } from "react";
import "./QueenChessboard.css";

const boardSize = 8;

function QueenChessboard() {
  const [hovered, setHovered] = useState(null);

  const isHoveredSquare = (row, col) => {
    return hovered && hovered[0] === row && hovered[1] === col;
  };

  const isQueenMove = (row, col) => {
    if (!hovered) return false;

    const [hoveredRow, hoveredCol] = hovered;

    return (
      !isHoveredSquare(row, col) &&
      (hoveredRow === row ||
        hoveredCol === col ||
        Math.abs(hoveredRow - row) === Math.abs(hoveredCol - col))
    );
  };

  const renderBoard = () => {
    const board = [];
    for (let row = 0; row < boardSize; row++) {
      for (let col = 0; col < boardSize; col++) {
        const isLight = (row + col) % 2 === 0;
        let cellClasses = `cell ${isLight ? "light" : "dark"}`;

        if (isHoveredSquare(row, col)) {
          cellClasses += " hovered";
        } else if (isQueenMove(row, col)) {
          cellClasses += " queen-move";
        }

        board.push(
          <div
            key={`${row}-${col}`}
            data-testid={`cell-${row}-${col}`}
            className={cellClasses}
            onMouseEnter={() => setHovered([row, col])}
            onMouseLeave={() => setHovered(null)}
          >
            {isHoveredSquare(row, col) && <span className="queen-icon">♛</span>}
          </div>
        );
      }
    }
    return board;
  };

  return <div className="board">{renderBoard()}</div>;
}

export default QueenChessboard;
