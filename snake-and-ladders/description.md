
## 🐍 **Snakes and Ladders Game Visualizer**

### 🧩 Requirements

1. **Game Board (10x10)**

   * Render a **10×10 grid**, numbered **1 to 100**.
   * Numbering should start from **bottom-left (1)** and end at **top-right (100)**.
   * Each cell must be labeled and styled.

2. **Player Token**

   * Player starts at cell **1**.
   * Moves forward by the dice roll value.
   * If landing on a **ladder base**, move up.
   * If landing on a **snake head**, slide down.
   * If roll overshoots 100, **do not move**.
   * Must land **exactly** on 100 to win.
   * Player token should visibly appear on the correct cell.

3. **Dice Roll**

   * Add a **"Roll Dice"** button.
   * On click, randomly roll a number between **1–6**.
   * Display rolled value on screen.

4. **Snakes & Ladders**

   * Hardcode the following:

     * **Ladders:** 3→22, 8→26, 20→29
     * **Snakes:** 27→5, 21→9, 17→4
   * Add icons or colors to mark snake/ladder cells.

5. **Game Win Logic**

   * Display **“🎉 You Win!”** when the player reaches **exactly** 100.

---

### ⚠️ Edge Cases & Constraints

* 🛑 Ignore dice rolls that overshoot 100.
* 🐍 Snakes may cause the player to slide down from **99 → lower**.
* 💯 Victory is declared **only** when position === 100.
* ✅ Player can **still fall to snake even near 100**.



