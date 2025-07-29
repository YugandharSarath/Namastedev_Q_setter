import React from "react";
import PawnBoard from "./PawnBoard";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>♙ Pawn Move Visualizer</h1>
      <PawnBoard />
    </div>
  );
}
