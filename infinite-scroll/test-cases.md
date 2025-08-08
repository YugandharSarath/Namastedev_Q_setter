# Infinite Scroll List - Test Cases

## 1. Initial Load
- Renders first 10 items.
- Shows loading indicator while fetching.
- Hides loading indicator after load.

## 2. Auto Load More on Scroll
- When loader enters viewport, next 10 items load automatically.
- Items append to existing list, no duplicates.
- Loading indicator shows during fetch.

## 3. End of List Behavior
- After all 50 items loaded, no further fetches triggered.
- Shows “You’ve reached the end” message.
- Loader remains but does not trigger more fetches.

## 4. No Duplicate Fetches
- Fast scrolling triggers only one fetch at a time.
- Pages are not refetched if already loaded.

## 5. Slow Network Handling
- Loader visible clearly during network delays.

## 6. (Optional) Network Failure
- On fetch failure, optionally show error or silently handle without crash.
