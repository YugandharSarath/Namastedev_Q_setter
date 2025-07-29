
---

## 🧠 `hints.md` – Rook Move Visualizer

### 💡 Core Concepts

* A **Rook** moves horizontally and vertically – along the **same row** and **same column**.
* We can determine valid rook moves by checking:

  ```js
  hovered[0] === row || hovered[1] === col
  ```
* The hovered square is where the rook is currently "placed", and can be tracked using:

  ```js
  useState([row, col])
  ```

---

### 🔁 Grid Construction

* Use `Array.from({ length: 8 })` to generate an 8×8 board.
* Each cell needs a **unique key** (e.g., `key={`\${row}-\${col}`}`).
* Add `role="gridcell"` for accessibility compliance.

---

### 🖱 Hover Behavior

* Track the currently hovered cell using:

  ```js
  const [hovered, setHovered] = useState(null);
  ```

* Update this state using `onMouseEnter` and `onMouseLeave`.

* On hover:

  * Highlight all cells where:

    ```js
    row === hovered[0] || col === hovered[1]
    ```
  * You may **exclude** the hovered cell itself by checking:

    ```js
    !(row === hovered[0] && col === hovered[1])
    ```

---

### 🎨 Cell Styling

* Use `isLight = (row + col) % 2 === 0` for alternate light/dark chessboard pattern.
* Add CSS classes based on the cell state:

  * `"hovered"` for the selected cell.
  * `"rook-move"` for valid rook movement cells (excluding current).
* Add an icon like `♜` inside the hovered cell for a visual rook marker (optional).

---

### 🧪 Optional Enhancements

* Use `data-testid` for each cell (e.g., `cell-3-4`) to ease testing.
* Add transitions in CSS to make highlights smooth.

---


