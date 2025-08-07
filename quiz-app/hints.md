### 💡 Hints (with code snippets)

* ✅ **Passing questions as prop:**

  ```jsx
  export default function App() {
    return <QuizApp questions={qBank} />;
  }
  ```

* ✅ **Radio button selection and test IDs:**

  ```jsx
  <input
    type="radio"
    name="option"
    value={opt}
    data-testid={`option-${String.fromCharCode(65 + idx)}`} // A, B, C, D
  />
  ```

* ✅ **Score display:**

  ```jsx
  <h2 data-testid="score">
    Your Score: {score} / {questions.length}
  </h2>
  ```

* ✅ **Restart logic:**

  ```js
  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOption("");
    setWarning(false);
    setQuizEnd(false);
  };
  ```

* ✅ **Testing custom question sets:**
  Use a different `qBank` in test files:

  ```js
  const testQuestions = [
    { id: 1, question: '2 + 2 = ?', options: ['3', '4', '5', '6'], answer: '4' }
  ];
  render(<QuizApp questions={testQuestions} />);
  ```

---