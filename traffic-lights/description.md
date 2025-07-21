# Traffic Light System – React + TypeScript

## Objective
Build a simple yet functional **Traffic Light System** using React and TypeScript. The UI simulates a real-world traffic signal with Red, Yellow, and Green lights and cycles between them based on timer intervals.

## Features
- Traffic lights: Red, Yellow, Green
- Lights switch in a loop: Red → Green → Yellow → Red
- Each light shows for a specific duration:
  - Red: 3 seconds
  - Green: 3 seconds
  - Yellow: 1 second
- Fully functional using React Hooks and TypeScript
- Basic styling using regular CSS

## Technologies Used
- React
- TypeScript
- CSS (no frameworks)
- setTimeout for timing control

## How It Works
1. A state variable keeps track of the current light.
2. `useEffect` sets up a timer that changes the light based on the active one.
3. The timer interval updates the state in the correct sequence.
4. The UI highlights the active light with color.
