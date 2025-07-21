export const snakesAndLaddersMap: Record<number, number> = {
  16: 6, // Snake
  47: 26, // Snake
  49: 11, // Snake
  56: 53, // Snake
  62: 19, // Snake
  64: 60, // Snake
  87: 24, // Snake
  93: 73, // Snake
  95: 75, // Snake
  98: 78, // Snake

  1: 38, // Ladder
  4: 14, // Ladder
  9: 31, // Ladder
  21: 42, // Ladder
  28: 84, // Ladder
  36: 44, // Ladder
  51: 67, // Ladder
  71: 91, // Ladder
  80: 100, // Ladder
};

export const isSnake = (position: number): boolean =>
  position in snakesAndLaddersMap && position > snakesAndLaddersMap[position];
export const isLadder = (position: number): boolean =>
  position in snakesAndLaddersMap && position < snakesAndLaddersMap[position];
