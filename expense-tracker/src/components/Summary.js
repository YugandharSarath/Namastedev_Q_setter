import React from "react";

export default function Summary({ transactions }) {
  const expense = transactions
    .filter((tx) => tx.type === "expense")
    .reduce((acc, tx) => acc + tx.amount, 0);

  const budget = transactions
    .filter((tx) => tx.type === "budget")
    .reduce((acc, tx) => acc + tx.amount, 0);

  return (
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
  );
}
