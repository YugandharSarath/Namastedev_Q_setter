

---

## 🐴 Knight Move Visualizer

### 👨‍🎓 Problem Statement

Build a React component that renders a standard 8×8 chessboard. When a user **clicks on a square**, highlight all the valid **L-shaped knight moves** from that position. Clicking another square should update the highlights. Clicking the same square again should **toggle off** the highlights.

---

### ✅ Requirements

1. Render an **8×8 chessboard** (i.e., 64 cells in total).
2. Each cell must:

   * Use `role="gridcell"` for accessibility.
   * Respond to **click** events.
   * Apply the class `.active` on the clicked square.
3. All valid knight moves from the selected square must be highlighted using the class `.knight-move`.
4. Previous highlights must be cleared when a **new square is clicked**.
5. Clicking the **same square again** should **toggle off** the highlights (optional, but recommended).
6. On initial render, no cell should be active or highlighted.

---

### ⚠️ Edge Cases & Constraints

* When the user clicks a **corner square** (e.g., `(0,0)`), only the **in-bound knight moves** should be highlighted — typically **2 valid moves**.
* When the user clicks an **edge square** (e.g., `(0,3)` or `(7,4)`), the app must highlight only the knight moves that stay within the board — usually **4 valid moves**.
* When the user clicks a **middle square** (e.g., `(3,3)`), the app must highlight **all 8 valid knight moves** that follow the "L" pattern (two steps in one direction, one step in perpendicular).
* When the user **clicks multiple squares one after the other**, only the **latest selected square and its knight moves** must be highlighted; all previous highlights must be cleared.
* When the user **clicks the same square again**, the selection and all highlights must **disappear**, leaving the board in an unselected state. (Optional but user-friendly behavior.)
* The board must **always render exactly 64 cells** in an 8×8 layout and must **never show extra or missing cells**, regardless of user interactions.
* No highlights should be shown on **initial load** — the board must appear neutral until user interaction begins.

---

