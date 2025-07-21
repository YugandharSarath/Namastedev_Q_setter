// components/Question.tsx
import React from "react";
import Options from "./Options";
import { QuestionType } from "../types";

type Props = {
  question: QuestionType;
  selectedOption: string;
  onOptionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Question: React.FC<Props> = ({
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
