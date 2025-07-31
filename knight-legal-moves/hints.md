## 💡 Hints.md (Updated)

### 1. 🧱 Create the Chessboard

Use nested `Array.from` to generate rows and columns dynamically:

```js
Array.from({ length: 8 }).map((_, row) =>
  Array.from({ length: 8 }).map((_, col) => { ... })
)
```

---

### 2. 🎯 Highlight on Hover

Track which square is hovered using React state:

```js
const [hovered, setHovered] = useState(null);

onMouseEnter={() => setHovered([row, col])}
onMouseLeave={() => setHovered(null)}
```

---

### 3. 🧠 Compute Valid Knight Moves

From a square `(row, col)`, a knight can move in 8 possible “L” shaped directions:

```js
const knightOffsets = [
  [2, 1], [2, -1], [-2, 1], [-2, -1],
  [1, 2], [1, -2], [-1, 2], [-1, -2],
];
```

Filter only the positions inside the 8×8 board:

```js
const isValid = (r, c) => r >= 0 && r < 8 && c >= 0 && c < 8;
```

---

### 4. 🖌️ Apply CSS Classes

Use logic like:

```js
const isHovered = hovered && hovered[0] === row && hovered[1] === col;
const isTarget =
  hovered &&
  knightOffsets
    .map(([dr, dc]) => [hovered[0] + dr, hovered[1] + dc])
    .some(([r, c]) => r === row && c === col && isValid(r, c));
```

Then apply:

* `.selected-square` if `isHovered`
* `.knight-move-target` if `isTarget`

---

## ✅ Test Cases (Suggested Set)

Here are 5 useful test cases you can implement using `@testing-library/react`:

1. **Initial Render**

   * No square should have `.selected-square` or `.knight-move-target`.

2. **Hover on (0, 0)**

   * `.selected-square` should be on `(0,0)`.
   * Only 2 valid `.knight-move-target` cells expected.

3. **Hover on (3, 3)**

   * Should show `.selected-square` on `(3,3)`.
   * All 8 knight moves should be highlighted.

4. **Hover on Edge (0, 3)**

   * Only 4 target squares should be visible.

5. **Unhover / MouseLeave**

   * All highlights should be cleared after mouse leaves the square.
