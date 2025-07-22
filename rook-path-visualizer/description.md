
---

## 🏰 **Rook Move Visualizer**

### 🎯 **Goal**

Build a React app that displays an 8×8 chessboard.
When a user clicks on any square, highlight all squares in the **same row and column** – just like a **Rook** moves in chess.

---

### ✅ **Requirements**

* Render an **8×8 grid** (like a chessboard).
* Each square (cell) should be **clickable**.
* When a cell is clicked:

  * Highlight all squares in the **same row**.
  * Highlight all squares in the **same column**.
  * (Optional) Do **not** highlight the clicked square itself.
* A new click should **clear the previous highlights**.
* On initial load, **no cells should be highlighted**.

---

### ⚠️ **Edge Cases & Constraints**

* 🟪 **Corners** like A1, H8, etc. should still highlight correctly.
* ✅ **Exactly 64 squares** must be rendered (8 rows × 8 columns).
* 🟫 Only **one selection at a time** — clear previous highlights when a new cell is clicked.
* 🟨 Highlighting **should not include** the clicked square (if required by design/test).

---

### 🔖 **Accessibility & Testability – Use These Attributes**

| Element          | `role`     | `data-testid`            |
| ---------------- | ---------- | ------------------------ |
| Full Board       | `grid`     | `rook-board`             |
| Each Row         | `row`      | `grid-row`               |
| Each Cell        | `gridcell` | `grid-cell`              |
| Highlighted Cell | (same)     | `highlighted` (optional) |

---

### 🧪 **Example Test Case**

* If a user clicks on **C5**:

  * Highlight all squares in **row 5** and **column C**.
  * Total highlights: **14 squares** (7 in the row + 7 in the column, excluding the clicked cell).
  * Previous highlights (if any) should be removed.

---

### 💡 **What You’ll Practice**

* React component rendering
* Grid generation using nested loops or mapping
* Click event handling
* Managing state to track highlighted cells
* ARIA roles & accessibility best practices
* Understanding chess movement logic (Rook)

---

