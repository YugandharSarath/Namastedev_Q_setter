
---

## 🐴 Knight Move Visualizer

Build a React component that renders an **8×8 chessboard**. When a user **clicks a cell**, highlight all the **valid L-shaped knight moves** from that square. Clicking another square updates the moves. Clicking the same square again can **clear** the highlights.

---

### ✅ Requirements

1. Render an **8×8 board** = **64 cells**.
2. Each cell must:

   * Use `role="gridcell"`
   * Respond to **click**
   * Show `.active` class on the selected square
3. Highlight all valid knight moves using the `.knight-move` class.
4. Clear all previous highlights when a new cell is selected.
5. Clicking the same cell again toggles the highlight off (optional but recommended).


### 🧪 Edge Cases

| Case                       | Expected Behavior                                  |
| -------------------------- | -------------------------------------------------- |
| Click on center (e.g. 3,3) | Show all 8 legal knight moves                      |
| Click on corner (e.g. 0,0) | Show only in-bound knight moves                    |
| Click same square twice    | (Optional) Clear highlights                        |
| Click multiple squares     | Always show only one set of knight moves at a time |
| Initial render             | No highlights shown                                |

---

