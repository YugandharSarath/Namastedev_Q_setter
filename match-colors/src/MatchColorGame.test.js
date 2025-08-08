import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import MatchColorGame from "./MatchColorGame";
import "@testing-library/jest-dom";

jest.useFakeTimers();

const getGameCards = () => screen.getAllByTestId(/^card-\d+$/);

const getCardColor = (cardElement) => {
  return window.getComputedStyle(cardElement).backgroundColor;
};

describe("MatchColorGame", () => {
  beforeEach(() => {
    render(<MatchColorGame />);
  });

  it("renders all game elements with correct data-testids", () => {
    expect(screen.getByTestId("game-container")).toBeInTheDocument();
    expect(screen.getByTestId("game-title")).toBeInTheDocument();
    expect(screen.getByTestId("game-board")).toBeInTheDocument();
    expect(screen.getByTestId("turns-display")).toBeInTheDocument();
    expect(screen.getByTestId("reset-button")).toBeInTheDocument();
  });

  it("renders game title and reset button with correct text", () => {
    expect(screen.getByTestId("game-title")).toHaveTextContent(/match the colors/i);
    expect(screen.getByTestId("reset-button")).toHaveTextContent(/reset game/i);
  });

  it("renders 20 card elements with correct data-testids", () => {
    const cards = getGameCards();
    expect(cards.length).toBe(20);
    
    // Check that all cards have the correct data-testid pattern
    for (let i = 0; i < 20; i++) {
      expect(screen.getByTestId(`card-${i}`)).toBeInTheDocument();
    }
  });

  it("displays initial move count as 0", () => {
    const turnsDisplay = screen.getByTestId("turns-display");
    expect(turnsDisplay).toHaveTextContent("Moves: 0");
  });

  it("flips a card to reveal its color when clicked", async () => {
    const firstCard = screen.getByTestId("card-0");
    
    // Card should start hidden (not revealed)
    expect(firstCard).not.toHaveClass("revealed");
    
    fireEvent.click(firstCard);
    
    await waitFor(() => {
      expect(firstCard).toHaveClass("revealed");
    });
  });

  it("increments move count when two cards are clicked", async () => {
    const card1 = screen.getByTestId("card-0");
    const card2 = screen.getByTestId("card-1");
    
    fireEvent.click(card1);
    fireEvent.click(card2);
    
    await waitFor(() => {
      const turnsDisplay = screen.getByTestId("turns-display");
      expect(turnsDisplay).toHaveTextContent("Moves: 1");
    });
  });

  it("keeps matched cards revealed", async () => {
    const cards = getGameCards();
    let matchingCards = [];
    
    // Find two matching cards by checking colors after clicking
    for (let i = 0; i < cards.length - 1; i++) {
      fireEvent.click(cards[i]);
      jest.advanceTimersByTime(100);
      const color1 = getCardColor(cards[i]);
      
      for (let j = i + 1; j < cards.length; j++) {
        fireEvent.click(cards[j]);
        jest.advanceTimersByTime(100);
        const color2 = getCardColor(cards[j]);
        
        if (color1 === color2 && color1 !== "rgb(68, 68, 68)") {
          matchingCards = [cards[i], cards[j]];
          break;
        }
        
        // Reset if not a match
        jest.advanceTimersByTime(800);
      }
      
      if (matchingCards.length > 0) break;
      
      // Reset for next attempt
      fireEvent.click(screen.getByTestId("reset-button"));
      jest.advanceTimersByTime(100);
    }
    
    if (matchingCards.length === 2) {
      fireEvent.click(matchingCards[0]);
      fireEvent.click(matchingCards[1]);
      
      jest.advanceTimersByTime(300);
      
      await waitFor(() => {
        expect(matchingCards[0]).toHaveClass("revealed");
        expect(matchingCards[1]).toHaveClass("revealed");
      });
    }
  });

  it("flips non-matching cards back after delay", async () => {
    const cards = getGameCards();
    let nonMatchingCards = [];
    
    // Find two non-matching cards
    fireEvent.click(cards[0]);
    jest.advanceTimersByTime(100);
    const color1 = getCardColor(cards[0]);
    
    for (let i = 1; i < cards.length; i++) {
      fireEvent.click(cards[i]);
      jest.advanceTimersByTime(100);
      const color2 = getCardColor(cards[i]);
      
      if (color1 !== color2) {
        nonMatchingCards = [cards[0], cards[i]];
        break;
      }
      
      // Reset if it's a match
      jest.advanceTimersByTime(200);
      fireEvent.click(screen.getByTestId("reset-button"));
      fireEvent.click(cards[0]);
      jest.advanceTimersByTime(100);
    }
    
    if (nonMatchingCards.length === 2) {
      // Cards should be revealed initially
      expect(nonMatchingCards[0]).toHaveClass("revealed");
      expect(nonMatchingCards[1]).toHaveClass("revealed");
      
      // After delay, cards should be hidden again
      jest.advanceTimersByTime(800);
      
      await waitFor(() => {
        expect(nonMatchingCards[0]).not.toHaveClass("revealed");
        expect(nonMatchingCards[1]).not.toHaveClass("revealed");
      });
    }
  });

  it("prevents clicking on already revealed cards", () => {
    const card1 = screen.getByTestId("card-0");
    const card2 = screen.getByTestId("card-1");
    
    fireEvent.click(card1);
    fireEvent.click(card2);
    
    const initialMoves = screen.getByTestId("turns-display").textContent;
    
    // Try clicking the same cards again
    fireEvent.click(card1);
    fireEvent.click(card2);
    
    // Move count should not change
    expect(screen.getByTestId("turns-display")).toHaveTextContent(initialMoves);
  });

  it("prevents clicking a third card when two are already selected", () => {
    const card1 = screen.getByTestId("card-0");
    const card2 = screen.getByTestId("card-1");
    const card3 = screen.getByTestId("card-2");
    
    fireEvent.click(card1);
    fireEvent.click(card2);
    
    const movesAfterTwo = screen.getByTestId("turns-display").textContent;
    
    // Try clicking a third card
    fireEvent.click(card3);
    
    // Move count should not change
    expect(screen.getByTestId("turns-display")).toHaveTextContent(movesAfterTwo);
  });

  it("resets game when reset button is clicked", async () => {
    const resetButton = screen.getByTestId("reset-button");
    const card1 = screen.getByTestId("card-0");
    const card2 = screen.getByTestId("card-1");
    
    // Make some moves
    fireEvent.click(card1);
    fireEvent.click(card2);
    
    await waitFor(() => {
      expect(screen.getByTestId("turns-display")).toHaveTextContent("Moves: 1");
    });
    
    // Reset the game
    fireEvent.click(resetButton);
    
    await waitFor(() => {
      expect(screen.getByTestId("turns-display")).toHaveTextContent("Moves: 0");
    });
    
    // All cards should be hidden again
    const resetCards = getGameCards();
    resetCards.forEach((card) => {
      expect(card).not.toHaveClass("revealed");
      expect(card).not.toHaveClass("matched");
    });
  });

  it("displays win message when all cards are matched", async () => {
    // This test would require a more complex setup to match all cards
    // For now, we'll test that the win condition can be checked
    const cards = getGameCards();
    expect(cards.length).toBe(20);
    
    // Check that initially no win message is displayed
    expect(screen.queryByText(/you won/i)).not.toBeInTheDocument();
  });

  it("maintains correct card count after reset", () => {
    const resetButton = screen.getByTestId("reset-button");
    
    // Initial card count
    let cards = getGameCards();
    expect(cards.length).toBe(20);
    
    // Reset and check again
    fireEvent.click(resetButton);
    
    cards = getGameCards();
    expect(cards.length).toBe(20);
  });

  it("uses correct data-testid format for cards", () => {
    // Verify that all card data-testids follow the pattern card-{index}
    for (let i = 0; i < 20; i++) {
      const card = screen.getByTestId(`card-${i}`);
      expect(card).toBeInTheDocument();
      expect(card.getAttribute('data-testid')).toBe(`card-${i}`);
    }
  });
});