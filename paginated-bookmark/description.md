
---

## 🔖 Paginated Bookmarks Viewer 

### 🧠 Goal

Build a paginated interface to view and manage bookmarked articles.

---

### ✅ Core Features

* 📃 **Display Articles**
  Show 5 articles per page

* ↔️ **Pagination**
  Prev / Next buttons (or numeric if needed)

* ⭐ **Bookmark Toggle**
  Each article has a ★ toggle (active/inactive)

* 🔍 **Filter Toggle**
  Checkbox or toggle to show only bookmarked items

* 🔁 **State Persistence**
  Keep bookmarks intact across pages & filters

* 📱 **Responsive Design** *(optional)*

---

### 🧪 Test Coverage Summary

| ✅ Test Case                            | 💬 Description                                                      |
| -------------------------------------- | ------------------------------------------------------------------- |
| displays only 5 articles per page      | First render should show max 5 articles only                        |
| pagination updates displayed articles  | Clicking Next shows next batch of articles                          |
| bookmark icon toggles bookmark state   | Clicking ★ toggles bookmarked state visually and logically          |
| show only bookmarked filter works      | Activating filter shows only bookmarked articles                    |
| pagination in filter mode              | Bookmarked-only view paginates if more than 5 bookmarked            |
| bookmarks persist across pages/filters | Bookmark status should remain regardless of navigation              |
| empty state on no bookmarks            | Show “No articles to display” if no results in bookmarked-only view |
| last page has < 5 items                | Render available items gracefully                                   |
| rapid clicks on pagination             | No crash or inconsistent UI on fast pagination clicks               |

---

### 📚 Edge Case Behaviors

| Edge Case                         | Expected Behavior                              |
| --------------------------------- | ---------------------------------------------- |
| No bookmarks in filter mode       | Show empty message: “No articles to display.”  |
| Bookmark removed in filtered view | Immediately remove from view                   |
| Changing filters resets page      | Return to page 1 when toggling filters         |
| Navigating retains bookmarks      | Bookmarks persist after any page/filter switch |

---

### 🏷️ Suggested `data-testid`s

| Element                  | Test ID                    |
| ------------------------ | -------------------------- |
| Article Title (by index) | `bookmark-title-${index}`  |
| Bookmark Toggle Button   | `bookmark-toggle-${index}` |
| Next Page Button         | `next-page`                |
| Prev Page Button         | `prev-page`                |
| Page Number (if numeric) | `page-${n}`                |
| Filter Toggle            | `filter-toggle`            |
| Empty Message Container  | `empty-state`              |

---

### 🧪 Bonus: Sample Test Assertions

```tsx
expect(screen.getByTestId("bookmark-title-0")).toHaveTextContent("Article 1");
fireEvent.click(screen.getByTestId("next-page"));
expect(screen.getByTestId("bookmark-toggle-2")).toHaveClass("active");
expect(screen.getByTestId("empty-state")).toBeInTheDocument();
```

---


