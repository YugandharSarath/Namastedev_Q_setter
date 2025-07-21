import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
import App from "./App";

describe("Expense Tracker App", () => {
  test("renders main headings and balance", () => {
    render(<App />);
    expect(screen.getByText(/Expense Tracker/i)).toBeInTheDocument();
    expect(screen.getByText(/Balance/i)).toBeInTheDocument();
    expect(screen.getByText(/CANCEL/i)).toBeInTheDocument();
  });

  test("can add a budget transaction and updates summary and balance", () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText(/Amount/i), {
      target: { value: "5000" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Description/i), {
      target: { value: "Salary" },
    });
    fireEvent.click(screen.getByLabelText(/Budget/i));
    fireEvent.click(screen.getByText(/Add Transaction/i));
    expect(screen.getByText(/Salary/)).toBeInTheDocument();
    // Check for ₹5000 in the transaction list (span)
    const txAmount = screen.getAllByText(/₹5000/).find(
      (el) => el.tagName === "SPAN"
    );
    expect(txAmount).toBeInTheDocument();
    // Check for Balance ₹5000
    expect(screen.getByText(/Balance ₹5000/)).toBeInTheDocument();
    // Check summary cards by targeting <h4>Budget
    const summary = screen.getAllByText("Budget").find(el => el.tagName === "H4")?.parentElement as HTMLElement;
    expect(within(summary).getByText("₹5000")).toBeInTheDocument();
    const expenseSummary = screen.getAllByText("Expense").find(el => el.tagName === "H4")?.parentElement as HTMLElement;
    expect(within(expenseSummary).getByText("₹0")).toBeInTheDocument();
  });

  test("can add an expense transaction and updates summary and balance", () => {
    render(<App />);
    // Add budget first for correct balance
    fireEvent.change(screen.getByPlaceholderText(/Amount/i), {
      target: { value: "5000" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Description/i), {
      target: { value: "Salary" },
    });
    fireEvent.click(screen.getByLabelText(/Budget/i));
    fireEvent.click(screen.getByText(/Add Transaction/i));
    // Add expense
    fireEvent.change(screen.getByPlaceholderText(/Amount/i), {
      target: { value: "1000" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Description/i), {
      target: { value: "Groceries" },
    });
    fireEvent.click(screen.getByLabelText(/Expense/i));
    fireEvent.click(screen.getByText(/Add Transaction/i));
    expect(screen.getByText(/Groceries/)).toBeInTheDocument();
    // Check for ₹1000 in the transaction list (span)
    const txAmount = screen.getAllByText(/₹1000/).find(
      (el) => el.tagName === "SPAN"
    );
    expect(txAmount).toBeInTheDocument();
    expect(screen.getByText(/Balance ₹4000/)).toBeInTheDocument();
    // Check summary cards by targeting <h4>Budget
    const summary = screen.getAllByText("Budget").find(el => el.tagName === "H4")?.parentElement as HTMLElement;
    expect(within(summary).getByText("₹5000")).toBeInTheDocument();
    const expenseSummary = screen.getAllByText("Expense").find(el => el.tagName === "H4")?.parentElement as HTMLElement;
    expect(within(expenseSummary).getByText("₹1000")).toBeInTheDocument();
  });

  test("can remove a transaction", () => {
    render(<App />);
    // Add budget and expense
    fireEvent.change(screen.getByPlaceholderText(/Amount/i), {
      target: { value: "5000" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Description/i), {
      target: { value: "Salary" },
    });
    fireEvent.click(screen.getByLabelText(/Budget/i));
    fireEvent.click(screen.getByText(/Add Transaction/i));
    fireEvent.change(screen.getByPlaceholderText(/Amount/i), {
      target: { value: "1000" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Description/i), {
      target: { value: "Groceries" },
    });
    fireEvent.click(screen.getByLabelText(/Expense/i));
    fireEvent.click(screen.getByText(/Add Transaction/i));
    // Remove expense
    fireEvent.click(screen.getAllByText(/Remove/i)[0]);
    expect(screen.queryByText(/Groceries/)).not.toBeInTheDocument();
    expect(screen.getByText(/Balance ₹5000/)).toBeInTheDocument();
    // Check summary cards by targeting <h4>Expense
    const expenseSummary = screen.getAllByText("Expense").find(el => el.tagName === "H4")?.parentElement as HTMLElement;
    expect(within(expenseSummary).getByText("₹0")).toBeInTheDocument();
  });

  test("can clear form fields with Cancel button", () => {
    render(<App />);
    const amountInput = screen.getByPlaceholderText(/Amount/i);
    const descInput = screen.getByPlaceholderText(/Description/i);
    fireEvent.change(amountInput, { target: { value: "2000" } });
    fireEvent.change(descInput, { target: { value: "Shopping" } });
    fireEvent.click(screen.getByText(/CANCEL/i));
    // Accept both null and empty string for number input
    expect([null, ""]).toContain((amountInput as HTMLInputElement).value);
    expect(descInput).toHaveValue("");
  });

  test("can search for a transaction by description", () => {
    render(<App />);
    // Add two transactions
    fireEvent.change(screen.getByPlaceholderText(/Amount/i), {
      target: { value: "100" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Description/i), {
      target: { value: "Salary" },
    });
    fireEvent.click(screen.getByText(/Add Transaction/i));
    fireEvent.change(screen.getByPlaceholderText(/Amount/i), {
      target: { value: "200" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Description/i), {
      target: { value: "Books" },
    });
    fireEvent.click(screen.getByText(/Add Transaction/i));
    // Search for "sal"
    fireEvent.change(screen.getByPlaceholderText(/Search here/i), {
      target: { value: "sal" },
    });
    expect(screen.getByText(/Salary/)).toBeInTheDocument();
    expect(screen.queryByText(/Books/)).not.toBeInTheDocument();
  });
}); 