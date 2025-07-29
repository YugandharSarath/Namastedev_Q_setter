
---

## 🌀 Infinite Scroll List

### 🧠 **Problem Statement**

Build a scrollable UI that **automatically loads more items** when the user reaches the bottom of the list — using `IntersectionObserver`. No manual buttons or pagination should be involved.

---

### ✅ **Requirements**

* Display a list of items in chunks (e.g., 10 at a time)
* Use `IntersectionObserver` to detect when the loader enters view
* Load the next batch of items automatically
* Show a **loading indicator** when fetching new items
* Display a **“You’ve reached the end”** message when all items are loaded
* Avoid redundant or duplicate fetches during fast or repeated scrolling

---

### 📚 **Edge Cases & Constraints (in brief lines)**

* ⚡ Rapid scroll should trigger **only one fetch at a time**, no duplicate requests.
* 🧱 If `IntersectionObserver` triggers **after all data is loaded**, show end message and **don’t fetch more**.
* 🔁 Scrolling up and back down should **not re-fetch** already loaded items.
* 📉 On slow networks, **loader must show** clearly during fetch delay.
* ❌ (Optional) If the network fails, **handle silently or show an error/fallback**.



