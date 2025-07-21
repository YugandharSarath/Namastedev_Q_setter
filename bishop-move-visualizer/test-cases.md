# Test Cases – Bishop Move Visualizer

### ✅ Valid Input Cases
1. Input: `d4`  
   Output: All diagonals from `d4` until board edge.

2. Input: `a1`  
   Output: Diagonal moves: `b2`, `c3`, ..., `h8`

3. Input: `h1`  
   Output: Diagonal moves: `g2`, `f3`, ..., `a8`

4. Input: `e5`  
   Output: All 4 diagonals

### ❌ Invalid Input Cases
5. Input: `z3`  
   Output: `[]`

6. Input: `e0`  
   Output: `[]`

7. Input: `99`  
   Output: `[]`

8. Input: `A9`  
   Output: `[]`
