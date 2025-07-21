# Test Cases – Snake and Ladders 🎲

## ✅ Test Case 1: Basic dice roll
- Action: Click “Roll Dice”
- Output: Random number between 1-6 displayed

## ✅ Test Case 2: Player moves normally
- Start Position: 5
- Dice: 4
- Expected Output: Move to position 9

## ✅ Test Case 3: Player hits a ladder
- Start: 1 → Ladder → 38
- Dice: 0 (simulate landing)
- Expected Output: Auto move to 38

## ✅ Test Case 4: Player hits a snake
- Start: 16 → Snake → 6
- Expected Output: Move down to 6

## ✅ Test Case 5: Win condition
- Position: 97
- Dice: 3
- Expected Output: Move to 100, show “You win!”

## ✅ Test Case 6: Overshoot 100
- Position: 98
- Dice: 5
- Expected Output: Do not move, show warning or stay on 98
