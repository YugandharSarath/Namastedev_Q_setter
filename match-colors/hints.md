### `hints.md`

### Hints for MatchColorGame with Data Test IDs

To complete the `MatchColorGame` component, you need to implement the core logic for shuffling cards, handling clicks, managing game state, and adding the required `data-testid` attributes for testing.

#### 1. Setting up Data Test IDs

Make sure to add the required `data-testid` attributes to your JSX elements:

**Code Snippet:**

```jsx
return (
  <div data-testid="game-container" className="game-container">
    <h1 data-testid="game-title">Match the Colors 🎨</h1>
    
    <div data-testid="game-board" className="game-board">
      {cards.map((card, index) => (
        <div
          key={card.id}
          data-testid={`card-${index}`}
          className="card"
          onClick={() => handleClick(card)}
        >
          {/* Card content */}
        </div>
      ))}
    </div>
    
    <p data-testid="turns-display">Moves: {moves}</p>
    <button data-testid="reset-button" onClick={resetGame}>
      Reset Game
    </button>
  </div>
);
```

-----

#### 2. Shuffling and Initializing the Cards

The `useEffect` hook with an empty dependency array (`[]`) is perfect for setting up the game when the component first mounts. You need to create 20 cards from 10 colors (pairs) and shuffle them.

**Code Snippet:**

```jsx
const initialColors = [
  'red', 'blue', 'green', 'yellow', 'purple', 
  'orange', 'pink', 'cyan', 'brown', 'lime'
];

useEffect(() => {
  // Create pairs of colors (20 cards total)
  const doubledColors = [...initialColors, ...initialColors];
  
  // Fisher-Yates shuffle algorithm
  for (let i = doubledColors.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [doubledColors[i], doubledColors[j]] = [doubledColors[j], doubledColors[i]];
  }

  const newCards = doubledColors.map((color, index) => ({
    id: index,
    value: color,
    revealed: false,
    matched: false,
  }));
  setCards(newCards);
}, []);
```

-----

#### 3. Handling Card Clicks

The `handleClick` function is the most critical part of the game logic. It needs to handle several scenarios and prevent invalid actions.

**Code Snippet:**

```jsx
const handleClick = (card) => {
  // Edge cases: prevent clicks on revealed/matched cards or when two cards are selected
  if (card.revealed || card.matched || secondCard) {
    return;
  }

  // Reveal the clicked card
  setCards(prevCards =>
    prevCards.map(c => (c.id === card.id ? { ...c, revealed: true } : c))
  );

  // Handle first or second card selection
  if (!firstCard) {
    setFirstCard(card);
  } else {
    setSecondCard(card);
    // This will trigger the match-checking logic
  }
};
```

-----

#### 4. Checking for a Match

Use a separate `useEffect` hook to handle the match-checking logic when both cards are selected. This keeps the code clean and separates concerns.

**Code Snippet:**

```jsx
useEffect(() => {
  if (firstCard && secondCard) {
    setMoves(prevMoves => prevMoves + 1);

    if (firstCard.value === secondCard.value) {
      // It's a match! Update cards as matched
      setTimeout(() => {
        setCards(prevCards =>
          prevCards.map(card => {
            if (card.value === firstCard.value) {
              return { ...card, matched: true };
            }
            return card;
          })
        );
        setFirstCard(null);
        setSecondCard(null);
      }, 200);
    } else {
      // Not a match, flip back after a delay
      setTimeout(() => {
        setCards(prevCards =>
          prevCards.map(card => {
            if (card.id === firstCard.id || card.id === secondCard.id) {
              return { ...card, revealed: false };
            }
            return card;
          })
        );
        setFirstCard(null);
        setSecondCard(null);
      }, 800);
    }
  }
}, [firstCard, secondCard]);
```

-----

#### 5. Checking for Win Condition

Monitor the cards array to detect when all cards are matched:

**Code Snippet:**

```jsx
useEffect(() => {
  if (cards.length > 0 && cards.every(card => card.matched)) {
    setWon(true);
  }
}, [cards]);
```

-----

#### 6. Resetting the Game

The `resetGame` function should clear all state and re-initialize the cards:

**Code Snippet:**

```jsx
const resetGame = () => {
  setCards([]);
  setFirstCard(null);
  setSecondCard(null);
  setMoves(0);
  setWon(false);

  // Re-create and shuffle cards
  const doubledColors = [...initialColors, ...initialColors];
  const shuffledCards = doubledColors
    .map((color, index) => ({
      id: index,
      value: color,
      revealed: false,
      matched: false,
    }))
    .sort(() => Math.random() - 0.5);
    
  setCards(shuffledCards);
};
```

-----

#### 7. Testing with Data Test IDs

Your test files can now reliably select elements using the data-testid attributes:

**Test Example:**

```jsx
import { render, screen, fireEvent } from '@testing-library/react';
import MatchColorGame from './MatchColorGame';

test('renders game elements with correct data-testids', () => {
  render(<MatchColorGame />);
  
  expect(screen.getByTestId('game-container')).toBeInTheDocument();
  expect(screen.getByTestId('game-title')).toBeInTheDocument();
  expect(screen.getByTestId('game-board')).toBeInTheDocument();
  expect(screen.getByTestId('turns-display')).toBeInTheDocument();
  expect(screen.getByTestId('reset-button')).toBeInTheDocument();
  
  // Check for 20 cards (card-0 through card-19)
  for (let i = 0; i < 20; i++) {
    expect(screen.getByTestId(`card-${i}`)).toBeInTheDocument();
  }
});
```

-----
