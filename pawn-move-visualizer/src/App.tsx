// App.tsx - Pawn Move Visualizer
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

          let isPawnMove = false;
          if (hovered) {
            const [hoverRow, hoverCol] = hovered;
            // White pawn (moving upward)
            if (hoverRow > 0 && hoverRow < 8) {
              if (hoverRow === 6) {
                isPawnMove =
                  (row === hoverRow - 1 || row === hoverRow - 2) &&
                  col === hoverCol;
              } else {
                isPawnMove = row === hoverRow - 1 && col === hoverCol;
              }
            }
          }

          const isLight = (row + col) % 2 === 0;

          return (
            <div
              key={`${row}-${col}`}
              role="gridcell"
              className={`cell ${isLight ? "light" : "dark"} ${
                isHovered ? "hovered" : isPawnMove ? "pawn-move" : ""
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
