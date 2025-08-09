## Approach

1. Generate a random HEX color code (e.g. `#A1B2C3`).
2. Create 2 additional random HEX colors.
3. Display all 3 color boxes and ask the user to identify which one matches the HEX code.
4. When the user clicks:
   - Show "Correct!" if it matches.
   - Otherwise, show "Incorrect!".
5. Show a "Play Again" button to reset and generate a new question.

---

## Code Highlights

- `getRandomHexColor()` creates a valid hex color.
- `shuffleArray()` ensures the correct answer isn't always first.
- `useEffect` is used to initialize the game.
