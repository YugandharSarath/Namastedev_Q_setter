
-----

### `description.md`

# Match Color Game

This project is a classic memory game where players match pairs of colored cards. It is built using React with functional components and hooks to manage the game state.

## Requirements

1.  **Game Board:** A 4x4 grid of cards must be displayed on the screen.
2.  **Card States:** Each card has three distinct states that are managed via React state:
      * **Hidden:** The card's color is not visible to the player.
      * **Revealed:** The card's color is temporarily visible after being clicked.
      * **Matched:** The card's color remains permanently visible after a successful match.
3.  **Core Game Logic:**
      * The game begins with all cards hidden and a randomized order of colors.
      * Clicking a card reveals its color.
      * If it's the first card of a turn, it stays revealed.
      * If it's the second card, the game checks if its color matches the first card's.
          * **If a match:** Both cards are permanently marked as matched.
          * **If not a match:** Both cards are flipped back to their hidden state after a short delay (e.g., 1 second).
4.  **Game State Management:** The component must track the following:
      * The current state of all cards (revealed, matched, or hidden).
      * Which two cards, if any, are currently selected.
      * The total number of moves made by the player.
      * Whether the winning condition has been met.
5.  **Winning Condition:** The game ends when all pairs of cards have been successfully matched. A congratulatory message should then be displayed.
6.  **Reset Functionality:** A "Reset Game" button should be available to restart the game at any point, shuffling the cards and resetting all game state variables.

---

### Edge Cases & Constraints

* **Duplicate Clicks:**
  A player should not be able to click on a card that is already revealed or matched. This ensures players can't exploit the game logic or interfere with animations.

* **Third Card Click Prevention:**
  If two cards are already revealed, clicking on a third card should not trigger any action until the previous two are either matched or hidden again after the timeout. This helps maintain consistent game state and avoids premature card interactions.

* **Immutability in State Updates:**
  All updates to the cards array must be handled immutably using functions like `map`, rather than mutating the original array. This ensures React's state tracking works correctly and improves code predictability.

* **Testability using `data-testid`:**
  To support robust automated testing, key elements in the game should include `data-testid` attributes:

  * Each card should have `data-testid="card-<id>"` where `<id>` is the card’s unique identifier.
  * The game title should use `data-testid="game-title"`.
  * The move counter should be tagged with `data-testid="moves-counter"`.
  * The reset button should be marked with `data-testid="reset-button"`.

These IDs help reliably select elements during tests without depending on CSS classes or text content.

---

