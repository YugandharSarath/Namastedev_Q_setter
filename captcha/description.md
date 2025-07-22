🔐 **Captcha Validator**

---

### 🧠 Goal

Build a React component that displays a 5-letter **random uppercase captcha**, lets users type it, and validates it on submission.

---

### ✅ Features to Implement

1. **Captcha Generation**

   * On load, generate a random 5-letter **uppercase** captcha (like `ABZPQ`)
   * Display it inside a styled `div` or `canvas`
   * Use `data-testid="captcha-canvas"`

2. **User Input**

   * Input box with placeholder: `"Enter Captcha"`

3. **Buttons**

   * **🔁 Refresh Button**
     ➤ Generates new captcha & clears input
   * **Submit Button**
     ➤ Validates input (case-sensitive)

4. **Result Message**

   * If correct: ✅ `Captcha Verified`
   * If wrong: ❌ `Incorrect Captcha`
   * Use clear feedback via dynamic text

---

### 🧪 Test Coverage

| **Test Case** | **What to Validate**                       |
| ------------- | ------------------------------------------ |
| TC1           | Renders captcha box and form properly      |
| TC2           | Refresh regenerates captcha + clears input |
| TC3           | Correct input → “Captcha Verified”         |
| TC4           | Wrong input → “Incorrect Captcha”          |
| TC5           | Empty input → “Incorrect Captcha”          |
| TC6           | Buttons & input have proper CSS classes    |
| TC7           | Layout is responsive on different screens  |

---

### ⚠️ Edge Cases

* Input **must be case-sensitive**
* Captcha **must regenerate on refresh**
* Empty submission must show “Incorrect Captcha”

---

### 📋 Sample Test Code

```tsx
fireEvent.change(screen.getByPlaceholderText("Enter Captcha"), {
  target: { value: "ABZPQ" }
});
fireEvent.click(screen.getByRole("button", { name: /Submit/i }));
expect(screen.getByText("Captcha Verified")).toBeInTheDocument();
```

---

