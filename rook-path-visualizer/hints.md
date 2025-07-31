
---

## 🧠 **Hints for Rook Move Visualizer**

1. ### 🎯 Board Structure

   * You need a standard **8x8 chessboard**.
   * Render 64 square cells using nested loops or `Array.from({ length: 64 })`.

2. ### 📌 Cell Identification

   * Assign a `role="gridcell"` to each cell to allow querying in tests.
   * Calculate the **row** and **column** using:

     ```js
     const row = Math.floor(index / 8);
     const col = index % 8;
     ```

3. ### 🖱️ Hover Mechanics

   * When hovering over a cell, store its row and column as `hoveredRow` and `hoveredCol`.
   * On `mouseLeave`, clear this state.

4. ### ✨ Highlighting Logic

   * Highlight all cells in the same **row** and **column** as the hovered cell **except** the hovered cell itself.
   * Add `className="rook-move"` to such cells.
   * Add `className="hovered"` to the hovered cell itself.

5. ### 🎨 Conditional Class Assignment

   * Each cell’s class should depend on whether it matches the hovered row/col:

     ```js
     let className = "";
     if (row === hoveredRow && col === hoveredCol) {
       className = "hovered";
     } else if (row === hoveredRow || col === hoveredCol) {
       className = "rook-move";
     }
     ```

6. ### ✅ Test Coverage

   * Tests validate:

     * The board has 64 cells.
     * Proper highlights on central (e.g., D4), edge (A8), and corner (H1) positions.
     * No class is applied when not hovering.

7. ### 🔄 State Management

   * Use `useState` to track the currently hovered square’s row and column.
   * Update on `onMouseEnter` and reset on `onMouseLeave`.

---

