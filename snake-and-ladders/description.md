
---

## 🐍 **Snakes and Ladders Game Visualizer**

### 🎯 **Goal**

Create a 10×10 Snakes and Ladders board game in React.
Let users roll a dice, move a player token, and handle **snakes**, **ladders**, and **winning** logic.

---

### 🧩 **Requirements**

#### 🟦 Game Board

* Render a **10x10 grid** numbered **1 to 100** (bottom-left = 1, top-right = 100).
* Each square must be labeled and styled clearly.

#### 🎲 Dice

* Add a **"Roll Dice"** button.
* On click, roll a number **between 1 and 6**.
* Display the rolled number on screen.

#### 🧍 Player Token

* Start from **cell 1**.
* Move forward by dice roll.
* If landing:

  * **On bottom of ladder** → Move up to top.
  * **On snake head** → Slide down to tail.
* Do **not move** if dice roll would go past 100.
* Show the **current position** visibly on the board.
* Show **“🎉 You Win!”** when reaching exactly cell **100**.

#### 🐍 Snakes and 🪜 Ladders

* Hardcode a few snakes and ladders:

  * Example:

    * Ladders: 3 → 22, 8 → 26, 20 → 29
    * Snakes: 27 → 5, 21 → 9, 17 → 4
* Render visual hints for snake/ladder cells (icons, colors, etc.).

---

### ⚠️ **Edge Cases to Handle**

* If the dice roll overshoots (e.g. at 98 and rolls 5), **ignore** the move.
* Player must land **exactly on 100** to win.
* Player can still **fall to a snake** even when close to 100 (e.g., roll 1 on 99, land on a snake head → go down).

---

### 🧪 **Testable Behaviors**

* Player position updates correctly after each dice roll.
* If landing on a ladder base, auto-jump to the top.
* If landing on a snake head, auto-slide to the tail.
* Dice roll value displays correctly.
* “You Win!” shows only when player reaches cell 100.
* Game board renders **100 unique cells**.

---

### 🔖 **Accessibility & Test IDs**

| Element                 | `data-testid`    |
| ----------------------- | ---------------- |
| Game board wrapper      | `board`          |
| Each board cell         | `cell-${number}` |
| Dice roll button        | `roll-dice`      |
| Dice value display      | `dice-value`     |
| Player position display | `player-token`   |
| Win message             | `win-message`    |

---


