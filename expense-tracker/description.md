
---

## 💰 Expense Tracker 

### 🧠 **Problem Statement**

Create a simple personal finance tracker where users can:

* Add income or expense entries
* See their current balance, total income, and expenses
* View and delete transactions
* Search transactions by name

---

### ✅ **Core Features**

* 📝 **Add Transaction**:

  * Inputs: Title + Amount
  * Type: Income / Expense

* 📊 **Summary Section**:

  * Shows current **Balance**, **Income**, and **Expense**

* 📜 **Transaction List**:

  * Displays added transactions
  * Each item has a **Delete** button

* 🔍 **Search Bar**:

  * Filters transaction list by text

* ❌ **Cancel Button**:

  * Clears form fields

---

### 📚 **Edge Cases to Handle**

| Edge Case              | Expected Behavior                                 |
| ---------------------- | ------------------------------------------------- |
| Add 0 amount           | Should be ignored or show validation error        |
| Negative/decimal input | Validate or convert appropriately                 |
| Delete transaction     | Updates list and recalculates balance + summaries |
| Partial search match   | Filters transaction list using substring match    |

---

### 🧪 **Test Coverage Summary**

| ✅ Test Case                   | 💬 Description                                                    |
| ----------------------------- | ----------------------------------------------------------------- |
| Renders headings and balance  | UI shows main titles, balance, and form controls                  |
| Adds income, updates summary  | Adds income and updates transaction list + balance/income section |
| Adds expense, updates summary | Adds expense and updates list + expense/balance summary           |
| Deletes a transaction         | Removes item and recalculates balance                             |
| Cancels clears form           | Clicking Cancel clears title and amount input fields              |
| Filters by search             | Filters list based on entered description                         |

---

### 🏷️ **`data-testid`s**

| Element              | `data-testid`      |
| -------------------- | ------------------ |
| Title Input          | `title-input`      |
| Amount Input         | `amount-input`     |
| Add Button           | `add-button`       |
| Cancel Button        | `cancel-button`    |
| Delete Button (each) | `delete-btn-${id}` |
| Balance Display      | `balance`          |
| Income Summary       | `income-summary`   |
| Expense Summary      | `expense-summary`  |
| Transaction List     | `transaction-list` |
| Search Input         | `search-input`     |

---

