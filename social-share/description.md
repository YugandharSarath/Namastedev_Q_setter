📤 **Social Share Buttons**

---

### 🧠 **Goal**

Build a **reusable "Share This" button** that opens a dialog with **platform icons** to share a webpage, plus a **Copy Link** feature.

---

### ✅ **Core Features**

* 🔘 “**Share This**” button opens a modal/dialog
* 🔗 Share options:

  * LinkedIn (`share-linkedin`)
  * Twitter/X (`share-twitter`)
  * WhatsApp (`share-whatsapp`)
  * Facebook (`share-facebook`)
  * Telegram (`share-telegram`)
  * Reddit (`share-reddit`)
  * Email (`share-email`)
* 📋 **Copy Link**:

  * Uses `navigator.clipboard.writeText()`
  * Shows alert on success
* ❌ Dialog closable via a Close button

---

### 🧪 **Suggested `data-testid`s**

| Element   | `data-testid`                                                                                                          |
| --------- | ---------------------------------------------------------------------------------------------------------------------- |
| Wrapper   | `share-buttons`                                                                                                        |
| Buttons   | `share-linkedin`, `share-twitter`, `share-whatsapp`, `share-facebook`, `share-telegram`, `share-reddit`, `share-email` |
| Copy Link | `copy-link`                                                                                                            |

---

### 📚 **Edge Cases to Handle**

| Case                       | Behavior                                |
| -------------------------- | --------------------------------------- |
| 📋 Clipboard not available | Fallback silently or show message       |
| 🧱 Popup blockers          | `window.open()` may fail silently       |
| ⚠️ Empty link              | Use fallback or disable share buttons   |
| 🔁 Repeated clicks         | Toggle dialog without breaking state/UI |

---

### 🧪 **Test Scenarios Summary**

| Test Description               | Validation                                                   |
| ------------------------------ | ------------------------------------------------------------ |
| 🔘 Renders “Share This” button | `getByText("Share This")` works                              |
| 🪟 Dialog opens/closes         | Modal toggles properly with click                            |
| 📱 All buttons shown           | 7 share buttons appear with correct `data-testid`s           |
| 📋 Copy link works             | Mocks `navigator.clipboard.writeText()` and triggers alert   |
| 🔗 Platform URLs               | `window.open` called with correct domain (e.g., twitter.com) |

---



