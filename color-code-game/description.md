
---

## 🎨 **Color Code Guessing Game **

---

### ✅ **Requirements**

1. **🎯 Display Target Color**

   * Show a heading like: `Which color is #A1B2C3?`
   * Test ID: `target-color` (heading with color code)

2. **🎨 Show 3 Color Boxes**

   * Render **exactly 3 color boxes**
   * One box is the correct color
   * Two others are random but unique incorrect colors
   * Test ID: `color-option-${i}` for each box

3. **🧠 User Selection**

   * When a color box is clicked:

     * ✅ Show `"🎉 Correct!"` if it's right
     * ❌ Show `"❌ Incorrect!"` if wrong
   * Display feedback below
   * Test ID: `result-message`

4. **🔁 Reset Button**

   * Appears **after** a guess
   * Clicking it resets:

     * New color
     * New options
     * Clears feedback
   * Test ID: `reset-button`

---

### ⚠️ **Edge Cases & Constraints**

* ✅ Only **3 color options** shown at all times
* ❌ Duplicate colors are not allowed
* 🎯 Correct color always included
* ❌ Don’t allow multiple guesses once one is selected
* 🌀 Resetting always generates **a new game**, not the same one

---



