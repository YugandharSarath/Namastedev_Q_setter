
---

## 💡 Hints – Queen Move Visualizer

1. **Queen = Rook + Bishop**
   A Queen moves:

   * Horizontally (same row)
   * Vertically (same column)
   * Diagonally (like a Bishop)

2. **Detect Diagonals**
   Use the absolute difference of row and column positions:

   ```js
   Math.abs(hoveredRow - row) === Math.abs(hoveredCol - col)
   ```

3. **Check Horizontals & Verticals**
   Same row:

   ```js
   hoveredRow === row
   ```

   Same column:

   ```js
   hoveredCol === col
   ```

4. **Avoid Highlighting the Queen’s Cell**
   Skip highlighting if the cell is the one currently hovered:

   ```js
   hovered[0] === row && hovered[1] === col
   ```

5. **Combine All Move Checks**
   Wrap Queen movement logic into one condition:

   ```js
   isQueenMove = horizontal || vertical || diagonal
   ```

6. **Only One Active State**
   Reset highlights by updating state (`setHovered`) when user moves to a new cell.

7. **Edge Safety**
   Logic must work correctly even for corner squares like A1, H8, etc.

---

