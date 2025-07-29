
import sudoku from "sudoku"; 

export function generateSudoku() {
  const puzzle = sudoku.makepuzzle(); 
  const grid = [];

  for (let row = 0; row < 9; row++) {
    const rowArr = [];
    for (let col = 0; col < 9; col++) {
      const val = puzzle[row * 9 + col];
      rowArr.push(val !== null ? val + 1 : ""); 
    }
    grid.push(rowArr);
  }

  return grid;
}

export function isValidSudoku(grid) {
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
}


export function solveSudokuPuzzle(grid) {
 
  const puzzleForSolver = grid.flat().map(cell => {
    if (cell === "") {
      return null; 
    } else {
      return Number(cell) - 1; 
    }
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
      console.warn("No solution found by the 'sudoku' solver.");
      return null; 
    }
  } catch (error) {
    console.error("Error solving Sudoku with 'sudoku' solver:", error);
    return null;
  }
}