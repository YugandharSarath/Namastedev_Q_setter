import React, { useState } from "react";
import "./PaginatedBookmarkList.css";

const generateDummyArticles = (count) =>
  Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    title: `Article ${i + 1}`,
    content: `This is the content of article ${i + 1}.`,
    bookmarked: false,
  }));

const ARTICLES_PER_PAGE = 5;

export default function PaginatedBookmarkList() {
  const [articles, setArticles] = useState(generateDummyArticles(23));
  const [currentPage, setCurrentPage] = useState(1);
  const [showOnlyBookmarked, setShowOnlyBookmarked] = useState(false);

  const toggleBookmark = (id) => {
    setArticles((prev) =>
      prev.map((article) =>
        article.id === id
          ? { ...article, bookmarked: !article.bookmarked }
          : article
      )
    );
  };

  const filteredArticles = showOnlyBookmarked
    ? articles.filter((article) => article.bookmarked)
    : articles;

  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const currentArticles = filteredArticles.slice(
    startIndex,
    startIndex + ARTICLES_PER_PAGE
  );

  const goToPage = (page) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  return (
    <div className="paginated-container" data-testid="paginated-container">
      <div className="header" data-testid="header">
        <h2>Articles</h2>
        <label htmlFor="bookmark-filter">
          <input
            id="bookmark-filter"
            type="checkbox"
            checked={showOnlyBookmarked}
            onChange={() => {
              setShowOnlyBookmarked(!showOnlyBookmarked);
              setCurrentPage(1);
            }}
            data-testid="bookmark-filter-checkbox"
          />
          Show only bookmarked
        </label>
      </div>

      {currentArticles.length === 0 ? (
        <p data-testid="no-articles-message">No articles to display.</p>
      ) : (
        currentArticles.map((article) => (
          <div
            key={article.id}
            className="article-card"
            data-testid={`article-card-${article.id}`}
          >
            <h3>
              {article.title}
              <span
                className={`bookmark ${article.bookmarked ? "active" : ""}`}
                onClick={() => toggleBookmark(article.id)}
                data-testid={`bookmark-icon-${article.id}`}
                role="button"
                aria-label={`Bookmark toggle for ${article.title}`}
                style={{ cursor: "pointer", marginLeft: "8px" }}
              >
                ★
              </span>
            </h3>
            <p>{article.content}</p>
          </div>
        ))
      )}

      <div className="pagination" data-testid="pagination-controls">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          data-testid="prev-button"
        >
          Prev
        </button>
        <span data-testid="page-info">
          Page {currentPage} of {totalPages || 1}
        </span>
        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          data-testid="next-button"
        >
          Next
        </button>
      </div>
    </div>
  );
}
