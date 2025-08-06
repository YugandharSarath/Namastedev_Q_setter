import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import MatchColorGame from "./MatchColorGame";
import "@testing-library/jest-dom";

jest.useFakeTimers();

const getGameCards = () =>
  screen.getAllByRole("button").filter((btn) => btn.className.includes("card"));

const getCardColor = (cardElement) => {
  return window.getComputedStyle(cardElement).backgroundColor;
};

describe("MatchColorGame", () => {

  beforeEach(() => {
    render(<MatchColorGame />);
  });

  it("renders game title and reset button", () => {
    expect(screen.getByText(/match the colors/i)).toBeInTheDocument();
    expect(screen.getByText(/reset game/i)).toBeInTheDocument();
  });

  it("renders 16 card elements", () => {
    const cards = getGameCards();
    expect(cards.length).toBe(16);
  });

  it("flips a card to reveal its color", async () => {
    const cards = getGameCards();
    const cardToClick = cards[0];

    expect(cardToClick).toHaveStyle("background-color: rgb(68, 68, 68)"); 

    fireEvent.click(cardToClick);

    await waitFor(() => {
      expect(cardToClick).not.toHaveStyle("background-color: rgb(68, 68, 68)");
      expect(cardToClick).toHaveClass("revealed");
    });
  });

  it("increments move count on mismatch", async () => {
    const cards = getGameCards();
    let card1, card2;

    fireEvent.click(cards[0]);
    jest.advanceTimersByTime(100); 
    const color1 = getCardColor(cards[0]);
    card1 = cards[0];

    for (let i = 1; i < cards.length; i++) {
      fireEvent.click(cards[i]);
      jest.advanceTimersByTime(100); 
      const color2 = getCardColor(cards[i]);
      if (color1 !== color2) {
        card2 = cards[i];
        break;
      } else {

        jest.advanceTimersByTime(200); 
        fireEvent.click(cards[i]); 
        jest.advanceTimersByTime(800); 
      }
    }

    expect(card1).toBeInTheDocument();
    expect(card2).toBeInTheDocument();

    fireEvent.click(card1);
    fireEvent.click(card2);

    await waitFor(() => {
      expect(screen.getByText(/moves:/i)).toHaveTextContent("Moves: 1");
    });

    jest.advanceTimersByTime(800);
  });

  it("reset game clears move count and hides all cards", async () => {
    const cards = getGameCards();

    fireEvent.click(cards[0]);
    fireEvent.click(cards[1]);
    jest.advanceTimersByTime(800); 

    await waitFor(() => {
      expect(screen.getByText(/moves:/i)).toHaveTextContent("Moves: 1");
    });

    fireEvent.click(screen.getByText(/reset game/i));

    await waitFor(() => {
      expect(screen.getByText(/moves:/i)).toHaveTextContent("Moves: 0");
    });

    const resetCards = getGameCards();

    resetCards.forEach((card) => {
      expect(card).toHaveStyle("background-color: rgb(68, 68, 68)"); 
      expect(card).not.toHaveClass("revealed");
      expect(card).not.toHaveClass("matched");
    });
  });
});