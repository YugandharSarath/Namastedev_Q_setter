# Test Cases for Paginated List with Bookmarking

## ✅ Pagination

- [ ] Given 10 articles and 5 per page, the list should display only 5 articles per page.
- [ ] Clicking "Next" or "Prev" updates the displayed articles correctly.

## ✅ Bookmarking

- [ ] Clicking the bookmark icon toggles the bookmark state for that article.
- [ ] The icon reflects the current bookmark state.

## ✅ Filtering

- [ ] When the "Show Bookmarked Only" toggle is ON, only bookmarked articles are shown.
- [ ] When toggled OFF, all articles are shown again.
- [ ] Pagination still works correctly in both modes.

## ✅ State Retention

- [ ] Bookmarks remain active even after switching pages or toggling filters.
- [ ] If all items are unbookmarked while in bookmarked-only view, the list becomes empty.

## ✅ Performance

- [ ] Minimal re-renders when bookmarking or navigating pages.
- [ ] No unnecessary API calls or DOM manipulation.
