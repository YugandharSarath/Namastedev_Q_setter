import React from "react";
import { Transaction } from "../App";

interface Props {
  transactions: Transaction[];
  onDelete: (id: number) => void;
}

export default function TransactionList({ transactions, onDelete }: Props) {
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
