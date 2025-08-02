
---

## 💡 Hints.md (Updated)

### 1. 🧱 Create the Chessboard

Use nested `Array.from` to dynamically generate an 8×8 grid:

```js
Array.from({ length: 8 }).map((_, row) =>
  Array.from({ length: 8 }).map((_, col) => {
    // Render each square
  })
)
```

Assign each square a unique `data-testid="cell-{row}-{col}"` for testing purposes:

```js
<div data-testid={`cell-${row}-${col}`}>...</div>
```

---

### 2. 🎯 Highlight on Hover

Track which square is currently hovered using React state:

```js
const [hovered, setHovered] = useState(null);

onMouseEnter={() => setHovered([row, col])}
onMouseLeave={() => setHovered(null)}
```

---

### 3. 🧠 Compute Valid Knight Moves

A knight moves in 8 possible “L” shapes from its current position `(row, col)`:

```js
const knightOffsets = [
  [2, 1], [2, -1], [-2, 1], [-2, -1],
  [1, 2], [1, -2], [-1, 2], [-1, -2],
];
```

Filter to include only valid board positions:

```js
const isValid = (r, c) => r >= 0 && r < 8 && c >= 0 && c < 8;
```

---

### 4. 🖌️ Apply CSS Classes

Use logic to identify which squares should be styled:

```js
const isHovered = hovered && hovered[0] === row && hovered[1] === col;

const isTarget =
  hovered &&
  knightOffsets
    .map(([dr, dc]) => [hovered[0] + dr, hovered[1] + dc])
    .some(([r, c]) => r === row && c === col && isValid(r, c));
```

Apply CSS classes conditionally:

* `.selected-square` → if `isHovered`
* `.knight-move-target` → if `isTarget`

---

## ✅ Test Cases (Suggested Set)

Here are 5 suggested test cases you can implement using `@testing-library/react`:

1. **Initial Render**

   * No square should have `.selected-square` or `.knight-move-target`.

2. **Hover on (0, 0)**

   * Add hover to: `screen.getByTestId("cell-0-0")`
   * `.selected-square` should be applied to `(0,0)`
   * Exactly 2 `.knight-move-target` cells expected

3. **Hover on (3, 3)**

   * Use: `const cell = screen.getByTestId("cell-3-3");`
   * Should highlight `.selected-square` on `(3,3)`
   * All 8 knight move targets should be visible

4. **Hover on Edge (0, 3)**

   * Hover over `(0,3)`
   * Only 4 valid `.knight-move-target` squares should be highlighted

5. **Unhover / MouseLeave**

   * After mouse leaves any cell, all highlights (`.selected-square` and `.knight-move-target`) should be removed

---

