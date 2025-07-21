To show legal pawn moves:

- Check if the hovered square is not null
- Forward move: `row === hovered[0] - 1`
- Two steps: `row === hovered[0] - 2` and `hovered[0] === 6`
- Diagonal captures: `row === hovered[0] - 1 && Math.abs(col - hovered[1]) === 1`
