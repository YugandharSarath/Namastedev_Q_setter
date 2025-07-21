# Infinite Scroll Test Cases

## ✅ Basic Tests

### TC1: Renders initial items
- Action: Component mounts
- Expectation: First 10 items are visible

### TC2: Loads next batch on scroll
- Action: Scroll near bottom
- Expectation: Next 10 items load after a delay

### TC3: Shows loader during fetch
- Action: Scroll while data is loading
- Expectation: Spinner or loading text shown

### TC4: Stops loading after last item
- Action: Scroll after all items are fetched
- Expectation: “You’ve reached the end” is displayed

---

## 🧪 Edge Cases

### TC5: Scroll very fast to bottom
- Action: Scroll to bottom quickly
- Expectation: All intermediate batches load correctly

### TC6: Component unmounts mid-load
- Action: Navigate away while loading
- Expectation: No memory leaks or state updates on unmounted component

### TC7: Resize window
- Action: Shrink viewport and scroll
- Expectation: Scroll triggers still work

