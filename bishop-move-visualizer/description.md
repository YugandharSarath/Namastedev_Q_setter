--

## 🧩 Bishop Move Visualizer 

Build a React component that shows an **8x8 chessboard**. When a user **hovers or clicks** on a square, highlight all the **diagonal cells** a bishop can move to. Clear highlights on mouse leave or new selection.

---

### ✅ Requirements

1. Render an **8×8 board** = **64 cells**.
2. Each cell must:

   * Use `role="gridcell"`
   * Respond to **hover** / **click**
   * Show `.hovered` or `.selected` class on active square
3. Highlight all diagonal moves with `.bishop-move`
4. Clear all highlights on mouse leave or new selection

---

### 🧪 Edge Cases

| Case                       | Expected Behavior                         |
| -------------------------- | ----------------------------------------- |
| Hover/click on (0,0)       | Show (1,1) to (7,7) only                  |
| Hover rapidly on/off board | Highlights should clear                   |
| Select multiple times      | Only show latest bishop path              |
| Middle cell (e.g. 3,3)     | Show all 4 diagonals, within board bounds |

---

### 🧱 Constraints & Data Attributes

* **Exactly 64** cells, 8 rows
* Only **one bishop path** visible at a time
* Required attributes:

  * Board: `role="grid"` and `data-testid="bishop-board"`
  * Rows: `role="row"`
  * Cells: `role="gridcell"`
  * Diagonal cells: `data-testid="highlighted"`
* Highlighted cells must use `.bishop-move`

---

