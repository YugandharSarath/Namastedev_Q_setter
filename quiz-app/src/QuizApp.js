import React, { useState } from "react";
import "./styles.css";

export const qBank = [
  {
    id: 1,
    question: "What is the capital of Haryana?",
    options: ["Yamunanagar", "Panipat", "Gurgaon", "Chandigarh"],
    answer: "Chandigarh",
  },
  {
    id: 2,
    question: "What is the capital of Punjab?",
    options: ["Patiala", "Ludhiana", "Amritsar", "Chandigarh"],
    answer: "Chandigarh",
  },
  {
    id: 3,
    question: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "Delhi",
  },
  {
    id: 4,
    question: "What is the capital of Uttarakhand?",
    options: ["Roorkee", "Haridwar", "Dehradun", "Nanital"],
    answer: "Dehradun",
  },
  {
    id: 5,
    question: "What is capital of Uttar Pradesh?",
    options: ["GB Nagar", "Lucknow", "Prayagraj", "Agra"],
    answer: "Lucknow",
  },
];

export default function QuizApp() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [quizEnd, setQuizEnd] = useState(false);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const current = qBank[currentQuestionIndex];
    if (!selectedOption) return;
    if (selectedOption === current.answer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex + 1 < qBank.length) {
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
  };

  return (
    <div className="App">
      <h1 className="app-title">Quiz App</h1>

      {!quizEnd ? (
        <form onSubmit={handleSubmit} className="question-container">
          <h3>Question {qBank[currentQuestionIndex].id}</h3>
          <p>{qBank[currentQuestionIndex].question}</p>
          <div className="options">
            {qBank[currentQuestionIndex].options.map((opt, idx) => (
              <label key={idx} className="option">
                <input
                  type="radio"
                  name="option"
                  value={opt}
                  checked={selectedOption === opt}
                  onChange={handleOptionChange}
                />
                {opt}
              </label>
            ))}
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      ) : (
        <div className="score-container">
          <h2>
            Your Score: {score} / {qBank.length}
          </h2>
          <button onClick={resetQuiz} className="restart-button">
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}
