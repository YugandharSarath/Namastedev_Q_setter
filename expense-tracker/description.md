
---

## 💰 Expense Tracker – Coding Task

---

### ✅ **Requirements**

Build a **Personal Expense Tracker** web app that allows users to:

* ➕ Add transactions with:

  * Amount
  * Description
  * Type: Income (budget) or Expense
* 📈 View updated **Balance**, **Total Income**, and **Total Expense**
* 📜 See a **list of transactions**, each with a "Remove" button
* 🔍 **Search** transactions by description (case-insensitive, substring match)
* ❌ Use a **"Cancel"** button to clear the input form

---

### 📚 **Edge Cases & Constraints**

* Empty fields or missing values must not be allowed
* Amounts should be valid non-zero numbers (no negative/zero)
* Only valid types: `"expense"` or `"budget"`
* Balance must recalculate correctly after adding or deleting a transaction
* Cancel should fully reset the form fields
* Search must filter the visible list without deleting any data
* Adding multiple entries in quick succession should not break the UI

---


