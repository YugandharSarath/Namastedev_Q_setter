import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ColorGame from "./ColorGame";
import "@testing-library/jest-dom";

jest.useFakeTimers();

describe("ColorGame Component", () => {
  beforeEach(() => {
    jest.clearAllTimers();
  });

  test("renders the RGB question and color options", () => {
    render(<ColorGame />);
    expect(screen.getByText(/Which color is/i)).toBeInTheDocument();
    expect(screen.getAllByRole("button").length).toBe(6); // 5 color + 1 Play Again
  });

  test("disables all color buttons after making a guess", async () => {
    render(<ColorGame />);
    const buttons = screen
      .getAllByRole("button")
      .filter((btn) => btn.getAttribute("aria-label")?.includes("Guess color"));
    fireEvent.click(buttons[0]);
    buttons.forEach((btn) => {
      expect(btn).toBeDisabled();
    });
  });

  test("displays feedback after correct or wrong guess", async () => {
    render(<ColorGame />);
    const buttons = screen
      .getAllByRole("button")
      .filter((btn) => btn.getAttribute("aria-label")?.includes("Guess color"));
    fireEvent.click(buttons[0]);

    await waitFor(() =>
      expect(
        screen.getByText(/Correct|Wrong! The correct color was/i)
      ).toBeInTheDocument()
    );
  });

  test("starts countdown from 10 seconds", () => {
    render(<ColorGame />);
    expect(screen.getByText(/Time Left: 10s/i)).toBeInTheDocument();
  });
});
