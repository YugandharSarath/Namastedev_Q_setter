### 📝 **Match the Colors Game**

### 1. Requirements

**Functional Requirements:**
* The game board should consist of 20 cards arranged in a 5x4 grid.
* The cards are a shuffled pair of 10 different colors.
* Players must click two cards to flip them over and reveal their color.
* If the two flipped cards have the same color, they remain visible (matched).
* If the colors do not match, the cards are flipped back over after a short delay.
* The game ends when all cards have been matched.
* A move counter tracks how many pairs of cards the player has flipped.
* A "Reset Game" button restarts the game at any point.
* A victory message displays when all cards are matched.

**Technical Requirements:**
* The component should use React functional components and hooks (`useState`, `useEffect`).
* The card colors should be defined in a constant array of 10 colors.
* The shuffling logic should be implemented to randomize the card positions on each game start.
* The game should track flipped cards, matched cards, and the number of moves.
* The "Reset Game" button should re-initialize the game state, including shuffling the cards and resetting the move counter.
* The following **`data-testid`'s are required for testing purposes**:
    * `game-container`: The main container for the entire game.
    * `game-title`: The main heading of the game.
    * `game-board`: The container/grid for all the cards.
    * `card-${index}`: A unique ID for each card, where `index` is its position (e.g., `card-0`, `card-1`, `card-2`, etc.).
    * `turns-display`: The element showing the number of moves/turns.
    * `reset-button`: The button to reset the game.

---

### 2. Edge Cases & Constraints
* Clicking on an already flipped or matched card should do nothing.
* Only two cards can be flipped at a time. Clicking a third card while two are already flipped should be ignored.
* The game board is effectively disabled during the short delay when unmatched cards are flipping back over.
* The "You win!" message should only appear when all cards are matched.
* The game must be fully reset when the "Reset Game" button is clicked, including shuffling the cards and resetting the move count and all other state variables.
* Cards should have visual feedback (hover effects, animations) to enhance user experience.
* Matched cards should be visually distinct from unmatched cards.

---