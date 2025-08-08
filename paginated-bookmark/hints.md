
### `hints.md`

#### 1\. Pagination Logic

To paginate correctly, you should use `slice()` on the `filteredArticles` array, not the full list of all articles. The `startIndex` for the slice is calculated as `(currentPage - 1) * ARTICLES_PER_PAGE`.

```js
const ARTICLES_PER_PAGE = 5;
const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
const currentArticles = filteredArticles.slice(startIndex, startIndex + ARTICLES_PER_PAGE);
```

#### 2\. Filtering Before Pagination

The filtering logic must be applied before pagination. You should create a `filteredArticles` variable that either holds all articles or only the bookmarked ones, and then paginate this filtered list.

```js
const filteredArticles = showOnlyBookmarked
  ? articles.filter((article) => article.bookmarked)
  : articles;
```

#### 3\. Bookmark Toggle Logic

To toggle a bookmark, use the `map()` method to create a new array. This ensures that the state is updated immutably. You find the article by its `id` and then spread its properties, flipping the `bookmarked` boolean.

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

#### 4\. Filter Checkbox Resets Page

The `onChange` handler for the "Show only bookmarked" checkbox should not only toggle the filter state but also reset the `currentPage` to 1.

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

#### 5\. Bookmark Icon Toggle (Visual)

You can use a conditional class name to visually indicate the bookmark state. For example, add an "active" class if `article.bookmarked` is true, which can then be styled (e.g., with a gold color).

```js
<span
  className={`bookmark ${article.bookmarked ? "active" : ""}`}
  onClick={() => toggleBookmark(article.id)}
>
  ★
</span>
```

#### 6\. Pagination Buttons Guard

The "Prev" and "Next" buttons should be disabled based on the current page. The "Prev" button is disabled on page 1, and the "Next" button is disabled on the last page.

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

#### 7\. Empty State UI

To handle cases where there are no articles to display (especially with the filter on), use a conditional rendering block. If `currentArticles.length` is 0, show a message; otherwise, render the list of articles.

```js
{currentArticles.length === 0 ? (
  <p>No articles to display.</p>
) : (
  currentArticles.map(/* render articles */)
)}
```