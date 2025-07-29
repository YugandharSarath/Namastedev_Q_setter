
---

## 🏰 **Rook Move Visualizer**

### 🎯 **Goal**

Build a React app that displays an **8×8 chessboard**.
When a user **hovers** over any square, highlight all squares in the **same row and same column** – just like a **Rook** moves in chess.

---

### ✅ **Requirements**

* Render an **8×8 grid** that looks like a chessboard.
* Each square (cell) must:

  * Be rendered with appropriate accessibility roles.
  * Respond to **mouse hover (`onMouseEnter`)**.
* On hover over any cell:

  * Highlight all cells in the **same row**.
  * Highlight all cells in the **same column**.
  * (Optional) You may exclude the hovered cell from the highlight.
* When the user **stops hovering** (i.e. `onMouseLeave`), all highlights must disappear.
* On **initial load**, no cells should be highlighted.

---

### ⚠️ **Edge Cases & Constraints**

* 🟪 **Corner cells** (like A1 or H8) must also highlight the correct row and column.
* ✅ Ensure there are **exactly 64 grid cells** (8 rows × 8 columns).
* 🟫 Highlights must update **in real-time** as the user moves the mouse across different squares.
* 🟨 If required, do **not highlight** the hovered cell itself (based on your design or test logic).
* 🔄 **No persistent state** — highlights are purely based on the current hover.

---



