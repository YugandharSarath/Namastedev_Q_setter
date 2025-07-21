## Test Cases for Expense Tracker

### Test Case 1: Add a Budget Entry
- Input: amount = 5000, description = "Salary", type = "Budget"
- Expected:
  - Balance: ₹5000
  - Budget: ₹5000
  - Expense: ₹0
  - Transaction visible with ₹5000 and description "Salary"

---

### Test Case 2: Add an Expense Entry
- Input: amount = 1000, description = "Groceries", type = "Expense"
- Expected:
  - Balance: ₹4000
  - Budget: ₹5000
  - Expense: ₹1000
  - Transaction visible with ₹1000 and description "Groceries"

---

### Test Case 3: Remove Transaction
- Remove "Groceries" transaction
- Expected:
  - Balance: ₹5000
  - Expense: ₹0
  - Transaction removed from list

---

### Test Case 4: Cancel Button
- Input: amount = 2000, description = "Shopping"
- Click Cancel
- Expected: Form fields should be cleared

---

### Test Case 5: Search Functionality
- Input: "sal" in search box
- Expected: Show only "Salary" transaction (case insensitive)

