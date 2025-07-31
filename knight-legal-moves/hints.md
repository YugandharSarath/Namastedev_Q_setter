
## 💡 Hints.md 

### 1. 🧮 Render an 8×8 Grid

Use nested loops with `Array.from` to render 8 rows and 8 columns:

```js
Array.from({ length: 8 }).map((_, row) =>
  Array.from({ length: 8 }).map((_, col) => { ... })
)
```

---

### 2. 🐴 Knight Move Logic

A knight moves in "L" shapes. From a position `(row, col)`, valid moves are:

```js
const getKnightMoves = (row, col) => {
  const offsets = [
    [2, 1], [2, -1], [-2, 1], [-2, -1],
    [1, 2], [1, -2], [-1, 2], [-1, -2],
  ];

  return offsets
    .map(([dr, dc]) => [row + dr, col + dc])
    .filter(([r, c]) => r >= 0 && r < 8 && c >= 0 && c < 8);
};
```

---

### 3. 🎯 Handle Hover State

Track the square being hovered with a `useState` variable:

```js
const [hovered, setHovered] = useState(null);

onMouseEnter={() => setHovered([row, col])}
onMouseLeave={() => setHovered(null)}
```

---

### 4. ✨ Highlight Valid Moves

Use the `getKnightMoves(...hovered)` result to determine which squares to highlight:

```js
const knightMoves = hovered ? getKnightMoves(...hovered) : [];

const isMove = knightMoves.some(([r, c]) => r === row && c === col);
```

Apply the correct CSS classes:

* `.selected-square` for the hovered cell.
* `.knight-move-target` for cells where the knight can move.

---

