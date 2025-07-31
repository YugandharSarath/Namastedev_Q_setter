import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

describe("Rook Path Visualizer", () => {
  test("renders an 8x8 board", () => {
    render(<App />);
    const cells = screen.getAllByRole("gridcell");
    expect(cells).toHaveLength(64);
  });

  test("highlights correct row and column on hover", () => {
    render(<App />);
    const cells = screen.getAllByRole("gridcell");

    const d4 = cells[3 * 8 + 3];
    fireEvent.mouseEnter(d4);

    expect(d4.className).toMatch(/hovered/);

    cells.forEach((cell, idx) => {
      const row = Math.floor(idx / 8);
      const col = idx % 8;

      if ((row === 3 || col === 3) && !(row === 3 && col === 3)) {
        expect(cell.className).toMatch(/rook-move/);
      } else {
        expect(cell.className).not.toMatch(/rook-move/);
      }
    });
    fireEvent.mouseLeave(d4);
  });

  test("no highlights when not hovering", () => {
    render(<App />);
    const cells = screen.getAllByRole("gridcell");
    cells.forEach((cell) => {
      expect(cell.className).not.toMatch(/hovered|rook-move/);
    });
  });
});

test("highlights correct row and column on hovering top-left corner (a8)", () => {
  render(<App />);
  const cells = screen.getAllByRole("gridcell");

  const a8 = cells[0 * 8 + 0]; // Row 0, Column 0
  fireEvent.mouseEnter(a8);

  expect(a8.className).toMatch(/hovered/);

  cells.forEach((cell, idx) => {
    const row = Math.floor(idx / 8);
    const col = idx % 8;

    if ((row === 0 || col === 0) && !(row === 0 && col === 0)) {
      expect(cell.className).toMatch(/rook-move/);
    } else {
      expect(cell.className).not.toMatch(/rook-move/);
    }
  });

  fireEvent.mouseLeave(a8);
});

test("highlights correct row and column on hovering bottom-right corner (h1)", () => {
  render(<App />);
  const cells = screen.getAllByRole("gridcell");

  const h1 = cells[7 * 8 + 7]; // Row 7, Column 7
  fireEvent.mouseEnter(h1);

  expect(h1.className).toMatch(/hovered/);

  cells.forEach((cell, idx) => {
    const row = Math.floor(idx / 8);
    const col = idx % 8;

    if ((row === 7 || col === 7) && !(row === 7 && col === 7)) {
      expect(cell.className).toMatch(/rook-move/);
    } else {
      expect(cell.className).not.toMatch(/rook-move/);
    }
  });

  fireEvent.mouseLeave(h1);
});
