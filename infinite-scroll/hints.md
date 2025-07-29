### 🧠 **Hints**

* Use `setTimeout` or `setInterval` mock with `jest.runAllTimers()` to simulate loading delay.
* Use a **mocked `IntersectionObserver`** to simulate the bottom element entering view.
* Keep track of:

  * **Current page number**
  * **Fetched data array**
  * **HasMore flag** to prevent over-fetching
* Always test for:

  * Loader appearing when fetching
  * New items being added after scroll
  * End message appearing at the final page
* Use `data-testid` to uniquely select key DOM elements like loader, items, and messages.

---

