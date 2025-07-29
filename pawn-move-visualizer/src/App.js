import React, { useState } from "react";
import PawnBoard from "./PawnBoard";
import "./styles.css";

export default function App() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="App">
      <h1>♙ Pawn Move Visualizer</h1>
      <PawnBoard hovered={hovered} setHovered={setHovered} />
    </div>
  );
}
