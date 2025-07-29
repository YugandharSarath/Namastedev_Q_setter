You're right! Let's add a clearly separated **"⚠️ Edge Cases & Constraints"** section — aligned with your updated Pawn and Bishop prompts.

Here’s the **final improved version** of your **Queen Move Visualizer prompt**, now including **constraints**, cleaner structure, and no inline code snippets (as per Himanshi’s feedback):

---

## 👑 Queen Move Visualizer

### 👨‍🎓 Problem Statement

Build a simple React app that shows a chessboard. When the user **clicks on a square**, highlight all valid **Queen moves** starting from that position.

---

### ✅ Requirements

1. **Create an 8×8 chessboard** (64 squares in total).
2. Make each square **clickable** (to represent the Queen's current position).
3. When a square is clicked:

   * Highlight all legal Queen moves:

     * Horizontally (same row)
     * Vertically (same column)
     * Diagonally (all 4 directions)
   * The clicked cell itself must **not** be highlighted.
4. **Clear previous highlights** when another square is clicked.
5. On initial load, **no highlights should be shown**.

---

### ⚠️ Edge Cases & Constraints

| Case                             | What Should Happen                                                |
| -------------------------------- | ----------------------------------------------------------------- |
| Click corner cells (A1, H8, etc) | Highlight all valid horizontal, vertical, and diagonal paths      |
| Click same cell again            | Reset all highlights (toggle off)                                 |
| Click any cell on the board      | Exactly 27 cells must be highlighted (excluding the clicked cell) |
| Highlight limit                  | Only **one selection set** may be active at a time                |
| Board rendering                  | Must always render **exactly 64 cells** (8x8 grid)                |
| Invalid directions               | No knight, king, or other-piece-like moves should be shown        |


