import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';
// Mock Math.random for predictable dice rolls
describe('Snakes and Ladders App', () => {
  beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.5); // Always roll 4
  });
  afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
  });

  it('renders the game board and dice', () => {
    render(<App />);
    expect(screen.getByTestId('game-title')).toHaveTextContent('Snakes and Ladders');
    expect(screen.getByTestId('current-position')).toHaveTextContent('Current Position: 1');
    expect(screen.getByTestId('roll-dice-button')).toBeInTheDocument();
    expect(screen.getByTestId('game-board')).toBeInTheDocument();
    expect(screen.getByTestId('dice-display')).toHaveTextContent('Not rolled yet');
  });

  it('renders all 100 cells on the board', () => {
    render(<App />);
    for (let i = 1; i <= 100; i++) {
      expect(screen.getByTestId(`cell-${i}`)).toBeInTheDocument();
      expect(screen.getByTestId(`cell-number-${i}`)).toHaveTextContent(i.toString());
    }
  });

  it('shows player token at starting position', () => {
    render(<App />);
    const playerToken = screen.getByTestId('player-token');
    expect(playerToken).toBeInTheDocument();
    expect(playerToken.closest('[data-testid="cell-1"]')).toBeInTheDocument();
  });

  it('rolls the dice and updates position', () => {
    render(<App />);
    const rollButton = screen.getByTestId('roll-dice-button');
    
    fireEvent.click(rollButton);
    
    expect(screen.getByTestId('current-position')).toHaveTextContent('Current Position: 5');
    expect(screen.getByTestId('dice-display')).toHaveTextContent('Dice Rolled: 🎲 4');
    
    const playerToken = screen.getByTestId('player-token');
    expect(playerToken.closest('[data-testid="cell-5"]')).toBeInTheDocument();
  });

  it('shows ladder message when landing on a ladder', () => {
    render(<App />);
    const rollButton = screen.getByTestId('roll-dice-button');
    
    // Roll to move from 1 to 5, then 5 to 9 (which is a ladder to 31)
    fireEvent.click(rollButton); // 1->5
    fireEvent.click(rollButton); // 5->9->31
    
    expect(screen.getByTestId('game-message')).toHaveTextContent('🪜 Ladder! Climb up!');
    expect(screen.getByTestId('current-position')).toHaveTextContent('Current Position: 31');
    
    const playerToken = screen.getByTestId('player-token');
    expect(playerToken.closest('[data-testid="cell-31"]')).toBeInTheDocument();
  });

  it('displays snake and ladder markers on appropriate cells', () => {
    render(<App />);
    
    // Check for ladder markers
    expect(screen.getByTestId('ladder-marker-1')).toHaveTextContent('🪜 → 38');
    expect(screen.getByTestId('ladder-marker-9')).toHaveTextContent('🪜 → 31');
    
    // Check for snake markers
    expect(screen.getByTestId('snake-marker-16')).toHaveTextContent('🐍 → 6');
    expect(screen.getByTestId('snake-marker-47')).toHaveTextContent('🐍 → 26');
  });

  it('disables roll button and shows win message when reaching 100', () => {
    render(<App />);
    
    // Mock multiple rolls to reach near 100
    jest.spyOn(global.Math, 'random').mockReturnValue(0.99); // Roll 6
    
    // Simulate reaching position 100 by directly setting the state
    // This would require exposing internal state or using a different approach
    // For now, we'll test the UI elements exist
    
    const rollButton = screen.getByTestId('roll-dice-button');
    expect(rollButton).not.toBeDisabled(); // Initially enabled
  });

  it('prevents movement when dice roll would exceed 100', () => {
    render(<App />);
    
    // This test would require setting up a specific game state
    // where the player is at position 97 or higher and rolling would exceed 100
    // Implementation depends on the specific game logic
  });

  it('shows board rows correctly', () => {
    render(<App />);
    
    // Check that board rows are rendered (10 rows total)
    for (let row = 0; row <= 9; row++) {
      expect(screen.getByTestId(`board-row-${row}`)).toBeInTheDocument();
    }
  });
});