import React, { useState } from "react";
import { getKnightMoves } from "./knight";
import "./KnightChessboard.css";

const KnightChessboard = () => {
  const [hovered, setHovered] = useState(null);

  const knightMoves = hovered ? getKnightMoves(...hovered) : [];

  return (
    <div className="chessboard-grid">
      {Array.from({ length: 8 }).map((_, row) =>
        Array.from({ length: 8 }).map((_, col) => {
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
