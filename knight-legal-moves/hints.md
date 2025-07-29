
---

## 💡 Hints.md – Knight Move Visualizer

### 1. 🧮 Render an 8×8 Chessboard

* Use nested `Array.from` to render rows and columns:

  ```js
  Array.from({ length: 8 }).map((_, row) =>
    Array.from({ length: 8 }).map((_, col) => { ... })
  )
  ```

### 2. 🐴 Knight Move Logic

* The knight moves in "L" shapes:

  ```js
  export const getKnightMoves = (row, col) => {
    const moves = [
      [row - 2, col - 1], [row - 2, col + 1],
      [row - 1, col - 2], [row - 1, col + 2],
      [row + 1, col - 2], [row + 1, col + 2],
      [row + 2, col - 1], [row + 2, col + 1],
    ];
    return moves.filter(([r, c]) => r >= 0 && r < 8 && c >= 0 && c < 8);
  };
  ```

### 3. 🎯 Handle Hover State

* Track the current cell with:

  ```js
  const [hovered, setHovered] = useState(null);
  ```
* Update on mouse events:

  ```js
  onMouseEnter={() => setHovered([row, col])}
  onMouseLeave={() => setHovered(null)}
  ```

### 4. 🔍 Highlight Valid Moves

* Use `getKnightMoves(...hovered)` to calculate legal target squares.
* Use `.some(([r, c]) => r === row && c === col)` to check if a square is a valid move and highlight it.

---

