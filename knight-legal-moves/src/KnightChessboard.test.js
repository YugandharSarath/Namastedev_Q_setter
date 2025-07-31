import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import KnightChessboard from "./KnightChessboard";
import "@testing-library/jest-dom";

describe("🐴 Knight Move Visualizer", () => {
  beforeEach(() => {
    render(<KnightChessboard />);
  });

  test("Initial render should not show any highlighted squares", () => {
    const highlighted = document.querySelectorAll(".knight-move-target");
    expect(highlighted.length).toBe(0);
  });

  test("Hovering over (3,3) should highlight 8 valid knight moves", () => {
    const cell = screen.getByTestId("cell-3-3");
    fireEvent.mouseEnter(cell);

    const highlighted = document.querySelectorAll(".knight-move-target");
    expect(highlighted.length).toBe(8);
    expect(cell).toHaveClass("selected-square");
  });

  test("Hovering over (0,0) should highlight only 2 valid knight moves", () => {
    const cell = screen.getByTestId("cell-0-0");
    fireEvent.mouseEnter(cell);

    const highlighted = document.querySelectorAll(".knight-move-target");
    expect(highlighted.length).toBe(2);
  });

  test("Hover and then mouse leave should remove all highlights", () => {
    const cell = screen.getByTestId("cell-3-3");
    fireEvent.mouseEnter(cell);
    fireEvent.mouseLeave(cell);

    const highlighted = document.querySelectorAll(".knight-move-target");
    expect(highlighted.length).toBe(0);
  });

  test("Hovering over edge square (0,7) should highlight 2 valid knight moves", () => {
    const cell = screen.getByTestId("cell-0-7");
    fireEvent.mouseEnter(cell);

    const highlighted = document.querySelectorAll(".knight-move-target");
    expect(highlighted.length).toBe(2);
  });

  test('Hovering over center-ish square (4,4) should highlight 8 valid knight moves', () => {
  const cell = screen.getByTestId('cell-4-4');
  fireEvent.mouseEnter(cell);

  const highlighted = document.querySelectorAll('.knight-move-target');
  expect(highlighted.length).toBe(8);
});

});
