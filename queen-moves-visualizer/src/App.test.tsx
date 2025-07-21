import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import '@testing-library/jest-dom';

describe('Queen Moves Visualizer', () => {
  function getCell(row: number, col: number) {
    // Cells are rendered in row-major order, 0-indexed
    return screen.getByTestId(`cell-${row}-${col}`);
  }

  beforeEach(() => {
    render(<App />);
  });

  it('highlights correct cells for center (d4)', async () => {
    // d4 is (3,3) in 0-indexed
    const user = userEvent.setup();
    await user.hover(getCell(3, 3));
    // Check hovered cell
    expect(getCell(3, 3)).toHaveClass('hovered');
    // Horizontal and vertical
    for (let i = 0; i < 8; i++) {
      if (i !== 3) {
        expect(getCell(3, i)).toHaveClass('queen-move');
        expect(getCell(i, 3)).toHaveClass('queen-move');
      }
    }
    // Diagonals
    for (let i = 1; i < 8; i++) {
      const dr = [3 + i, 3 - i];
      const dc = [3 + i, 3 - i];
      dr.forEach(r => dc.forEach(c => {
        if (r >= 0 && r < 8 && c >= 0 && c < 8 && r !== 3 && c !== 3) {
          if (Math.abs(r - 3) === Math.abs(c - 3)) {
            expect(getCell(r, c)).toHaveClass('queen-move');
          }
        }
      }));
    }
  });

  it('highlights correct cells for bottom-left corner (a1)', async () => {
    const user = userEvent.setup();
    await user.hover(getCell(7, 0));
    expect(getCell(7, 0)).toHaveClass('hovered');
    // Vertical
    for (let r = 0; r < 7; r++) {
      expect(getCell(r, 0)).toHaveClass('queen-move');
    }
    // Horizontal
    for (let c = 1; c < 8; c++) {
      expect(getCell(7, c)).toHaveClass('queen-move');
    }
    // Diagonal
    for (let i = 1; i < 8; i++) {
      if (7 - i >= 0 && i < 8) {
        expect(getCell(7 - i, i)).toHaveClass('queen-move');
      }
    }
  });

  it('highlights correct cells for right edge (h5)', async () => {
    const user = userEvent.setup();
    await user.hover(getCell(4, 7));
    expect(getCell(4, 7)).toHaveClass('hovered');
    // Horizontal
    for (let c = 0; c < 7; c++) {
      expect(getCell(4, c)).toHaveClass('queen-move');
    }
    // Vertical
    for (let r = 0; r < 8; r++) {
      if (r !== 4) expect(getCell(r, 7)).toHaveClass('queen-move');
    }
    // Diagonals
    for (let i = 1; i < 8; i++) {
      if (4 - i >= 0 && 7 - i >= 0) expect(getCell(4 - i, 7 - i)).toHaveClass('queen-move');
      if (4 + i < 8 && 7 - i >= 0) expect(getCell(4 + i, 7 - i)).toHaveClass('queen-move');
    }
  });

  it('highlights correct cells for top-right corner (h8)', async () => {
    const user = userEvent.setup();
    await user.hover(getCell(0, 7));
    expect(getCell(0, 7)).toHaveClass('hovered');
    // Vertical
    for (let r = 1; r < 8; r++) {
      expect(getCell(r, 7)).toHaveClass('queen-move');
    }
    // Horizontal
    for (let c = 0; c < 7; c++) {
      expect(getCell(0, c)).toHaveClass('queen-move');
    }
    // Diagonal
    for (let i = 1; i < 8; i++) {
      if (0 + i < 8 && 7 - i >= 0) expect(getCell(0 + i, 7 - i)).toHaveClass('queen-move');
    }
  });

  it('removes highlights when mouse leaves', async () => {
    const user = userEvent.setup();
    await user.hover(getCell(3, 3));
    expect(getCell(3, 3)).toHaveClass('hovered');
    await user.unhover(getCell(3, 3));
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        expect(getCell(r, c)).not.toHaveClass('hovered');
        expect(getCell(r, c)).not.toHaveClass('queen-move');
      }
    }
  });
}); 