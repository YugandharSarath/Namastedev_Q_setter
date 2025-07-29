import React from "react";
import Cell from "./Cell";
import {
  isSnake,
  isLadder,
  snakesAndLaddersMap,
} from "../utils/snakesAndLaddersMap";

export default function Board({ playerPosition }) {
  const cells = [];

  for (let row = 9; row >= 0; row--) {
    const currentRow = [];
    for (let col = 0; col < 10; col++) {
      let number =
        row % 2 === 0 ? row * 10 + col + 1 : row * 10 + (9 - col) + 1;
      currentRow.push(
        <Cell
          key={number}
          number={number}
          isPlayer={number === playerPosition}
          isSnake={isSnake(number)}
          isLadder={isLadder(number)}
          moveTo={snakesAndLaddersMap[number]}
        />
      );
    }
    cells.push(
      <div key={row} style={{ display: "flex" }}>
        {currentRow}
      </div>
    );
  }

  return <div>{cells}</div>;
}
