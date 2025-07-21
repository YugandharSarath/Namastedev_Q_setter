import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import DragAndDropList from "./DragAndDropList";
import "@testing-library/jest-dom";

function getColumns() {
  return {
    todo: screen.getByText(/todo/i).parentElement!,
    inprogress: screen.getByText(/inprogress/i).parentElement!,
    done: screen.getByText(/done/i).parentElement!,
  };
}

function getTasks() {
  return screen.getAllByText(/Task \d/);
}

test("renders the initial list of items", () => {
  render(<DragAndDropList />);
  expect(screen.getByText("Task 1")).toBeInTheDocument();
  expect(screen.getByText("Task 2")).toBeInTheDocument();
  expect(screen.getByText("Task 3")).toBeInTheDocument();
  expect(screen.getByText("Task 4")).toBeInTheDocument();
});

test("drag and drop moves a task to another column", () => {
  render(<DragAndDropList />);
  const task = screen.getByText("Task 1");
  const { inprogress } = getColumns();
  fireEvent.dragStart(task);
  fireEvent.dragOver(inprogress);
  fireEvent.drop(inprogress);
  expect(inprogress).toHaveTextContent("Task 1");
});

test("drag and drop back to original position keeps list unchanged", () => {
  render(<DragAndDropList />);
  const task = screen.getByText("Task 1");
  const { todo } = getColumns();
  fireEvent.dragStart(task);
  fireEvent.dragOver(todo);
  fireEvent.drop(todo);
  expect(todo).toHaveTextContent("Task 1");
});

test("dropping outside valid list does not break anything", () => {
  render(<DragAndDropList />);
  const task = screen.getByText("Task 1");
  fireEvent.dragStart(task);
  // Simulate drop outside by not calling drop on any column
  fireEvent.dragEnd(task);
  expect(screen.getByText("Task 1")).toBeInTheDocument();
});

test("dragging multiple items and dropping them reorders correctly", () => {
  render(<DragAndDropList />);
  const { inprogress, done } = getColumns();
  const task1 = screen.getByText("Task 1");
  const task2 = screen.getByText("Task 2");
  fireEvent.dragStart(task1);
  fireEvent.dragOver(inprogress);
  fireEvent.drop(inprogress);
  fireEvent.dragStart(task2);
  fireEvent.dragOver(done);
  fireEvent.drop(done);
  expect(inprogress).toHaveTextContent("Task 1");
  expect(done).toHaveTextContent("Task 2");
});

// Accessibility (optional, basic check)
test("columns have headings for accessibility", () => {
  render(<DragAndDropList />);
  expect(screen.getByRole("heading", { name: /todo/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /inprogress/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /done/i })).toBeInTheDocument();
}); 