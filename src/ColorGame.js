import React, { useEffect, useState, useCallback } from "react";

const GAME_DURATION_SECONDS = 10;
const NUMBER_OF_COLOR_OPTIONS = 5;

export default function ColorGame() {
  const [colors, setColors] = useState([]);
  const [correctColor, setCorrectColor] = useState("");
  const [feedback, setFeedback] = useState("");
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION_SECONDS);
  const [gameActive, setGameActive] = useState(false);
  const [hasGuessed, setHasGuessed] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const getRandomRgbValue = useCallback(() => {
    return Math.floor(Math.random() * 256);
  }, []);

  const generateColors = useCallback(() => {
    const newColors = Array.from({ length: NUMBER_OF_COLOR_OPTIONS }, () =>
      `rgb(${getRandomRgbValue()}, ${getRandomRgbValue()}, ${getRandomRgbValue()})`
    );
    const answer = newColors[Math.floor(Math.random() * newColors.length)];

    setColors(newColors);
    setCorrectColor(answer);
    setFeedback("");
    setTimeLeft(GAME_DURATION_SECONDS);
    setGameActive(true);
    setHasGuessed(false);
    setSelectedColor(null);
  }, [getRandomRgbValue]);

  useEffect(() => {
    generateColors();
  }, [generateColors]);

  useEffect(() => {
    if (!gameActive || timeLeft === 0 || hasGuessed) {
      if (timeLeft === 0 && gameActive && !hasGuessed) {
        setFeedback("Time's up! The correct color was " + correctColor + ".");
        setGameActive(false);
      }
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, gameActive, hasGuessed, correctColor]);

  const handleGuess = (color) => {
    if (!gameActive || hasGuessed) return;

    setSelectedColor(color);
    setHasGuessed(true);
    setGameActive(false);

    if (color === correctColor) {
      setFeedback("Correct! 🎉");
    } else {
      setFeedback(`Wrong! The correct color was ${correctColor}.`);
    }
  };

  const getBoxStyle = (color) => {
    if (!hasGuessed && timeLeft > 0) return {}; // Default

    if (color === correctColor) {
      return {
        border: "4px solid green",
      };
    }

    if (color === selectedColor && selectedColor !== correctColor) {
      return {
        border: "4px solid red",
      };
    }

    return {};
  };

  return (
    <div className="game-container" style={{ padding: "1rem", textAlign: "center" }}>
      

      <div className="rgb-display" style={{ marginBottom: "1rem", fontSize: "1.5rem" }}>
        Which color is <strong>{correctColor}</strong>?
      </div>

      <div className="color-options" style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
        {colors.map((color, index) => (
          <button
            key={index}
            className="color-box"
            style={{
              backgroundColor: color,
              width: "80px",
              height: "80px",
              borderRadius: "8px",
              border: "2px solid #ccc",
              ...getBoxStyle(color),
            }}
            onClick={() => handleGuess(color)}
            disabled={!gameActive || hasGuessed}
            aria-label={`Guess color ${color}`}
            data-testid={`color-box-${index}`}
          />
        ))}
      </div>

      <div className="game-info" style={{ marginTop: "1rem" }}>
        <div
          className="timer"
          style={{
            color: timeLeft <= 3 && gameActive ? "#e74c3c" : "#3498db",
            fontWeight: "bold",
          }}
        >
          Time Left: {timeLeft}s
        </div>

        {feedback && (
          <p className="feedback-message" aria-live="polite" style={{ marginTop: "0.5rem", fontSize: "1.2rem" }}>
            {feedback}
          </p>
        )}
      </div>

      <button
        className="play-again-button"
        onClick={generateColors}
        disabled={gameActive && timeLeft > 0}
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          fontSize: "1rem",
          cursor: gameActive ? "not-allowed" : "pointer",
        }}
      >
        {gameActive && timeLeft > 0 ? "Guessing..." : "Play Again"}
      </button>
    </div>
  );
}
