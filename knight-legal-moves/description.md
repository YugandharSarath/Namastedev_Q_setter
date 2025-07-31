
---

## 🐴 Knight Move Visualizer (Hover-Based)

### 👨‍🎓 Problem Statement

Build a React component that displays a standard 8×8 chessboard. When the user **hovers over a square**, highlight all valid **L-shaped knight moves** that can be made from that square. When the mouse leaves the square, the highlights should disappear.

---

### ✅ Requirements

1. Render a standard **8×8 chessboard** (64 squares total).
2. Each square should:

   * Be styled as a black or white square based on position.
   * Show a **♞** knight symbol when hovered.
   * Highlight all valid knight moves from the hovered square.
3. Highlighting behavior:

   * Use the `.selected-square` class on the hovered square.
   * Use the `.knight-move-target` class on the valid knight move target squares.
4. Use mouse events:

   * `onMouseEnter` to trigger highlighting.
   * `onMouseLeave` to clear highlighting.

---

### ⚠️ Edge Cases

* Corner squares like `(0,0)` will have only 2 valid knight moves.
* Edge squares like `(0,3)` or `(7,4)` will have 4 moves.
* Middle squares like `(3,3)` will have all 8 possible knight moves.
* No square should be selected on initial render.

---