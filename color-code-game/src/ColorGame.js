import React, { useState, useEffect } from "react";
import "./styles.css";

function getRandomHexColor() {
  const letters = "0123456789ABCDEF";
  return (
    "#" +
    Array.from({ length: 6 })
      .map(() => letters[Math.floor(Math.random() * 16)])
      .join("")
  );
}

export default function ColorGame() {
  const [colors, setColors] = useState([]);
  const [answer, setAnswer] = useState("");
  const [selected, setSelected] = useState(null);

  const generateGame = () => {
    const correctColor = getRandomHexColor();
    const options = [correctColor];
    while (options.length < 3) {
      const newColor = getRandomHexColor();
      if (!options.includes(newColor)) options.push(newColor);
    }
    setColors(shuffleArray(options));
    setAnswer(correctColor);
    setSelected(null);
  };

  const shuffleArray = (arr) => [...arr].sort(() => Math.random() - 0.5);

  useEffect(() => {
    generateGame();
  }, []);

  return (
    <div className="container">
      <h2>Which color is {answer}?</h2>
      <div className="color-boxes">
        {colors.map((color) => (
          <div
            key={color}
            className="color-box"
            style={{ backgroundColor: color, cursor: "pointer" }}
            onClick={() => setSelected(color)}
            role="button"
            tabIndex={0}
            aria-label={`Select color ${color}`}
          />
        ))}
      </div>

      {selected && (
        <div className="result">
          {selected === answer ? "🎉 Correct!" : "❌ Incorrect!"}
        </div>
      )}

      {selected && (
        <button className="play-again" onClick={generateGame}>
          Play Again
        </button>
      )}
    </div>
  );
}
