🔁 **Project: Draw Circles on Canvas**

---

### 🎯 **Goal**

Create a simple drawing app where **clicking on a canvas** adds circles at the clicked location. Users can also **Undo** and **Redo** their drawing actions.

---

### ✅ **Functional Requirements**

* 🖱️ Click on canvas → draw a filled circle at that position
* 🔴 Fixed (or random) radius, fixed color for each circle
* ➕ Each click adds a new circle without removing previous ones
* ↩️ **Undo**: removes the last drawn circle
* ↪️ **Redo**: re-adds the most recently undone circle
* 🔁 State-based rendering: circles stored in state array(s)

---

### 🧪 **Example Test Flow**

| Action                     | Expected Outcome                 |
| -------------------------- | -------------------------------- |
| Click at (50, 100)         | Circle appears at that point     |
| Click 3 times → Press Undo | Last circle disappears           |
| Press Redo                 | That last circle reappears again |

---

### 🏷️ **Testing Identifiers**

| Element           | `data-testid` or Identifier       |
| ----------------- | --------------------------------- |
| Canvas            | `draw-canvas`                     |
| Circle (optional) | `circle`                          |
| Undo Button       | `role="button"` and text `"Undo"` |
| Redo Button       | `role="button"` and text `"Redo"` |

---


