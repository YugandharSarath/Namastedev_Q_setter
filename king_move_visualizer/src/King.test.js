import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App'; 
import '@testing-library/jest-dom';

describe('King Moves Visualizer', () => {
  const getCell = (row, col) => screen.getByTestId(`cell-${row}-${col}`);

  beforeEach(() => {
    render(<App />);
  });

  it('highlights correct king moves for center (d4)', async () => {
    const user = userEvent.setup();
    await user.hover(getCell(3, 3));

    expect(getCell(3, 3)).toHaveClass('hovered');

    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        const r = 3 + dr;
        const c = 3 + dc;
        if (r >= 0 && r < 8 && c >= 0 && c < 8 && !(dr === 0 && dc === 0)) {
          expect(getCell(r, c)).toHaveClass('king-move');
        }
      }
    }
  });

  it('highlights king moves from corner (a1)', async () => {
    const user = userEvent.setup();
    await user.hover(getCell(7, 0));

    expect(getCell(7, 0)).toHaveClass('hovered');

    const moves = [
      [6, 0], [6, 1], [7, 1]
    ];

    for (const [r, c] of moves) {
      expect(getCell(r, c)).toHaveClass('king-move');
    }
  });

  it('removes highlights when mouse leaves', async () => {
    const user = userEvent.setup();
    await user.hover(getCell(4, 4));
    await user.unhover(getCell(4, 4));

    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        expect(getCell(r, c)).not.toHaveClass('hovered');
        expect(getCell(r, c)).not.toHaveClass('king-move');
      }
    }
  });
});
