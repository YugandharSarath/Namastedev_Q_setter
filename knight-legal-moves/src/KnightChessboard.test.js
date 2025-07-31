import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import KnightChessboard from "./KnightChessboard";
import "@testing-library/jest-dom";

const getExpectedKnightMoves = (row, col) => {
  const moves = [
    [row - 2, col - 1],
    [row - 2, col + 1],
    [row - 1, col - 2],
    [row - 1, col + 2],
    [row + 1, col - 2],
    [row + 1, col + 2],
    [row + 2, col - 1],
    [row + 2, col + 1],
  ];
  return moves.filter(
    ([r, c]) => r >= 0 && r < 8 && c >= 0 && c < 8
  );
};

describe("🐴 Knight Move Visualizer", () => {
  beforeEach(() => {
    render(<KnightChessboard />);
  });

  test("Initial render should not show any highlighted squares", () => {
    const highlighted = document.querySelectorAll(".knight-move-target");
    expect(highlighted.length).toBe(0);
  });

  test("Hovering over (3,3) should highlight 8 correct knight move squares", () => {
    const cell = screen.getByTestId("cell-3-3");
    fireEvent.mouseEnter(cell);
    expect(cell).toHaveClass("selected-square");

    const expectedMoves = getExpectedKnightMoves(3, 3);
    const allCells = screen.getAllByTestId(/cell-\d-\d/);

    allCells.forEach((c) => {
      const [_, r, col] = c.dataset.testid.split("-").map(Number);
      const isExpected = expectedMoves.some(
        ([er, ec]) => er === r && ec === col
      );
      if (isExpected) {
        expect(c).toHaveClass("knight-move-target");
      } else {
        expect(c).not.toHaveClass("knight-move-target");
      }
    });
  });

  test("Hovering over (0,0) should highlight only 2 valid knight moves correctly", () => {
    const cell = screen.getByTestId("cell-0-0");
    fireEvent.mouseEnter(cell);
    expect(cell).toHaveClass("selected-square");

    const expectedMoves = getExpectedKnightMoves(0, 0);
    const allCells = screen.getAllByTestId(/cell-\d-\d/);

    allCells.forEach((c) => {
      const [_, r, col] = c.dataset.testid.split("-").map(Number);
      const isExpected = expectedMoves.some(
        ([er, ec]) => er === r && ec === col
      );
      if (isExpected) {
        expect(c).toHaveClass("knight-move-target");
      } else {
        expect(c).not.toHaveClass("knight-move-target");
      }
    });
  });

  test("Hover and then mouse leave should remove all highlights", () => {
    const cell = screen.getByTestId("cell-3-3");
    fireEvent.mouseEnter(cell);
    fireEvent.mouseLeave(cell);

    const allCells = screen.getAllByTestId(/cell-\d-\d/);
    allCells.forEach((c) => {
      expect(c).not.toHaveClass("knight-move-target");
      expect(c).not.toHaveClass("selected-square");
    });
  });

  test("Hovering over edge square (0,7) should highlight 2 valid knight moves correctly", () => {
    const cell = screen.getByTestId("cell-0-7");
    fireEvent.mouseEnter(cell);
    expect(cell).toHaveClass("selected-square");

    const expectedMoves = getExpectedKnightMoves(0, 7);
    const allCells = screen.getAllByTestId(/cell-\d-\d/);

    allCells.forEach((c) => {
      const [_, r, col] = c.dataset.testid.split("-").map(Number);
      const isExpected = expectedMoves.some(
        ([er, ec]) => er === r && ec === col
      );
      if (isExpected) {
        expect(c).toHaveClass("knight-move-target");
      } else {
        expect(c).not.toHaveClass("knight-move-target");
      }
    });
  });

  test("Hovering over center-ish square (4,4) should highlight all 8 correct knight moves", () => {
    const cell = screen.getByTestId("cell-4-4");
    fireEvent.mouseEnter(cell);
    expect(cell).toHaveClass("selected-square");

    const expectedMoves = getExpectedKnightMoves(4, 4);
    const allCells = screen.getAllByTestId(/cell-\d-\d/);

    allCells.forEach((c) => {
      const [_, r, col] = c.dataset.testid.split("-").map(Number);
      const isExpected = expectedMoves.some(
        ([er, ec]) => er === r && ec === col
      );
      if (isExpected) {
        expect(c).toHaveClass("knight-move-target");
      } else {
        expect(c).not.toHaveClass("knight-move-target");
      }
    });
  });
});
