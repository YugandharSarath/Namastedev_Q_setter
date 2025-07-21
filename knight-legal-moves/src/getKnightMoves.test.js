const { getKnightMoves } = require('./knight');

describe('getKnightMoves', () => {
  it('returns correct moves for d4', () => {
    // d4 is (row 3, col 3)
    const moves = getKnightMoves(3, 3);
    const expected = [
      [5, 4], [5, 2], [1, 4], [1, 2],
      [4, 5], [4, 1], [2, 5], [2, 1]
    ];
    expect(moves).toEqual(expect.arrayContaining(expected));
    expect(moves.length).toBe(8);
  });

  it('returns correct moves for a1', () => {
    // a1 is (row 0, col 0)
    const moves = getKnightMoves(0, 0);
    const expected = [
      [2, 1], [1, 2]
    ];
    expect(moves).toEqual(expect.arrayContaining(expected));
    expect(moves.length).toBe(2);
  });

  it('returns correct moves for h8', () => {
    // h8 is (row 7, col 7)
    const moves = getKnightMoves(7, 7);
    const expected = [
      [5, 6], [6, 5]
    ];
    expect(moves).toEqual(expect.arrayContaining(expected));
    expect(moves.length).toBe(2);
  });

  it('returns all 8 moves for e5', () => {
    // e5 is (row 4, col 4)
    const moves = getKnightMoves(4, 4);
    expect(moves.length).toBe(8);
  });

  it('returns empty array for out-of-bounds input', () => {
    expect(getKnightMoves(8, 8)).toEqual([]);
    expect(getKnightMoves(-1, -1)).toEqual([]);
  });
}); 