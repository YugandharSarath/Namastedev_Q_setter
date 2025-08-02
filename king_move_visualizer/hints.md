
---

## 🧠 Hints

### 1. 🧱 Render the 8×8 Chessboard

Use nested loops to create 64 cells:

```jsx
for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    // Render each square here
  }
}
```

Alternate the colors using:

```js
const isLight = (row + col) % 2 === 0;
```

---

### 2. 🎯 Track the Hovered Cell

Use the `useState` hook to store which square is currently hovered:

```js
const [hovered, setHovered] = useState(null);
```

Set this value on mouse events:

```jsx
onMouseEnter={() => setHovered([row, col])}
onMouseLeave={() => setHovered(null)}
```

---

### 3. ♔ Calculate Valid King Moves

A King can move one square in any direction — horizontal, vertical, or diagonal.

To check if a square is a valid move from the hovered square:

```js
const dr = Math.abs(hr - row);
const dc = Math.abs(hc - col);
return !isHoveredSquare(row, col) && dr <= 1 && dc <= 1;
```

This ensures:

* The hovered square isn’t included.
* Only the 8 surrounding squares are considered valid king moves.

---

### 4. 🎨 Apply CSS Classes Dynamically

Build the class string based on square type:

```js
let cellClasses = `cell ${isLight ? "light" : "dark"}`;
if (isHoveredSquare(row, col)) {
  cellClasses += " hovered";
} else if (isKingMove(row, col)) {
  cellClasses += " king-move";
}
```

This allows proper coloring and highlighting using CSS.

---

### 5. 👑 Render the King Piece

Only show the King icon on the hovered square:

```jsx
{isHoveredSquare(row, col) && <span className="king-icon">♔</span>}
```

This keeps the king centered and visible only when a cell is hovered.

---

### 6. 🧪 Testing Helpers

Each cell includes a test ID to help with unit testing:

```jsx
data-testid={`cell-${row}-${col}`}
```

This enables precise cell targeting in tests.

---
