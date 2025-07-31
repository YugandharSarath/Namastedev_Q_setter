import React, { useState } from "react";
import "./App.css"; // Optional, for styling

export default function SnakeAndLadders() {
  const snakesAndLaddersMap = {
    16: 6, 47: 26, 49: 11, 56: 53, 62: 19,
    64: 60, 87: 24, 93: 73, 95: 75, 98: 78,
    1: 38, 4: 14, 9: 31, 21: 42, 28: 84,
    36: 44, 51: 67, 71: 91, 80: 100,
  };

  const isSnake = (pos) =>
    pos in snakesAndLaddersMap && pos > snakesAndLaddersMap[pos];

  const isLadder = (pos) =>
    pos in snakesAndLaddersMap && pos < snakesAndLaddersMap[pos];

  const [position, setPosition] = useState(1);
  const [diceValue, setDiceValue] = useState(null);
  const [message, setMessage] = useState("");

  const rollDice = () => {
    const roll = Math.floor(Math.random() * 6) + 1;
    setDiceValue(roll);

    let nextPos = position + roll;
    if (nextPos > 100) nextPos = position;

    if (snakesAndLaddersMap[nextPos]) {
      const dest = snakesAndLaddersMap[nextPos];
      setMessage(dest > nextPos ? "🪜 Ladder! Climb up!" : "🐍 Snake bite!");
      nextPos = dest;
    } else {
      setMessage("");
    }

    setPosition(nextPos);
  };

  const renderCell = (num) => {
    const snake = isSnake(num);
    const ladder = isLadder(num);
    const moveTo = snakesAndLaddersMap[num];

    let className = "cell";
    if (snake) className += " snake";
    if (ladder) className += " ladder";

    return (
      <div key={num} className={className}>
        <div className="number">{num}</div>
        {snake && moveTo && <div className="marker">🐍 → {moveTo}</div>}
        {ladder && moveTo && <div className="marker">🪜 → {moveTo}</div>}
        {position === num && <div className="player">🎲</div>}
      </div>
    );
  };

  const renderBoard = () => {
    const rows = [];
    for (let row = 9; row >= 0; row--) {
      const rowCells = [];
      for (let col = 0; col < 10; col++) {
        const num = row % 2 === 0 ? row * 10 + col + 1 : row * 10 + (9 - col) + 1;
        rowCells.push(renderCell(num));
      }
      rows.push(
        <div key={row} style={{ display: "flex" }}>
          {rowCells}
        </div>
      );
    }
    return rows;
  };

  return (
    <div className="app" style={{ padding: "1rem", textAlign: "center" }}>
      <h1>🎲 Snakes and Ladders</h1>
      <div>{renderBoard()}</div>

      <div style={{ marginTop: "1rem" }}>
        <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
          Dice Rolled: {diceValue ? `🎲 ${diceValue}` : "Not rolled yet"}
        </div>
        <button
          onClick={rollDice}
          disabled={position === 100}
          style={{ padding: "10px 20px", fontSize: "1rem" }}
        >
          Roll Dice
        </button>
      </div>

      <p style={{ marginTop: "1rem" }}>Current Position: {position}</p>
      {message && <p style={{ color: "blue" }}>{message}</p>}
      {position === 100 && <h2>🏆 You Win!</h2>}
    </div>
  );
}
