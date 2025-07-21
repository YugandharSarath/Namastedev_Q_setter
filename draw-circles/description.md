# Draw Circles with Undo/Redo (React + TypeScript)

## Objective
Create an interactive UI that allows users to click on a canvas to draw circles at the exact mouse click position. Implement Undo and Redo functionality so users can remove or re-add circles in order.

## Features
- Draw circles at mouse click positions
- Undo the last circle drawn
- Redo the last undone circle
- Responsive UI updates without page reloads
- Built with React and TypeScript using basic HTML/CSS (no external drawing libraries)

## Technologies Used
- React (with hooks)
- TypeScript
- CSS (no frameworks)

## How It Works
1. The canvas listens for `onClick` events.
2. Each click calculates the mouse position relative to the canvas and stores a circle’s coordinates in state.
3. Undo removes the last item from the `circles` array and pushes it to `undoneCircles`.
4. Redo pops from `undoneCircles` and adds back to `circles`.
5. Circles are rendered using absolute positioning based on coordinates.
