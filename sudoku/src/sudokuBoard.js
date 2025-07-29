import React, { useEffect, useState } from "react";
import { generateSudoku, isValidSudoku, solveSudokuPuzzle } from "./sudoku";

export default function SudokuBoard() {
  const [grid, setGrid] = useState([]);
  const [initialGrid, setInitialGrid] = useState([]); 
  const [status, setStatus] = useState("");

  useEffect(() => {
    createNewPuzzle();
  }, []);

  const createNewPuzzle = () => {
    const newPuzzle = generateSudoku();
    setGrid(newPuzzle);
    
    setInitialGrid(newPuzzle.map(row => row.slice())); 
    setStatus("");
  };

  const handleChange = (row, col, value) => {
    if (value === "" || (/^[1-9]$/.test(value) && value.length === 1)) {
      const updatedGrid = grid.map((r, rIdx) =>
        r.map((cell, cIdx) =>
          rIdx === row && cIdx === col ? (value === "" ? "" : Number(value)) : cell
        )
      );
      setGrid(updatedGrid);
    }
  };

  const checkPuzzle = () => {

    const isGridFull = grid.every(row => row.every(cell => cell !== ""));

    if (isGridFull) {
      setStatus(isValidSudoku(grid) ? "✅ Correct Solution!" : "❌ Invalid Solution"); //
    } else {
      setStatus("Keep going! The puzzle is not yet complete."); //
    }
  };

  const handleSolve = () => {
    const solved = solveSudokuPuzzle(initialGrid);
    if (solved) {
      setGrid(solved);
      setStatus("💡 Puzzle solved!");
    } else {
      setStatus("⚠️ Could not solve the puzzle. It might be invalid or have no unique solution.");
    }
  };

  return (
    <div className="sudoku-container">
      <div className="sudoku-board">
        <div className="grid">
          {grid.map((row, rIdx) =>
            row.map((cell, cIdx) => {
              const isFixed = initialGrid[rIdx][cIdx] !== "";

        
              let cellClasses = "cell";
              if (isFixed) {
                cellClasses += " fixed";
              }
              if (rIdx % 3 === 0) {
                cellClasses += " top-border";
              }
              if (cIdx % 3 === 0) {
                cellClasses += " left-border";
              }
              if (rIdx === 8) { 
                cellClasses += " bottom-border";
              }
              if (cIdx === 8) { 
                cellClasses += " right-border";
              }

              return (
                <input
                  key={`${rIdx}-${cIdx}`}
                  className={cellClasses}
                  value={cell}
                  onChange={(e) => handleChange(rIdx, cIdx, e.target.value)}
                  disabled={isFixed} 
                  maxLength={1} 
                  type="text" 
                  inputMode="numeric" 
                  pattern="[1-9]?" 
                />
              );
            })
          )}
        </div>
      </div>
      <div className="controls">
        <button onClick={checkPuzzle}>Check</button>
        <button onClick={handleSolve}>Solve</button>
        <button onClick={createNewPuzzle}>New Puzzle</button>
      </div>
      <p className={`status ${status.includes("Correct") ? "correct" : status.includes("Invalid") ? "invalid" : ""}`}>
        {status}
      </p>
    </div>
  );
}