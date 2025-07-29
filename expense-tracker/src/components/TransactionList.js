import React from "react";

export default function TransactionList({ transactions, onDelete }) {
  return (
    <div className="transaction-list">
      <h3>Transactions</h3>
      {transactions.map((tx) => (
        <div key={tx.id} className="transaction">
          <span>{tx.description}</span>
          <span>₹{tx.amount}</span>
          <button className="remove-btn" onClick={() => onDelete(tx.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
