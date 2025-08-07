
---

## ❓ Quiz App Specification

### 🧠 Goal

Create an interactive quiz where users answer **multiple-choice questions (MCQs) one by one**, view their **final score**, and can **restart** the quiz using a **“Play Again”** button.

---

### ✅ Features 

* **One question at a time**
  Only a single question is shown on the screen at any time. Users must select an answer and click **Submit** to proceed.

* **Options shown as radio buttons**
  Each question offers 4 options (A–D) displayed as **radio buttons**. Users can only select **one option** per question.

* **Submit button must be clicked to continue**
  A **Submit** button must be present and labeled exactly as `"Submit"`.
  Users must click this button to progress through questions.

  ✅ Test:

  ```js
  fireEvent.click(screen.getByRole('button', { name: /submit/i }));
  ```

* **Prevent submission without a selected option**
  If the user tries to submit without selecting an answer:

  * Display a **warning message** visibly in red.
  * Prevent moving to the next question.

  ✅ Example:

  ```jsx
  {warning && (
    <p className="warning" style={{ color: 'red' }}>
      Please select an option before submitting.
    </p>
  )}
  ```

* **Final score is shown after the last question**
  After all questions have been answered, display the user’s score in the format:

  ```
  Your Score: X / Y
  ```

  This result should be accessible using the test ID `score`.

* **Quiz can be restarted using a “Play Again” button**
  When the quiz ends, a **"Play Again"** button must be displayed.
  Clicking it must reset:

  * Score back to 0
  * Current question index to 0
  * Selected option to empty
  * Warning message cleared
  * All UI returned to initial state

  The "Play Again" button must use the test ID `"restart-button"`.

* **The quiz title must be clearly visible**
  The app must render a visible heading labeled `"Quiz App"`.
  ✅ Test:

  ```js
  expect(screen.getByText(/quiz app/i)).toBeInTheDocument();
  ```

* **Quiz data (questions) should be passed as a prop**
  The quiz component must receive a `questions` prop (not hardcoded).
  Example:

  ```jsx
  <QuizApp questions={qBank} />
  ```

---

### 📚 Edge Case Handling

* ✅ If the quiz data (`questions`) array is empty, render a message like:

  ```
  No quiz available
  ```

* ✅ If the user clicks Submit without selecting an option:

  * A red warning is shown
  * User cannot proceed

* ✅ When clicking “Play Again”:

  * The score, selected answers, and question index must be reset

* ✅ Only one radio option may be selected at any time

---

### 🧪 Data Test IDs (In Sentence Format)

1. The **main question text** must use the test ID: `"question"`.

2. The **first option (Option A)** must use the test ID: `"option-A"`.

3. The **second option (Option B)** must use the test ID: `"option-B"`.

4. The **third option (Option C)** must use the test ID: `"option-C"`.

5. The **fourth option (Option D)** must use the test ID: `"option-D"`.

6. The **final score display text** must use the test ID: `"score"`.

7. The **"Play Again" button** that appears after the quiz ends must use the test ID: `"restart-button"`.

---

