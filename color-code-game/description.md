## 🧠 Ultimate Color Perception Challenge

Build an advanced color guessing game where the user is shown a HEX color code and must pick the **exact match** from **5 subtly different** color boxes. These options should differ in only **1-3 RGB components**, making it difficult to distinguish.

---

### ✅ Requirements

1. Show a heading: `Which color is #A1B2C3?`
   - Test ID: `target-color`

2. Show **5 color options**:
   - Exactly one correct color box (matching the HEX)
   - 4 distractors that are similar-looking (tweaked RGB values)
   - Test ID: `color-option-${i}`

3. On user click:
   - Lock further interaction
   - Show feedback:
     - ✅ `"🎉 Correct!"` if right
     - ❌ `"❌ Incorrect! The correct color was #XXXXXX"` if wrong
   - Test ID: `result-message`

4. Show a "Play Again" button after feedback:
   - Generates new target color and new subtly-different options
   - Clears previous state
   - Test ID: `reset-button`

---

### ⚠️ Edge Cases & Constraints

- Only 5 boxes must be shown at all times
- No two color boxes should have the same HEX
- The distractors should differ by **±10–25** in any R, G, or B channel from the correct color
- Feedback should be visible only once the user clicks
- Only one guess allowed per round
- Reset should generate a completely new game
- HEX colors must be properly formatted (e.g. `#A1B2C3`)
- The UI should support screen readers with accessible labels

---
