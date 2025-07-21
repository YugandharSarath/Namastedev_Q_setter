import React, { useState } from "react";
import "./PaginatedBookmarkList.css";

type Article = {
  id: number;
  title: string;
  content: string;
  bookmarked: boolean;
};

const generateDummyArticles = (count: number): Article[] =>
  Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    title: `Article ${i + 1}`,
    content: `This is the content of article ${i + 1}.`,
    bookmarked: false,
  }));

const ARTICLES_PER_PAGE = 5;

const PaginatedBookmarkList: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>(
    generateDummyArticles(23)
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [showOnlyBookmarked, setShowOnlyBookmarked] = useState(false);

  const toggleBookmark = (id: number) => {
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

  const goToPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  return (
    <div className="paginated-container">
      <div className="header">
        <h2>Articles</h2>
        <label>
          <input
            type="checkbox"
            checked={showOnlyBookmarked}
            onChange={() => {
              setShowOnlyBookmarked(!showOnlyBookmarked);
              setCurrentPage(1);
            }}
          />
          Show only bookmarked
        </label>
      </div>

      {currentArticles.length === 0 ? (
        <p>No articles to display.</p>
      ) : (
        currentArticles.map((article) => (
          <div key={article.id} className="article-card">
            <h3>
              {article.title}
              <span
                className={`bookmark ${article.bookmarked ? "active" : ""}`}
                onClick={() => toggleBookmark(article.id)}
              >
                ★
              </span>
            </h3>
            <p>{article.content}</p>
          </div>
        ))
      )}

      <div className="pagination">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span>
          Page {currentPage} of {totalPages || 1}
        </span>
        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginatedBookmarkList;
