
---

## 🔖 **Paginated Article Bookmark Viewer**

You are tasked with building a **React component** that displays a list of dummy articles (title + content), with the following functionalities:

---

### ✅ **Core Features**

1. **Display Articles**

   * Display a list of articles (e.g., 23 dummy articles).
   * Each article must have a **title**, **content**, and a **★ icon** to **toggle bookmark**.

2. **Pagination**

   * Show only **5 articles per page**.
   * Use **Prev** and **Next** buttons to navigate between pages.
   * Prevent navigating below page 1 or above the last page.

3. **Bookmark Toggle**

   * Each article can be **bookmarked/unbookmarked** by clicking the ★ icon.
   * Toggling must update state and show a **visual change** (e.g., gold star if active).

4. **Bookmark Filter**

   * Include a checkbox labeled **“Show only bookmarked”**.
   * When checked, show only bookmarked articles (still paginated).
   * When unchecked, return to showing **all** articles.

5. **State Persistence**

   * Bookmarks should remain toggled even after:

     * Navigating between pages
     * Toggling the filter checkbox

6. **Empty State Handling**

   * If the “Show only bookmarked” filter is active and **no bookmarked articles exist**, show:

     > 👉 *“No articles to display.”*

---

## ⚠️ **Edge Cases in Sentence Format**

1. **Rapid Page Navigation:**

   * If a user clicks “Next” and “Prev” rapidly, the component should handle it gracefully **without crashing or jumping out of bounds**.

2. **No Bookmarked Articles with Filter On:**

   * If the user enables the **bookmark filter** when **no articles are bookmarked**, the message:

     > *“No articles to display.”*
     > should be shown clearly.

3. **Toggling Bookmark While Filter is Active:**

   * If a user removes the bookmark from an article **while the filter is ON**, it should **immediately disappear** from the list (because it's no longer bookmarked).

4. **Navigation Away and Back:**

   * Bookmark states must **persist** regardless of page navigation — toggling bookmarks should not be lost on navigating between pages.

5. **Filter Toggle Resets to Page 1:**

   * Whenever the “Show only bookmarked” checkbox is toggled, it must **automatically reset the current page to 1**.

6. **Last Page Has Fewer Than 5 Articles:**

   * If the last page has fewer than 5 items (e.g., 3), show **only the remaining articles**, without errors.

7. **Rapid Toggle of ★:**

   * If a user clicks the bookmark star (★) **multiple times quickly**, the **final state must reflect accurately** (i.e., bookmarked or not).

---

