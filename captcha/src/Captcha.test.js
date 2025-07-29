import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Captcha from "./Captcha";
import "@testing-library/jest-dom";

// Mock canvas methods
global.HTMLCanvasElement.prototype.getContext = () => ({
  clearRect: jest.fn(),
  fillText: jest.fn(),
  beginPath: jest.fn(),
  moveTo: jest.fn(),
  lineTo: jest.fn(),
  stroke: jest.fn(),
  save: jest.fn(),
  restore: jest.fn(),
  translate: jest.fn(),
  rotate: jest.fn(),
  font: "",
  fillStyle: "",
  strokeStyle: "",
});

describe("Captcha Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("TC1 - Canvas renders correctly", () => {
    const { container } = render(<Captcha />);
    const canvas = screen.getByTestId("captcha-canvas");
    const form = container.querySelector("form");
    expect(form).toBeInTheDocument();
    expect(canvas).toBeInTheDocument();
  });

  test("TC2 - Refresh icon functionality", () => {
    render(<Captcha />);
    const refreshBtn = screen.getByRole("button", { name: /🔁/ });
    expect(refreshBtn).toBeInTheDocument();
    fireEvent.click(refreshBtn);
    expect(screen.getByPlaceholderText(/Enter Captcha/i)).toHaveValue("");
  });

  test("TC3 - Successful captcha input", async () => {
    render(<Captcha initialCaptcha="AAAAA" />);
    fireEvent.change(screen.getByPlaceholderText(/Enter Captcha/i), {
      target: { value: "AAAAA" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Submit/i }));

    await waitFor(() => {
      expect(screen.getByText(/Captcha Verified/i)).toBeInTheDocument();
    }, { timeout: 1000 });
  });

  test("TC4 - Incorrect captcha input", async () => {
    render(<Captcha />);
    const input = screen.getByPlaceholderText(/Enter Captcha/i);

    fireEvent.change(input, { target: { value: "wrong" } });
    fireEvent.click(screen.getByRole("button", { name: /Submit/i }));

    expect(await screen.findByText(/Incorrect Captcha/i)).toBeInTheDocument();
  });

  test("TC5 - Empty captcha input", async () => {
    const mathRandomSpy = jest.spyOn(Math, "random").mockReturnValue(0.1);
    render(<Captcha />);
    fireEvent.click(screen.getByRole("button", { name: /Submit/i }));

    await waitFor(() => {
      expect(screen.getByText(/Incorrect Captcha/i)).toBeInTheDocument();
    }, { timeout: 1000 });
    mathRandomSpy.mockRestore();
  });

  test("TC6 - Input and buttons are styled properly", () => {
    render(<Captcha />);
    const input = screen.getByPlaceholderText(/Enter Captcha/i);
    const submitBtn = screen.getByRole("button", { name: /Submit/i });
    const refreshBtn = screen.getByRole("button", { name: /🔁/ });

    expect(input).toHaveClass("captcha-input");
    expect(submitBtn).toHaveClass("submit-btn");
    expect(refreshBtn).toHaveClass("refresh-btn");
  });

  test("TC7 - Responsive layout (smoke test)", () => {
    const { container } = render(<Captcha />);
    const form = container.querySelector("form");
    expect(form).toBeInTheDocument();
  });
});
