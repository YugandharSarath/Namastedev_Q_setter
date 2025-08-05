import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import DragAndDropList from "./DragAndDropList";
import "@testing-library/jest-dom";

function getColumns() {
  return {
    todo: screen.getByText("To Do").closest(".column"),
    inProgress: screen.getByText("In Progress").closest(".column"),
    done: screen.getByText("Done").closest(".column"),
  };
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
  const { inProgress } = getColumns();

  fireEvent.dragStart(task);
  fireEvent.dragOver(inProgress);
  fireEvent.drop(inProgress);

  expect(inProgress).toHaveTextContent("Task 1");
});

test("drag and drop back to original column keeps task", () => {
  render(<DragAndDropList />);
  const task = screen.getByText("Task 1");
  const { todo } = getColumns();

  fireEvent.dragStart(task);
  fireEvent.dragOver(todo);
  fireEvent.drop(todo);

  expect(todo).toHaveTextContent("Task 1");
});

test("dropping outside valid column does not crash", () => {
  render(<DragAndDropList />);
  const task = screen.getByText("Task 1");

  fireEvent.dragStart(task);
  fireEvent.dragEnd(task);

  expect(screen.getByText("Task 1")).toBeInTheDocument();
});

test("dragging multiple tasks updates respective columns", () => {
  render(<DragAndDropList />);
  const { inProgress, done } = getColumns();
  const task1 = screen.getByText("Task 1");
  const task2 = screen.getByText("Task 2");

  fireEvent.dragStart(task1);
  fireEvent.dragOver(inProgress);
  fireEvent.drop(inProgress);

  fireEvent.dragStart(task2);
  fireEvent.dragOver(done);
  fireEvent.drop(done);

  expect(inProgress).toHaveTextContent("Task 1");
  expect(done).toHaveTextContent("Task 2");
});

test("columns have accessible headings", () => {
  render(<DragAndDropList />);
  expect(screen.getByRole("heading", { name: "To Do" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "In Progress" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Done" })).toBeInTheDocument();
});

test("adds a new task to the To Do column", () => {
  render(<DragAndDropList />);
  const { todo } = getColumns();

  // Click '+ Add a task'
  const addButton = screen.getByText("+ Add a task");
  fireEvent.click(addButton);

  // Now there should be an input field
  const input = screen.getByPlaceholderText("Enter new task...");
  fireEvent.change(input, { target: { value: "New Test Task" } });
  fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

  expect(todo).toHaveTextContent("New Test Task");
});

test("deletes a task from a column", () => {
  render(<DragAndDropList />);
  const task = screen.getByText("Task 1");
  const taskDiv = task.closest(".task");
  const deleteButton = taskDiv.querySelector("button");

  expect(task).toBeInTheDocument();
  fireEvent.click(deleteButton);
  expect(task).not.toBeInTheDocument();
});

test("edits a task label", () => {
  render(<DragAndDropList />);
  const task = screen.getByText("Task 1");

  fireEvent.click(task); // Trigger edit
  const input = screen.getByDisplayValue("Task 1");

  fireEvent.change(input, { target: { value: "Updated Task 1" } });
  fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

  expect(screen.getByText("Updated Task 1")).toBeInTheDocument();
});
