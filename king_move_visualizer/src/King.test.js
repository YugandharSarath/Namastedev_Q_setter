// King.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import King from "./King";

describe("King Move Visualizer", () => {
  beforeEach(() => {
    render(<King />);
  });

  it("renders 8x8 grid", () => {
    const cells = screen.getAllByTestId(/cell-/);
    expect(cells).toHaveLength(64);
  });

  it("highlights correct king moves for center (d4)", async () => {
    const user = userEvent.setup();
    const centerCell = await screen.findByTestId("cell-3-3");
    await user.hover(centerCell);

    expect(centerCell).toHaveClass("hovered");

    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        const r = 3 + dr;
        const c = 3 + dc;
        if (r >= 0 && r < 8 && c >= 0 && c < 8 && !(dr === 0 && dc === 0)) {
          const moveCell = await screen.findByTestId(`cell-${r}-${c}`);
          expect(moveCell).toHaveClass("king-move");
        }
      }
    }
  });

  it("highlights correct king moves for corner (a1)", async () => {
    const user = userEvent.setup();
    const a1 = await screen.findByTestId("cell-7-0");
    await user.hover(a1);

    expect(a1).toHaveClass("hovered");

    const expectedMoves = [
      [6, 0],
      [6, 1],
      [7, 1],
    ];

    for (const [r, c] of expectedMoves) {
      const moveCell = await screen.findByTestId(`cell-${r}-${c}`);
      expect(moveCell).toHaveClass("king-move");
    }
  });

  it("clears highlights on unhover", async () => {
    const user = userEvent.setup();
    const cell = await screen.findByTestId("cell-4-4");

    await user.hover(cell);
    await user.unhover(cell);

    expect(cell).not.toHaveClass("hovered");

    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        const r = 4 + dr;
        const c = 4 + dc;
        if (r >= 0 && r < 8 && c >= 0 && c < 8 && !(dr === 0 && dc === 0)) {
          const moveCell = await screen.findByTestId(`cell-${r}-${c}`);
          expect(moveCell).not.toHaveClass("king-move");
        }
      }
    }
  });
});
