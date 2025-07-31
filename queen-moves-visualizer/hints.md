### 💡 Hints 

#### 1. Queen Movement Logic

Use this utility logic to determine if a square is a valid Queen move:

```js
const isQueenMoveCell = (fromRow, fromCol, toRow, toCol) => {
  return (
    fromRow === toRow ||                 // Same row
    fromCol === toCol ||                 // Same column
    Math.abs(fromRow - toRow) === Math.abs(fromCol - toCol) // Diagonal
  );
};
```

---

#### 2. Highlighting Cells

Use conditional classes to style the square based on state:

```jsx
const classes = `cell ${cellColor} ${isHovered ? "hovered" : ""} ${
  isQueenMove ? "queen-move" : ""
}`;
```

And render like:

```jsx
<div
  onMouseEnter={() => setHovered([row, col])}
  onMouseLeave={() => setHovered(null)}
  data-testid={`cell-${row}-${col}`}
  className={classes}
>
  {isHovered && <span className="queen-icon">♛</span>}
</div>
```

---

#### 3. CSS Highlighting

Use styles like these in your CSS:

```css
.queen-move {
  background-color: purple !important;
}

.hovered {
  background-color: lightblue !important;
}

.queen-icon {
  font-size: 28px;
  font-weight: bold;
  pointer-events: none;
}
```


