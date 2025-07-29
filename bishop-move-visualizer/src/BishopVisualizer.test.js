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
    const cells = screen.getAllByRole('gridcell');
    const firstCell = cells[0];
    fireEvent.mouseEnter(firstCell);
    expect(firstCell.className).toMatch(/hovered/);
    for (let i = 1; i < 8; i++) {
      const idx = i * 8 + i;
      expect(cells[idx].className).toMatch(/bishop-move/);
    }
    fireEvent.mouseLeave(firstCell);
    cells.forEach(cell => {
      expect(cell.className).not.toMatch(/hovered|bishop-move/);
    });
  });

  test('highlights correct diagonals for a center square', () => {
    render(<App />);
    const cells = screen.getAllByRole('gridcell');
    const centerIdx = 3 * 8 + 3;
    const centerCell = cells[centerIdx];
    fireEvent.mouseEnter(centerCell);
    expect(centerCell.className).toMatch(/hovered/);
    const diagonals = [
      (2 * 8) + 2,
      (4 * 8) + 4,
      (2 * 8) + 4,
      (4 * 8) + 2,
    ];
    diagonals.forEach(idx => {
      expect(cells[idx].className).toMatch(/bishop-move/);
    });
  });
});
