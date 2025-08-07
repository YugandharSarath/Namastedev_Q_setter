import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import QuizApp from "./QuizApp";
import "@testing-library/jest-dom";

// Custom testQBank for testing (Point #5)
const testQBank = [
  {
    question: "Test Question 1?",
    options: ["Alpha", "Beta", "Gamma", "Delta"],
    answer: "Beta",
  },
  {
    question: "Test Question 2?",
    options: ["Red", "Green", "Blue", "Yellow"],
    answer: "Green",
  },
];

// Helper to answer all questions correctly
function answerAllQuestionsCorrectly(qBank) {
  qBank.forEach((q) => {
    fireEvent.click(screen.getByLabelText(q.answer));
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));
  });
}

describe("Quiz App", () => {
  test("renders heading and first question with testIDs", () => {
    render(<QuizApp questions={testQBank} />);
    expect(screen.getByText(/quiz app/i)).toBeInTheDocument();
    expect(screen.getByTestId("question")).toHaveTextContent(
      testQBank[0].question
    );
    expect(screen.getByTestId("option-A")).toHaveTextContent(
      testQBank[0].options[0]
    );
    expect(screen.getByTestId("option-B")).toHaveTextContent(
      testQBank[0].options[1]
    );
    expect(screen.getByTestId("option-C")).toHaveTextContent(
      testQBank[0].options[2]
    );
    expect(screen.getByTestId("option-D")).toHaveTextContent(
      testQBank[0].options[3]
    );
  });

  test("selecting an option enables submission and moves to next question", () => {
    render(<QuizApp questions={testQBank} />);
    fireEvent.click(screen.getByLabelText(testQBank[0].options[0]));
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));
    expect(screen.getByTestId("question")).toHaveTextContent(
      testQBank[1].question
    );
  });

  test("score increases for correct answers", () => {
    render(<QuizApp questions={testQBank} />);
    fireEvent.click(screen.getByLabelText(testQBank[0].answer));
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    const wrongOption = testQBank[1].options.find(
      (opt) => opt !== testQBank[1].answer
    );
    fireEvent.click(screen.getByLabelText(wrongOption));
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(
      screen.getByText(
        new RegExp(
          `your score: ${testQBank.length - 1} / ${testQBank.length}`,
          "i"
        )
      )
    ).toBeInTheDocument();
  });

  test("shows final score and play again button with testID", () => {
    render(<QuizApp questions={testQBank} />);
    answerAllQuestionsCorrectly(testQBank);
    expect(screen.getByTestId("score")).toHaveTextContent(
      `Your Score: ${testQBank.length} / ${testQBank.length}`
    );
    expect(screen.getByTestId("restart-button")).toBeInTheDocument();
  });

  test("play again button resets the quiz", () => {
    render(<QuizApp questions={testQBank} />);
    answerAllQuestionsCorrectly(testQBank);
    fireEvent.click(screen.getByTestId("restart-button"));
    expect(screen.getByTestId("question")).toHaveTextContent(
      testQBank[0].question
    );
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });

  test("radio buttons reflect selected option", () => {
    render(<QuizApp questions={testQBank} />);
    const selected = screen.getByLabelText(testQBank[0].options[2]);
    fireEvent.click(selected);
    expect(selected).toBeChecked();

    testQBank[0].options.forEach((opt) => {
      if (opt !== testQBank[0].options[2]) {
        expect(screen.getByLabelText(opt)).not.toBeChecked();
      }
    });
  });

  test("cannot submit without selecting an option", () => {
    render(<QuizApp questions={testQBank} />);
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));
    expect(screen.getByTestId("question")).toHaveTextContent(
      testQBank[0].question
    );
  });

  test("renders different testQBank properly", () => {
    render(<QuizApp questions={testQBank} />);
    expect(screen.getByTestId("question")).toHaveTextContent(
      testQBank[0].question
    );
    expect(screen.getByLabelText(testQBank[0].options[1])).toBeInTheDocument();
  });
});
