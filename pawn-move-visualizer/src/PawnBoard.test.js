import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App'; // Replace with your PawnBoard component

describe('Pawn Move Visualizer', () => {
  test('renders an 8x8 chessboard', () => {
    render(<App />);
    const cells = screen.getAllByRole('gridcell');
    expect(cells).toHaveLength(64);
  });

  test('highlights one move forward for non-starting pawn', () => {
    render(<App />);
    const cells = screen.getAllByRole('gridcell');
    const e4 = cells[4 * 8 + 4]; // e4
    fireEvent.mouseEnter(e4);

    expect(e4.className).toMatch(/hovered/);
    const expectedIdx = (3 * 8) + 4; // e5
    expect(cells[expectedIdx].className).toMatch(/pawn-move/);

    fireEvent.mouseLeave(e4);
    cells.forEach(cell => {
      expect(cell.className).not.toMatch(/pawn-move|hovered/);
    });
  });

  test('highlights two moves forward for starting position', () => {
    render(<App />);
    const cells = screen.getAllByRole('gridcell');
    const e2 = cells[6 * 8 + 4]; // e2
    fireEvent.mouseEnter(e2);

    expect(e2.className).toMatch(/hovered/);
    const expected1 = (5 * 8) + 4; // e3
    const expected2 = (4 * 8) + 4; // e4

    expect(cells[expected1].className).toMatch(/pawn-move/);
    expect(cells[expected2].className).toMatch(/pawn-move/);

    fireEvent.mouseLeave(e2);
    cells.forEach(cell => {
      expect(cell.className).not.toMatch(/pawn-move|hovered/);
    });
  });

  test('no pawn moves if on rank 1', () => {
    render(<App />);
    const cells = screen.getAllByRole('gridcell');
    const e1 = cells[7 * 8 + 4]; // e1 (promotion rank)
    fireEvent.mouseEnter(e1);

    expect(e1.className).toMatch(/hovered/);
    const pawnMoves = cells.filter(cell => cell.className.includes('pawn-move'));
    expect(pawnMoves).toHaveLength(0);

    fireEvent.mouseLeave(e1);
  });
});
