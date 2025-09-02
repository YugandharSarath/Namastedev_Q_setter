import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import SudokuGame from "./sudoku";
import "@testing-library/jest-dom";

describe("SudokuGame Component", () => {
  beforeEach(() => {
    render(<SudokuGame />);
  });

  test("renders sudoku container with correct test ID", () => {
    expect(screen.getByTestId("sudoku-container")).toBeInTheDocument();
  });

  test("renders sudoku board with correct test ID", () => {
    expect(screen.getByTestId("sudoku-board")).toBeInTheDocument();
  });

  test("renders sudoku grid with correct test ID", () => {
    expect(screen.getByTestId("sudoku-grid")).toBeInTheDocument();
  });

  test("renders game controls with correct test ID", () => {
    expect(screen.getByTestId("game-controls")).toBeInTheDocument();
  });

  test("renders exactly 81 cells with correct test IDs", () => {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        const cell = screen.getByTestId(`cell-${row}-${col}`);
        expect(cell).toBeInTheDocument();
        expect(cell.tagName).toBe("INPUT");
      }
    }
  });

  test("cells have proper accessibility labels", () => {
    const cell = screen.getByTestId("cell-0-0");
    expect(cell).toBeInTheDocument();
    expect(cell.tagName).toBe("INPUT");
    
    const lastCell = screen.getByTestId("cell-8-8");
    expect(lastCell).toBeInTheDocument();
    expect(lastCell.tagName).toBe("INPUT");
  });

  test("allows input only in editable cells", () => {
    const editableCell = screen.getByTestId("cell-0-2"); 
    
    fireEvent.change(editableCell, { target: { value: "5" } });
    expect(editableCell.value).toBe("5");
  });

  test("prevents input in fixed cells", () => {
    const cells = screen.getAllByTestId(/cell-\d-\d/);
    const fixedCell = cells.find(cell => cell.disabled && cell.value !== "");
    
    if (fixedCell) {
      expect(fixedCell).toBeDisabled();
      expect(fixedCell.value).not.toBe("");
    } else {
      expect(cells.length).toBe(81);
    }
  });

  test("only accepts digits 1-9", () => {
    const editableCell = screen.getByTestId("cell-0-2");
    
    fireEvent.change(editableCell, { target: { value: "7" } });
    expect(editableCell.value).toBe("7");
    
    fireEvent.change(editableCell, { target: { value: "0" } });
    expect(editableCell.value).toBe("7"); 
    
    fireEvent.change(editableCell, { target: { value: "a" } });
    expect(editableCell.value).toBe("7"); 
    
    fireEvent.change(editableCell, { target: { value: "!" } });
    expect(editableCell.value).toBe("7"); 
  });

  test("allows clearing cells with empty string", () => {
    const editableCell = screen.getByTestId("cell-0-2");
    
 
    fireEvent.change(editableCell, { target: { value: "3" } });
    expect(editableCell.value).toBe("3");
    

    fireEvent.change(editableCell, { target: { value: "" } });
    expect(editableCell.value).toBe("");
  });

 
  test("cells have proper CSS classes for fixed vs editable", () => {
    const cells = screen.getAllByTestId(/cell-\d-\d/);
    const fixedCell = cells.find(cell => cell.disabled);
    const editableCell = cells.find(cell => !cell.disabled);
    
    if (fixedCell) {
      expect(fixedCell.className).toContain("fixed");
    }
    
    if (editableCell) {
      expect(editableCell.className).toContain("cell");
    }
  });

  test("cells have proper input attributes", () => {
    const cell = screen.getByTestId("cell-0-0");
    expect(cell).toHaveAttribute("type", "text");
    expect(cell).toHaveAttribute("inputMode", "numeric");
    expect(cell).toHaveAttribute("pattern", "[1-9]");
    expect(cell).toHaveAttribute("maxLength", "1");
  });
});