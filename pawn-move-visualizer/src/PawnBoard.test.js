import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App'; 

function algebraicToIndex(pos) {
  if (!/^[a-h][1-8]$/.test(pos)) return null; 
  const col = pos.charCodeAt(0) - 'a'.charCodeAt(0); 
  const row = 8 - parseInt(pos[1], 10); 
  return [row, col];
}

describe('Pawn Move Visualizer', () => {

  beforeEach(() => {
    render(<App />);
  });

  async function hoverCell(pos) {
    const idx = algebraicToIndex(pos);
    if (!idx) return; 
    const [row, col] = idx;

    const cell = screen.getAllByRole('gridcell')[row * 8 + col];
    await userEvent.hover(cell); 
    return cell;
  }

  function getPawnMoveCells() {
    return screen.getAllByRole('gridcell').filter(cell =>
      cell.className.includes('pawn-move')
    );
  }

  it('shows correct moves for white pawn on e2', async () => {
    await hoverCell('e2'); 
    const moves = getPawnMoveCells(); 

    expect(moves).toHaveLength(2);
    const indices = moves.map(cell => screen.getAllByRole('gridcell').indexOf(cell));
    expect(indices).toEqual(expect.arrayContaining([5 * 8 + 4, 4 * 8 + 4]));
  });

  it('shows correct moves for white pawn on e4', async () => {
    await hoverCell('e4'); 
    const moves = getPawnMoveCells(); 

    expect(moves).toHaveLength(1);
    const idx = screen.getAllByRole('gridcell').indexOf(moves[0]);
    expect(idx).toBe(3 * 8 + 4);
  });

  it('shows correct moves for white pawn on h2', async () => {
    await hoverCell('h2'); 
    const moves = getPawnMoveCells(); 

    expect(moves).toHaveLength(2);
    const indices = moves.map(cell => screen.getAllByRole('gridcell').indexOf(cell));
    expect(indices).toEqual(expect.arrayContaining([5 * 8 + 7, 4 * 8 + 7]));
  });

  it('shows correct moves for white pawn on h8 (edge, no moves)', async () => {
    await hoverCell('h8'); 
    const moves = getPawnMoveCells(); 
    expect(moves).toHaveLength(0); 
  });

  it('shows no moves for invalid positions', () => {

    expect(algebraicToIndex('z9')).toBeNull();
    expect(algebraicToIndex('@2')).toBeNull();
    expect(algebraicToIndex('e9')).toBeNull();
    expect(algebraicToIndex('e0')).toBeNull();
  });

  it('clears pawn moves on mouse leave', async () => {
    const cell = await hoverCell('e2'); 
    expect(getPawnMoveCells()).toHaveLength(2); 
    await userEvent.unhover(cell); 
    expect(getPawnMoveCells()).toHaveLength(0); 
  });

  it('shows correct moves for white pawn on d7', async () => {
    await hoverCell('d7'); 

    expect(getPawnMoveCells()).toHaveLength(1);
  });

  it('shows correct moves for white pawn on d5', async () => {
    await hoverCell('d5'); 

    const moves = getPawnMoveCells();
    expect(moves).toHaveLength(1);
    const idx = screen.getAllByRole('gridcell').indexOf(moves[0]);
    expect(idx).toBe(2 * 8 + 3);
  });
});