🎨 **Color Code Guessing Game**

---

🧠 **Your Goal**
Create a fun React-based color guessing game! The player sees a color code like `rgb(255, 0, 0)` and has to pick the correct color box out of a few similar-looking options.

---

🔧 **What to Build**

1. **🎯 Target Color Display**

   * Show a big text like `rgb(123, 45, 67)`
   * `data-testid="target-color"`

2. **🎨 Color Options**

   * Show 4 to 6 colored boxes
   * One should exactly match the target color
   * Others should be similar but incorrect
   * Use `data-testid="color-option-${i}"` for each box

3. **✅ User Feedback**

   * If correct box clicked: show 🎉 “Correct!”
   * If wrong: show ❌ “Try Again!” or hide that box
   * Use `data-testid="result-message"`

4. **🔁 Reset Button**

   * On click, generate a new target color + options
   * Reset the game state
   * Use `data-testid="reset-button"`

---

💡 **How It Works**

* Generate a random RGB color.
* Create a few similar-looking colors as wrong answers.
* Shuffle all options randomly.
* Handle correct/wrong click with appropriate messages.
* Disable clicks after correct guess.

---

🧪 **What Can Be Tested**

* `target-color` is visible.
* Color options are shown.
* Click on right/wrong color → correct message appears.
* Click reset → game resets to a fresh round.

---



