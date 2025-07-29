
---

## 🔐 **Captcha Validator**

---

### 🎯 **Objective**

Build a React component that simulates a basic captcha system. It should generate a **5-letter uppercase code**, allow user input, and validate the input with proper feedback and interaction.

---

### ✅ **Requirements**

1. **Captcha Generation**

   * When the component loads, generate a **random 5-character captcha** using only **uppercase letters (A–Z)**.
   * Display this captcha visually using a canvas or styled block element.

2. **User Interaction**

   * Provide a text input where users can enter the captcha code.
   * Include a **Submit** button to validate the entered input.
   * Include a **Refresh** button that regenerates a new captcha and clears the input.

3. **Feedback Mechanism**

   * If the user enters the **exact same characters** (case-sensitive) as the displayed captcha → show success message: **"Captcha Verified"**.
   * If incorrect or empty → show error message: **"Incorrect Captcha"**.
   * Do not auto-refresh the captcha immediately on error; give the user feedback briefly.

4. **Styling and Layout**

   * All input fields and buttons must be styled clearly and consistently.
   * The layout should be responsive and remain clean across screen sizes.

---

### ⚠️ **Edge Cases & Constraints**

* The **captcha comparison must be case-sensitive** — lowercase characters should be treated as incorrect even if the letters are right.
* If the **input field is left blank**, and the user submits, show an **error message**.
* After clicking the **refresh button**, the captcha should:

  * Regenerate a new random string.
  * Clear the input field.
  * Leave previous messages (optional: show briefly or reset).
* The layout must render correctly on different device sizes — ensure form, input, and captcha box do not overlap or misalign.
* Elements like input, submit, and refresh must be distinguishable and styled appropriately for usability.

---

