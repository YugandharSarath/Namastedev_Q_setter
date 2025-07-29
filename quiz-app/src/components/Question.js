import React from "react";
import Options from "./Options";

const Question = ({
  question,
  selectedOption,
  onOptionChange,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit} className="question-container">
      <h3>Question {question.id}</h3>
      <p>{question.question}</p>
      <Options
        options={question.options}
        selectedOption={selectedOption}
        onOptionChange={onOptionChange}
      />
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
};

export default Question;
