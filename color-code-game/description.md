## 🧠 Ultimate Color Perception Challenge

Build an advanced color guessing game where the user is shown a HEX color code and must pick the **exact match** from **5 subtly different** color boxes. These options should differ in only **1-3 RGB components**, making it difficult to distinguish.

---

### ✅ Requirements

1. **Show a heading**: `Which color is #A1B2C3?`
   - Display the target HEX color code in the heading
   - Test ID: `target-color`
   - The HEX color should be properly formatted (e.g., `#A1B2C3`)

2. **Show 5 color options**:
   - Exactly **one correct color box** (matching the HEX code)
   - **4 distractors** that are similar-looking with tweaked RGB values
   - Each option should be clickable and visually distinct
   - Test ID: `color-option-${i}` (where i = 0,1,2,3,4)

3. **On user click**:
   - Lock all further interactions (disable all color buttons)
   - Show appropriate feedback:
     - ✅ `"🎉 Correct!"` if the user picks the right color
     - ❌ `"❌ Incorrect! The correct color was #XXXXXX"` if wrong
   - Test ID: `result-message`

4. **Show a "Play Again" button** after feedback:
   - Generates a completely new target color and new options
   - Clears previous game state (feedback, selections, timer)
   - Should be disabled during active gameplay
   - Test ID: `reset-button`

5. **Timer functionality**:
   - 10-second countdown timer
   - Game ends automatically when timer reaches 0
   - Show "Time's up!" message with correct answer
   - Timer should reset on new game

---

### ⚠️ Edge Cases & Constraints

- **Exactly 5 boxes** must be shown at all times
- **No duplicate colors** - all 5 options must be unique HEX values
- **Subtle differences**: Distractors should differ by **±10–25** in any R, G, or B channel from the correct color
- **Single guess only** - user can only click once per round
- **Proper feedback timing** - feedback should only appear after user interaction
- **Complete reset** - "Play Again" should generate entirely new game state
- **HEX format validation** - colors must be properly formatted (e.g., `#A1B2C3`)
- **Accessibility support** - UI should work with screen readers and keyboard navigation

---
