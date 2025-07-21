import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Bishop Move Visualizer', () => {
  test('renders an 8x8 chessboard', () => {
    render(<App />);
    const cells = screen.getAllByRole('gridcell');
    expect(cells).toHaveLength(64);
  });

  test('highlights hovered square and diagonals', () => {
    render(<App />);
    // The top-left cell (0,0) is the first cell
    const cells = screen.getAllByRole('gridcell');
    const firstCell = cells[0];
    fireEvent.mouseEnter(firstCell);
    // The hovered cell should have the hovered class
    expect(firstCell.className).toMatch(/hovered/);
    // Diagonal cells from (0,0) are (1,1), (2,2), ..., (7,7)
    for (let i = 1; i < 8; i++) {
      const idx = i * 8 + i;
      expect(cells[idx].className).toMatch(/bishop-move/);
    }
    fireEvent.mouseLeave(firstCell);
    // After mouse leave, no cell should have hovered or bishop-move
    cells.forEach(cell => {
      expect(cell.className).not.toMatch(/hovered|bishop-move/);
    });
  });

  test('highlights correct diagonals for a center square', () => {
    render(<App />);
    const cells = screen.getAllByRole('gridcell');
    // Center square (3,3)
    const centerIdx = 3 * 8 + 3;
    const centerCell = cells[centerIdx];
    fireEvent.mouseEnter(centerCell);
    // The hovered cell should have the hovered class
    expect(centerCell.className).toMatch(/hovered/);
    // Check a few diagonal cells
    const diagonals = [
      (2 * 8) + 2, // (2,2)
      (4 * 8) + 4, // (4,4)
      (2 * 8) + 4, // (2,4)
      (4 * 8) + 2, // (4,2)
    ];
    diagonals.forEach(idx => {
      expect(cells[idx].className).toMatch(/bishop-move/);
    });
  });
}); 