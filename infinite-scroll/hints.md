
### Hints

---

### 1. Use State to Track Items, Page, Loading, and Completion

```js
const [items, setItems] = useState([]);
const [page, setPage] = useState(1);
const [isLoading, setIsLoading] = useState(false);
const [hasMore, setHasMore] = useState(true);
```

---

### 2. Fetch Items with Pagination and Append to List

```js
const loadItems = async (page) => {
  setIsLoading(true);
  const newItems = await fetchItems(page);
  setItems(prev => [...prev, ...newItems]);
  setIsLoading(false);
  if (newItems.length < PAGE_SIZE) setHasMore(false);
};
```

---

### 3. Use IntersectionObserver to Detect Loader Visibility

```js
useEffect(() => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting && hasMore && !isLoading) {
      setPage(p => p + 1);
    }
  }, { threshold: 1 });

  const loader = loaderRef.current;
  if (loader) observer.observe(loader);
  return () => loader && observer.unobserve(loader);
}, [hasMore, isLoading]);
```

---

### 4. Avoid Duplicate Fetches for the Same Page

Use a `Set` to track loaded pages:

```js
const loadedPages = useRef(new Set());

useEffect(() => {
  if (loadedPages.current.has(page)) return;
  loadedPages.current.add(page);
  loadItems(page);
}, [page]);
```

---

### 5. Add `data-testid` Attributes for Testing

```jsx
<ul>
  {items.map(item => (
    <li key={item} data-testid="list-item">{item}</li>
  ))}
</ul>
{isLoading && <p data-testid="loading-text">Loading...</p>}
{!hasMore && <p data-testid="end-message">You’ve reached the end</p>}
<div ref={loaderRef} data-testid="loader-ref" />
```

---

If you want, I can help you turn these snippets into a full working example or help you write tests based on these!
