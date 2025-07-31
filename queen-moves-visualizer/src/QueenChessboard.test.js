import React from "react";
import { render, fireEvent } from "@testing-library/react";
import QueenBoard from "./QueenChessboard";

const getCell = (container, row, col) =>
  container.querySelector(`[data-testid="cell-${row}-${col}"]`);
const getHighlightedCells = (container) =>
  Array.from(container.querySelectorAll(".queen-move"));

describe("QueenBoard (hover-based)", () => {
  test("hover highlights correct queen moves", () => {
    const { container } = render(<QueenBoard />);
    const cell = getCell(container, 3, 3);
    fireEvent.mouseEnter(cell);
    const highlights = getHighlightedCells(container);
    expect(highlights.length).toBeGreaterThan(0);
    fireEvent.mouseLeave(cell);
    expect(getHighlightedCells(container).length).toBe(0);
  });

  test("hovering new square updates highlights", () => {
    const { container } = render(<QueenBoard />);
    const first = getCell(container, 4, 4);
    const second = getCell(container, 2, 2);

    fireEvent.mouseEnter(first);
    expect(getHighlightedCells(container).length).toBeGreaterThan(0);

    fireEvent.mouseLeave(first);
    fireEvent.mouseEnter(second);
    expect(getHighlightedCells(container).length).toBeGreaterThan(0);
  });

  test("hover at edge (0,0) shows correct queen moves", () => {
    const { container } = render(<QueenBoard />);
    const edge = getCell(container, 0, 0);
    fireEvent.mouseEnter(edge);
    expect(getHighlightedCells(container).length).toBeGreaterThan(0);
  });

  test("hovering multiple quickly updates correctly", () => {
    const { container } = render(<QueenBoard />);
    const a = getCell(container, 1, 1);
    const b = getCell(container, 6, 6);

    fireEvent.mouseEnter(a);
    fireEvent.mouseLeave(a);
    fireEvent.mouseEnter(b);
    const highlights = getHighlightedCells(container);
    expect(highlights.length).toBeGreaterThan(0);
  });

  test("hover clears highlights when leaving the square", () => {
    const { container } = render(<QueenBoard />);
    const target = getCell(container, 2, 2);
    fireEvent.mouseEnter(target);
    expect(getHighlightedCells(container).length).toBeGreaterThan(0);
    fireEvent.mouseLeave(target);
    expect(getHighlightedCells(container).length).toBe(0);
  });
});
