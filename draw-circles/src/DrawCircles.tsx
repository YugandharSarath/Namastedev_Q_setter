import React, { useState } from "react";
import "./styles.css";

interface Circle {
  x: number;
  y: number;
}

const DrawCircles: React.FC = () => {
  const [circles, setCircles] = useState<Circle[]>([]);
  const [undoneCircles, setUndoneCircles] = useState<Circle[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const newCircle = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    setCircles((prev) => [...prev, newCircle]);
    setUndoneCircles([]);
  };

  const handleUndo = () => {
    if (circles.length === 0) return;
    const updated = [...circles];
    const last = updated.pop();
    if (last) {
      setCircles(updated);
      setUndoneCircles((prev) => [...prev, last]);
    }
  };

  const handleRedo = () => {
    if (undoneCircles.length === 0) return;
    const updated = [...undoneCircles];
    const redoCircle = updated.pop();
    if (redoCircle) {
      setCircles((prev) => [...prev, redoCircle]);
      setUndoneCircles(updated);
    }
  };

  return (
    <div className="container">
      <h2>🎯 Draw Circles with Undo/Redo</h2>
      <div className="buttons">
        <button onClick={handleUndo} disabled={circles.length === 0}>
          Undo
        </button>
        <button onClick={handleRedo} disabled={undoneCircles.length === 0}>
          Redo
        </button>
      </div>
      <div className="canvas" onClick={handleClick} data-testid="canvas">
        {circles.map((circle, index) => (
          <div
            key={index}
            className="circle"
            data-testid="circle"
            style={{ left: circle.x - 12, top: circle.y - 12 }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default DrawCircles;
