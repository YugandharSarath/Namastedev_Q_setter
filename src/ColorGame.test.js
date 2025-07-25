import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

// Helper to get the color code from the heading
function getColorCode() {
  const heading = screen.getByRole("heading", { level: 2 });
  const match = heading.textContent?.match(/#([0-9A-F]{6})/i);
  return match ? `#${match[1].toUpperCase()}` : null;
}

function hexToRgb(hex) {
  const val = hex.replace("#", "");
  const num = parseInt(val, 16);
  return `rgb(${(num >> 16) & 255}, ${(num >> 8) & 255}, ${num & 255})`;
}

describe("Color Code Game", () => {
  test("Correct color selected", () => {
    render(<App />);
    const colorCode = getColorCode();
    expect(colorCode).toMatch(/^#[0-9A-F]{6}$/);

    const colorBoxes = Array.from(document.querySelectorAll(".color-box"));
    const rgb = hexToRgb(colorCode);
    const correctBox = colorBoxes.find(
      (box) => box.style.backgroundColor === rgb
    );

    expect(correctBox).toBeTruthy();
    fireEvent.click(correctBox);
    expect(screen.getByText(/correct/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /play again/i })).toBeInTheDocument();
  });

  test("Incorrect color selected", () => {
    render(<App />);
    const colorCode = getColorCode();
    const rgb = hexToRgb(colorCode);

    const colorBoxes = Array.from(document.querySelectorAll(".color-box"));
    const wrongBox = colorBoxes.find(
      (box) => box.style.backgroundColor !== rgb
    );

    expect(wrongBox).toBeTruthy();
    fireEvent.click(wrongBox);
    expect(screen.getByText(/incorrect/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /play again/i })).toBeInTheDocument();
  });

  test("Clicking Play Again resets the game", () => {
    render(<App />);
    const colorBoxes = Array.from(document.querySelectorAll(".color-box"));
    fireEvent.click(colorBoxes[0]);

    expect(screen.getByRole("button", { name: /play again/i })).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /play again/i }));

    const newColorCode = getColorCode();
    expect(newColorCode).toMatch(/^#[0-9A-F]{6}$/);
    expect(screen.queryByText(/correct/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/incorrect/i)).not.toBeInTheDocument();
  });

  test("Color options are unique", () => {
    render(<App />);
    const colorBoxes = Array.from(document.querySelectorAll(".color-box"));
    const colors = colorBoxes.map((box) => box.style.backgroundColor);
    const uniqueColors = new Set(colors);
    expect(uniqueColors.size).toBe(3);
  });
});
