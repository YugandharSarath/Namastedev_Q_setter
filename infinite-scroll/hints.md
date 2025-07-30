
---

### 🧠 **Hints**

---

#### 1. **Simulate loading with a delay using `jest.runAllTimers()`**

For test environments, mock the fetch delay using `setTimeout`, and advance timers manually.

```js
jest.useFakeTimers();

await act(async () => {
  fireEvent.scroll(window, { target: { scrollY: 1000 } }); // simulate scroll
  jest.runAllTimers(); // fast-forward mockFetch setTimeout
});
```

---

#### 2. **Mock `IntersectionObserver` in Tests**

React apps using infinite scroll need `IntersectionObserver` to detect when to fetch more items. In tests, you must mock this API.

```js
beforeEach(() => {
  const observe = jest.fn();
  const unobserve = jest.fn();
  window.IntersectionObserver = jest.fn(() => ({
    observe,
    unobserve,
    disconnect: jest.fn(),
  }));
});
```

---

#### 3. **Track current page and fetched items**

Use `useState` and `useRef` to manage state cleanly and prevent duplicate fetches.

```js
const [page, setPage] = useState(1);
const [items, setItems] = useState([]);
const didLoadPageRef = useRef(new Set());

useEffect(() => {
  if (didLoadPageRef.current.has(page)) return;
  didLoadPageRef.current.add(page);

  // Fetch and append
}, [page]);
```

---

#### 4. **Loader while fetching**

Conditionally show a loader message while `isLoading` is `true`.

```jsx
{isLoading && <p className="loader" data-testid="loader">Loading...</p>}
```

✅ In test:

```js
expect(screen.getByTestId("loader")).toBeInTheDocument();
```

---

#### 5. **Show message when all items are loaded**

Use a flag like `hasMore` to detect end of list and show a message.

```jsx
{!hasMore && <p className="end" data-testid="end-message">You’ve reached the end</p>}
```

✅ In test:

```js
expect(screen.getByTestId("end-message")).toBeInTheDocument();
```

---

#### 6. **Observe the loader element**

The last `<div ref={loaderRef}>` acts as a sentinel. When it intersects, load next page.

```jsx
<div ref={loaderRef} data-testid="loader-ref" />
```

✅ In test (simulate it intersecting):

```js
act(() => {
  const observerCallback = window.IntersectionObserver.mock.calls[0][0];
  observerCallback([{ isIntersecting: true }]);
});
```

---

