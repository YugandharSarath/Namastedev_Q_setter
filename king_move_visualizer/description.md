

---

## ♔ King Move Visualizer

### 👨‍🎓 Problem Statement

Build a simple React app that shows a chessboard. When the user **hovers or clicks on a square**, highlight all valid **King moves** starting from that position.

---

### ✅ Requirements

1. Render an 8×8 chessboard (64 squares in total).
2. Each square must use `role="gridcell"`.
3. When the user hovers over or clicks on a square:

   * Highlight that cell with the CSS class `hovered`.
   * Highlight all adjacent squares the King can move to using the CSS class `king-move`.
4. Clear all highlights when the mouse leaves the board or a new square is selected.
5. On initial load, no highlights should be shown.

---

### ⚠️ Edge Cases & Constraints

* When the user hovers or clicks on a corner cell (e.g., (0,0)), only the 3 valid adjacent squares should be highlighted.
* When the user hovers or clicks on an edge cell (e.g., (0,3) or (7,4)), only the valid surrounding squares within board boundaries should be highlighted — typically 5 cells.
* When the user hovers or clicks on a middle cell (e.g., (3,3)), all 8 adjacent squares must be highlighted, excluding the center cell itself.
* When the cursor rapidly enters and leaves the board area, all highlights must be immediately cleared once the cursor exits the board.
* When multiple cells are hovered or clicked one after the other, only the latest selection and its valid King moves should remain highlighted; all previous highlights must be removed.
* If the user hovers or clicks the same cell again, the highlights should remain unless the cursor leaves the board or moves to a different cell.
* The board must always display exactly 64 squares in an 8×8 grid and must never render extra or fewer cells.

---

