import React from "react";

const Score = ({ score, total, onRestart }) => {
  return (
    <div className="score-container">
      <h2>
        Your Score: {score} / {total}
      </h2>
      <button onClick={onRestart} className="restart-button">
        Play Again
      </button>
    </div>
  );
};

export default Score;
