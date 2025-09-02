import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";
import '@testing-library/jest-dom';

const mockWords = ["CRANE", "PLANT", "SHEEP", "MONEY", "ZEBRA"];

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockWords),
    })
  );
});

afterEach(() => {
  jest.clearAllMocks();
});

test("renders loading state initially", () => {
  render(<App />);
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
});

test("renders board after word is fetched", async () => {
  render(<App />);
  await waitFor(() => {
    expect(screen.getByText("React Wordle")).toBeInTheDocument();
    expect(screen.getAllByText("🔄 New Game")[0]).toBeInTheDocument();
  });
});

test("shows error if guess is less than 5 letters", async () => {
  render(<App />);
  await waitFor(() => screen.getByText("React Wordle"));

  fireEvent.keyUp(window, { key: "A" });
  fireEvent.keyUp(window, { key: "B" });
  fireEvent.keyUp(window, { key: "Enter" });

  expect(await screen.findByText(/guess must be 5 letters/i)).toBeInTheDocument();
});

test("shows error if word is not in word list", async () => {
  render(<App />);
  await waitFor(() => screen.getByText("React Wordle"));

  "QWERT".split("").forEach((k) => fireEvent.keyUp(window, { key: k }));
  fireEvent.keyUp(window, { key: "Enter" });

  expect(await screen.findByText(/not a valid word/i)).toBeInTheDocument();
});

test("new game button resets the game", async () => {
  render(<App />);

  await waitFor(() => {
    expect(screen.getByText("React Wordle")).toBeInTheDocument();
    expect(screen.getByTestId("new-game-btn")).toBeInTheDocument();
  });

  const newGameButton = screen.getByTestId("new-game-btn");

  fireEvent.click(newGameButton);

  await waitFor(() => {
    expect(screen.getByText("React Wordle")).toBeInTheDocument();
    expect(screen.getByTestId("new-game-btn")).toBeInTheDocument();
  });
});

