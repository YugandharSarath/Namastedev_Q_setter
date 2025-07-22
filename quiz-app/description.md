
---

## ❓ Quiz App 

### 🧠 Goal

Create an interactive quiz where users answer **MCQs one-by-one**, get their **final score**, and can **restart** the quiz.

---

### ✅ Features

* 🧾 One question at a time
* 🔘 Options shown as radio buttons
* 🧮 Final score display after last question
* 🔄 “Play Again” resets entire quiz
* 🚫 Prevents submission if no option is selected

---

### 📚 Edge Case Handling

| Scenario                    | Expected Behavior                                |
| --------------------------- | ------------------------------------------------ |
| ❌ No questions              | Show message like “No quiz available”            |
| 🚫 Submit without selection | Block progression until an option is chosen      |
| 🔁 Play again               | Reset score, current index, and selected answers |
| 🔘 Radio selection          | Only one option selectable per question          |

---

### 🧪 Testing with RTL

Simulate real interactions:

```tsx
fireEvent.click(screen.getByLabelText('Option A'));
fireEvent.click(screen.getByRole('button', { name: /submit/i }));
expect(screen.getByTestId('score')).toBeInTheDocument();
```

#### ✅ Suggested Test Cases

* Initial UI renders first question
* Selecting an option enables submission
* Correct/Incorrect selections affect score
* Final score shown after last question
* Restart button resets state properly

---

### 🏷️ Suggested Test IDs

| Element        | `data-testid`    |
| -------------- | ---------------- |
| Question text  | `question`       |
| Option A       | `option-A`       |
| Option B       | `option-B`       |
| Option C       | `option-C`       |
| Option D       | `option-D`       |
| Final score    | `score`          |
| Restart button | `restart-button` |

---

### 💡 Bonus Features (Optional)

* ⏱ Timer for each question
* 🔄 Load questions from Open Trivia DB
* 🧠 Add categories or difficulty filters

---


