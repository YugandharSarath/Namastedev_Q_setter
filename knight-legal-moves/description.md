
---

## 🐴 Knight Move Visualizer 

### 👨‍🎓 Problem Statement

Build a React component that displays a standard **8×8 chessboard**. When the user **hovers over a square**, highlight all valid **L-shaped knight moves** from that square. When the mouse leaves the square, the highlights should disappear.

Each square should have a `data-testid="cell-{row}-{col}"` attribute, so that automated tests can query elements like:

```js
const cell = screen.getByTestId("cell-3-3");
```

---

### ✅ Requirements

1. Render a standard **8×8 chessboard** (64 squares).
2. Each square should:

   * Be styled as a black or white square based on position.
   * Show a **♞** knight symbol on hover.
   * Highlight all valid knight moves from that square.
3. Highlighting behavior:

   * Use `.selected-square` class for the hovered square.
   * Use `.knight-move-target` class for valid knight move targets.
4. Interaction:

   * Use `onMouseEnter` to trigger highlighting.
   * Use `onMouseLeave` to reset highlights.

---

### ⚠️ Edge Cases

* Corners like `(0,0)` only show 2 moves.
* Edges like `(0,3)` or `(7,4)` show 4 moves.
* Centers like `(3,3)` show all 8 moves.
* No square should be selected initially.

---



Got it! You're asking to update the **Knight Move Visualizer problem description itself** — **not as a separate testing guidance section** — and to include the line:

```js
const cell = screen.getByTestId("cell-3-3");
```

Here's the updated version with that **test-related detail directly embedded into the description**, not as guidance:

---

