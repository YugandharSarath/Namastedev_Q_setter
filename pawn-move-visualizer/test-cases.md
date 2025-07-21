# Test Cases – Pawn Move Visualizer

### ✅ Valid Input Cases
1. Input: `e2`, Color: White  
   Output: [`e3`, `e4`]

2. Input: `d7`, Color: Black  
   Output: [`d6`, `d5`]

3. Input: `e4`, Color: White  
   Output: [`e5`]

4. Input: `d5`, Color: Black  
   Output: [`d4`]

5. Input: `h2`, Color: White  
   Output: [`h3`, `h4`]

### ❌ Invalid Input Cases
6. Input: `z9`, Color: White  
   Output: `[]` (Invalid position)

7. Input: `@2`, Color: Black  
   Output: `[]` (Invalid character)

8. Input: `e9`, Color: White  
   Output: `[]` (Row out of bounds)

9. Input: `e0`, Color: Black  
   Output: `[]` (Row out of bounds)

10. Input: `h8`, Color: White  
    Output: `[]` (No forward movement possible from edge)
