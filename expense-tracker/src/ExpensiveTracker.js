import React, { useState } from "react";
import "./App.css";

export default function ExpenseTracker() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("expense");

  const addTransaction = (desc, amount, type) => {
    const newTransaction = {
      id: Date.now(),
      description: desc,
      amount: +amount,
      type,
    };
    setTransactions([newTransaction, ...transactions]);
    setAmount("");
    setDesc("");
    setType("expense");
  };

  const removeTransaction = (id) => {
    setTransactions(transactions.filter((tx) => tx.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!desc || !amount) return;
    addTransaction(desc, amount, type);
  };

  const expense = transactions
    .filter((tx) => tx.type === "expense")
    .reduce((acc, tx) => acc + tx.amount, 0);

  const budget = transactions
    .filter((tx) => tx.type === "budget")
    .reduce((acc, tx) => acc + tx.amount, 0);

  const balance = transactions.reduce(
    (acc, tx) => acc + (tx.type === "budget" ? tx.amount : -tx.amount),
    0
  );

  const filteredTransactions = transactions.filter((tx) =>
    tx.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Expense Tracker</h2>

      <div className="balance-section">
        <h3>Balance ₹{balance}</h3>
      </div>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <div className="radio-group">
          <label>
            <input
              type="radio"
              value="expense"
              checked={type === "expense"}
              onChange={() => setType("expense")}
            />
            Expense
          </label>
          <label>
            <input
              type="radio"
              value="budget"
              checked={type === "budget"}
              onChange={() => setType("budget")}
            />
            Budget
          </label>
        </div>
        <button type="submit" className="add-btn">
          Add Transaction
        </button>
        <button
          type="button"
          className="cancel-btn"
          onClick={() => {
            setAmount("");
            setDesc("");
          }}
        >
          CANCEL
        </button>
      </form>

      <div className="summary">
        <div className="card red">
          <h4>Expense</h4>
          <p>₹{expense}</p>
        </div>
        <div className="card green">
          <h4>Budget</h4>
          <p>₹{budget}</p>
        </div>
      </div>

      <div className="search">
        <input
          type="text"
          placeholder="Search here"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="transaction-list">
        <h3>Transactions</h3>
        {filteredTransactions.map((tx) => (
          <div key={tx.id} className="transaction">
            <span>{tx.description}</span>
            <span>₹{tx.amount}</span>
            <button className="remove-btn" onClick={() => removeTransaction(tx.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
