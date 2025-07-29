import React, { useState } from "react";

export default function TransactionForm({ onAdd }) {
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("expense");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!desc || !amount) return;
    onAdd(desc, +amount, type);
    setAmount("");
    setDesc("");
  };

  return (
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
  );
}
