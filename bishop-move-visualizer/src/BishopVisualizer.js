import React, { useState } from "react";
import "./styles.css";

const boardSize = 8;

export default function BishopVisualizer() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="board">
      {Array.from({ length: boardSize }).map((_, row) =>
        Array.from({ length: boardSize }).map((_, col) => {
          const isHovered = hovered && hovered[0] === row && hovered[1] === col;

          const isDiagonalMove =
            hovered &&
            Math.abs(hovered[0] - row) === Math.abs(hovered[1] - col) &&
            !isHovered;

          const isLight = (row + col) % 2 === 0;

          return (
            <div
              key={`${row}-${col}`}
              role="gridcell"
              className={`cell ${isLight ? "light" : "dark"} ${
                isHovered ? "hovered" : isDiagonalMove ? "bishop-move" : ""
              }`}
              onMouseEnter={() => setHovered([row, col])}
              onMouseLeave={() => setHovered(null)}
            >
              {isHovered && <span className="bishop">♝</span>}
            </div>
          );
        })
      )}
    </div>
  );
}
