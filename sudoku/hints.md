

---

### 🧠 `hints.md`

---

#### 🔢 1. **Sudoku Grid Representation**

* Use a 2D array `9x9` to represent the board.

  ```js
  const board = [
    [5, 3, null, null, 7, null, null, null, null],
    ...
  ];
  ```
* `null` means the cell is editable by the user.

---

#### 🧑‍💻 2. **Handling Editable vs Readonly Cells**

* When rendering cells:

  * If value is `null` → make it `<input />`
  * If value is number → render as static text.

---

#### 🛠️ 3. **Restricting Input to 1–9**

* On input change:

  ```js
  const valid = /^[1-9]$/;
  if (!valid.test(inputValue)) return;
  ```

---

#### ✅ 4. **Validation Logic**

* To check board validity:

  * Loop over all rows → ensure unique digits.
  * Loop over all columns → ensure unique digits.
  * Loop over each 3x3 box (start at \[0,0], \[0,3], etc) → ensure unique digits.

  ```js
  function isValid(board) {
    const seen = new Set();

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        const val = board[i][j];
        if (val == null) continue;

        const rowKey = `row-${i}-${val}`;
        const colKey = `col-${j}-${val}`;
        const boxKey = `box-${Math.floor(i / 3)}-${Math.floor(j / 3)}-${val}`;

        if (seen.has(rowKey) || seen.has(colKey) || seen.has(boxKey)) {
          return false;
        }

        seen.add(rowKey);
        seen.add(colKey);
        seen.add(boxKey);
      }
    }

    return true;
  }
  ```

---

#### 🎲 5. **Generating or Importing Puzzles**

* Use a pre-built package like `sudoku-gen` or hardcode 2-3 puzzles in an array for simplicity.
* Example:

  ```js
  const puzzles = [
    [ [5,3,null,...], ... ],
    [ [null,null,7,...], ... ]
  ];
  ```

---

#### 🔁 6. **Switching to Another Puzzle**

* Maintain a `currentPuzzleIndex` state.
* On “New Puzzle” button click: increment index and load that board.

---


