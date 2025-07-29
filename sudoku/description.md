
---

## 🧩 Sudoku Game 

### ✅ **Requirements (Functionality Focused)**

1. **Render a 9x9 Sudoku Grid**

   * Grid made up of 81 cells (9 rows × 9 columns).
   * Cells can be pre-filled or empty based on a valid puzzle.

2. **Initial Puzzle Load**

   * Load a valid Sudoku puzzle with:

     * Some cells pre-filled (readonly).
     * Remaining cells empty (editable).

3. **User Input Handling**

   * Allow only digits `1–9` in editable cells.
   * Block `0`, alphabets, and special characters.

4. **Validation**

   * On demand (e.g., a “Check” button), validate if current input:

     * Obeys Sudoku rules (no repeats in row, column, or 3x3 box).

5. **Multiple Puzzle Support**

   * Should be able to load a different valid puzzle when needed (e.g., via a button).

---

### ⚠️ **Edge Cases**

* User types `0`, letter, or symbol → Must be ignored or rejected.
* User tries to modify a pre-filled (readonly) cell → Not allowed.
* Validation should catch:

  * Duplicates in any row, column, or 3x3 box.
  * Partially filled board with conflicts.

---


