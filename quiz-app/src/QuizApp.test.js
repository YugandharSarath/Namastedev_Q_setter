import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { qBank } from './data/qBank';
import '@testing-library/jest-dom';

// Helper to answer all questions correctly
function answerAllQuestionsCorrectly() {
  qBank.forEach((q) => {
    const option = screen.getByLabelText(q.answer);
    fireEvent.click(option);
    const submitBtn = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitBtn);
  });
}

describe('Quiz App', () => {
  test('renders the first question and options', () => {
    render(<App />);
    expect(screen.getByText(/quiz app/i)).toBeInTheDocument();
    expect(screen.getByText(qBank[0].question)).toBeInTheDocument();
    qBank[0].options.forEach((opt) => {
      expect(screen.getByLabelText(opt)).toBeInTheDocument();
    });
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  test('selecting an option enables submission and moves to next question', () => {
    render(<App />);
    const option = screen.getByLabelText(qBank[0].options[0]);
    fireEvent.click(option);
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    expect(screen.getByText(qBank[1].question)).toBeInTheDocument();
  });

  test('score increases for correct answers', () => {
    render(<App />);
    fireEvent.click(screen.getByLabelText(qBank[0].answer));
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    const wrongOption = qBank[1].options.find((opt) => opt !== qBank[1].answer);
    fireEvent.click(screen.getByLabelText(wrongOption));
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    for (let i = 2; i < qBank.length; i++) {
      fireEvent.click(screen.getByLabelText(qBank[i].answer));
      fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    }

    expect(
      screen.getByText(new RegExp(`your score: ${qBank.length - 1} / ${qBank.length}`, 'i'))
    ).toBeInTheDocument();
  });

  test('shows final score and restart button after last question', () => {
    render(<App />);
    answerAllQuestionsCorrectly();
    expect(screen.getByText(/your score:/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /play again/i })).toBeInTheDocument();
  });

  test('restarts the quiz when Play Again is clicked', () => {
    render(<App />);
    answerAllQuestionsCorrectly();
    fireEvent.click(screen.getByRole('button', { name: /play again/i }));
    expect(screen.getByText(qBank[0].question)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  test('radio buttons reflect selected option', () => {
    render(<App />);
    const selectedOption = screen.getByLabelText(qBank[0].options[2]);
    fireEvent.click(selectedOption);
    expect(selectedOption).toBeChecked();

    qBank[0].options.forEach((opt) => {
      if (opt !== qBank[0].options[2]) {
        expect(screen.getByLabelText(opt)).not.toBeChecked();
      }
    });
  });

  test('cannot submit without selecting an option', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    expect(screen.getByText(qBank[0].question)).toBeInTheDocument();
  });
});
