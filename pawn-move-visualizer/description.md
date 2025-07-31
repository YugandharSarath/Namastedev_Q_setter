
---
## ♟️ Pawn Move Visualizer

Build a React component that displays an 8×8 chessboard. When the user **hovers over any square**, it shows all **valid forward cells** a  pawn could move to from that square. All highlights must clear when the hover ends or moves to another square.
---

### ✅ Requirements (in clear terms)

1. Display an 8×8 grid (64 total cells), styled as a chessboard.

2. Each square must have the attribute `role="gridcell"` for accessibility and testability.

3. When the user **hovers** over a square:

   - That square should show a pawn icon (`♙`) and get the `.hovered` class.
   - All valid forward move squares should be highlighted with the `.pawn-move` class.

4. For the pawn's movement:

   - It moves **upward** (toward decreasing row index).
   - From **row 6** (its initial row), it can move **1 or 2 steps forward**.
   - From **rows 2 to 5**, it can move **1 step forward**.
   - From **row 0 or 1**, it **cannot move** (no squares should be highlighted).

5. When the mouse leaves a cell:

   - All highlights, including the hovered cell and pawn-move cells, should disappear.

---

### ⚠️ Edge Cases (explained in plain English)

- **Hovering over square e4 (row 4, column 4)**
  → Should highlight only one square ahead (e5), because this is a normal pawn position (not the starting row).

- **Hovering over square e2 (row 6, column 4)**
  → Should highlight two squares ahead: e3 and e4. Pawns on the starting row can move one or two steps forward.

- **Hovering over square e1 (row 7, column 4)**
  → Should not highlight any move squares, since a pawn on the last rank cannot go forward.

- **Mouse leaves any square**
  → All highlights and pawn icons should be removed instantly.

- **Hovering quickly over different squares**
  → Only the most recently hovered square and its valid moves should be highlighted. Previous highlights must disappear.

---
