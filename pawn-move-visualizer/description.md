
---

## ♟️ Pawn Move Visualizer

### 👨‍🎓 Problem Statement

Build a simple React app that shows a chessboard. When the user **clicks on a square**, show all valid **forward moves** for a **white pawn** starting from that square.

---

### ✅ Requirements

1. **Create an 8×8 chessboard** (64 squares in total).
2. Make each square **clickable** (to represent the pawn's current position).
3. When a square is clicked:

   * Highlight **valid forward moves** for a white pawn.
   * The clicked cell itself does **not** get highlighted.
4. **Clear previous highlights** when another square is clicked.
5. Follow **white pawn rules only** (moving upwards).

---

### ⚠️ Edge Cases & Constraints

| Case                             | What Should Happen                               |
| -------------------------------- | ------------------------------------------------ |
| Click on 2nd row (index 6)       | Highlight 1 and 2 steps forward (row -1, row -2) |
| Click on any row between 3–6     | Highlight 1 step forward (row -1)                |
| Click on row 1 or 0 (top rows)   | No highlights (pawn cannot move forward)         |
| Board cells count                | Must render **exactly 64** cells (8x8 grid)      |
| Re-click on a highlighted square | Reset all highlights                             |
| Valid pawn moves only            | No sideways, captures, en passant, or promotions |

---

### 📌 Data Test IDs & Roles (For Accessibility and Testing)

| Element          | `role`     | `data-testid`              |
| ---------------- | ---------- | -------------------------- |
| Board container  | `grid`     | `pawn-board`               |
| Each row         | `row`      | `grid-row`                 |
| Each square      | `gridcell` | `grid-cell`                |
| Highlighted cell | `gridcell` | `highlighted` *(optional)* |

---




