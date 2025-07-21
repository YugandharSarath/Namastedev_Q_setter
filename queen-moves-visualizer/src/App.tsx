import React, { useState } from "react";
import "./styles.css";

const boardSize = 8;
type Position = [number, number] | null;

export default function App() {
  const [hovered, setHovered] = useState<Position>(null);

  return (
    <div className="board">
      {Array.from({ length: boardSize }).map((_, row) =>
        Array.from({ length: boardSize }).map((_, col) => {
          const isHovered = hovered && hovered[0] === row && hovered[1] === col;

          const isQueenMove =
            hovered &&
            !isHovered &&
            (hovered[0] === row || // horizontal
              hovered[1] === col || // vertical
              Math.abs(hovered[0] - row) === Math.abs(hovered[1] - col)); // diagonal

          const isLight = (row + col) % 2 === 0;

          return (
            <div
              key={`${row}-${col}`}
              data-testid={`cell-${row}-${col}`}
              className={`cell ${isLight ? "light" : "dark"} ${
                isHovered ? "hovered" : isQueenMove ? "queen-move" : ""
              }`}
              onMouseEnter={() => setHovered([row, col])}
              onMouseLeave={() => setHovered(null)}
            />
          );
        })
      )}
    </div>
  );
}
