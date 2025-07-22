
---

## 🌀 Infinite Scroll List – Problem Statement

### 🧠 Goal

Create a scrollable list that **automatically loads more items** as the user scrolls down — **no buttons or pagination**.

---

### ✅ Features

* 📄 Loads data in small chunks (e.g. 10 at a time)
* 🔄 Auto-loads when nearing the bottom using `IntersectionObserver`
* ⏳ Shows a loading spinner while fetching
* 🛑 Displays “You’ve reached the end” when no more data
* 🚫 Prevents duplicate requests during fast scrolling

---

### 🧪 What to Test

| Test Case              | Description                                 |
| ---------------------- | ------------------------------------------- |
| ✅ Initial Load         | Renders first 10 items on mount             |
| ✅ Observer Trigger     | Scrolls → triggers next set (11–20)         |
| ✅ Reaches End          | Shows end message when no more data         |
| ✅ No Duplicate Fetches | Fast scroll doesn’t call API multiple times |

---

### 🧪 Testing Tips

* Use `IntersectionObserver` mock to simulate scroll
* Fake timers for delayed fetches
* Example:

  ```js
  triggerIntersection(screen.getByTestId('loader-ref'));
  jest.runAllTimers();
  expect(await screen.findByText('Item 11')).toBeInTheDocument();
  ```

---

### 📚 Edge Cases

| Edge Case          | Expected Behavior                      |
| ------------------ | -------------------------------------- |
| 🛑 No More Data    | Show "You've reached the end"          |
| ⚡ Fast Scroll      | No extra/double fetch calls            |
| 🌐 Network Failure | Optionally show retry or error message |

---

### 🏷️ Suggested Test IDs

| Element      | Test ID              |
| ------------ | -------------------- |
| Loader div   | `loader-ref`         |
| List item    | `list-item-${index}` |
| Loading text | `loading-indicator`  |
| End message  | `end-message`        |

---


