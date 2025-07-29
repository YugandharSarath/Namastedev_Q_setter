import React, { useState } from "react";
import Question from "./components/Question";
import Score from "./components/Score";
import { qBank } from "./data/qBank";
import "./styles.css";

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
        <Question
          question={qBank[currentQuestionIndex]}
          selectedOption={selectedOption}
          onOptionChange={handleOptionChange}
          onSubmit={handleSubmit}
        />
      ) : (
        <Score score={score} total={qBank.length} onRestart={resetQuiz} />
      )}
    </div>
  );
}
