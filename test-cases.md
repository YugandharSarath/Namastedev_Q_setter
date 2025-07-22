# Test Cases – Color Code Game 🎨

## ✅ Test Case 1: Correct color selected
- Input: Random color `#FF5733`
- Options: `#FF5733`, `#33FF57`, `#5733FF`
- User selects: `#FF5733`
- Expected Output: Display "Correct!", show "Play Again" button

## ✅ Test Case 2: Incorrect color selected
- Input: Random color `#123456`
- Options: `#123456`, `#654321`, `#abcdef`
- User selects: `#abcdef`
- Expected Output: Display "Incorrect!", show "Play Again" button

## ✅ Test Case 3: Clicking “Play Again”
- Action: Click “Play Again”
- Expected Output: New color code and 3 new boxes shown, feedback reset

## ✅ Test Case 4: Color options are unique
- Expected: All 3 color boxes must show different hex codes
