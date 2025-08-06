# ✅ MatchColorGame Test Cases

This document describes the unit tests written for the `MatchColorGame` React component using React Testing Library and Jest.

All tests are based on the rendered DOM structure, CSS class-based state, and visible changes in UI due to game logic.

---

## 🧪 Test Cases

---

### 1. Render Title and Reset Button
- **Purpose**: Confirm UI renders correctly on first load.
- **Steps**:
  - Mount the `MatchColorGame` component.
  - Look for text `Match the Colors 🎨` and `Reset Game`.
- **Expected**: Both are present in the DOM.

---

### 2. Render Exactly 16 Cards
- **Purpose**: Ensure the game board initializes with 8 color pairs (16 cards).
- **Steps**:
  - Query all elements with `role="button"` and `className` containing `"card"`.
- **Expected**: Exactly 16 cards are present.

---

### 3. Flip a Card to Reveal Its Color
- **Purpose**: Simulate user clicking a card and validate UI state.
- **Steps**:
  - Click any one card.
  - Check that the card is no longer showing the default hidden color (`rgb(68, 68, 68)`).
  - Confirm the card has class `"revealed"`.
- **Expected**: The clicked card flips and reveals its background color.

---

### 4. Increment Move Count on Mismatch
- **Purpose**: Validate that mismatched selections increase the move counter.
- **Steps**:
  - Click two cards with **different colors**.
  - Simulate time passing to allow mismatch animation.
  - Check the move count.
- **Expected**: Move counter increments by 1 (from 0 to 1).

---

### 5. Reset Game Clears All State
- **Purpose**: Verify that clicking "Reset Game" resets all state and visuals.
- **Steps**:
  - First make a move to increase move count.
  - Then click "Reset Game".
  - Check that:
    - Move count resets to 0.
    - All cards have hidden color (`rgb(68, 68, 68)`).
    - No card has `"revealed"` or `"matched"` class.
- **Expected**: Game resets completely to its initial state.

---

## 🧩 Notes

- The `background-color: rgb(68, 68, 68)` is the default hidden state.
- Color detection is handled via `window.getComputedStyle(...)`.
- Game cards are filtered using `role="button"` + `className.includes('card')` to exclude unrelated buttons.
- All time-based transitions (`setTimeout`) are handled using `jest.useFakeTimers()` and `jest.advanceTimersByTime(...)`.

---

## 🔁 Future Tests (Optional)
- Match detection and persistent reveal
- "You Won!" message when all cards are matched
- Prevent interaction with already revealed/matched cards
- Prevent triple-clicks during animation

