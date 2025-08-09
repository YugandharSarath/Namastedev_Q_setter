## 🧩 Sudoku Game 

Build a fully functional Sudoku game where users can solve puzzles with proper validation, hint system, and multiple puzzle support.

---

### ✅ **Requirements (Functionality Focused)**

1. **Render a 9x9 Sudoku Grid**
   - Grid made up of 81 cells (9 rows × 9 columns)
   - Cells can be pre-filled (fixed) or empty (editable) based on a valid puzzle
   - Test ID: `sudoku-grid`
   - Individual cells: `cell-${row}-${col}` (where row and col are 0-8)

2. **Game Container Structure**
   - Main container: Test ID `sudoku-container`
   - Game title: Test ID `sudoku-title`
   - Board wrapper: Test ID `sudoku-board`
   - Controls section: Test ID `game-controls`

3. **Initial Puzzle Load**
   - Load a valid Sudoku puzzle with:
     - Some cells pre-filled (readonly/disabled)
     - Remaining cells empty (editable)
   - Pre-filled cells should be visually distinct (different background color)

4. **User Input Handling**
   - Allow only digits `1–9` in editable cells
   - Block `0`, alphabets, and special characters
   - Allow clearing cells with empty string
   - Fixed cells should be disabled and non-editable

5. **Control Buttons**
   - **Check Button**: Test ID `check-button`
     - Validates current state against Sudoku rules
     - Shows feedback message
   - **Solve Button**: Test ID `solve-button`
     - Automatically completes the puzzle
     - Shows "Puzzle solved!" message
   - **New Puzzle Button**: Test ID `new-puzzle-button`
     - Generates/loads a new puzzle
     - Resets game state completely

6. **Status Feedback System**
   - Status message container: Test ID `status-message`
   - Show different messages:
     - ✅ `"✅ Correct Solution!"` - Complete and valid
     - ❌ `"❌ Invalid Solution"` - Complete but invalid
     - ❌ `"❌ Invalid! Check for duplicates in rows, columns, or boxes."` - Partial with conflicts
     - ℹ️ `"Keep going! The puzzle is valid so far."` - Partial but valid
     - 💡 `"💡 Puzzle solved!"` - Auto-solved

7. **Validation Logic**
   - On demand validation (via Check button):
     - No duplicate numbers in any row (1-9)
     - No duplicate numbers in any column (1-9) 
     - No duplicate numbers in any 3x3 box (1-9)
   - Handle partially filled boards correctly
   - Ignore empty cells during validation

---

### ⚠️ **Edge Cases & Constraints**

- **Input Validation**: 
  - User types `0`, letter, or symbol → Must be ignored/rejected
  - Only single digits `1-9` allowed
  - Empty string allowed (to clear cell)

- **Cell State Management**:
  - User tries to modify a pre-filled (readonly) cell → Not allowed
  - Fixed cells should be disabled and visually distinct
  - Editable cells should accept user input

- **Validation Edge Cases**:
  - Detect duplicates in any row, column, or 3x3 box
  - Handle partially filled board with conflicts
  - Distinguish between "incomplete but valid" vs "invalid"
  - Complete but invalid solutions

- **Game State**:
  - New puzzle should completely reset state
  - Status messages should clear on new game
  - Solve function should fill entire grid correctly

---