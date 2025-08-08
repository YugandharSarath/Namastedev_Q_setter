
---

## 🌀 Infinite Scroll List

### 🧠 **Problem Statement**

Build a scrollable UI that **automatically loads more items** when the user reaches the bottom of the list — using `IntersectionObserver`.

---

### ✅ **Requirements**

* Display a list of items in chunks (e.g., 10 at a time).

  * Each item element must have: `data-testid="list-item"`
* Use `IntersectionObserver` to detect when the loader enters view.

  * The loader element must have: `data-testid="loader-ref"`
* Load the next batch of items automatically.
* Show a **loading indicator** when fetching new items.

  * The loading indicator element must have: `data-testid="loading-text"`
* Display a **“You’ve reached the end”** message when all items are loaded.

  * The end message element must have: `data-testid="end-message"`
* Avoid redundant or duplicate fetches during fast or repeated scrolling.

---

### 📚 **Edge Cases & Constraints**

* ⚡ Rapid scroll should trigger **only one fetch at a time**, no duplicate requests.
* 🧱 If `IntersectionObserver` triggers **after all data is loaded**, show end message and **do not fetch more**.
* 🔁 Scrolling up and back down should **not re-fetch** already loaded items.
* 📉 On slow networks, **loader must be clearly visible** during fetch delay.
* ❌ (Optional) If the network fails, **handle silently or show an error/fallback**.

---

