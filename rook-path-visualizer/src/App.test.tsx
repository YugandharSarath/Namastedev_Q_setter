import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("Rook Path Visualizer", () => {
  test("renders an 8x8 board", () => {
    render(<App />);
    const cells = screen.getAllByRole("gridcell");
    expect(cells).toHaveLength(64);
  });

  test("highlights correct row and column on hover", () => {
    render(<App />);
    const cells = screen.getAllByRole("gridcell");
    // Hover over d4 (row 3, col 3)
    const d4 = cells[3 * 8 + 3];
    fireEvent.mouseEnter(d4);
    // d4 should be hovered
    expect(d4.className).toMatch(/hovered/);
    // All cells in row 3 and col 3 except d4 should have rook-move
    cells.forEach((cell, idx) => {
      const row = Math.floor(idx / 8);
      const col = idx % 8;
      if ((row === 3 || col === 3) && !(row === 3 && col === 3)) {
        expect(cell.className).toMatch(/rook-move/);
      }
    });
    fireEvent.mouseLeave(d4);
  });

  test("no highlights when not hovering", () => {
    render(<App />);
    const cells = screen.getAllByRole("gridcell");
    cells.forEach(cell => {
      expect(cell.className).not.toMatch(/hovered|rook-move/);
    });
  });
});

// Patch for gridcell role, since divs don't have it by default
// Add data-testid to .cell in App.tsx for reliable selection 