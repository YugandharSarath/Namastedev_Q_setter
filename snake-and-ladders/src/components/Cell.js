import React from "react";
import "./Cell.css";

export default function Cell({ number, isPlayer, isSnake, isLadder, moveTo }) {
  let className = "cell";
  if (isSnake) className += " snake";
  else if (isLadder) className += " ladder";

  return (
    <div className={className}>
      <div className="number">{number}</div>
      {isSnake && moveTo && <div className="marker">🐍 → {moveTo}</div>}
      {isLadder && moveTo && <div className="marker">🪜 → {moveTo}</div>}
      {isPlayer && <div className="player">🎲</div>}
    </div>
  );
}
