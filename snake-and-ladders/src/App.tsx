import React, { useState } from "react";
import Board from "./components/Board";
import Dice from "./components/Dice";
import { snakesAndLaddersMap } from "./utils/snakesAndLaddersMap";
import "./App.css";

const App: React.FC = () => {
  const [position, setPosition] = useState(1);
  const [diceValue, setDiceValue] = useState<number | null>(null);
  const [message, setMessage] = useState("");

  const rollDice = () => {
    const roll = Math.floor(Math.random() * 6) + 1;
    setDiceValue(roll);

    let nextPosition = position + roll;
    if (nextPosition > 100) nextPosition = position;

    if (snakesAndLaddersMap[nextPosition]) {
      const destination = snakesAndLaddersMap[nextPosition];
      setMessage(
        destination > nextPosition ? "Ladder! Climb up!" : "Oops! Snake bite!"
      );
      nextPosition = destination;
    } else {
      setMessage("");
    }

    setPosition(nextPosition);
  };

  return (
    <div className="app">
      <h1>🎲 Snakes and Ladders</h1>
      <Board playerPosition={position} />
      <Dice value={diceValue} onRoll={rollDice} />
      <p>Current Position: {position}</p>
      {position === 100 && <h2>You Win! 🏆</h2>}
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default App;
