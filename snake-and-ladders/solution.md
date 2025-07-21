To build the Snakes and Ladders game, we:

1. Created a 10x10 grid using CSS Grid.
2. Created a player state with position initialized to 1.
3. Simulated dice rolls using Math.random for values 1 to 6.
4. On dice roll, updated the player's position.
5. Checked if the player lands on a snake or ladder using a mapping.
6. Handled winning condition when the player reaches position 100.
7. Added a reset button to start over.

The core challenge was to map player movement correctly and update state reactively in functional components using hooks.

This version is single-player; multi-player support can be added similarly using separate state variables for each.