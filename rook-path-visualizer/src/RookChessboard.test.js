import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App"; 
import '@testing-library/jest-dom'; 

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
    cells.forEach(cell => {
      expect(cell.className).not.toMatch(/hovered|rook-move/);
    });
  });
});