import React, { useState, useEffect } from 'react';

const initialColors = [
  'red', 'blue', 'green', 'yellow', 'purple', 
  'orange', 'pink', 'cyan', 'brown', 'lime'
];

const MatchColorGame = () => {
  const [cards, setCards] = useState([]);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [moves, setMoves] = useState(0);
  const [won, setWon] = useState(false);

  useEffect(() => {
    resetGame();
  }, []);

  const shuffle = (array) => {
    // Create pairs of colors (20 cards total)
    return [...array, ...array]
      .map((value, index) => ({
        value, 
        id: index,
        revealed: false, 
        matched: false 
      }))
      .sort(() => Math.random() - 0.5); 
  };

  const handleClick = (card) => {
    // Prevent clicks on revealed/matched cards or when two cards are already selected
    if (card.revealed || card.matched || secondCard) return;

    setCards((prevCards) =>
      prevCards.map((c) =>
        c.id === card.id ? { ...c, revealed: true } : c
      )
    );

    if (!firstCard) {
      setFirstCard(card);
    } else {
      setSecondCard(card);
      setMoves((prev) => prev + 1); 

      if (firstCard.value === card.value) {
        // Match found
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) =>
              c.value === card.value ? { ...c, matched: true, revealed: true } : c
            )
          );

          setFirstCard(null);
          setSecondCard(null);
        }, 200); 
      } else {
        // No match
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) =>
              c.id === firstCard.id || c.id === card.id
                ? { ...c, revealed: false }
                : c
            )
          );

          setFirstCard(null);
          setSecondCard(null);
        }, 800); 
      }
    }
  };

  useEffect(() => {
    if (cards.length > 0 && cards.every((card) => card.matched)) {
      setWon(true);
    }
  }, [cards]); 

  const resetGame = () => {
    setCards(shuffle(initialColors)); 
    setFirstCard(null);
    setSecondCard(null);
    setMoves(0);
    setWon(false);
  };

  return (
    <div className="game-container" data-testid="game-container">
      <h1 data-testid="game-title">Match the Colors 🎨</h1>
      <div className="grid" data-testid="game-board">
        {cards.map((card, index) => (
          <div
            key={card.id}
            data-testid={`card-${index}`}
            role="button"
            aria-label={`card-${card.id}`}
            className={`card ${card.revealed || card.matched ? 'revealed' : ''}`}
            onClick={() => handleClick(card)}
            style={{
              backgroundColor: card.revealed || card.matched ? card.value : '#444',
            }}
          ></div>
        ))}
      </div>
      <p data-testid="turns-display">Moves: {moves}</p>
      {won && <p className="won">🎉 You won!</p>}
      <button onClick={resetGame} data-testid="reset-button">Reset Game</button>
    </div>
  );
};

export default MatchColorGame;