
---

## 🧠 Hints

### 1. 🧱 Render the 8×8 Chessboard

Use nested loops to render exactly 64 squares:

```jsx
for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    // Render each cell with a key and class
  }
}
```

---

### 2. 🎯 Track the Hovered Cell

Use `useState` to store the currently hovered cell:

```js
const [hovered, setHovered] = useState(null);
```

Set it on hover:

```jsx
onMouseEnter={() => setHovered([row, col])}
onMouseLeave={() => setHovered(null)}
```

---

### 3. ♔ Calculate King Moves

The King moves to all 8 adjacent squares. Use:

```js
const dr = Math.abs(hovered[0] - row);
const dc = Math.abs(hovered[1] - col);
return (dr <= 1 && dc <= 1) && !(dr === 0 && dc === 0);
```

---

### 4. 💡 Apply Highlight Classes

Add these conditionally to each cell:

```jsx
className={`cell ${isHovered ? "hovered" : ""} ${isKingMove ? "king-move" : ""}`}
```

---

### 5. ♿ Accessibility

Add `role="gridcell"` to each cell:

```jsx
<div role="gridcell" className="cell">...</div>
```

---

