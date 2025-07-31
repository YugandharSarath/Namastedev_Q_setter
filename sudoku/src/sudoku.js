import React, { useEffect, useState } from "react";
import sudoku from "sudoku"; // npm install sudoku

export default function SudokuGame() {
  const [grid, setGrid] = useState([]);
  const [initialGrid, setInitialGrid] = useState([]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    createNewPuzzle();
  }, []);

  const createNewPuzzle = () => {
    const puzzle = sudoku.makepuzzle();
    const newGrid = [];
    for (let row = 0; row < 9; row++) {
      const rowArr = [];
      for (let col = 0; col < 9; col++) {
        const val = puzzle[row * 9 + col];
        rowArr.push(val !== null ? val + 1 : "");
      }
      newGrid.push(rowArr);
    }
    setGrid(newGrid);
    setInitialGrid(newGrid.map(row => row.slice()));
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

  const isValidSudoku = (grid) => {
    const isValidGroup = (group) => {
      const nums = group.filter((n) => n !== "").map(Number);
      return new Set(nums).size === nums.length;
    };

    for (let row = 0; row < 9; row++) {
      if (!isValidGroup(grid[row])) return false;
    }

    for (let col = 0; col < 9; col++) {
      const column = grid.map((row) => row[col]);
      if (!isValidGroup(column)) return false;
    }

    for (let boxRow = 0; boxRow < 3; boxRow++) {
      for (let boxCol = 0; boxCol < 3; boxCol++) {
        const box = [];
        for (let r = 0; r < 3; r++) {
          for (let c = 0; c < 3; c++) {
            box.push(grid[boxRow * 3 + r][boxCol * 3 + c]);
          }
        }
        if (!isValidGroup(box)) return false;
      }
    }

    return true;
  };

  const checkPuzzle = () => {
    const isGridFull = grid.every(row => row.every(cell => cell !== ""));
    if (isGridFull) {
      setStatus(isValidSudoku(grid) ? "✅ Correct Solution!" : "❌ Invalid Solution");
    } else {
      setStatus("Keep going! The puzzle is not yet complete.");
    }
  };

  const solveSudokuPuzzle = (grid) => {
    const puzzleForSolver = grid.flat().map(cell => {
      if (cell === "") return null;
      return Number(cell) - 1;
    });

    try {
      const solution = sudoku.solvepuzzle(puzzleForSolver);
      if (solution) {
        const solvedGrid = [];
        for (let i = 0; i < 9; i++) {
          const row = solution.slice(i * 9, (i + 1) * 9).map(val => val + 1);
          solvedGrid.push(row);
        }
        return solvedGrid;
      } else {
        console.warn("No solution found by the solver.");
        return null;
      }
    } catch (error) {
      console.error("Error solving Sudoku:", error);
      return null;
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
      <style>{`
        .sudoku-container {
          text-align: center;
          font-family: Arial, sans-serif;
          padding: 2rem;
        }
        .sudoku-board {
          display: inline-block;
          margin-bottom: 1rem;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(9, 40px);
          grid-template-rows: repeat(9, 40px);
          gap: 0;
        }
        .cell {
          width: 40px;
          height: 40px;
          text-align: center;
          font-size: 18px;
          border: 1px solid #aaa;
        }
        .cell:focus {
          outline: 2px solid #007bff;
        }
        .cell.fixed {
          background-color: #e0e0e0;
          font-weight: bold;
        }
        .top-border {
          border-top: 2px solid #000;
        }
        .left-border {
          border-left: 2px solid #000;
        }
        .bottom-border {
          border-bottom: 2px solid #000;
        }
        .right-border {
          border-right: 2px solid #000;
        }
        .controls {
          margin: 1rem 0;
        }
        .controls button {
          margin: 0 0.5rem;
          padding: 0.5rem 1rem;
          font-size: 16px;
          cursor: pointer;
        }
        .status {
          font-weight: bold;
          margin-top: 1rem;
        }
        .status.correct {
          color: green;
        }
        .status.invalid {
          color: red;
        }
      `}</style>

      <h1>🧩 Sudoku Game</h1>
      <div className="sudoku-board">
        <div className="grid">
          {grid.map((row, rIdx) =>
            row.map((cell, cIdx) => {
              const isFixed = initialGrid[rIdx][cIdx] !== "";
              let className = "cell";
              if (isFixed) className += " fixed";
              if (rIdx % 3 === 0) className += " top-border";
              if (cIdx % 3 === 0) className += " left-border";
              if (rIdx === 8) className += " bottom-border";
              if (cIdx === 8) className += " right-border";

              return (
                <input
                  key={`${rIdx}-${cIdx}`}
                  className={className}
                  value={cell}
                  onChange={(e) => handleChange(rIdx, cIdx, e.target.value)}
                  disabled={isFixed}
                  maxLength={1}
                  type="text"
                  inputMode="numeric"
                  pattern="[1-9]"
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

      <p className={`status ${
        status.includes("Correct") ? "correct" : status.includes("Invalid") ? "invalid" : ""
      }`}>
        {status}
      </p>
    </div>
  );
}
