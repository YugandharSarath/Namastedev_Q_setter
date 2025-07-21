✅ Approach
We are given a task to simulate a Rook’s movement on a chessboard using React (TSX). A Rook moves horizontally and vertically, so for any selected square, we need to highlight:

All squares in the same row
All squares in the same column
🧠 Logic
Represent the chessboard as an 8x8 grid.
Track the currently hovered cell using state [row, col].
When a cell is hovered:
Apply a special style to the hovered cell (e.g., red).
Apply another style to all squares in the same row or column (e.g., green).
We use simple comparisons:

hovered[0] === row || hovered[1] === col