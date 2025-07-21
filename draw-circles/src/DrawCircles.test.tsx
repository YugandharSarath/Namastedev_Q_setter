import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import DrawCircles from "./DrawCircles";
import "@testing-library/jest-dom";

// Helper to get canvas and buttons
function getElements() {
  const canvas = screen.getByTestId("canvas");
  const undo = screen.getByRole("button", { name: /undo/i });
  const redo = screen.getByRole("button", { name: /redo/i });
  return { canvas, undo, redo };
}

test("should draw a red circle on canvas click", () => {
  render(<DrawCircles />);
  const { canvas } = getElements();
  fireEvent.click(canvas, { clientX: 100, clientY: 100 });
  const circles = screen.getAllByTestId("circle");
  expect(circles.length).toBe(1);
  expect(circles[0]).toHaveClass("circle");
});

test("should draw multiple circles on multiple clicks", () => {
  render(<DrawCircles />);
  const { canvas } = getElements();
  fireEvent.click(canvas, { clientX: 10, clientY: 10 });
  fireEvent.click(canvas, { clientX: 20, clientY: 20 });
  fireEvent.click(canvas, { clientX: 30, clientY: 30 });
  expect(screen.getAllByTestId("circle").length).toBe(3);
});

test("should undo the last circle", () => {
  render(<DrawCircles />);
  const { canvas, undo } = getElements();
  fireEvent.click(canvas, { clientX: 10, clientY: 10 });
  fireEvent.click(canvas, { clientX: 20, clientY: 20 });
  fireEvent.click(canvas, { clientX: 30, clientY: 30 });
  fireEvent.click(undo);
  expect(screen.getAllByTestId("circle").length).toBe(2);
});

test("should redo the last undone circle", () => {
  render(<DrawCircles />);
  const { canvas, undo, redo } = getElements();
  fireEvent.click(canvas, { clientX: 10, clientY: 10 });
  fireEvent.click(canvas, { clientX: 20, clientY: 20 });
  fireEvent.click(canvas, { clientX: 30, clientY: 30 });
  fireEvent.click(undo);
  fireEvent.click(redo);
  expect(screen.getAllByTestId("circle").length).toBe(3);
});

test("should undo all circles", () => {
  render(<DrawCircles />);
  const { canvas, undo } = getElements();
  for (let i = 0; i < 5; i++) {
    fireEvent.click(canvas, { clientX: 10 * i, clientY: 10 * i });
  }
  for (let i = 0; i < 5; i++) {
    fireEvent.click(undo);
  }
  expect(screen.queryAllByTestId("circle").length).toBe(0);
});

test("should redo all circles after undoing all", () => {
  render(<DrawCircles />);
  const { canvas, undo, redo } = getElements();
  for (let i = 0; i < 5; i++) {
    fireEvent.click(canvas, { clientX: 10 * i, clientY: 10 * i });
  }
  for (let i = 0; i < 5; i++) {
    fireEvent.click(undo);
  }
  for (let i = 0; i < 5; i++) {
    fireEvent.click(redo);
  }
  expect(screen.getAllByTestId("circle").length).toBe(5);
});

test("should disable undo/redo buttons appropriately", () => {
  render(<DrawCircles />);
  const { canvas, undo, redo } = getElements();
  expect(undo).toBeDisabled();
  expect(redo).toBeDisabled();
  fireEvent.click(canvas, { clientX: 10, clientY: 10 });
  expect(undo).not.toBeDisabled();
  expect(redo).toBeDisabled();
  fireEvent.click(undo);
  expect(undo).toBeDisabled();
  expect(redo).not.toBeDisabled();
}); 