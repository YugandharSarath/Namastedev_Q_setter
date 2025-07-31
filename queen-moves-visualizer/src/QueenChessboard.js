import React, { useState } from "react";
import "./QueenChessboard.css";

const boardSize = 8;

export default function QueenBoard() {
  const [hovered, setHovered] = useState(null);

  const isQueenMoveCell = (fromRow, fromCol, toRow, toCol) => {
    return (
      fromRow === toRow ||
      fromCol === toCol ||
      Math.abs(fromRow - toRow) === Math.abs(fromCol - toCol)
    );
  };

  return (
    <div className="board" role="grid">
      {Array.from({ length: boardSize }).map((_, row) =>
        Array.from({ length: boardSize }).map((_, col) => {
          const isHovered = hovered && hovered[0] === row && hovered[1] === col;
          const isQueenMove =
            hovered && isQueenMoveCell(hovered[0], hovered[1], row, col);
          const cellColor = (row + col) % 2 === 0 ? "light" : "dark";
          const classes = `cell ${cellColor} ${isHovered ? "hovered" : ""} ${
            isQueenMove ? "queen-move" : ""
          }`;

          return (
            <div
              key={`${row}-${col}`}
              role="gridcell"
              className={classes}
              onMouseEnter={() => setHovered([row, col])}
              onMouseLeave={() => setHovered(null)}
              data-testid={`cell-${row}-${col}`}
              data-row={row}
              data-col={col}
            >
              {isHovered && <span className="queen-icon">♛</span>}
            </div>
          );
        })
      )}
    </div>
  );
}
