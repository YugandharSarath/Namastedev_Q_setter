import React, { useState } from "react";
import "./styles.css";

export default function QuizApp({ questions }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [quizEnd, setQuizEnd] = useState(false);
  const [warning, setWarning] = useState(false);

  if (!questions || questions.length === 0) {
    return <p>No quiz available</p>;
  }

  const current = questions[currentQuestionIndex];

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    if (warning) setWarning(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedOption) {
      setWarning(true);
      return;
    }

    if (selectedOption === current.answer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption("");
    } else {
      setQuizEnd(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption("");
    setScore(0);
    setQuizEnd(false);
    setWarning(false);
  };

  const getOptionTestId = (index) => {
    return `option-${String.fromCharCode(65 + index)}`; // A, B, C, D
  };

  return (
    <div className="App">
      <h1 className="app-title">Quiz App</h1>

      {!quizEnd ? (
        <form onSubmit={handleSubmit} className="question-container">
          <h3>Question {current.id}</h3>
          <p data-testid="question">{current.question}</p>
          <div className="options">
            {current.options.map((opt, idx) => (
              <label key={idx} className="option">
                <input
                  type="radio"
                  name="option"
                  value={opt}
                  checked={selectedOption === opt}
                  onChange={handleOptionChange}
                />
                <span data-testid={getOptionTestId(idx)}>{opt}</span>
              </label>
            ))}
          </div>

          {warning && (
            <p className="warning" style={{ color: "red" }}>
              Please select an option before submitting.
            </p>
          )}

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      ) : (
        <div className="score-container">
          <h2 data-testid="score">
            Your Score: {score} / {questions.length}
          </h2>
          <button
            onClick={resetQuiz}
            className="restart-button"
            data-testid="restart-button"
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}
