import React, { useState } from "react";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import Summary from "./components/Summary";
import "./App.css";

export default function ExpenseTracker() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addTransaction = (desc, amount, type) => {
    const newTransaction = {
      id: Date.now(),
      description: desc,
      amount,
      type,
    };
    setTransactions([newTransaction, ...transactions]);
  };

  const removeTransaction = (id) => {
    setTransactions(transactions.filter((tx) => tx.id !== id));
  };

  const filteredTransactions = transactions.filter((tx) =>
    tx.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const balance = transactions.reduce(
    (acc, tx) => acc + (tx.type === "budget" ? tx.amount : -tx.amount),
    0
  );

  return (
    <div className="container">
      <h2>Expense Tracker</h2>
      <div className="balance-section">
        <h3>Balance ₹{balance}</h3>
      </div>
      <TransactionForm onAdd={addTransaction} />
      <Summary transactions={transactions} />
      <div className="search">
        <input
          type="text"
          placeholder="Search here"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <TransactionList
        transactions={filteredTransactions}
        onDelete={removeTransaction}
      />
    </div>
  );
}
