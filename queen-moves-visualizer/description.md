---
## 👑 Queen Move Visualizer

### 👨‍🎓 Problem Statement

Build a React app that renders a chessboard. When the user **hovers over a square**, it should highlight all legal **Queen moves** from that position.
---

### ✅ Requirements

1. Render a standard **8×8 chessboard** (total **64 cells**).
2. When the user **hovers over any square**:

   - Highlight all valid **Queen moves**:

     - Horizontally (same row)
     - Vertically (same column)
     - Diagonally (all 4 directions)

   - The hovered square must be visually distinct (e.g. `hovered` style).

3. When the mouse leaves the square:

   - All highlights should be **cleared**.

4. On initial load:

   - No square should be highlighted.

5. Each square must:

   - Be accessible with `data-testid="cell-{row}-{col}"` (for testing).
   - Have `role="gridcell"` and the board must have `role="grid"`.

---

### ⚠️ Edge Cases & Constraints

- Hovering over **corner squares** like A1 `(0,0)` or H8 `(7,7)` should still show valid moves.
- Hovering over a square, then quickly hovering over another square, should update highlights **smoothly**.
- Hovering away from the board must remove all highlights.
- The total number of highlighted squares for the Queen should be **27**, excluding the hovered square.

---
