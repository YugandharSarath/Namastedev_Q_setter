# Implementation Solutions for React Wordle

## 1. Word Fetching
- Use `fetch` from `https://random-word-api.herokuapp.com/word?length=5&number=1000`.
- Convert all fetched words to uppercase using `.map(w => w.toUpperCase())`.
- Select a random word from the list using `Math.random()`.

## 2. Input Handling
- Attach a `keyup` listener for real keyboard inputs.
- Dispatch custom `KeyboardEvent` for virtual keyboard clicks.
- Only allow A–Z input and `Backspace`, `Enter` keys.
- Ignore input when `isCorrect === true` or `turn >= 6`.

## 3. Guess Validation
- Validate guess length (`=== 5`).
- Validate presence in the word list.
- Show error if invalid, disappear after 2 seconds.

## 4. Coloring Logic
- For each letter:
  - Green if exact match at same index.
  - Yellow if in solution but not at same index.
  - Gray otherwise.

## 5. Hint System
- After 3 incorrect guesses (`turn === 2`), show the first letter of the solution as a hint.

## 6. Game Over & Success
- Show 🎉 when guess is correct.
- Show ❌ when all 6 turns are used.
- Disable further input after either.

## 7. Reset Game
- On clicking 🔄 New Game:
  - Re-fetch words.
  - Reset all state variables:
    - `solution`, `guesses`, `turn`, `currentGuess`, `usedKeys`, etc.

## 8. Styling
- Use classNames for color coding.
- Keyboard buttons are styled based on `usedKeys`.

