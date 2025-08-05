
---
## ❓ Quiz App Specification

### 🧠 Goal

Create an interactive quiz where users answer **multiple-choice questions (MCQs) one by one**, get their **final score**, and can **restart** the quiz.
---

### ✅ Features (Explained)

- **One question at a time**
  The quiz displays only a single question on the screen. Users must answer the current question to move to the next. This ensures a focused and clean interface.

- **Options shown as radio buttons**
  Each question has multiple options displayed as radio buttons. The user can select only **one** option per question.

- **Final score display after last question**
  Once the user has answered all questions, the app displays a summary showing the total number of correct answers out of the total number of questions.

- **"Play Again" resets the entire quiz**
  A "Restart" or "Play Again" button appears after the quiz ends. Clicking it will reset:

  - The current question index back to 0
  - The score to 0
  - All selected answers

- **Prevents submission if no option is selected**
  Users cannot move to the next question or submit an answer unless they have selected an option. This ensures intentional participation and prevents accidental clicks.

---

### 📚 Edge Case Handling

- If **no questions** are available in the data set, show a message like:
  _“No quiz available”_

- If the user **tries to submit without selecting any option**, show a warning and block progression.

- When the user clicks **“Play Again”**, all quiz states (score, selected answers, current question) should be reset.

- Ensure **radio buttons** allow only one option to be selected at a time.

---

### Suggested Test IDs (in sentence format)

- The **question text** should have a `data-testid` of `"question"`.
- The **first option (Option A)** should use `data-testid="option-A"`.
- The **second option (Option B)** should use `data-testid="option-B"`.
- The **third option (Option C)** should use `data-testid="option-C"`.
- The **fourth option (Option D)** should use `data-testid="option-D"`.
- The **final score display** should use `data-testid="score"`.
- The **restart button** should use `data-testid="restart-button"`.
