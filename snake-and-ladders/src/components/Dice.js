import React from "react";

export default function Dice({ value, onRoll, disabled }) {
  return (
    <div style={{ marginTop: "1rem", textAlign: "center" }}>
      <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
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
}
