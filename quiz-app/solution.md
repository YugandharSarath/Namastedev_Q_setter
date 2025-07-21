# Quiz App – Solution Breakdown

This app allows users to attempt a series of 5 quiz questions with 4 options each. Here’s how the solution is structured:

---

## ✅ Components Summary

### `App.tsx`
- Maintains the core state:
  - `currentQuestionIndex`, `selectedOption`, `score`, `quizEnd`
- Handles:
  - Option change (`handleOptionChange`)
  - Submit answer (`handleSubmit`)
  - Restart quiz (`resetQuiz`)
- Conditional rendering for Question or Score components.

---

### `Question.tsx`
- Displays question ID and text
- Renders `Options.tsx` with current choices
- Wraps everything in a form to handle submission

---

### `Options.tsx`
- Maps over options
- Uses radio inputs
- Binds `onChange` and sets `checked` for selected answer

---

### `Score.tsx`
- Shows score summary
- Offers a button to restart the quiz

---

## 💡 Design Decisions
- **Functional components** with TypeScript are chosen for clarity and simplicity.
- **Modular design** ensures separation of concerns.
- **Form submit handling** is used for clean state management per question.

---

## 🔄 Flow
1. Start quiz → Show 1st question
2. Select answer → Submit → Validate → Move to next or end
3. Show final score → Option to restart

This structure makes it easy to scale, maintain, or even enhance with features like:
- Timers
- Leaderboards
- Backend question loading
