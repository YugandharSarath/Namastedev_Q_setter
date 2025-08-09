import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ColorGame from "./ColorGame";
import "@testing-library/jest-dom";

jest.useFakeTimers();

describe("ColorGame Component", () => {
  beforeEach(() => {
    jest.clearAllTimers();
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
    jest.useFakeTimers();
  });

  test("renders the target color heading with correct test ID", () => {
    render(<ColorGame />);
    const targetElement = screen.getByTestId("target-color");
    expect(targetElement).toBeInTheDocument();
    expect(targetElement.textContent).toMatch(/Which color is #[A-Fa-f0-9]{6}\?/);
  });

  test("displays exactly 5 color options with correct test IDs", () => {
    render(<ColorGame />);
    
    // Check that exactly 5 color options exist
    for (let i = 0; i < 5; i++) {
      expect(screen.getByTestId(`color-option-${i}`)).toBeInTheDocument();
    }
    
    // Verify no 6th option exists
    expect(() => screen.getByTestId("color-option-5")).toThrow();
  });

  test("shows HEX color format in heading", () => {
    render(<ColorGame />);
    const heading = screen.getByTestId("target-color");
    // Should contain a HEX color code pattern
    expect(heading.textContent).toMatch(/#[A-Fa-f0-9]{6}/);
  });

  test("disables all color buttons after making a guess", async () => {
    render(<ColorGame />);
    
    // Get the first color option and click it
    const firstColorOption = screen.getByTestId("color-option-0");
    fireEvent.click(firstColorOption);

    // Check all color options are disabled
    for (let i = 0; i < 5; i++) {
      const colorOption = screen.getByTestId(`color-option-${i}`);
      expect(colorOption).toBeDisabled();
    }
  });

  test("displays incorrect feedback message with correct format", async () => {
    render(<ColorGame />);
    
    // Click any color option (statistically likely to be wrong)
    const firstColorOption = screen.getByTestId("color-option-0");
    fireEvent.click(firstColorOption);

    await waitFor(() => {
      const resultMessage = screen.getByTestId("result-message");
      expect(resultMessage).toBeInTheDocument();
      // Should show either correct or incorrect message
      expect(
        resultMessage.textContent === "🎉 Correct!" ||
        resultMessage.textContent.match(/❌ Incorrect! The correct color was #[A-Fa-f0-9]{6}/)
      ).toBeTruthy();
    });
  });

  test("shows reset button with correct test ID", () => {
    render(<ColorGame />);
    const resetButton = screen.getByTestId("reset-button");
    expect(resetButton).toBeInTheDocument();
    expect(resetButton.textContent).toMatch(/Play Again|Playing.../);
  });

  test("reset button is disabled during active game", () => {
    render(<ColorGame />);
    const resetButton = screen.getByTestId("reset-button");
    expect(resetButton).toBeDisabled();
    expect(resetButton.textContent).toBe("Playing...");
  });

  test("reset button becomes enabled after making a guess", async () => {
    render(<ColorGame />);
    
    // Make a guess
    const firstColorOption = screen.getByTestId("color-option-0");
    fireEvent.click(firstColorOption);

    await waitFor(() => {
      const resetButton = screen.getByTestId("reset-button");
      expect(resetButton).not.toBeDisabled();
      expect(resetButton.textContent).toBe("Play Again");
    });
  });

  test("reset button generates new game when clicked", async () => {
    render(<ColorGame />);
    
    // Make a guess to enable reset button
    const firstColorOption = screen.getByTestId("color-option-0");
    fireEvent.click(firstColorOption);

    await waitFor(() => {
      const resetButton = screen.getByTestId("reset-button");
      expect(resetButton).not.toBeDisabled();
    });

    // Get the current target color
    const targetElement = screen.getByTestId("target-color");
    const originalColor = targetElement.textContent;

    // Click reset
    const resetButton = screen.getByTestId("reset-button");
    fireEvent.click(resetButton);

    // Wait for new game state
    await waitFor(() => {
      // Check that feedback is cleared
      expect(() => screen.getByTestId("result-message")).toThrow();
      
      // Check that color options are re-enabled
      const colorOption = screen.getByTestId("color-option-0");
      expect(colorOption).not.toBeDisabled();
      
      // Check that timer is reset
      expect(screen.getByText("Time Left: 10s")).toBeInTheDocument();
    });
  });

  test("prevents multiple guesses in same round", async () => {
    render(<ColorGame />);
    
    // Click first color option
    const firstColorOption = screen.getByTestId("color-option-0");
    fireEvent.click(firstColorOption);

    // Try to click another option
    const secondColorOption = screen.getByTestId("color-option-1");
    fireEvent.click(secondColorOption);

    await waitFor(() => {
      // Should only have one result message
      const resultMessages = screen.getAllByTestId("result-message");
      expect(resultMessages).toHaveLength(1);
    });
  });

  test("starts countdown from 10 seconds", () => {
    render(<ColorGame />);
    expect(screen.getByText(/Time Left: 10s/i)).toBeInTheDocument();
  });

  test("all color options have proper accessibility labels", () => {
    render(<ColorGame />);
    
    for (let i = 0; i < 5; i++) {
      const colorOption = screen.getByTestId(`color-option-${i}`);
      expect(colorOption).toHaveAttribute("aria-label");
      expect(colorOption.getAttribute("aria-label")).toMatch(/Color option #[A-Fa-f0-9]{6}/);
    }
  });

  test("feedback message has aria-live attribute for screen readers", async () => {
    render(<ColorGame />);
    
    // Make a guess to trigger feedback
    const firstColorOption = screen.getByTestId("color-option-0");
    fireEvent.click(firstColorOption);

    await waitFor(() => {
      const resultMessage = screen.getByTestId("result-message");
      expect(resultMessage).toHaveAttribute("aria-live", "polite");
    });
  });

  test("generates unique colors for all 5 options", () => {
    render(<ColorGame />);
    
    const colors = new Set();
    for (let i = 0; i < 5; i++) {
      const colorOption = screen.getByTestId(`color-option-${i}`);
      const bgColor = colorOption.style.backgroundColor;
      colors.add(bgColor);
    }
    
    // All 5 colors should be unique
    expect(colors.size).toBe(5);
  });
});