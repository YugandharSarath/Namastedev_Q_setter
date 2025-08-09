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

  // Convert RGB to HEX
  const rgbToHex = useCallback((r, g, b) => {
    return "#" + [r, g, b].map(x => x.toString(16).padStart(2, "0")).join("");
  }, []);

  // Convert HEX to RGB
  const hexToRgb = useCallback((hex) => {
    const bigint = parseInt(hex.slice(1), 16);
    return [bigint >> 16, (bigint >> 8) & 255, bigint & 255];
  }, []);

  // Generate similar colors with slight variations
  const getSimilarColor = useCallback((hex, offset = 15) => {
    const [r, g, b] = hexToRgb(hex);
    
    const variation = (original) => {
      const change = Math.floor(Math.random() * offset * 2) - offset;
      return Math.min(255, Math.max(0, original + change));
    };
    
    return rgbToHex(variation(r), variation(g), variation(b));
  }, [hexToRgb, rgbToHex]);

  // Shuffle array
  const shuffle = useCallback((array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }, []);

  const generateColors = useCallback(() => {
    // Generate a random target color in HEX format
    const targetHex = rgbToHex(getRandomRgbValue(), getRandomRgbValue(), getRandomRgbValue());
    
    // Generate similar colors using a Set to avoid duplicates
    const colorSet = new Set([targetHex]);
    
    while (colorSet.size < NUMBER_OF_COLOR_OPTIONS) {
      const similarColor = getSimilarColor(targetHex, 20);
      colorSet.add(similarColor);
    }
    
    // Convert to array and shuffle
    const colorArray = shuffle(Array.from(colorSet));

    setColors(colorArray);
    setCorrectColor(targetHex);
    setFeedback("");
    setTimeLeft(GAME_DURATION_SECONDS);
    setGameActive(true);
    setHasGuessed(false);
    setSelectedColor(null);
  }, [getRandomRgbValue, rgbToHex, getSimilarColor, shuffle]);

  useEffect(() => {
    generateColors();
  }, [generateColors]);

  useEffect(() => {
    if (!gameActive || timeLeft === 0 || hasGuessed) {
      if (timeLeft === 0 && gameActive && !hasGuessed) {
        setFeedback(`Time's up! The correct color was ${correctColor}.`);
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
      setFeedback("🎉 Correct!");
    } else {
      setFeedback(`❌ Incorrect! The correct color was ${correctColor}`);
    }
  };

  const getBoxStyle = (color) => {
    if (!hasGuessed && timeLeft > 0) return {}; // Default

    if (color === correctColor) {
      return {
        border: "4px solid green",
        boxShadow: "0 0 10px rgba(0, 255, 0, 0.5)",
      };
    }

    if (color === selectedColor && selectedColor !== correctColor) {
      return {
        border: "4px solid red",
        boxShadow: "0 0 10px rgba(255, 0, 0, 0.5)",
      };
    }

    return {};
  };

  return (
    <div className="game-container" style={{ padding: "2rem", textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{ color: "#2c3e50", marginBottom: "2rem" }}>🧠 Ultimate Color Perception Challenge</h1>

      <div 
        className="rgb-display" 
        data-testid="target-color"
        style={{ 
          marginBottom: "2rem", 
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "#34495e"
        }}
      >
        Which color is <span style={{ color: correctColor, backgroundColor: "#f8f9fa", padding: "0.25rem 0.5rem", borderRadius: "4px" }}>{correctColor}</span>?
      </div>

      <div 
        className="color-options" 
        style={{ 
          display: "flex", 
          justifyContent: "center", 
          gap: "1rem", 
          flexWrap: "wrap",
          marginBottom: "2rem"
        }}
      >
        {colors.map((color, index) => (
          <button
            key={index}
            className="color-box"
            data-testid={`color-option-${index}`}
            style={{
              backgroundColor: color,
              width: "100px",
              height: "100px",
              borderRadius: "12px",
              border: "2px solid #bdc3c7",
              cursor: !gameActive || hasGuessed ? "not-allowed" : "pointer",
              transition: "all 0.3s ease",
              ...getBoxStyle(color),
            }}
            onClick={() => handleGuess(color)}
            disabled={!gameActive || hasGuessed}
            aria-label={`Color option ${color}`}
          />
        ))}
      </div>

      <div className="game-info" style={{ marginBottom: "2rem" }}>
        <div
          className="timer"
          style={{
            color: timeLeft <= 3 && gameActive ? "#e74c3c" : "#3498db",
            fontWeight: "bold",
            fontSize: "1.2rem",
            marginBottom: "1rem"
          }}
        >
          Time Left: {timeLeft}s
        </div>

        {feedback && (
          <div 
            className="feedback-message" 
            data-testid="result-message"
            aria-live="polite" 
            style={{ 
              fontSize: "1.3rem",
              fontWeight: "bold",
              color: feedback.includes("Correct") ? "#27ae60" : "#e74c3c",
              backgroundColor: feedback.includes("Correct") ? "#d5f4e6" : "#fdeaea",
              padding: "1rem",
              borderRadius: "8px",
              border: `2px solid ${feedback.includes("Correct") ? "#27ae60" : "#e74c3c"}`
            }}
          >
            {feedback}
          </div>
        )}
      </div>

      <button
        className="play-again-button"
        data-testid="reset-button"
        onClick={generateColors}
        disabled={gameActive && timeLeft > 0 && !hasGuessed}
        style={{
          padding: "0.75rem 1.5rem",
          fontSize: "1.1rem",
          fontWeight: "bold",
          backgroundColor: (gameActive && timeLeft > 0 && !hasGuessed) ? "#95a5a6" : "#3498db",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: (gameActive && timeLeft > 0 && !hasGuessed) ? "not-allowed" : "pointer",
          transition: "all 0.3s ease",
        }}
        onMouseOver={(e) => {
          if (!e.target.disabled) {
            e.target.style.backgroundColor = "#2980b9";
          }
        }}
        onMouseOut={(e) => {
          if (!e.target.disabled) {
            e.target.style.backgroundColor = "#3498db";
          }
        }}
      >
        {gameActive && timeLeft > 0 && !hasGuessed ? "Playing..." : "Play Again"}
      </button>
    </div>
  );
}