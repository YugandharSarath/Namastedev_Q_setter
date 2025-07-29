Sure! Here's the **full question** for the **Bishop Move Visualizer**, including Requirements, Combined Edge Cases & Constraints, and Hints – all formatted and ready for README or project docs:

---

## 🧩 Bishop Move Visualizer

Build a React component that displays a standard **8×8 chessboard**. When the user **hovers or clicks** on any square, highlight all the **diagonal squares** that a bishop can legally move to from that position. All highlights must be cleared when the mouse leaves the square or a new cell is selected.

---

### ✅ Requirements

1. Render an **8×8 chessboard** (total **64 cells**).
2. Each cell must:

   * Use `role="gridcell"`
   * Respond to both **hover** and **click**
   * Show a `.hovered` or `.selected` class on the active square
3. Highlight all diagonal bishop moves using `.bishop-move`
4. Clear all highlights when the mouse leaves a cell or a new one is selected

---

### 📌 Edge Cases & Constraints (Combined)

The bishop move visualizer must always display exactly **64 cells** arranged in an **8x8 grid**, where each cell uses the `role="gridcell"` attribute, and the board has `role="grid"` and `data-testid="bishop-board"`. When a user **hovers or clicks** a square, only its **valid diagonal moves** should be highlighted using the `.bishop-move` class and `data-testid="highlighted"`. Only **one bishop path** should be visible at a time—previous highlights must be cleared before showing new ones.

Corner cells like **(0,0)** or **(7,7)** will have only one diagonal, while center cells like **(3,3)** should show **all four diagonals** within board boundaries. If the user **rapidly moves the mouse** in and out of the board, the highlights must reset correctly. Repeated hovers or selections of the same cell must **not stack** highlights—they should simply **refresh the bishop path**.

---


