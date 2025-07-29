
---

## ♟️ Pawn Move Visualizer

Build a React component that renders an **8×8 chessboard**. When a user **clicks a square**, highlight all valid **forward moves** for a **white pawn** (which moves upward). Clear highlights on repeated or new selections.

---

### ✅ Requirements

1. Render an **8×8 board** = **64 cells**.
2. Each cell must:

   * Use `role="gridcell"`
   * Be **clickable** to set pawn position
   * Show `.active` class on the selected cell
3. Show valid forward moves with the `.pawn-move` class.
4. A white pawn can:

   * Move 1 step forward from any row (except 0, 1)
   * Move 2 steps forward **only** from the 2nd row (index 6)
5. Do **not** show highlights on row 0 or 1.
6. Highlight should clear when:

   * A new square is clicked
   * The same square is clicked again


### 🧪 Edge Cases

| Case                     | Expected Behavior                       |
| ------------------------ | --------------------------------------- |
| Click on (6, 3)          | Highlight (5, 3) and (4, 3)             |
| Click on (5, 4)          | Highlight only (4, 4)                   |
| Click on top rows (1, 0) | No highlights                           |
| Re-click same square     | Toggle off highlights                   |
| Click another square     | Clear old and show new valid moves      |
| Rapid clicks             | Component remains stable and consistent |

---


