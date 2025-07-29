
---

## ♟️ Pawn Move Visualizer

Build a React component that shows an 8×8 chessboard. When a user **clicks** on a square, highlight all **valid forward cells** a **white pawn** can move to. Clear highlights on repeated or new selection.

---

### ✅ Requirements

1. Render an 8x8 board = 64 cells.

2. Each cell must use `role="gridcell"`.

3. When the user **clicks** a square, it:

   * Highlights that cell with the CSS class `.active`.
   * Highlights all valid forward moves (for a white pawn) from that cell using the CSS class `.pawn-move`.

4. A white pawn:

   * Moves upward on the board (toward decreasing row index).
   * Can move **1 step forward** from any row except 0 or 1.
   * Can move **2 steps forward only** from row 6 (its initial position).
   * Cannot move from row 0 or 1.

5. Highlight must clear when:

   * The same cell is clicked again (toggle off).
   * A different cell is clicked (clear old, show new).

---

### ⚠️ Edge Cases

* **Click on (6, 3)** → Should highlight (5, 3) and (4, 3)
* **Click on (5, 4)** → Should highlight only (4, 4)
* **Click on (1, x) or (0, x)** → Should not highlight anything
* **Click same square again** → Should remove all highlights
* **Click a new square** → Should clear previous and apply new
* **Rapid clicks** → Highlights should update consistently with latest selection

---


