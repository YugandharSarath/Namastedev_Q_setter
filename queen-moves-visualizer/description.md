
---

## 👑 Queen Move Visualizer

### 👨‍🎓 Problem Statement

Build a simple React app that displays a chessboard. When the user **clicks on a square**, highlight all valid moves a **Queen** can make from that position.

---

### ✅ Requirements

1. Render a standard **8×8 chessboard** (64 cells total).
2. Each square must be **clickable**.
3. When a square is clicked:

   * Highlight all valid **Queen moves**:

     * Horizontally (entire row)
     * Vertically (entire column)
     * Diagonally (all 4 directions)
   * Do **not** highlight the selected square itself.
4. When a different square is clicked, **clear previous highlights** and show only the new valid moves.
5. On initial load, no cells should be highlighted.

---

### ⚠️ Edge Cases & Constraints

* If the user clicks on a **corner square** like A1 or H8, the Queen should still show all valid horizontal, vertical, and diagonal moves from that edge position.
* If the user **clicks the same square again**, all highlighted moves must be cleared (i.e., toggle off).
* Clicking on any square should **highlight exactly 27 other cells** — covering all directions (excluding the clicked square).
* Only one square can be **selected at a time** — a new click should replace the previous selection.
* The app must always render a proper **8×8 grid (64 cells)**, regardless of selection.
* The highlighted cells must represent **only Queen’s legal movements** — no Knight, King, or other-piece logic should be shown.

---

