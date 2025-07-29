
---

## 🏰 **Rook Move Visualizer**

### 🎯 **Goal**

Build a React component that displays an **8×8 chessboard**.
When a user **hovers** over any square, highlight all squares in the **same row and same column** – just like a **Rook** moves in chess.

---

### ✅ **Requirements**

* Render an **8×8 chessboard** (total 64 cells).
* Each cell must:

  * Use `role="gridcell"` for accessibility.
  * Respond to **hover** using `onMouseEnter` and `onMouseLeave`.
* On hover over a cell:

  * Highlight all squares in the **same row**.
  * Highlight all squares in the **same column**.
  * Optionally **exclude the hovered cell** from highlights.
* Clear highlights when hover ends (i.e., on `onMouseLeave`).
* On **initial load**, no cell should be highlighted.

---

### ⚠️ **Edge Cases & Constraints**

* 🟪 **Corner cells** (like A1 or H8) must highlight both their entire row and column.
* 🟦 A **center cell** (e.g., D4) should correctly highlight all cells in the same row and column.
* 🟨 If the design requires, avoid highlighting the hovered cell itself.
* 🔄 The highlights must **update in real time** as the mouse moves across the board.
* 🧠 Hover logic should rely only on current interaction – no need for complex state or memory.
* ✅ Ensure **exactly 64 grid cells** are rendered.

---


