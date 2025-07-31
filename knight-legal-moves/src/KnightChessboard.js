// KnightChessboard.js
import React, { useState } from "react";
import "./KnightChessboard.css";

const BOARD_SIZE = 8;

export function getKnightMoves(row, col) {
  if (row < 0 || row >= BOARD_SIZE || col < 0 || col >= BOARD_SIZE) return [];

  const offsets = [
    [2, 1], [2, -1], [-2, 1], [-2, -1],
    [1, 2], [1, -2], [-1, 2], [-1, -2]
  ];

  return offsets
    .map(([dr, dc]) => [row + dr, col + dc])
    .filter(([r, c]) => r >= 0 && r < BOARD_SIZE && c >= 0 && c < BOARD_SIZE);
}

const KnightChessboard = () => {
  const [hovered, setHovered] = useState(null);

  const knightMoves = hovered ? getKnightMoves(...hovered) : [];

  return (
    <div className="chessboard-grid">
      {Array.from({ length: BOARD_SIZE }).map((_, row) =>
        Array.from({ length: BOARD_SIZE }).map((_, col) => {
          const isLight = (row + col) % 2 === 0;
          const isHovered = hovered && hovered[0] === row && hovered[1] === col;
          const isMove = knightMoves.some(([r, c]) => r === row && c === col);

          return (
            <div
              key={`${row}-${col}`}
              className={`cell ${isLight ? "light-square" : "dark-square"} 
                          ${isHovered ? "selected-square" : ""} 
                          ${isMove ? "knight-move-target" : ""}`}
              onMouseEnter={() => setHovered([row, col])}
              onMouseLeave={() => setHovered(null)}
            >
              {isHovered ? "♞" : ""}
            </div>
          );
        })
      )}
    </div>
  );
};

export default KnightChessboard;
