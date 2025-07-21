# Infinite Scroll

Build a component that displays a list of items and loads more items automatically when the user scrolls near the bottom of the page.

## Requirements

- Initial load: Display the first batch of items (e.g., 10).
- Scroll Detection: When the user reaches the bottom, load the next batch.
- Continue until all items are loaded.
- Show a loader/spinner while new items are loading.
- Add a message like “You’ve reached the end” when no more items remain.

## Constraints

- You must not load all data at once.
- Use mock API (or simulate delay using `setTimeout`).
- Use intersection observer or scroll listener.

---

## Bonus

- Add debounce/throttle to scroll handler.
- Support window resizing.
- Load images or cards instead of plain text.

