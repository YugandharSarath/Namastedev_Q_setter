
---

## 💡 **Hints**

---

### 1️⃣ **Transaction Form with Validations & Cancel Button**

Create a form that collects:

* Description
* Amount
* Type (`budget` or `expense`)
* Has validation and cancel/reset button

```jsx
// components/TransactionForm.js
import React, { useState } from "react";

export default function TransactionForm({ onAdd }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("budget");

  const handleSubmit = (e) => {
    e.preventDefault();
    const amt = parseFloat(amount);

    if (!description.trim() || isNaN(amt) || amt <= 0 || !["budget", "expense"].includes(type)) {
      alert("Please enter valid inputs.");
      return;
    }

    onAdd(description.trim(), amt, type);
    resetForm();
  };

  const resetForm = () => {
    setDescription("");
    setAmount("");
    setType("budget");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="budget">Income</option>
        <option value="expense">Expense</option>
      </select>
      <div className="buttons">
        <button type="submit">Add</button>
        <button type="button" onClick={resetForm}>Cancel</button>
      </div>
    </form>
  );
}
```

---

### 2️⃣ **Transaction List with Delete Button**

Display each transaction with:

* Label: description + amount
* Style by type
* A delete button

```jsx
// components/TransactionList.js
import React from "react";

export default function TransactionList({ transactions, onDelete }) {
  return (
    <div className="transaction-list">
      <h3>Transactions</h3>
      {transactions.length === 0 && <p>No transactions yet.</p>}
      <ul>
        {transactions.map((tx) => (
          <li key={tx.id} className={tx.type}>
            <span>{tx.description} - ₹{tx.amount}</span>
            <button onClick={() => onDelete(tx.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

---

### 3️⃣ **Summary Section (Income, Expense, Balance)**

Use `.reduce()` to compute totals:

```jsx
// components/Summary.js
import React from "react";

export default function Summary({ transactions }) {
  const income = transactions
    .filter((tx) => tx.type === "budget")
    .reduce((sum, tx) => sum + tx.amount, 0);

  const expense = transactions
    .filter((tx) => tx.type === "expense")
    .reduce((sum, tx) => sum + tx.amount, 0);

  return (
    <div className="summary">
      <div className="card income">Income: ₹{income}</div>
      <div className="card expense">Expense: ₹{expense}</div>
    </div>
  );
}
```

---

### 4️⃣ **Real-Time Search Functionality**

Use `.filter()` + `.toLowerCase()` for case-insensitive search:

```jsx
const filteredTransactions = transactions.filter((tx) =>
  tx.description.toLowerCase().includes(searchTerm.toLowerCase())
);
```

Bind the input field to `searchTerm` state:

```jsx
<input
  type="text"
  placeholder="Search here"
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>
```

---

### 5️⃣ **CSS Styling (Optional)**

For clarity:

```css
/* App.css */
.container {
  max-width: 500px;
  margin: auto;
  padding: 20px;
}

.form input,
.form select {
  margin: 5px;
  padding: 8px;
  width: 100%;
}

.buttons {
  display: flex;
  gap: 10px;
}

.transaction-list ul {
  list-style: none;
  padding: 0;
}

.transaction-list li {
  display: flex;
  justify-content: space-between;
  margin: 6px 0;
}

.transaction-list li.budget {
  color: green;
}

.transaction-list li.expense {
  color: red;
}

.summary {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.summary .card {
  padding: 10px;
  border-radius: 6px;
  background: #f1f1f1;
  width: 48%;
  text-align: center;
}
```

---

