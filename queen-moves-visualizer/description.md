
---

 **👑 Queen Move Visualizer** 

### ✅ **Requirements (What You Need to Build)**

You're building an interactive 8×8 chessboard in React. When a user clicks any square:

* ✅ Highlight all **legal Queen moves**:

  * Horizontally (same row)
  * Vertically (same column)
  * Diagonally (all 4 directions)
* ✅ Remove any previous highlights before showing new ones.
* ✅ When the app loads, **no cells are highlighted**.

---

### ⚠️ **Edge Cases & Constraints**

* 🟨 **Edge Cells**: Like corners (A1, H8) must still highlight correct directions.
* 🔁 **Only One Highlight Set at a Time**: Clicking a new square clears the old highlights.
* 🧮 **Exactly 64 Squares**: Your board should always render 8×8 = **64 cells**.
* 🟦 **Exclude Self**: Don’t highlight the clicked cell (Queen can't capture herself 😉).

---

### 🧪 **Testing Attributes (Roles & Data Test IDs)**

These **must** be used for accessibility and automated testing:

| Element          | `role`     | `data-testid`            |
| ---------------- | ---------- | ------------------------ |
| Full Board       | `grid`     | `queen-board`            |
| Each Row         | `row`      | `grid-row`               |
| Each Square      | `gridcell` | `grid-cell`              |
| Highlighted Cell | (same)     | `highlighted` (optional) |

---

### 🔍 Example Test Scenario

If the user clicks on **D4** (3rd row, 3rd column):

* Highlight:

  * All squares in **row D**.
  * All squares in **column 4**.
  * All **diagonals** passing through D4.
* ⚠️ Expected number of highlights: **27 squares** (excluding the clicked cell).

---

