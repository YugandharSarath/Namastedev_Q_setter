function getKnightMoves(row, col) {
  if (row < 0 || row > 7 || col < 0 || col > 7) return [];
  const moves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  return moves
    .map(([dr, dc]) => [row + dr, col + dc])
    .filter(([r, c]) => r >= 0 && r < 8 && c >= 0 && c < 8);
}

module.exports = { getKnightMoves }; 