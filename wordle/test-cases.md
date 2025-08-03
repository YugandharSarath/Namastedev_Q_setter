### ✅ `test-cases.md`

```md
# Test Cases for React Wordle Game

## ✅ Unit Tests

### 1. Initial Load
- ✅ Should show "Loading..." before word is fetched.

### 2. Board Rendering
- ✅ Should render board and "New Game" button after word is fetched.

### 3. Invalid Guess - Short Word
- ✅ Should show "Guess must be 5 letters" for short inputs.

### 4. Invalid Guess - Word Not in List
- ✅ Should show "Not a valid word" for words not in fetched list.

### 5. New Game Button
- ✅ Should reset state, fetch new word, and clear board on click.

> Note: All tests rely on mocking the fetch API to ensure deterministic behavior.
```