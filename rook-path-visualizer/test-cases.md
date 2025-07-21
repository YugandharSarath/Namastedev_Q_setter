# Test Cases – Rook Path Visualizer

### ✅ Valid Input Cases
1. Input: `d4`  
   Output: All horizontal (row) and vertical (column) moves

2. Input: `a1`  
   Output: `a2` to `a8` and `b1` to `h1`

3. Input: `h8`  
   Output: `h1` to `h7` and `a8` to `g8`

4. Input: `e5`  
   Output: Full cross pattern: up, down, left, right from `e5`

### ❌ Invalid Input Cases
5. Input: `z9`  
   Output: `[]`

6. Input: `e0`  
   Output: `[]`

7. Input: `h9`  
   Output: `[]`

8. Input: `?5`  
   Output: `[]`
