// knight.js
const BOARD_SIZE = 8;

function getKnightMoves(row, col) {
  if (row < 0 || row >= BOARD_SIZE || col < 0 || col >= BOARD_SIZE) return [];

  const offsets = [
    [2, 1], [2, -1], [-2, 1], [-2, -1],
    [1, 2], [1, -2], [-1, 2], [-1, -2]
  ];

  return offsets
    .map(([dr, dc]) => [row + dr, col + dc])
    .filter(([r, c]) => r >= 0 && r < BOARD_SIZE && c >= 0 && c < BOARD_SIZE);
}

export { getKnightMoves };
