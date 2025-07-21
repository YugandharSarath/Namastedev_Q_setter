// components/Score.tsx
import React from "react";

type Props = {
  score: number;
  total: number;
  onRestart: () => void;
};

const Score: React.FC<Props> = ({ score, total, onRestart }) => {
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
