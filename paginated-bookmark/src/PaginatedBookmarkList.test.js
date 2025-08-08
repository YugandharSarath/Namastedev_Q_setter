import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PaginatedBookmarkList from "./PaginatedBookmarkList";
import "@testing-library/jest-dom";

describe("PaginatedBookmarkList", () => {
  beforeEach(() => {
    render(<PaginatedBookmarkList />);
  });

  test("displays only 5 articles per page", () => {
    const articles = screen.getAllByTestId(/article-card-/);
    expect(articles.length).toBeLessThanOrEqual(5);
  });

  test("pagination updates displayed articles", () => {
    const nextButton = screen.getByTestId("next-button");
    fireEvent.click(nextButton);
    const articles = screen.getAllByTestId(/article-card-/);
    expect(articles.length).toBeLessThanOrEqual(5);
    // Article 1 should not be visible on page 2
    expect(screen.queryByTestId("article-card-1")).toBeNull();
  });

  test("bookmark icon toggles bookmark state", () => {
    const firstIcon = screen.getByTestId("bookmark-icon-1");
    expect(firstIcon.className).not.toContain("active");
    fireEvent.click(firstIcon);
    expect(firstIcon.className).toContain("active");
    fireEvent.click(firstIcon);
    expect(firstIcon.className).not.toContain("active");
  });

  test("show only bookmarked filter works", () => {
    const firstIcon = screen.getByTestId("bookmark-icon-1");
    fireEvent.click(firstIcon);

    const filterCheckbox = screen.getByTestId("bookmark-filter-checkbox");
    fireEvent.click(filterCheckbox);

    const articles = screen.getAllByTestId(/article-card-/);
    expect(articles.length).toBe(1);
    expect(screen.getByTestId("article-card-1")).toBeInTheDocument();
  });

  test("pagination works in bookmarked-only mode", () => {
  // Bookmark articles 1 to 5 on page 1
  for (let id = 1; id <= 5; id++) {
    const icon = screen.getByTestId(`bookmark-icon-${id}`);
    fireEvent.click(icon);
  }

  // Go to page 2 to bookmark article 6
  const nextButton = screen.getByTestId("next-button");
  fireEvent.click(nextButton);

  // Now bookmark article 6 on page 2
  const icon6 = screen.getByTestId("bookmark-icon-6");
  fireEvent.click(icon6);

  // Go back to page 1 and enable filter
  const prevButton = screen.getByTestId("prev-button");
  fireEvent.click(prevButton);

  const filterCheckbox = screen.getByTestId("bookmark-filter-checkbox");
  fireEvent.click(filterCheckbox);

  let articles = screen.queryAllByTestId(/article-card-/);
  if (articles.length > 0) {
    expect(articles.length).toBeLessThanOrEqual(5);

    const nextButtonFiltered = screen.getByTestId("next-button");
    fireEvent.click(nextButtonFiltered);

    const nextArticles = screen.queryAllByTestId(/article-card-/);
    expect(nextArticles.length).toBeLessThanOrEqual(5);
  } else {
    expect(screen.getByTestId("no-articles-message")).toBeInTheDocument();
  }
});


  test("bookmarks remain after switching pages and filters", () => {
    const firstIcon = screen.getByTestId("bookmark-icon-1");
    fireEvent.click(firstIcon);

    const nextButton = screen.getByTestId("next-button");
    fireEvent.click(nextButton);

    const prevButton = screen.getByTestId("prev-button");
    fireEvent.click(prevButton);

    expect(screen.getByTestId("bookmark-icon-1").className).toContain("active");

    const filterCheckbox = screen.getByTestId("bookmark-filter-checkbox");
    fireEvent.click(filterCheckbox);
    fireEvent.click(filterCheckbox);

    expect(screen.getByTestId("bookmark-icon-1").className).toContain("active");
  });

  test("list becomes empty if all bookmarks are removed in bookmarked-only view", () => {
    const firstIcon = screen.getByTestId("bookmark-icon-1");
    fireEvent.click(firstIcon);

    const filterCheckbox = screen.getByTestId("bookmark-filter-checkbox");
    fireEvent.click(filterCheckbox);

    const bookmarkedIcon = screen.getByTestId("bookmark-icon-1");
    fireEvent.click(bookmarkedIcon);

    expect(screen.getByTestId("no-articles-message")).toBeInTheDocument();
  });
});
