import React from "react";

interface DiceProps {
  value: number;
  onRoll: () => void;
  disabled: boolean;
}

const Dice: React.FC<DiceProps> = ({ value, onRoll, disabled }) => {
  return (
    <div style={{ marginTop: "1rem", textAlign: "center" }}>
      <div
        style={{
          fontSize: "2rem",
          marginBottom: "0.5rem",
        }}
      >
        🎲 {value}
      </div>
      <button
        onClick={onRoll}
        disabled={disabled}
        style={{ padding: "10px 20px", fontSize: "1rem" }}
      >
        Roll Dice
      </button>
    </div>
  );
};

export default Dice;
