## Infinite Scroll – React Solution Explanation

The Infinite Scroll feature allows users to continuously scroll and fetch more content, enhancing user experience without pagination.

### ✅ Key Components

- **useState**: to store loaded items and page count.
- **useEffect**: to trigger fetch logic when the page number changes.
- **IntersectionObserver**: to detect when the user reaches the bottom of the list.

### ✅ Fetch Logic

A mock fetch (`mockFetch`) simulates API calls, loading a fixed number of items (`LIMIT`) per page. Each new set is appended to the existing list.

### ✅ Intersection Observer

We observe a `div` at the bottom of the list (`loaderRef`). When it intersects with the viewport, we increment the page number (if not loading), which triggers a re-fetch.

### ✅ Edge Cases

- Prevents duplicate fetches by checking the `loading` state.
- Automatically detaches the observer on component unmount.

### ✅ UX Enhancements

- Shows loading indicator.
- Keeps scrolling smooth by using margin in `IntersectionObserver`.

This implementation mimics real-world infinite scroll behavior found in apps like Twitter, Instagram, etc.
