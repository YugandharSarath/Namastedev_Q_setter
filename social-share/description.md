
---

## 🔗 **Social Share Dialog Component**

---

### 🎯 **Goal**

Build a **social sharing dialog** in React that allows users to share a link (`https://namaste.dev`) via various platforms. Users should also be able to **copy the link** to clipboard. The share options should be accessible in a **popup dialog**, which can be opened and closed from a button.

---

### ✅ **Functional Requirements**

* 👆 A **"Share This"** button should open a modal dialog.
* 📤 Inside the modal:

  * Display **icons** for sharing via:

    * LinkedIn
    * X (Twitter)
    * WhatsApp
    * Facebook
    * Telegram
    * Reddit
    * Email
  * Show a **"Copy"** button to copy the URL.
* 🧾 Dialog has a **Close (X)** button.
* 🔗 Clicking any icon should open the respective platform's share URL in a new tab.
* 📝 Copy to clipboard should trigger an **alert** once copied successfully.

---


### ⚠️ **Edge Cases & Constraints**

* Dialog should not remain open after clicking **Close**.
* Copy should handle failure gracefully (log error).
* Clipboard API must work in browsers that support it.
* `window.alert` should confirm the link was copied.
* Modal should have proper ARIA roles (e.g., `aria-label="Close"`).

---



