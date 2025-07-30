## 💡 **Hints with Code Snippets**

### 1. **Pagination Logic**

```js
const ARTICLES_PER_PAGE = 5;
const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
const currentArticles = filteredArticles.slice(startIndex, startIndex + ARTICLES_PER_PAGE);
```

> 💡 Use `slice()` on the **filteredArticles** (not the full list).

---

### 2. **Filtering Before Pagination**

```js
const filteredArticles = showOnlyBookmarked
  ? articles.filter((article) => article.bookmarked)
  : articles;
```

> 💡 Always **filter first**, then paginate.

---

### 3. **Bookmark Toggle Logic**

```js
const toggleBookmark = (id) => {
  setArticles((prev) =>
    prev.map((article) =>
      article.id === id
        ? { ...article, bookmarked: !article.bookmarked }
        : article
    )
  );
};
```

> 💡 Use `map()` to **immutably** update the specific article.

---

### 4. **Filter Checkbox Reset Page**

```js
<input
  type="checkbox"
  checked={showOnlyBookmarked}
  onChange={() => {
    setShowOnlyBookmarked(!showOnlyBookmarked);
    setCurrentPage(1); // Reset page to 1 when toggling filter
  }}
/>
```

---

### 5. **Bookmark Icon Toggle (Visual)**

```js
<span
  className={`bookmark ${article.bookmarked ? "active" : ""}`}
  onClick={() => toggleBookmark(article.id)}
>
  ★
</span>
```

> 💡 Use conditional class styling for visual feedback (e.g., gold color).

---

### 6. **Pagination Buttons Guard**

```js
<button
  onClick={() => goToPage(currentPage - 1)}
  disabled={currentPage === 1}
>
  Prev
</button>

<button
  onClick={() => goToPage(currentPage + 1)}
  disabled={currentPage === totalPages}
>
  Next
</button>
```

---

### 7. **Empty State UI**

```js
{currentArticles.length === 0 ? (
  <p>No articles to display.</p>
) : (
  currentArticles.map(/* render articles */)
)}
```

> 💡 This message is especially important when the **filter is active and no results** are shown.

---


