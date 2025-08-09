
---

## 💡 Hints (with Code Examples)

### 🎯 1. Track Game State with useState

Use multiple state variables to track different aspects of the game:

```js
const [correctColor, setCorrectColor] = useState("");
const [colorOptions, setColorOptions] = useState([]);
const [selectedColor, setSelectedColor] = useState(null);
const [feedback, setFeedback] = useState("");
const [hasGuessed, setHasGuessed] = useState(false);
const [timeLeft, setTimeLeft] = useState(10);
const [gameActive, setGameActive] = useState(false);
```

---

### 🎨 2. Generate Distractors with Slight Channel Offsets

Create similar colors by modifying RGB values slightly:

```js
function getSimilarColor(hex, offset = 15) {
  const [r, g, b] = hexToRgb(hex);
  
  const variation = (original) => {
    const change = Math.floor(Math.random() * offset * 2) - offset;
    return Math.min(255, Math.max(0, original + change));
  };
  
  return rgbToHex(variation(r), variation(g), variation(b));
}
```

---

### 🔢 3. HEX ⇄ RGB Conversion Functions

Essential utility functions for color manipulation:

```js
function hexToRgb(hex) {
  const bigint = parseInt(hex.slice(1), 16);
  return [bigint >> 16, (bigint >> 8) & 255, bigint & 255];
}

function rgbToHex(r, g, b) {
  return "#" + [r, g, b]
    .map(x => x.toString(16).padStart(2, "0"))
    .join("");
}
```

---

### 🧠 4. Avoid Duplicate Colors Using a Set

Ensure all 5 colors are unique:

```js
const generateColorOptions = (targetColor) => {
  const colorSet = new Set([targetColor]); // Include correct answer
  
  while (colorSet.size < 5) {
    const newColor = getSimilarColor(targetColor, 20);
    colorSet.add(newColor);
  }
  
  return shuffle(Array.from(colorSet));
};
```

---

### 🔁 5. Shuffle Array Function

Randomize the order of color options:

```js
function shuffle(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}
```

---

### 🖼️ 6. Initialize Game with useEffect

Set up the game when component mounts:

```js
useEffect(() => {
  generateNewRound();
}, []);

const generateNewRound = () => {
  const targetHex = rgbToHex(
    getRandomRgbValue(), 
    getRandomRgbValue(), 
    getRandomRgbValue()
  );
  
  setCorrectColor(targetHex);
  setColorOptions(generateColorOptions(targetHex));
  setFeedback("");
  setHasGuessed(false);
  setSelectedColor(null);
  setTimeLeft(10);
  setGameActive(true);
};
```

---

### ⏰ 7. Timer Implementation with useEffect

Handle countdown timer logic:

```js
useEffect(() => {
  if (!gameActive || timeLeft === 0 || hasGuessed) {
    if (timeLeft === 0 && gameActive && !hasGuessed) {
      setFeedback(`Time's up! The correct color was ${correctColor}.`);
      setGameActive(false);
    }
    return;
  }

  const timer = setTimeout(() => {
    setTimeLeft(prev => prev - 1);
  }, 1000);

  return () => clearTimeout(timer);
}, [timeLeft, gameActive, hasGuessed, correctColor]);
```

---

### 🖱️ 8. Handle User Guesses

Prevent multiple guesses and provide feedback:

```js
const handleGuess = (color) => {
  if (!gameActive || hasGuessed) return;
  
  setHasGuessed(true);
  setSelectedColor(color);
  setGameActive(false);
  
  if (color === correctColor) {
    setFeedback("🎉 Correct!");
  } else {
    setFeedback(`❌ Incorrect! The correct color was ${correctColor}`);
  }
};
```

---

### 🎯 9. Visual Feedback with Conditional Styling

Add borders/shadows to show correct/incorrect selections:

```js
const getBoxStyle = (color) => {
  if (!hasGuessed && timeLeft > 0) return {};
  
  if (color === correctColor) {
    return {
      border: "4px solid green",
      boxShadow: "0 0 10px rgba(0, 255, 0, 0.5)",
    };
  }
  
  if (color === selectedColor && selectedColor !== correctColor) {
    return {
      border: "4px solid red",
      boxShadow: "0 0 10px rgba(255, 0, 0, 0.5)",
    };
  }
  
  return {};
};
```

---

### 🏷️ 10. Implement Required Test IDs

Add all necessary test IDs for automated testing:

```jsx
// Target color heading
<div data-testid="target-color">
  Which color is {correctColor}?
</div>

// Color options
{colors.map((color, index) => (
  <button
    key={index}
    data-testid={`color-option-${index}`}
    style={{ backgroundColor: color }}
    onClick={() => handleGuess(color)}
  />
))}

// Feedback message
{feedback && (
  <div data-testid="result-message">
    {feedback}
  </div>
)}

// Reset button
<button 
  data-testid="reset-button"
  onClick={generateNewRound}
>
  Play Again
</button>
```

---

### 🔧 11. Accessibility Best Practices

Make the game accessible to all users:

```jsx
<button
  role="button"
  aria-label={`Color option ${color}`}
  onClick={() => handleGuess(color)}
  style={{ backgroundColor: color }}
  tabIndex={0}
  disabled={!gameActive || hasGuessed}
/>

<div 
  aria-live="polite"
  data-testid="result-message"
>
  {feedback}
</div>
```

---

### 🎨 12. Random Color Generation

Generate truly random colors:

```js
const getRandomRgbValue = () => {
  return Math.floor(Math.random() * 256);
};

const generateRandomHexColor = () => {
  return rgbToHex(
    getRandomRgbValue(),
    getRandomRgbValue(), 
    getRandomRgbValue()
  );
};
```

---

### 💡 13. Debug Tips

Common issues and solutions:

- **Duplicate colors**: Always use Set to ensure uniqueness
- **Timer not stopping**: Check all conditions in useEffect dependencies
- **Wrong feedback**: Verify HEX string comparison (case sensitivity)
- **Visual feedback not showing**: Ensure state updates trigger re-renders
- **Test failures**: Double-check all test ID spellings and element presence

---