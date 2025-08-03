
---

## Q – Wordle Game

### 1. Requirements

**Functional Requirements:**

* Display a 6-row grid for word guesses.
* Allow typing or clicking to input letters (A–Z).
* On pressing "Enter":

  * Validate if guess is 5 letters long.
  * Validate guess is present in fetched word list.
  * Show colors:

    * Green: correct letter, correct position.
    * Yellow: correct letter, wrong position.
    * Gray: incorrect letter.
* After 6 attempts or a correct guess:

  * Show result message.
* Provide a “New Game” button to reset:

  * Generate new solution.
  * Clear all state.
* After 3 incorrect turns, show a hint (first letter).
* Show error messages for invalid guesses.

**Technical Requirements:**

* Fetch 1000 five-letter words from:

  ```
  https://random-word-api.herokuapp.com/word?length=5&number=1000
  ```
* Randomly choose a solution from the list.
* Normalize all letters to uppercase.
* Must support physical and virtual keyboard inputs.
* React functional component using hooks.
* Display loading state until fetch completes.
* CSS-based theming and layout.

---

### 2. Edge Cases & Constraints

* User presses "Enter" with <5 characters → Show error.
* User enters a valid-length guess not in list → Show error.
* Solution has duplicate letters → Must color only matched letters.
* Game ends (either win or 6 attempts) → Disable input and keys.
* User clicks "New Game" rapidly → Must not break fetch or state.
* User presses lowercase letter → Should be uppercased internally.
* Emoji buttons (e.g., 🔄, 🎉) → May fail in tests using `getByText`.
* React’s async state → May cause race conditions if not handled cleanly on reset.
* Only one word is selected per game from 1000 fetched words.
* Guess must be exactly 5 characters long.
* Game always ends at 6th attempt or on a correct guess.
* Hints shown **only after** 3rd turn and only once.
* No external validation API — guess validation is based on the fetched list.
* New Game resets all state: guesses, keyboard state, currentGuess, hint, errors, etc.
---




