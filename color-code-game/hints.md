
---

## 💡 Hints (with Code Examples)

### 🎯 1. Track Game State

Use `useState` to track key parts of the game.

```js
const [correctColor, setCorrectColor] = useState("");
const [colorOptions, setColorOptions] = useState([]);
const [selectedColor, setSelectedColor] = useState(null);
const [feedback, setFeedback] = useState("");
const [hasGuessed, setHasGuessed] = useState(false);
```

---

### 🎨 2. Generate Distractors with Slight Channel Offsets

Use a helper to modify R/G/B slightly:

```js
function getSimilarColor(hex, offset = 10) {
  const [r, g, b] = hexToRgb(hex);
  const variation = () => Math.min(255, Math.max(0, Math.floor(Math.random() * offset * 2) + r - offset));
  return rgbToHex(variation(), variation(), variation());
}
```

---

### 🔢 3. HEX ⇄ RGB Conversion

```js
function hexToRgb(hex) {
  const bigint = parseInt(hex.slice(1), 16);
  return [bigint >> 16, (bigint >> 8) & 255, bigint & 255];
}

function rgbToHex(r, g, b) {
  return "#" + [r, g, b].map(x => x.toString(16).padStart(2, "0")).join("");
}
```

---

### 🧠 4. Avoid Duplicate Colors Using a Set

```js
const colorSet = new Set();
while (colorSet.size < 5) {
  const newColor = getSimilarColor(correctColor, 15);
  colorSet.add(newColor);
}
const options = shuffle(Array.from(colorSet));
```

---

### 🔁 5. Shuffle Options

```js
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
```

---

### 🖼️ 6. Use `useEffect` for Game Reset

```js
useEffect(() => {
  generateNewRound();
}, []);
```

---

### 🖱️ 7. Accessibility with Roles

```jsx
<div
  role="button"
  aria-label={`Color option ${color}`}
  onClick={() => handleGuess(color)}
  style={{ backgroundColor: color }}
  tabIndex={0}
/>
```

---

### ❌ 8. Prevent Multiple Guesses

```js
const handleGuess = (color) => {
  if (hasGuessed) return;
  setHasGuessed(true);
  setSelectedColor(color);
  setFeedback(color === correctColor ? "✅ Correct!" : "❌ Wrong");
};
```

---

### 🎯 9. Provide Subtle Feedback via Borders or Shadows

You can optionally add a subtle glow or border around the selected color:

```css
.color-box.selected {
  border: 3px solid white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
}
```

---

