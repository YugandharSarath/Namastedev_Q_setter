
---

## 🔖 Paginated Bookmarks Viewer

---

### ✅ **Requirements**

You are building a **Paginated Article Bookmark Viewer** with the following features:

1. **Display Articles**

   * Show a list of dummy articles (each with a title, content, and bookmark toggle)
   * Only **5 articles** should be shown **per page**

2. **Pagination**

   * Allow users to navigate pages using **Prev** and **Next** buttons
   * Ensure page boundaries are handled properly (i.e., no negative or overflow pages)

3. **Bookmark Toggle**

   * Each article has a **★ icon** which can be toggled to **mark/unmark** as bookmarked
   * Clicking it should visually reflect the state (highlighted if active)

4. **Bookmark Filter**

   * Checkbox toggle: “Show only bookmarked”
   * When enabled, show only bookmarked articles (with pagination if needed)

5. **State Persistence**

   * Bookmarks must remain active even after navigating pages or toggling the filter
   * Toggling the filter should always return to **page 1**

6. **Empty State Handling**

   * If there are no bookmarked articles in filter mode, show a message:
     👉 *“No articles to display.”*

---

### ⚠️ **Edge Cases & Constraints**

| Situation                          | Expected Behavior                                 |
| ---------------------------------- | ------------------------------------------------- |
| Navigating fast between pages      | No crashes or unexpected behavior                 |
| Filter enabled, but no bookmarks   | Show "No articles to display."                    |
| Toggling bookmark in filtered view | Removes article immediately from the current list |
| Navigating away and back           | Bookmark status is still preserved                |
| Toggling filter                    | Automatically resets to page 1                    |
| Last page has < 5 articles         | Show remaining articles correctly                 |
| Clicking ★ multiple times rapidly  | Must still reflect correct toggle state           |

---



