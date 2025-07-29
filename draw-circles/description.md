
---

## 🔁 **Project: Draw Circles on Canvas**

---

### ❓ **Question / Prompt**

Build a small React-based tool that allows users to **click on a canvas** to draw red circles. Add **Undo** and **Redo** buttons so users can remove or re-add their circles step by step. The app must handle click locations, maintain drawing history, and reflect state-based visual updates.

---

### ✅ **Requirements**

1. **Drawing Functionality**

   * Clicking the canvas should add a red circle at the clicked coordinates.
   * Each new click adds to the canvas without affecting previous ones.

2. **Undo Feature**

   * Removes the most recent circle added.
   * Disabled if there are no circles to undo.

3. **Redo Feature**

   * Re-adds the most recently undone circle.
   * Disabled if nothing is available to redo.

4. **Multiple Actions**

   * Support a sequence like: click → undo → redo → multiple undos/redos.

5. **State Management**

   * Use two internal lists: one for current circles and one for undone ones.

6. **Rendering**

   * Circles should render using a consistent shape, size, and color.
   * All drawn circles should be visible at their correct positions.

---

### ⚠️ **Edge Cases & Constraints**

* Clicking when undo/redo are both disabled must not cause errors.
* Redo list should clear after a new circle is added (reset history).
* Undo/Redo should not allow overflow (no more actions than history allows).
* Buttons must enable/disable based on available history.
* Click coordinates must be captured relative to canvas, not screen.

---



