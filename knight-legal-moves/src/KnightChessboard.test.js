
const { getKnightMoves } = require('./KnightChessboard');

describe('getKnightMoves', () => {
  it('returns correct moves for d4 (3,3)', () => {
    const moves = getKnightMoves(3, 3);
    const expected = [
      [5, 4], [5, 2], [1, 4], [1, 2],
      [4, 5], [4, 1], [2, 5], [2, 1]
    ];
    expect(moves).toEqual(expect.arrayContaining(expected));
    expect(moves.length).toBe(8);
  });

  it('returns correct moves for a1 (0,0)', () => {
    const moves = getKnightMoves(0, 0);
    const expected = [
      [2, 1], [1, 2]
    ];
    expect(moves).toEqual(expect.arrayContaining(expected));
    expect(moves.length).toBe(2);
  });

  it('returns correct moves for h8 (7,7)', () => {
    const moves = getKnightMoves(7, 7);
    const expected = [
      [5, 6], [6, 5]
    ];
    expect(moves).toEqual(expect.arrayContaining(expected));
    expect(moves.length).toBe(2);
  });

  it('returns 8 valid moves for e5 (4,4)', () => {
    const moves = getKnightMoves(4, 4);
    expect(moves.length).toBe(8);
  });

  it('returns empty array for out-of-bounds input', () => {
    expect(getKnightMoves(8, 8)).toEqual([]);
    expect(getKnightMoves(-1, -1)).toEqual([]);
  });
});
