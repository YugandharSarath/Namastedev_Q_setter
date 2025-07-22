
---

## 🐴 Knight Legal Moves Visualizer

### 📝 Summary

Create a React component that shows an 8×8 chessboard. When a user **clicks any square**, show all legal **knight moves** from that square (in an L-shape). Clicking again (on the same or another cell) updates or clears the highlights.

---

### ✅ Requirements

1. **Render a standard 8×8 grid** (64 squares, 8 rows).
2. Use correct ARIA roles and `data-testid`s for accessibility and testing:

   * Board: `role="grid"` and `data-testid="knight-board"`
   * Each row: `role="row"` and `data-testid="grid-row"`
   * Each cell: `role="gridcell"` and `data-testid="grid-cell"`
3. On clicking a cell:

   * Highlight all valid knight moves using the `.highlighted` class.
   * Optional: also add `data-testid="highlighted"` to highlighted cells.
   * Clear previous highlights before showing new ones.
4. Optional UX:

   * Clicking a highlighted square again can clear highlights (be consistent).

---

### 🧪 Edge Cases & Constraints

| Case                       | Expected Behavior                                  |
| -------------------------- | -------------------------------------------------- |
| Start of app               | No highlights shown initially                      |
| Click on center (e.g., E4) | Show all 8 valid knight moves                      |
| Click on edge (e.g., H1)   | Show only in-bound knight moves                    |
| Click same square twice    | (Optional) Clear highlights                        |
| Click another square       | Previous highlights clear, new moves shown         |
| Board total elements       | Must render **64** `gridcell` elements (no extras) |
| Only one set of highlights | At a time — must clear old ones before new ones    |

---

### 📌 Required Data Attributes

| Element                     | `role`            | `data-testid`                | Notes                                |
| --------------------------- | ----------------- | ---------------------------- | ------------------------------------ |
| Board                       | `role="grid"`     | `data-testid="knight-board"` | Main board container                 |
| Row                         | `role="row"`      | `data-testid="grid-row"`     | 8 total rows                         |
| Cell                        | `role="gridcell"` | `data-testid="grid-cell"`    | 64 total cells                       |
| Highlighted Cell (optional) | `gridcell`        | `data-testid="highlighted"`  | Only on knight-move cells (optional) |

---

